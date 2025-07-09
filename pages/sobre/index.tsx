import Head from 'next/head';
import Link from 'next/link';

// Desktop Components
import HeaderDesktop from '../../app/components/HeaderDesktop';
import FooterDesktop from '../../app/components/FooterDesktop';

// Mobile Components
import HeaderMobile from '../../app/components/HeaderMobile';
import FooterMobile from '../../app/components/FooterMobile';

// Hook customizado
import { useIsMobile } from '../../app/hooks/useIsMobile';
import Loading from '../../app/components/Loading';

import styles from '../../styles/pages/sobre.module.scss';

export default function Sobre() {
  const isMobile = useIsMobile();

  // Mostra loading até detectar o tipo de dispositivo
  if (isMobile === undefined) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Sobre - Brunelly Baiocco</title>
        <meta name="description" content="Conheça mais sobre Brunelly Baiocco, sua história e experiência" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
        <main className={`${styles.main} ${isMobile ? styles.mobile : ''}`}>
          <h1 className={styles.title}>
            Sobre Mim
          </h1>
          
          <div className={styles.content}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Minha História</h2>
              <p className={styles.description}>
                Bem-vindo ao meu espaço! Sou Brunelly Baiocco e aqui você encontrará mais sobre 
                minha trajetória, experiências e paixões. Este é um lugar onde compartilho um 
                pouco da minha história e do que me move no dia a dia.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Experiência e Formação</h2>
              <p className={styles.description}>
                Ao longo dos anos, venho construindo uma carreira baseada em dedicação, 
                aprendizado contínuo e busca por excelência. Cada projeto e desafio 
                contribuíram para moldar quem sou hoje profissionalmente.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Valores e Propósito</h2>
              <p className={styles.description}>
                Acredito no poder das conexões humanas autênticas e no impacto positivo 
                que podemos gerar quando trabalhamos com propósito. Meu objetivo é sempre 
                entregar o melhor de mim em cada projeto e relacionamento profissional.
              </p>
            </div>

            <div className={styles.ctaSection}>
              <h2 className={styles.sectionTitle}>Vamos Conversar?</h2>
              <p className={styles.description}>
                Gostaria de saber mais ou tem algum projeto em mente? Ficarei feliz em conversar com você!
              </p>
              <Link href="/contato">
                <button className={styles.ctaButton}>
                  Entre em Contato
                </button>
              </Link>
            </div>
          </div>
        </main>
        {isMobile ? <FooterMobile /> : <FooterDesktop />}
      </div>
    </>
  );
} 