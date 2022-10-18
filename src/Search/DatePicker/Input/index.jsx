import { forwardRef } from "react";

import { ReactComponent as CalendarIcon } from "./calendar.svg";
import styles from "./Input.module.css";

export default forwardRef(function Input(
    { value, placeholder, className, isFocus, onFocus, onBlur, ...props },
    ref
) {
    return (
        <button
            className={`${styles.toggle}  ${
                isFocus && styles.focus
            } ${className}`}
            type="button"
            ref={ref}
            onFocus={onFocus}
            onBlur={onBlur}
            {...props}
        >
            <CalendarIcon className={styles.toggleIcon} />{" "}
            {value || <span className={styles.placeholder}>{placeholder}</span>}
        </button>
    );
});
