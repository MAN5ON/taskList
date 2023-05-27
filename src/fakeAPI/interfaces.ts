export interface ITableItem {
    date: Date
    cipherT: string
    cipherPrj: string
    task: string
    status: "На паузе" | "В работе" | "Выполнена"
    responsible: string
    reserve: string
    priority: string
    comment: string
    timePlan: Date
    timeFact: Date
    Start: Date
    End: Date
}