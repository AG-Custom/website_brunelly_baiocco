import Link from 'next/link';
import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Início</Link>
        <Link href="/sobre" className={styles.navLink}>Sobre</Link>
        <Link href="/contato" className={styles.navLink}>Contato</Link>
      </nav>
    </header>
  );
} 