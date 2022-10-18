import { forwardRef } from "react";

import { ReactComponent as PersonIcon } from "./person.svg";
import styles from "./Input.module.css";

function plurals(count) {
    switch (true) {
        case count === 1:
            return "пассажир";
        case count < 5:
            return "пассажира";
        default:
            return "пассажиров";
    }
}

export default forwardRef(function Input(
    { value, placeholder, className, isFocus, ...props },
    ref
) {
    return (
        <button
            className={`${styles.toggle} ${
                isFocus && styles.focus
            } ${className}`}
            type="button"
            ref={ref}
            {...props}
        >
            <PersonIcon className={styles.toggleIcon} />{" "}
            {value ? (
                <>
                    {value}
                    <span className={styles.plurals}>{plurals(value)}</span>
                </>
            ) : (
                <span className={styles.placeholder}>{placeholder}</span>
            )}
        </button>
    );
});
