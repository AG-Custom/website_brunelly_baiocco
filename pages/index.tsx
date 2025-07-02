import Head from 'next/head';
import Link from 'next/link';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import styles from '../styles/pages/index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Brunelly Baiocco</title>
        <meta name="description" content="Website da Brunelly Baiocco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Bem-vinda ao site da Brunelly Baiocco
          </h1>
          
          <p className={styles.description}>
            Descubra mais sobre meu trabalho e entre em contato para conversarmos sobre suas necessidades.
          </p>

          <div className={styles.ctaButtons}>
            <Link href="/sobre">
              <button className={styles.ctaButton}>
                Conheça Meu Trabalho
              </button>
            </Link>
            
            <Link href="/contato">
              <button className={`${styles.ctaButton} ${styles.ctaSecondary}`}>
                Entre em Contato
              </button>
            </Link>
          </div>
        </main>
        <Footer name="Brunelly Baiocco" />
      </div>
    </>
  );
}
