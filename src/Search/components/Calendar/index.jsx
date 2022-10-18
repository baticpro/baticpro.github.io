import dayjs from "dayjs";

export default function Calendar({
    date = dayjs(),
    className = "",
    classNameCell = () => "",
    onSelect = () => {},
    ...rest
}) {
    const startOfDayWeek = dayjs(date).startOf("month").day();
    const endOfDayMonth = dayjs(date).endOf("month").date();

    return (
        <table className={className} {...rest}>
            <tbody
                onClick={(ev) => {
                    if (!ev.target.textContent) return;
                    const d = dayjs(date)
                        .startOf("month")
                        .add(ev.target.textContent - 1, "day")
                        .format("YYYY-MM-DD");
                    onSelect(d);
                }}
            >
                {new Array(6).fill(true).map((_, week) => (
                    <tr key={week + 1}>
                        {new Array(7).fill(true).map((_, dayInWeek) => {
                            const numberOfCell = week * 7 + dayInWeek + 1;
                            const day =
                                numberOfCell -
                                (startOfDayWeek === 0 ? 7 : startOfDayWeek);
                            const isShow = day >= 0 && day < endOfDayMonth;
                            const d = dayjs(date)
                                .startOf("month")
                                .add(day, "day");

                            return (
                                <td
                                    key={week + dayInWeek}
                                    className={isShow ? classNameCell(d) : ""}
                                >
                                    {isShow && d.date()}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
