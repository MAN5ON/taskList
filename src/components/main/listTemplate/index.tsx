import s from "../../../styles/listTemplate.module.css"
import bigArr from "../../../assets/bigArr.svg"
import {ItemTemplate} from "./itemTemplate";
import {ITableItem} from "../../../fakeAPI/interfaces.ts";

export const ListTemplate = ({name, hLength, data, open, onClick,}: {
    name: string; hLength: number; data: ITableItem[]; open: boolean; onClick: () => void;
}) => {
    return (
        <td colSpan={hLength}>
            <header onClick={onClick} className={s.listTempTableHead}>
                <label>{name}</label>{" "}
                {open ? (
                    <img
                        src={bigArr}
                        className={s.listTempTableHeadClose}
                        alt="Свернуть"
                    />
                ) : (
                    <img
                        src={bigArr}
                        className={s.listTempTableHeadOpen}
                        alt="Развернуть"
                    />
                )}
            </header>
            <article className={`${s.table} ${open ? s.opened : s.closed}`}>
                <table className={s.listTempTableBody}>
                    {data.map((item, id) => (
                        <ItemTemplate key={id} {...item} />
                    ))}
                </table>
            </article>
        </td>
    );
};