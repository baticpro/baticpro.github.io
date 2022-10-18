import { ReactComponent as Logo } from "./logo.svg";
import LoginLink from "./LoginLink";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.root}>
            <Logo />
            <LoginLink />
        </div>
    );
}
