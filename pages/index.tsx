import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEXT.JS</title>
        <meta name="description" content="Next app" />
        <link rel="icon" href="/favicon.ico" />        
      </Head>

      <main className={styles.main}>
          <nav className="mt-0">
            <Link className="btn btn-primary m-3 w-32" href="./">HOME</Link>
            <Link className="btn btn-primary m-3 w-32" href="./blog">BLOG</Link>
            <Link className="btn btn-primary m-3 w-32" href="./sobre">SOBRE</Link>
          </nav>
        <h1 className='text-lime-900 text-blue-700 mt-4 mb-3'>
          TÍTULO BODY
        </h1>
        <h2 className="mb-3">
          Subtítulo teste body
        </h2>
        <p>
          Texto texto Body          
        </p>        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
