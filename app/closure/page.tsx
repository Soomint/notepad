'use client'

import { useEffect } from 'react'

export default function Closure() {

    useEffect(() => {
        console.log('closure loading');
    }, [])

    const addCount = () => {
        let count = 0;

        const addCount = () => {
            count++;
            console.log('count : ' + count);
        }

        return addCount;
    }

    const count = addCount();

    return (
        <>
            <button onClick={() => count()}>add counter</button>
        </>
    )
}
