import React from "react";
import { Checkbox } from "utair-ui-kit";

import styles from "./Agreement.module.scss";

export default function Agreement({ checked, ...rest }) {
    const label = (
        <div className={styles.agreementText}>
            Я подтверждаю ознакомление с{" "}
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.utair.ru/about/politics/#politika-pao-aviakompaniya-yuteyr-v-oblasti-obrabotki-personalnykh-dannykh-i-trebovaniya-k-organizats"
            >
                условиями использования моих персональных данных
            </a>{" "}
            и даю{" "}
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.utair.ru/about/politics/#soglasie-na-obrabotku-personalnykh-dannykh-klienta-pao-aviakompaniya-yuteyr"
            >
                согласие
            </a>{" "}
            на их обработку.
        </div>
    );

    return (
        <div className={styles.root}>
            <Checkbox checked={checked} label={label} {...rest} />
        </div>
    );
}
