import dayjs from "dayjs";

import styles from "./ModalCalendar.module.css";

export default function Title({ date = dayjs() }) {
    return (
        <div className={styles.title}>
            <div className={styles.titleRow}></div>
            <div>{date.format("MMMM YYYY")}</div>
            <div className={styles.titleRow}></div>
        </div>
    );
}
