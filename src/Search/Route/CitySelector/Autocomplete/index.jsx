import { forwardRef, useState, useEffect } from "react";

import queryCities from "../queryCities";
import styles from "./Autocomplete.module.css";

export default forwardRef(function Autocomplete(
    {
        className = "",
        value = {},
        placeholder = "",
        isFocus,
        isModal,
        onFocus,
        onBlur,
        updateSuggestions,
    },
    ref
) {
    const [city, setCity] = useState("");

    useEffect(() => {
        queryCities({ query: city }).then(({ data }) =>
            updateSuggestions(data)
        );
    }, [city, updateSuggestions]);

    useEffect(() => {
        setCity("");
    }, [value]);

    return (
        <div
            className={`${styles.toggle} ${
                isFocus && styles.focus
            } ${className}`}
            onClick={() => isModal && onFocus()}
        >
            <div className={styles.autocomplete}></div>
            <div className={`${styles.value} ${city.length && styles.hide}`}>
                <div>{value.cityName}</div>
                <div className={styles.subValue}>{value.code}</div>
            </div>
            {isModal ? (
                !value.cityName && (
                    <div className={styles.placeholder}>{placeholder}</div>
                )
            ) : (
                <input
                    className={styles.input}
                    type="text"
                    value={city}
                    placeholder={value.cityName ? "" : placeholder}
                    ref={ref}
                    onChange={(ev) => setCity(ev.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            )}
        </div>
    );
});
