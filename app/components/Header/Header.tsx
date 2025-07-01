import styles from './Header.module.scss';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <nav className={styles.nav}>
        <a href="/" className={styles.navLink}>Início</a>
        <a href="/sobre" className={styles.navLink}>Sobre</a>
        <a href="/contato" className={styles.navLink}>Contato</a>
      </nav>
    </header>
  );
} 