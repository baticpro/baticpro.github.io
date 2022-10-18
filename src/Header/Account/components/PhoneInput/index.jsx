import "react-phone-number-input/style.css";
import PhoneNumberInput from "react-phone-number-input";
import ru from "react-phone-number-input/locale/ru.json";
import cn from "classnames";

import styles from "./PhoneInput.module.scss";

export default function PhoneInput({
    value,
    onChange,
    onBlur,
    message,
    isError,
}) {
    const rootClassName = cn({
        [styles.rootErrorStatus]: isError,
    });

    return (
        <div className={rootClassName}>
            <PhoneNumberInput
                international
                labels={ru}
                withCountryCallingCode
                countryCallingCodeEditable={false}
                defaultCountry="RU"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                autoFocus
            />
            <div
                className={cn(styles.message, {
                    [styles.messageActive]: !!message,
                })}
            >
                {message}
            </div>
        </div>
    );
}
