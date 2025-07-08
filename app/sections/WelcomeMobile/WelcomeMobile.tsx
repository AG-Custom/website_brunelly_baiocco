import Link from 'next/link';
import styles from './WelcomeMobile.module.scss';

export default function WelcomeMobile() {
  return (
    <section className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Transforme seu espaço em um ambiente de bem-estar
        </h1>
        <p className={styles.subtitle}>
          Arquitetura e design de interiores com foco na funcionalidade e beleza dos ambientes
        </p>
        <Link href="/contato" className={styles.button}>
          Solicitar Orçamento
        </Link>
      </div>
    </section>
  );
} 