import Head from 'next/head';
import { useState, useEffect } from 'react';

// Desktop Components
import HeaderDesktop from '../../app/components/HeaderDesktop';
import FooterDesktop from '../../app/components/FooterDesktop';
import ProjectsDesktop from '../../app/sections/ProjectsDesktop';
import TestimonialsDesktop from '../../app/sections/TestimonialsDesktop';

// Mobile Components (para futura implementação)
import HeaderMobile from '../../app/components/HeaderMobile';
import FooterMobile from '../../app/components/FooterMobile';

import styles from '../../styles/pages/projetos.module.scss';

export default function Projetos() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <>
      <Head>
        <title>Projetos - Brunelly Baiocco</title>
        <meta name="description" content="Conheça nossos projetos de arquitetura e design de interiores" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
        
        <main className={`${styles.main} ${isMobile ? styles.mobile : ''}`}>
          {/* Header Section */}
          <section className={styles.headerSection}>
            <h1 className={styles.title}>Nossos Projetos</h1>
            <p className={styles.description}>
              Acreditamos que todo espaço tem o potencial de se tornar lindo. Saiba como 
              podemos ajudar com o seu projeto. Entre em contato.
            </p>
          </section>

          <ProjectsDesktop />
          
          <TestimonialsDesktop />
        </main>

        {isMobile ? <FooterMobile /> : <FooterDesktop />}
      </div>
    </>
  );
} 