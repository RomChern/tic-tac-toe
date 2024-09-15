import { memo } from "react"

type TProps = {status: string}

export const Status = memo(({ status }: TProps) => {
    console.log("render-status")
    return <div className="status">{status}</div>
}) 