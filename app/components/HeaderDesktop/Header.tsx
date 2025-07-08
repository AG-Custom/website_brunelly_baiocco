import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

export default function Header() {
  const router = useRouter();

  const scrollToAboutMe = (e: React.MouseEvent) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById('aboutme') || document.getElementById('aboutme-mobile');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    } else {
      const element = document.getElementById('aboutme') || document.getElementById('aboutme-mobile');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>Início</Link>
        <a href="#aboutme" className={styles.navLink} onClick={scrollToAboutMe}>Sobre Mim</a>
        <Link href="/servicos" className={styles.navLink}>Serviços</Link>
        <Link href="/projetos" className={styles.navLink}>Projetos</Link>
        <Link href="/contato" className={styles.navLink}>Contato</Link>
      </nav>
    </header>
  );
} 