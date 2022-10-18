import { useEffect } from "react";
import dayjs from "dayjs";

import Calendar from "../../components/Calendar";
import ConfirmButton from "../../components/ConfirmButton";
import DropDown from "../../components/DropDown";
import Title from "./Title";
import { ReactComponent as CloseIcon } from "./close.svg";
import styles from "./ModalCalendar.module.css";

export default function ModalCalendar({
    onSelect,
    onConfirm,
    onReset,
    setRoundTrip,
    values = [],
    mutedDates,
}) {
    useEffect(() => setRoundTrip(true), [setRoundTrip]);
    const now = dayjs();
    const weekdaysMin = dayjs.Ls.ru.weekdaysMin
        .slice(1)
        .concat(dayjs.Ls.ru.weekdaysMin[0]);
    const getDateRangeString = ([inputTo, inputBack]) => {
        const to = dayjs(inputTo);
        const back = dayjs(inputBack);
        if (to.isSame(back, "month")) {
            return `${to.date()} – ${back.format("D MMMM")}`;
        } else {
            return `${to.format("D MMMM")} – ${back.format("D MMMM")}`;
        }
    };

    return (
        <>
            <DropDown.ModalMenuHeader className={styles.header}>
                <h3 className={styles.headerTitle}>Даты</h3>
                <div className={styles.buttonTitle}>
                    {values.length > 0 ? (
                        <div
                            className={styles.buttonTitleLink}
                            onClick={onReset}
                        >
                            Сбросить
                        </div>
                    ) : (
                        <CloseIcon onClick={onConfirm} />
                    )}
                </div>
                <div className={styles.weekdays}>
                    {weekdaysMin.map((name) => (
                        <div key={name}>{name}</div>
                    ))}
                </div>
            </DropDown.ModalMenuHeader>
            <DropDown.ModalMenuContent
                className={values.length ? styles.calendar : ""}
            >
                {new Array(12).fill(true).map((_, i) => {
                    const date = now.add(i, "month");

                    return (
                        <div key={date.format()}>
                            <Title date={date} />
                            <Calendar
                                className={styles.table}
                                date={date}
                                classNameCell={(d) => {
                                    let inRange;
                                    const [dateTo, dateBack] = values;

                                    if (values.length === 2) {
                                        inRange = d.isBetween(dateTo, dateBack);
                                    }

                                    return Object.entries({
                                        [styles.cell]: true,
                                        [styles.activeCell]: !dayjs()
                                            .add(-1, "day")
                                            .isAfter(d),
                                        [styles.same]:
                                            d.isSame(dateTo) ||
                                            d.isSame(dateBack),
                                        [styles.sameRangeRight]:
                                            values.length === 2 &&
                                            d.isSame(dateTo) &&
                                            values[0] !== dateBack,
                                        [styles.sameRangeLeft]:
                                            values.length === 2 &&
                                            d.isSame(dateBack) &&
                                            dateTo !== dateBack,
                                        [styles.range]: inRange,
                                        [styles.muted]: mutedDates.find((i) =>
                                            d.isSame(i)
                                        ),
                                    })
                                        .filter((entry) => entry[1])
                                        .map((entry) => entry[0])
                                        .join(" ");
                                }}
                                onSelect={onSelect}
                                values={values}
                            />
                        </div>
                    );
                })}
                {values.length > 0 && (
                    <ConfirmButton
                        type="button"
                        className={styles.fixedButton}
                        onClick={onConfirm}
                    >
                        {values.length === 1
                            ? "Обратный билет не нужен"
                            : `Выбрать ${getDateRangeString(values)}`}
                    </ConfirmButton>
                )}
            </DropDown.ModalMenuContent>
        </>
    );
}
