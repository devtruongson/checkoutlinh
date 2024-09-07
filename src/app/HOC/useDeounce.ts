import { useEffect, useState } from 'react';

function useDebounce(value: string, delay: number) {
    const [textDebounce, setTextDebounce] = useState<string>(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setTextDebounce(value);
        }, delay);

        return () => clearInterval(id);
    }, [value, delay]);

    return textDebounce;
}

export default useDebounce;
