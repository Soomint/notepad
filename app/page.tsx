'use client'

import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    console.log('start loading');
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
    <main className={styles.main}>
      <h4>hello</h4>
      <button onClick={() => count()}>add counter</button>
    </main>
  )
}
