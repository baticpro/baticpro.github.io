import { useState, useEffect } from "react";
import dayjs from "dayjs";

import DropDown from "../components/DropDown";
import Button from "../components/Button";
import Calendar from "./Calendar";
import Input from "./Input";
import ModalCalendar from "./ModalCalendar";
import queryFlights from "./queryFlights";
import { ReactComponent as Arrow } from "./arrow-forward.svg";
import styles from "./DatePicker.module.css";

function invertDates(dates) {
    const first = dates[0];
    const last = dates[dates.length - 1];

    if (!first) return dates;

    const result = [];
    let current = dayjs().startOf("day");

    while (current <= last) {
        // eslint-disable-next-line no-loop-func
        if (!dates.find((i) => current.isSame(i))) {
            result.push(current);
        }
        current = current.add(1, "day");
    }
    return result;
}

function getUnavailableDates([inputTo, inputBack]) {
    const to = inputTo.map((i) => dayjs(i, "YYYY-MM-DD"));
    const back = inputBack.map((i) => dayjs(i, "YYYY-MM-DD"));
    return [invertDates(to), invertDates(back)];
}

export default function DatePicker({ values, cities, onChange }) {
    const [from, to] = cities;
    const [unavailableDates, setUnavailableDates] = useState([[], []]);
    const [isRoundTrip, setRoundTrip] = useState(values.length === 2);
    const [currentDate, setCurrentDate] = useState(dayjs(values[0]));
    const [currentOver, setCurrentOver] = useState();
    const [mutedDates, setMutedDates] = useState([]);
    const TITLE = "MMMM YYYY";
    const needClose = (isRoundTrip && values.length === 1) || !isRoundTrip;

    useEffect(() => {
        const departure = from?.code;
        const arrival = to?.code;
        if (departure && arrival) {
            Promise.all([
                queryFlights(departure, arrival),
                queryFlights(arrival, departure),
            ]).then(([fromDates, toDates]) => {
                setUnavailableDates(
                    getUnavailableDates([fromDates.dates, toDates.dates])
                );
            });
        }
    }, [from, to]);

    useEffect(() => {
        const [dateTo] = values;
        const [datesTo, datesBack] = unavailableDates;
        if (!isRoundTrip) {
            setMutedDates(datesTo);
        } else {
            if (values.length === 1) {
                setMutedDates([
                    ...datesTo.filter((i) => i.isBefore(dateTo)),
                    ...datesBack.filter((i) => i.isSameOrAfter(dateTo)),
                ]);
            } else {
                // вариант с датами "туда"
                // setMutedDates(datesTo);

                // вариант со всеми доступными датами
                setMutedDates(
                    datesBack.filter((i) => datesTo.find((y) => i.isSame(y)))
                );
            }
        }
    }, [values, unavailableDates, isRoundTrip]);

    useEffect(() => {
        if (values.length > 1) {
            onSelect(values[0]);
        }
    }, [isRoundTrip]); // eslint-disable-line react-hooks/exhaustive-deps

    function onSelect(value) {
        const [dateTo] = values;
        if (dayjs(value).isBefore(dayjs().startOf("day"))) return;
        if (isRoundTrip && values.length === 1) {
            onChange(value >= dateTo ? [dateTo, value] : [value, dateTo]);
        } else {
            onChange([value]);
        }
    }

    function onReset() {
        onChange([]);
    }

    return (
        <DropDown
            value={values
                .map((d) => dayjs(d).format(isRoundTrip ? "D MMM" : "D MMMM"))
                .join(" - ")}
            placeholder="Выберите даты"
            className={styles.wrapper}
        >
            <DropDown.Toggle>
                {({ ...props }, ref) => <Input {...props} ref={ref} />}
            </DropDown.Toggle>
            <DropDown.Menu>
                {({ onClose }) => (
                    <div className={styles.datePicker}>
                        <div className={styles.tabs}>
                            <div
                                className={`${styles.tab} ${
                                    isRoundTrip && styles.tabActive
                                }`}
                                onClick={() => setRoundTrip(true)}
                            >
                                Туда-обратно
                            </div>
                            <div
                                className={`${styles.tab} ${
                                    !isRoundTrip && styles.tabActive
                                }`}
                                onClick={() => {
                                    setRoundTrip();
                                    setCurrentOver();
                                }}
                            >
                                Только туда
                            </div>
                        </div>
                        <div className={styles.calndarWrapper}>
                            <div className={styles.calndarNavBar}>
                                <Button
                                    className={styles.buttonLeft}
                                    disabled={currentDate
                                        .startOf("month")
                                        .isSameOrBefore(
                                            dayjs().startOf("month")
                                        )}
                                    onClick={() =>
                                        setCurrentDate(
                                            currentDate.add(-1, "month")
                                        )
                                    }
                                >
                                    <Arrow />
                                </Button>
                                <Button
                                    className={styles.button}
                                    disabled={currentDate
                                        .startOf("month")
                                        .isSameOrAfter(
                                            dayjs()
                                                .startOf("month")
                                                .add(11, "month")
                                        )}
                                    onClick={() =>
                                        setCurrentDate(
                                            currentDate.add(1, "month")
                                        )
                                    }
                                >
                                    <Arrow />
                                </Button>
                            </div>
                            <div className={styles.calendar}>
                                <div>
                                    <h4 className={styles.calendarTitle}>
                                        {currentDate.format(TITLE)}
                                    </h4>
                                    <Calendar
                                        values={values}
                                        isRange={isRoundTrip}
                                        setCurrentOver={setCurrentOver}
                                        currentOver={currentOver}
                                        date={currentDate}
                                        onSelect={(value) => {
                                            if (needClose) onClose();
                                            onSelect(value);
                                        }}
                                        mutedDates={mutedDates}
                                    />
                                </div>
                                <div>
                                    <h4 className={styles.calendarTitle}>
                                        {currentDate
                                            .add(1, "month")
                                            .format(TITLE)}
                                    </h4>
                                    <Calendar
                                        values={values}
                                        isRange={isRoundTrip}
                                        setCurrentOver={setCurrentOver}
                                        currentOver={currentOver}
                                        date={currentDate.add(1, "month")}
                                        onSelect={(value) => {
                                            if (needClose) onClose();
                                            onSelect(value);
                                        }}
                                        mutedDates={mutedDates}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </DropDown.Menu>
            <DropDown.ModalMenu>
                {({ onClose }) => (
                    <ModalCalendar
                        values={values}
                        onSelect={onSelect}
                        onConfirm={onClose}
                        onReset={onReset}
                        setRoundTrip={setRoundTrip}
                        mutedDates={mutedDates}
                    />
                )}
            </DropDown.ModalMenu>
        </DropDown>
    );
}
