import dayjs from "dayjs";

import PureCalendar from "../../components/Calendar";
import styles from "./Calendar.module.css";

export default function Calendar({
    values = [],
    isRange = false,
    currentOver,
    setCurrentOver,
    date = dayjs(),
    mutedDates,
    onSelect,
}) {
    const weekdaysMin = dayjs.Ls.ru.weekdaysMin
        .slice(1)
        .concat(dayjs.Ls.ru.weekdaysMin[0]);

    return (
        <div onMouseLeave={setCurrentOver}>
            <div className={styles.head}>
                {weekdaysMin.map((name, i) => (
                    <div
                        key={name}
                        className={`${styles.headCell} ${
                            (i === 5 || i === 6) && styles.weekEnd
                        }`}
                    >
                        {name}
                    </div>
                ))}
            </div>
            <PureCalendar
                date={date}
                className={styles.calendar}
                onSelect={onSelect}
                classNameCell={(d) => {
                    const [dateTo, dateBack] = values;
                    let inRange =
                        isRange &&
                        ((d.isBefore(currentOver) &&
                            dateTo &&
                            d.isAfter(dateTo)) ||
                            (d.isSameOrAfter(currentOver) &&
                                dateTo &&
                                d.isBefore(dateTo)));
                    if (values.length === 2 && isRange) {
                        inRange = d.isBetween(dateTo, dateBack);
                    }

                    return Object.entries({
                        [styles.bodyCell]: true,
                        [styles.weekEnd]: d.day() === 0 || d.day() === 6,
                        [styles.activeCell]: !dayjs().add(-1, "day").isAfter(d),
                        [styles.beforeCell]: dayjs().add(-1, "day").isAfter(d),
                        [styles.same]:
                            d.isSame(dateTo) || (isRange && d.isSame(dateBack)),
                        [styles.range]: inRange,
                        [styles.muted]: mutedDates.find((i) => d.isSame(i)),
                    })
                        .filter((entry) => entry[1])
                        .map((entry) => entry[0])
                        .join(" ");
                }}
                onMouseOver={(ev) => {
                    if (!ev.target.textContent) {
                        setCurrentOver();
                    } else if (isRange) {
                        setCurrentOver(
                            dayjs(date)
                                .startOf("month")
                                .add(ev.target.textContent, "day")
                        );
                    }
                }}
            />
        </div>
    );
}
