import Image from 'next/image';
import Link from 'next/link';
import styles from './RequestBudgetMobile.module.scss';

export default function RequestBudgetMobile() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Vamos transformar seu sonho em realidade?</h2>
      
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src="/budget.png"
            alt="Brunelly Baiocco - Arquiteta"
            fill
            style={{
              objectFit: 'cover',
            }}
            quality={100}
            priority
          />
        </div>
        
        <h3 className={styles.name}>Brunelly Baiocco</h3>
        <p className={styles.description}>Arquiteta e Urbanista</p>
        <p className={styles.email}>brunellybaiocco.arq@gmail.com</p>
        <p className={styles.phone}>(27) 99659-0453</p>
        <p className={styles.callToAction}>
          Entre em contato e vamos conversar sobre seu projeto!
        </p>
        <Link href="/contato" className={styles.button}>
          Solicitar Orçamento
        </Link>
      </div>
    </section>
  );
} 