'use client'

import Link from 'next/link';
import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    console.log('start loading');
  }, [])

  return (
    <main className={styles.main}>
      <h4>hello</h4>
      <Link href="/closure" ><button>go to closure</button></Link>
    </main>
  )
}
