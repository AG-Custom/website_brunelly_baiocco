import Head from 'next/head';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';
import styles from '../../styles/pages/sobre.module.scss';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Brunelly Baiocco</title>
        <meta name="description" content="Sobre Brunelly Baiocco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header title="Brunelly Baiocco" />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Sobre Mim
          </h1>
          
          <p className={styles.description}>
            Esta é a página sobre...
          </p>
        </main>
        <Footer name="Brunelly Baiocco" />
      </div>
    </>
  );
} 