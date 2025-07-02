import Image from 'next/image';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.welcomeSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/transformacao_espaco_bem_estar.png"
          alt="Transformação de Espaço"
          width={1000}
          height={500}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Transformando Espaços</h2>
        <p className={styles.subtitle}>em refúgios de saúde e bem-estar</p>
        <button className={styles.ctaButton}>saiba mais</button>
      </div>
    </div>
  );
};

export default Welcome; 