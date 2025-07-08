import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToAboutMe = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
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

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById('services') || document.getElementById('services-mobile');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    } else {
      const element = document.getElementById('services') || document.getElementById('services-mobile');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            Brunelly Baiocco
          </Link>
          
          <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
            <div className={styles.hamburgerLine}></div>
          </button>
        </div>
      </header>

      <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.menuLink} onClick={closeMenu}>
          Home
        </Link>
        <a href="#aboutme" className={styles.menuLink} onClick={scrollToAboutMe}>
          Sobre
        </a>
        <a href="#services" className={styles.menuLink} onClick={scrollToServices}>
          Serviços
        </a>
        <Link href="/projetos" className={styles.menuLink} onClick={closeMenu}>
          Projetos
        </Link>
        <Link href="/contato" className={styles.menuLink} onClick={closeMenu}>
          Contato
        </Link>
      </nav>
    </>
  );
} 