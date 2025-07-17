import Image from 'next/image';
import Link from 'next/link';
import styles from './WelcomeMobile.module.scss';

export default function WelcomeMobile() {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/background-home.jpg"
          alt="Transformação de Espaço"
          fill
          quality={100}
          priority={true}
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Transforme seu espaço em um ambiente de bem-estar
        </h1>
        <p className={styles.subtitle}>
          Arquitetura e design de interiores personalizados para criar ambientes únicos que refletem sua personalidade e atendem suas necessidades
        </p>
        <Link href="/contato" className={styles.button}>
          Solicitar Orçamento
        </Link>
      </div>
    </section>
  );
} 