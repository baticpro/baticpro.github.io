import CitySelector from "./CitySelector";
import { ReactComponent as Plane } from "./plane.svg";
import { ReactComponent as Point } from "./point.svg";
import { ReactComponent as Swap } from "./swap.svg";
import styles from "./Route.module.css";

export default function Route({ values: [cityFrom, cityTo], onChange }) {
    return (
        <div className={styles.route}>
            <div className={styles.citySelectorWrapper}>
                <Plane className={styles.icon} />
                <CitySelector
                    className={styles.citySelector}
                    value={cityFrom}
                    placeholder="Откуда"
                    onChange={(payload) => onChange([payload, cityTo])}
                />
            </div>
            <div
                className={styles.swap}
                onClick={() => onChange([cityTo, cityFrom])}
            >
                <Swap />
            </div>
            <div className={styles.citySelectorWrapper}>
                <Point className={styles.icon} />
                <CitySelector
                    className={styles.citySelector}
                    value={cityTo}
                    placeholder="Куда"
                    onChange={(payload) => onChange([cityFrom, payload])}
                />
            </div>
        </div>
    );
}
