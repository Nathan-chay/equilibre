import { formatEUR } from "../lib/format";

type ExpenseItemProps = {
    label: string
    amountCents: number
    paidBy: string
};

export function ExpenseItem({amountCents, label, paidBy}:ExpenseItemProps) {
    return <li>{label} : {formatEUR(amountCents)} payé par {paidBy}</li>
}