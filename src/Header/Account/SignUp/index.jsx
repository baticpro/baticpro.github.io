import { useState, useEffect } from "react";
import { Button, Input } from "utair-ui-kit";
import { ERROR_TYPES } from "../queries";

import validator from "../validators";
import RadioSelector from "../components/RadioSelector";
import PhoneInput from "../components/PhoneInput";
import { authLogin, signUpUser } from "../queries";
import Agreement from "./Agreement";
import accountStyles from "../Account.module.scss";
import styles from "./SingUp.module.scss";

const SIGN_UP_TYPES = {
    EMAIL: "email",
    PHONE: "phone",
};

const getSignUpErrorText = (error, type) => {
    const errorCodeMap = {
        [ERROR_TYPES.CONFLICT]: `sign.error.social_${type}_exists`,
        [ERROR_TYPES.BAD_REQUEST]: "validator.errors.phone_format",
        [ERROR_TYPES.INTERNAL_SERVER_ERROR]: "common.unknown_error",
    };

    return errorCodeMap[error.code] || "sign.error.api_error";
};

export default function SignUp({ setIsLoading, onNext }) {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [signUpType, setSignUpType] = useState(SIGN_UP_TYPES.PHONE);
    const [isSignUpProcess, setIsSignUpProcess] = useState(false);
    const [isAgree, setIsAgree] = useState(false);
    const [GDPRAgreementDate, setGDPRAgreementDate] = useState(null);

    useEffect(() => {
        const timestampInSec = Math.floor(Date.now() / 1000);
        setGDPRAgreementDate(isAgree ? timestampInSec : null);
    }, [isAgree]);

    useEffect(() => {
        setLogin("");
    }, [signUpType]);

    useEffect(() => {
        if (!isSignUpProcess) return;

        async function signUp() {
            try {
                setIsLoading(true);
                await signUpUser(signUpType, login, GDPRAgreementDate);
                const data = await authLogin(login);
                onNext({
                    __step: "LogInConfirm",
                    data: { ...data, login, isSignUp: true },
                });
            } catch (e) {
                const errorText = getSignUpErrorText(e, signUpType);
                setLoginError(errorText);
                setIsSignUpProcess(false);
            } finally {
                setIsLoading(false);
            }
        }

        signUp();
    }, [isSignUpProcess]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setLoginError("");
    }, [login, signUpType]);

    const handleSignUp = () => {
        const validationResult = validator[signUpType](login, true);

        if (validationResult === true) {
            setIsSignUpProcess(true);
        } else {
            setLoginError(validationResult);
        }
    };

    const handleChangeEmail = ({ target: { value } }) => {
        setLogin(value.trim());
    };

    const handleChangePhone = (value) => {
        setLogin(value);
    };

    const handleBlurLogin = () => {
        const validationResult = validator[signUpType](login, true);

        if (typeof validationResult === "string") {
            setLoginError(validationResult);
        }
    };

    return (
        <div className={accountStyles.form}>
            <h3 className={accountStyles.title}>Регистрация</h3>

            <div className={styles.radioButtonsWrapper}>
                <RadioSelector
                    items={{
                        [SIGN_UP_TYPES.PHONE]: "Телефон",
                        [SIGN_UP_TYPES.EMAIL]: "Email",
                    }}
                    selected={signUpType}
                    onChange={setSignUpType}
                />
            </div>

            <div className={accountStyles.wrapper}>
                {signUpType === SIGN_UP_TYPES.PHONE ? (
                    <PhoneInput
                        value={login}
                        onChange={handleChangePhone}
                        onBlur={handleBlurLogin}
                        message={loginError}
                        isError={!!loginError}
                    />
                ) : (
                    <Input
                        value={login}
                        onChange={handleChangeEmail}
                        onBlur={handleBlurLogin}
                        message={loginError}
                        isError={!!loginError}
                    />
                )}
            </div>

            <div className={styles.agreementWrapper}>
                <Agreement
                    checked={isAgree}
                    onChange={() => setIsAgree(!isAgree)}
                />
            </div>

            <div className={styles.buttonWrapper}>
                <Button
                    disabled={!login || !isAgree}
                    fullWidth
                    onClick={handleSignUp}
                >
                    Зарегистрироваться
                </Button>
            </div>

            <div className={styles.buttonWrapper}>
                <Button
                    fullWidth
                    variant="text"
                    onClick={() => onNext({ __step: "LogIn" })}
                >
                    Войти
                </Button>
            </div>
        </div>
    );
}
