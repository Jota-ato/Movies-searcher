import type { ReactNode } from "react";

type ModalProps = {
    children: ReactNode
    styles: string
}

export default function Modal({children, styles} : ModalProps) {
    return (
        <div className={`bg-black/10 ${styles}`}>
            {children}
        </div>
    )
}
