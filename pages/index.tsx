import Head from 'next/head';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Welcome from '../app/sections/Welcome';
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
          <Welcome />
        </main>
        <Footer name="Brunelly Baiocco" />
      </div>
    </>
  );
}
