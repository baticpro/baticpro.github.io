import styles from "./ConfirmButton.module.css";

export default function ConfirmButton({ children, className = "", ...rest }) {
    return (
        <button className={`${styles.button} ${className}`} {...rest}>
            {children}
        </button>
    );
}
