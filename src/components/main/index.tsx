import s from "../../styles/tasks.module.css"
import {tableData, tableHeader} from "../../fakeAPI/data.ts";
import {ListTemplate} from "./listTemplate";
import {useState} from "react";

export const Tasks = () => {
    const tableHeaderLength = tableHeader.length
    const completedTasks = tableData.filter((task) => task.status === "Выполнена");
    const todayTasks = tableData.filter(
        (task) => task.End.toDateString() === new Date().toDateString()
    );
    const futureTasks = tableData.filter(
        (task) =>
            task.status === "На паузе" || task.status === "В работе"
    );

    const [openAccordion, setOpenAccordion] = useState("Задачи на сегодня");
    const handleAccordion = (name: string) => {
        if (openAccordion === name) {
            setOpenAccordion("");
        } else {
            // Иначе открываем его и закрываем другие
            setOpenAccordion(name);
        }
    };
    return (
        <main className={s.tasks}>
            <header className={s.tasksHeader}>
                <h1>Задачи</h1>
            </header>
            <article className={s.tasksBody}>
                <table className={s.tasksBodyTable}>
                    <thead className={s.taskBodyTableHead}>
                    <tr>
                        {tableHeader.map((item, id) => <th key={id}>{item}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    <tr><ListTemplate
                        name="Выполненные задачи"
                        hLength={tableHeaderLength}
                        data={completedTasks}
                        open={openAccordion === "Выполненные задачи"}
                        onClick={() => handleAccordion("Выполненные задачи")}
                    /></tr>
                    <tr><ListTemplate
                        name="Задачи на сегодня"
                        hLength={tableHeaderLength}
                        data={todayTasks}
                        open={openAccordion === "Задачи на сегодня"}
                        onClick={() => handleAccordion("Задачи на сегодня")}
                    /></tr>
                    <tr><ListTemplate
                        name="Предстоящие задачи"
                        hLength={tableHeaderLength}
                        data={futureTasks}
                        open={openAccordion === "Предстоящие задачи"}
                        onClick={() => handleAccordion("Предстоящие задачи")}
                    /></tr>
                    </tbody>
                </table>
            </article>
        </main>
    )
}