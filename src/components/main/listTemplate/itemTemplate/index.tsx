import s from "../../../../styles/itemTemplate.module.css";
import {ITableItem} from "../../../../fakeAPI/interfaces.ts";
import smallArr from "../../../../assets/smallArr.svg";
import {useState} from "react";

export const ItemTemplate = (item: ITableItem) => {
    const statuses = ["В работе", "На паузе", "Выполнена"];

    const [openList, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!openList);
    const changeStatus = (newStatus: "В работе" | "На паузе" | "Выполнена") => {
        item.status = newStatus;
        setOpen(false);
    };

    return (
        <tbody>
        <tr className={s.item}>
            <td>
                {(item.date.getDate()).toString().length != 2
                    ? "0" + item.date.getDate()
                    : item.date.getDate()}
                .
                {(item.date.getMonth() + 1).toString().length != 2
                    ? "0" + (item.date.getMonth() + 1)
                    : item.date.getMonth() + 1}
                .{item.date.getFullYear()}
            </td>
            <td>{item.cipherT}</td>
            <td>{item.cipherPrj}</td>
            <td>{item.task}</td>
            <td className={s.itemStatus} onClick={toggleOpen}>
                {}
                {!openList ? <section className={s.pickedItemStatus}>
                        <label>{item.status}</label>
                        <img src={smallArr} alt="..."/>
                    </section> :
                     <ul className={s.itemStatusList}>
                        {statuses.map((status) => (
                            <li key={status} onClick={() => changeStatus(status)}>
                                {status}
                            </li>
                        ))}
                    </ul>
                }
            </td>
            <td>{item.responsible}</td>
            <td>{item.reserve}</td>
            <td>{item.priority}</td>
            <td>{item.comment}</td>
            <td>
                {item.timePlan.getHours().toString().length != 2
                    ? "0" + item.timePlan.getHours()
                    : item.timePlan.getHours()}
                :
                {item.timePlan.getMinutes().toString().length != 2
                    ? "0" + item.timePlan.getMinutes()
                    : item.timePlan.getMinutes()}
                :
                {item.timePlan.getSeconds().toString().length != 2
                    ? "0" + item.timePlan.getSeconds()
                    : item.timePlan.getSeconds()}
            </td>
            <td>
                {item.timeFact.getHours().toString().length != 2
                    ? "0" + item.timeFact.getHours()
                    : item.timeFact.getHours()}
                :
                {item.timeFact.getMinutes().toString().length != 2
                    ? "0" + item.timeFact.getMinutes()
                    : item.timeFact.getMinutes()}
                :
                {item.timeFact.getSeconds().toString().length != 2
                    ? "0" + item.timeFact.getSeconds()
                    : item.timeFact.getSeconds()}
            </td>
            <td>{item.Start.toLocaleString()}</td>
            <td>{item.End.toLocaleString()}</td>
        </tr>
        </tbody>
    );
};
