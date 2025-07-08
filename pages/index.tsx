import Head from 'next/head';
import Header from '../app/components/HeaderDesktop';
import Footer from '../app/components/FooterDesktop';
import WelcomeDesktop from '../app/sections/WelcomeDesktop';
import AboutMeDesktop from '../app/sections/AboutMeDesktop';
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
          <WelcomeDesktop />
          <AboutMeDesktop />
        </main>
        <Footer />
      </div>
    </>
  );
}
