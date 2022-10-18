/* eslint-disable no-undef */
import { useReducer, useEffect } from "react";
import dayjs from "dayjs";

import Route from "./Route";
import queryCities from "./Route/CitySelector/queryCities";
import DatePicker from "./DatePicker";
import Passengers from "./Passengers";
import useUtmsFromHTML from "./hooks/useUtmsFromHTML";
import styles from "./Search.module.css";

const TAIS_DATE_FORMAT = "DD.MM.YYYY";

const SET_CITIES = "SET_CITIES";
const SET_DATES = "SET_DATES";
const SET_PASSENGERS = "SET_PASSENGERS";
const SET_UTMS = "SET_UTMS";

function reducer(state, { type, payload }) {
    // console.log({ type, payload });
    switch (type) {
        case SET_CITIES:
            return { ...state, from: payload[0], to: payload[1] };
        case SET_DATES:
            return { ...state, dates: payload };
        case SET_PASSENGERS:
            return {
                ...state,
                passengers: { ...state.passengers, ...payload },
            };
        case SET_UTMS:
            return {
                ...state,
                utms: [...state.utms, ...payload].reduce(
                    (acc, it) =>
                        acc.find(({ key }) => key === it.key)
                            ? acc
                            : [...acc, it],
                    []
                ),
            };
        default:
            return state;
    }
}

function onSubmit({ from, to, dates, passengers }) {
    const [outbound_date, return_date] = dates.map((date) =>
        dayjs(date).format(TAIS_DATE_FORMAT)
    );
    const searchQuery = {
        adult_count: passengers.adults,
        child_count: passengers.children,
        infant_count: passengers.infants,
        departure_point: from.code,
        arrival_point: to.code,
        outbound_date,
        return_date,
    };

    localStorage.setItem("searchQuery", JSON.stringify(searchQuery));

    try {
        flutterApp.runApp();
    } catch {
        console.log("not flutter app");
    }
}

function getCity(response) {
    if (!response) return {};

    const {
        code,
        name_translations: { ru: cityName },
    } = response.data[0];

    return { code, cityName };
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, {}, () => {
        const params = new URLSearchParams(window.location.search);

        const utms = [];
        params.forEach((value, key) => {
            if (key.startsWith("utm_")) {
                utms.push({ key, value });
            }
        });

        const from = params.get("from");
        const to = params.get("to");
        Promise.all([
            from && queryCities({ query: from }),
            to && queryCities({ query: to }),
        ]).then(([fromCity, toCity]) => {
            dispatch({
                type: SET_CITIES,
                payload: [getCity(fromCity), getCity(toCity)],
            });
        });

        return {
            from: {},
            to: {},
            dates: (params.getAll("dates") || []).map((d) =>
                dayjs(d, TAIS_DATE_FORMAT).format("YYYY-MM-DD")
            ),
            passengers: { adults: 1, children: 0, infants: 0 },
            utms,
        };
    });

    const utms = useUtmsFromHTML();
    useEffect(() => dispatch({ type: SET_UTMS, payload: utms }), [utms]);

    return (
        <div className={styles.searchWidget}>
            <div className={styles.form}>
                <input type="hidden" name="flow" value="async" />
                {state.utms.map(({ key, value }) => (
                    <input type="hidden" key={key} name={key} value={value} />
                ))}
                <div className={`${styles.block} ${styles.route}`}>
                    <Route
                        values={[state.from, state.to]}
                        onChange={(payload) =>
                            dispatch({ type: SET_CITIES, payload })
                        }
                    />
                </div>
                <div className={`${styles.block} ${styles.datepicker}`}>
                    <DatePicker
                        values={state.dates}
                        cities={[state.from, state.to]}
                        onChange={(payload) =>
                            dispatch({ type: SET_DATES, payload })
                        }
                    />
                </div>
                <div className={`${styles.block} ${styles.passengers}`}>
                    <Passengers
                        values={state.passengers}
                        onChange={(payload) =>
                            dispatch({ type: SET_PASSENGERS, payload })
                        }
                    />
                </div>
                <button
                    type="button"
                    disabled={
                        !(state.from.code && state.to.code) ||
                        !state.dates.length ||
                        !(
                            state.passengers.adults +
                            state.passengers.children +
                            state.passengers.infants
                        )
                    }
                    className={styles.submit}
                    onClick={() => onSubmit(state)}
                >
                    Найти
                </button>
            </div>
        </div>
    );
}
