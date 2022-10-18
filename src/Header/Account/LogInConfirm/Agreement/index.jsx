import styles from "./Agreement.module.scss";

export default function Agreement() {
    return (
        <div className={styles.agreementText}>
            {"sign.accept_rules.title"}&nbsp;
            <a
                href="https://www.utair.ru/about/politics/#politika-pao-aviakompaniya-yuteyr-v-oblasti-obrabotki-personalnykh-dannykh-i-trebovaniya-k-organizats"
                target="_blank"
                rel="noopener noreferrer"
            >
                {"sign.accept_rules.link"}
            </a>
            {"sign.accept_rules.processing_text"}
            &nbsp;
            <a
                href="https://www.utair.ru/about/politics/#soglasie-na-obrabotku-personalnykh-dannykh-klienta-pao-aviakompaniya-yuteyr"
                target="_blank"
                rel="noreferrer"
            >
                {"sign.accept_rules.processing_link"}
            </a>
            &nbsp;{"sign.accept_rules.status_text"}&nbsp;
            <a href="/status/about" target="_blank">
                {"sign.accept_rules.status_link"}
            </a>
        </div>
    );
}
