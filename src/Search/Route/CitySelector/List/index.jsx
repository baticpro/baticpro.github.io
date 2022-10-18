import styles from "./List.module.css";

export default function List({ items = [], onSelect }) {
    return items.map(
        ({ code, country_name, name_translations: { ru: cityName } }) => (
            <div
                key={code}
                className={styles.listItem}
                onClick={() => onSelect({ cityName, code })}
            >
                <div>
                    <div className={styles.cityName}>{cityName}</div>
                    <div className={styles.countryName}>{country_name}</div>
                </div>
                <div className={styles.code}>{code}</div>
            </div>
        )
    );
}
