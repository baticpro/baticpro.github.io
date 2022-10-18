import Button from "../Button";
import styles from "./Counter.module.css";

export default function Counter({ value = 0, onChange, min = 0, max = 10 }) {
    return (
        <div className={styles.counter}>
            <Button
                onClick={() => onChange(value - 1 < min ? value : value - 1)}
                disabled={value === min}
            >
                -
            </Button>
            <div className={styles.value}>{value}</div>
            <Button
                onClick={() => onChange(value + 1 > max ? value : value + 1)}
                disabled={value === max}
            >
                +
            </Button>
        </div>
    );
}
