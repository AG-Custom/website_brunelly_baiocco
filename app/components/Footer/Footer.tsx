import Link from 'next/link';
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
          <Link href="/politica-privacidade" className={styles.link}>
            Política de Privacidade
          </Link>
          <Link href="/termos-uso" className={styles.link}>
            Termos de Uso
          </Link>
        </div>
        
        <div className={styles.social}>
          <a href="#" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:" className={styles.socialLink} aria-label="Email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
} 