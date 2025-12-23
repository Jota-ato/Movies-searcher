
import { useEffect, useState } from "react"

export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        // 'handler' usa setTimeout para programar la actualización del estado después del 'delay'.
        // Esto evita que el valor cambie en cada pulsación de tecla o actualización rápida.
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        // El 'return' es la función de limpieza (cleanup) de React.
        // Se ejecuta cada vez que 'value' o 'delay' cambian antes de que el tiempo termine.
        // 'clearTimeout' cancela el temporizador anterior para reiniciar la cuenta atrás,
        // asegurando que solo el último cambio sea el que se procese tras la pausa.
        return () => clearTimeout(handler)
    }, [value, delay])

    return debouncedValue
}