'use client'

import { useEffect } from 'react'

export default function Closure() {

    useEffect(() => {
        console.log('this loading');
        console.log(obj.a());
        console.log(obj2.a());
    }, [])

    const obj = {
        name: ['abc'],
        a: function () {
            console.log(this);
            this.name.forEach(() => {
                console.log(this);
            })
        }
    };

    const obj2 = {
        name: ['abc'],
        a: function () {
            console.log(this);
            this.name.forEach(function () {
                console.log(this);
            })
        }
    };

    return (
        <>

        </>
    )
}
