import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Início</Link>
        <Link href="/sobre" className={styles.navLink}>Sobre Mim</Link>
        <Link href="/servicos" className={styles.navLink}>Serviços</Link>
        <Link href="/projetos" className={styles.navLink}>Projetos</Link>
        <Link href="/contato" className={styles.navLink}>Contato</Link>
      </nav>
    </header>
  );
} 