import { useEffect, useMemo, useState } from "react";
import DropDown from "../../../components/DropDown";
import { debounce } from "../../../utils/debounce";
import queryCities from "../queryCities";
import { ReactComponent as CloseIcon } from "./close.svg";
import styles from "./ModalSelector.module.css";

export default function ModalSelector({
    cities: initialCities = [],
    onSelect,
    onClose,
}) {
    const [search, setSearch] = useState("");
    const [cities, setCities] = useState(initialCities);

    const sendRequest = (value) =>
        queryCities({ query: value }).then(({ data }) => setCities(data));
    const debouncedQueryCities = useMemo(() => debounce(sendRequest, 300), []);

    const handleChange = (value) => {
        setSearch(value);

        if (value.length > 0) {
            debouncedQueryCities(value);
        }
    };

    const handleSelect = (city) => {
        setSearch("");
        onSelect(city);
    };

    useEffect(() => {
        if (!search) {
            setCities(initialCities);
        }
    }, [search, initialCities]);

    return (
        <>
            <DropDown.ModalMenuHeader className={styles.header}>
                <CloseIcon className={styles.close} onClick={onClose} />

                <input
                    className={styles.searchInput}
                    autoFocus
                    type="text"
                    placeholder="Найти город"
                    value={search}
                    onChange={(ev) => handleChange(ev.target.value)}
                />
            </DropDown.ModalMenuHeader>

            <DropDown.ModalMenuContent className={styles.content}>
                {cities.length > 0 ? (
                    cities.map(
                        ({ code, name_translations: { ru: cityName } }) => (
                            <div
                                key={code}
                                className={styles.item}
                                onClick={() => handleSelect({ cityName, code })}
                            >
                                <div>
                                    <div className={styles.cityName}>
                                        {cityName}
                                    </div>
                                    <div className={styles.code}>
                                        {code}, Все аэропорты
                                    </div>
                                </div>
                            </div>
                        )
                    )
                ) : (
                    <span className={styles.nothingFoundStub}>
                        Ничего не найдено
                    </span>
                )}
            </DropDown.ModalMenuContent>
        </>
    );
}
