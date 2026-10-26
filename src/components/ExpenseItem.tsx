import { formatEUR } from "../lib/format";

type ExpenseItemProps = {
    label: string;
    amountCents: number;
    paidBy: string;
    settled: boolean;
    handleDelete: ()=>void;
    handleChange: ()=>void;
};

export function ExpenseItem({amountCents, label, paidBy, handleDelete, settled, handleChange}:ExpenseItemProps) {
    return(
    <li>
        {label} : {formatEUR(amountCents)} payé par {paidBy}{" "}
        <button onClick={handleDelete}>Supprimer</button>
        <input type="checkbox" checked={settled} onChange={handleChange}/>
    </li>
    )
}