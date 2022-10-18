import { useState } from "react";
import { Input, Button } from "utair-ui-kit";

import validators from "../validators";
import fetcher from "../fetcher";
import { errorCodes, errorDescriptions } from "../consts";
import RadioSelector from "../components/RadioSelector";
import PhoneInput from "../components/PhoneInput";
import styles from "../Account.module.scss";

const checkTypes = {
    phone: "Телефон",
    email: "Email",
    cartStatus: "Карта Status",
};

export default function LogIn({ setIsLoading, onNext = () => {} }) {
    const [login, setLogin] = useState("+79677705595");
    const [checkType, setCheckType] = useState(Object.keys(checkTypes)[0]); // phone
    const [error, setError] = useState("");
    const [isButtonDisabled, setIsButtonDisable] = useState(true);

    const handleInput = (event) => {
        const value = event.target.value.trim();

        if (checkType === "cartStatus" && !/^\d+$/.test(Number(value))) {
            return;
        }

        setLogin(value);
        const validValue = validators[checkType](value);

        if (validValue === true && value) {
            setIsButtonDisable(false);
        } else {
            setIsButtonDisable(true);
            setError("");
        }
    };

    const handleBlur = (event) => {
        const value = event.target.value.replaceAll(" ", "");

        if (!value || value === "+7") {
            setIsButtonDisable(true);
            setError("");

            return;
        }

        const validValue = validators[checkType](value);

        if (validValue === true) {
            setLogin(value);
            setError("");
        } else {
            setError(validValue);
        }
    };

    const handlePhoneInputChange = (value) => {
        if (value === undefined) {
            setLogin("");
            setIsButtonDisable(true);

            return;
        }

        setLogin(value);
        const validValue = validators[checkType](value);

        if (validValue === true) {
            setIsButtonDisable(false);
        } else {
            setIsButtonDisable(true);
            setError("");
        }
    };

    const handleSelectorChange = (value) => {
        setIsButtonDisable(true);
        setLogin("");
        setError("");
        setCheckType(value);
    };

    async function onSubmit(ev) {
        ev.preventDefault();
        setIsLoading(true);
        try {
            // https://b.utair.ru/api/docs/authentication/POST_login_rest_v1/
            const data = await fetcher("api/v1/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ login, confirmation_type: "standard" }),
            });
            onNext({
                __step: "LogInConfirm",
                data: { ...data, login, checkType },
            });
        } catch ({ error_code }) {
            setError(errorDescriptions[errorCodes[error_code]]);
        }
        setIsLoading(false);
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <h3 className={styles.title}>Вход в личный кабинет</h3>
            <RadioSelector
                items={checkTypes}
                selected={checkType}
                onChange={handleSelectorChange}
            />
            <div className={styles.wrapper}>
                {checkType === Object.keys(checkTypes)[0] ? (
                    <PhoneInput
                        value={login}
                        onChange={handlePhoneInputChange}
                        onBlur={handleBlur}
                        message={error}
                        isError={!!error}
                    />
                ) : (
                    <Input
                        isError={!!error}
                        onBlur={handleBlur}
                        onInput={handleInput}
                        message={error}
                        value={login}
                        autoFocus
                    />
                )}
            </div>
            <Button
                type="submit"
                fullWidth
                size="large"
                disabled={isButtonDisabled}
            >
                Войти
            </Button>
            <Button
                fullWidth
                variant="text"
                onClick={() => onNext({ __step: "SignUp" })}
            >
                Зарегистрироваться
            </Button>
        </form>
    );
}
