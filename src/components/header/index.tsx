import s from "../../styles/header.module.css"
import notify from "../../assets/notify.svg"

export const Header = () => {
    return (
        <header className={s.header}>
            <article className={s.headerIntro}>
                <div className={s.headerIntroLogo}/>
                <h1>Проект</h1>
            </article>
            <article className={s.headerUser}>
                <img src={notify} className={s.headerUserNotifications} alt={"notifications"}/>
                <div className={s.headerUserAvatar}/>
                <section className={s.headerUserInfo}>
                    <h4 className={s.headerUserInfoName}>Иванов В. А.</h4>
                    <p className={s.headerUserInfoJob}>Должность</p>
                </section>
            </article>
        </header>
    )
}