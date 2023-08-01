
import styles from "./Header.module.css"
import logo from '../Images/img/logo.png'
import { Tabs } from "./Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"

export const Header = () => {
    return (
        <>
        <div className={styles.container}>
            <img src={logo} alt="alt" />
            <Tabs/>
                <div>
                <FontAwesomeIcon className={styles.icons} icon={faMagnifyingGlass} />
                <FontAwesomeIcon className={styles.icons} icon={faBagShopping} />
                </div>
        </div>
        </>
    )
}