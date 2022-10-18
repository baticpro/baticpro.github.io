import { Radio } from "utair-ui-kit";

import styles from "./RadioSelector.module.scss";

export default function RadioSelector({ items, selected, onChange }) {
    return (
        <div className={styles.radioSelector}>
            {Object.entries(items).map(([value, label]) => (
                <label htmlFor={value} key={value}>
                    <Radio
                        id={value}
                        name="checkType"
                        checked={selected === value}
                        value={value}
                        onChange={({ target: { value: newSelected } }) =>
                            onChange(newSelected)
                        }
                    />
                    {label}
                </label>
            ))}
        </div>
    );
}
