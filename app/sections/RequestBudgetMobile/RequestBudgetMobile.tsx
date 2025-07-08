import Image from 'next/image';
import Link from 'next/link';
import styles from './RequestBudgetMobile.module.scss';

export default function RequestBudgetMobile() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Solicite um orçamento</h2>
      
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src="/budget.png"
            alt="Brunelly Baiocco"
            fill
            style={{
              objectFit: 'cover',
            }}
            quality={100}
            priority
          />
        </div>
        
        <h3 className={styles.name}>Brunelly Baiocco</h3>
        <p className={styles.email}>brunellybaiocco.arq@gmail.com</p>
        <p className={styles.phone}>(27) 99659-0453</p>
        <Link href="/contato" className={styles.button}>
          Contate-me
        </Link>
      </div>
    </section>
  );
} 