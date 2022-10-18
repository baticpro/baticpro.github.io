import { useState, useEffect } from "react";
import { Button, ConfirmCode } from "utair-ui-kit";
// import { ERROR_TYPES } from "../queries";
import get from "lodash/get";
import { errorCodes, errorDescriptions } from "../consts";
import validators from "../validators";
// import { getSocialData } from 'selectors/sign';
import fetcher from "../fetcher";
// import { utairHttpManager as request } from "../../managers/utair";
// import { API_BASE_URL, CLIENT_SECRET, CLIENT_ID } from "../consts";
// import { createFormURLEncoded } from "../utils";
// import fetch, { parseBody, parseError } from "../../utils/fetch";
// import taisAuth from "./taisAuth";
import { authLogin } from "../queries";
// import { setSessionData, initAuth } from "../../actions/auth";
import Agreement from "./Agreement";
import styles from "../Account.module.scss";
// import { getUserData } from "../../actions/user";

export default function LogInConfirm({
    setIsLoading,
    login,
    checkType,
    channel,
    attempt_id,
    onNext = () => {},
    isSignUp,
    socialData,
}) {
    const [code, setCode] = useState("");
    // console.log({ code });
    const [confirm, doConfirm] = useState("");
    const [error, setError] = useState("");
    const [isButtonDisabled, setIsButtonDisable] = useState(true);

    const resendCode = () => {
        authLogin(login)
            .then((data) => {
                onNext({ __step: "LogInConfirm", data: { ...data, login } });
            })
            .then(() => {
                setCode("");
                doConfirm(false);
                setIsButtonDisable(true);
            })
            // .catch(parseError)
            .catch((data) => {
                const errorCode = get(data, "data.meta.error_code");
                setError(
                    errorCodes[errorCode]
                        ? `sign.error.${errorCodes[errorCode]}`
                        : "common.unknown_error"
                );
            });
    };

    const inputHandler = (value) => {
        setCode(value);
        setError("");
        doConfirm(false);
        setIsButtonDisable(false);
    };

    const blurHandler = (event) => {
        const value = event.target.value.replaceAll("_", "");

        if (!value) {
            setError("");
            setIsButtonDisable(true);

            return;
        }

        const validCode = validators.code(value, 4, false);

        if (validCode !== true) {
            setError(validCode);
            setIsButtonDisable(true);
        }
    };

    // const errorCodeHandler = (value) => {
    //     try {
    //         switch (value.code) {
    //             case ERROR_TYPES.FORBIDDEN:
    //                 setError("sign.error.too_many_requests");
    //                 break;

    //             case ERROR_TYPES.INTERNAL_SERVER_ERROR:
    //                 setError("common.unknown_error");
    //                 break;

    //             default:
    //                 setError("sign.error.incorrect_code");
    //                 break;
    //         }
    //     } catch (e) {
    //         console.error(e); // eslint-disable-line no-console
    //         setError("common.unknown_error");
    //     }

    //     doConfirm(false);
    //     setIsLoading(false);
    //     setIsButtonDisable(true);
    // };

    useEffect(() => {
        if (!confirm) return;
        setIsLoading(true);
        // let params = { attempt_id, code };

        if (socialData) {
            // params = { ...params, ...socialData };
        }

        // request
        //     .post(`${API_BASE_URL}/api/v1/login/confirm/`, params, false)
        //     .then(({ session }) =>
        //         fetch(`${API_BASE_URL}/oauth/token`, {
        //             method: "POST",
        //             headers: {
        //                 Authorization: `Basic ${btoa(
        //                     `${CLIENT_ID}:${CLIENT_SECRET}`
        //                 )}`,
        //                 "Content-Type": "application/x-www-form-urlencoded",
        //             },
        //             body: createFormURLEncoded({
        //                 grant_type: "password",
        //                 username: login,
        //                 password: session,
        //             }),
        //         })
        //     )
        //     .then(parseBody)
        //     .then((sessionData) => {
        //         // taisAuth(sessionData);
        //         // setSessionData(sessionData);
        //     })
        //     .then(() => {
        //         // dispatch(initAuth());
        //         setIsLoading(false);
        //         // RAKETA-1407 - необходимо закрыть санжест авторизации от Яндекса
        //         if (window.location.pathname.substr(0, 3) === "/tg")
        //             window.location.href = "/tg/bonuses";

        //         if (
        //             window.location.pathname === "/status/about" ||
        //             window.location.pathname.match(/\/orders\/services\/[-\w]+/)
        //         ) {
        //             // dispatch(getUserData(true));

        //             return;
        //         }
        //     })
        //     .catch(errorCodeHandler);
    }, [confirm]); // eslint-disable-line react-hooks/exhaustive-deps

    async function onSubmit(ev) {
        ev.preventDefault();
        setIsLoading(true);
        // todo надо получить клиент токен
        try {
            // https://b.utair.ru/api/docs/authentication/POST_confirm_rest_v1/
            const data = await fetcher("api/v1/login/confirm", {
                method: "POST",
                body: JSON.stringify({ attempt_id, code }),
            });

            console.log({ data });
        } catch ({ error_code }) {
            console.log({ error_code });
            setError(errorDescriptions[errorCodes[error_code]]);
        }
        setIsLoading(false);
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <h3 className={styles.title}>
                {`Введите код ${channel === "phone" ? "из СМС" : ""}`}
            </h3>
            <div className={styles.subtitle}>
                {`Мы отправили его на ${
                    channel === "phone" ? "номер" : "почту"
                } ${login}`}
            </div>
            <ConfirmCode
                className={styles.codeInput}
                onRequestCode={resendCode}
                onInput={inputHandler}
                onBlur={blurHandler}
                error={error}
                timeLeftLabel="Выслать код повторно через:"
                repeatButtonLabel="Выслать код повторно"
                autoFocus
            />
            <Button
                type="submit"
                fullWidth
                size="large"
                disabled={isButtonDisabled}
            >
                {isSignUp ? "Зарегистрироваться" : "Войти"}
            </Button>

            {isSignUp && <Agreement />}

            <Button
                className={styles.button}
                fullWidth
                variant="text"
                onClick={() => onNext({ __step: "LogIn" })}
            >
                Вернуться
            </Button>
        </form>
    );
}
