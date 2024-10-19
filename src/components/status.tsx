type TProps = { status: string }

export const Status = ({ status }: TProps) => {
    return <div className="status">{status}</div>
}