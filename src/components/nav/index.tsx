import s from "../../styles/nav.module.css"
import navBTN from "../../assets/navBTN.svg"

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <img className={s.navButton} src={navBTN} alt={"Задачи"}/>
        </nav>
    )
}