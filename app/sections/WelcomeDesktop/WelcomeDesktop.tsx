import Image from 'next/image';
import Link from 'next/link';
import styles from './WelcomeDesktop.module.scss';

const WelcomeDesktop = () => {
  return (
    <div className={styles.welcomeSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/background-home.jpg"
          alt="Transformação de Espaço"
          width={1000}
          height={800}
          quality={100}
          priority={true}
          sizes="(max-width: 1359px) 600px, (max-width: 1599px) 650px, (max-width: 1919px) 800px, 1000px"
          style={{
            objectFit: 'cover',
            width: 'auto',
            height: 'auto'
          }}
        />
      </div>
      <div className={styles.textContainer}>
        <Image
          src="/background-home.png"
          alt="Background"
          width={1000}
          height={800}
          quality={100}
          priority={true}
          sizes="(max-width: 1359px) 600px, (max-width: 1599px) 650px, (max-width: 1919px) 800px, 1000px"
          className={styles.backgroundImage}
          style={{
            objectFit: 'cover',
            width: 'auto',
            height: 'auto'
          }}
        />
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>Transformando Espaços</h2>
          <p className={styles.subtitle}>em refúgios de saúde e bem-estar</p>
          <Link href="/projetos" className={styles.ctaButton}>saiba mais</Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDesktop; 