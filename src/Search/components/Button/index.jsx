import styles from "./Button.module.css";

export default function Button({
    children,
    className = "",
    disabled = false,
    onClick,
    ...rest
}) {
    return (
        <div
            className={`${styles.button} ${
                disabled && styles.disabled
            } ${className}`}
            onClick={() => {
                if (!disabled) onClick();
            }}
            {...rest}
        >
            {children}
        </div>
    );
}
