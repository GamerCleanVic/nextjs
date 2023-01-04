import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEXT.JS</title>
        <meta name="description" content="Next app" />
        <link rel="icon" href="/favicon.ico" />        
      </Head>

      <main className={styles.main}>
          <nav className="mt-0 bg-neutral-500">
            <a className="bg-lime-300 text-lime-900 pt-3 pb-3 pr-7 pl-7 mr-3 ml-3" href="./">HOME</a>
            <a className="bg-lime-300 text-lime-900 pt-3 pb-3 pr-7 pl-7 mr-3 ml-3" href="./blog">BLOG</a>
            <a className="bg-lime-300 text-lime-900 pt-3 pb-3 pr-7 pl-7 mr-3 ml-3" href="./sobre">SOBRE</a>
          </nav>
        <h1 className='text-lime-900'>
          TÍTULO BODY
        </h1>
        <h2>
          Subtítulo teste body
        </h2>
        <p>
          Texto texto Body.
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
