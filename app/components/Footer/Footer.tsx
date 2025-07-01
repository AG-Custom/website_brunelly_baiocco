import styles from './Footer.module.scss';

interface FooterProps {
  year?: number;
  name: string;
}

export default function Footer({ year = new Date().getFullYear(), name }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.copyright}>
            © {year} {name}. Todos os direitos reservados.
          </p>
        </div>
        
        <div className={styles.links}>
          <a href="/politica-privacidade" className={styles.link}>
            Política de Privacidade
          </a>
          <a href="/termos-uso" className={styles.link}>
            Termos de Uso
          </a>
        </div>
        
        <div className={styles.social}>
          <a href="#" className={styles.socialLink} aria-label="Instagram">
            Instagram
          </a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" className={styles.socialLink} aria-label="Email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
} 