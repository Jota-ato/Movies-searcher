import type { ReactNode } from 'react'

type ModalProps = {
    children: ReactNode
}

export default function DarkBackground({ children }: ModalProps) {
    return (
        <div className="relative w-full h-full">
            {/* Overlay oscuro que cubre solo este contenedor */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Children debajo del overlay */}
            <div className="relative z-0 w-full h-full">
                {children}
            </div>
        </div>
    )
}