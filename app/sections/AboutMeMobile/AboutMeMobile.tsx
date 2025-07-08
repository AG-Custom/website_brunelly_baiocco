import Image from 'next/image';
import styles from './AboutMeMobile.module.scss';

export default function AboutMeMobile() {
  return (
    <section id="aboutme-mobile" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/aboutme.png"
            alt="Brunelly Baiocco"
            fill
            style={{
              objectFit: 'cover',
            }}
            quality={100}
            priority
          />
        </div>
        
        <div className={styles.textContent}>
          <h2 className={styles.title}>Sobre mim</h2>
          <p className={styles.text}>
            Sou Brunelly Baiocco, arquiteta e urbanista apaixonada por criar espaços que transformam a vida das pessoas. 
            Com anos de experiência no mercado, especializo-me em projetos residenciais e comerciais que unem 
            funcionalidade, beleza e sustentabilidade.
          </p>
          <p className={styles.text}>
            Acredito que cada ambiente deve refletir a personalidade e as necessidades de quem o habita. 
            Por isso, trabalho de forma personalizada, ouvindo seus sonhos e transformando-os em realidade 
            através de projetos únicos e inovadores.
          </p>

        </div>
      </div>
    </section>
  );
} 