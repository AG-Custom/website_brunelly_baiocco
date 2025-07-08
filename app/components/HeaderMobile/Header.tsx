import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.scss';

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
        <Link href="/sobre" className={styles.menuLink} onClick={closeMenu}>
          Sobre
        </Link>
        <Link href="/contato" className={styles.menuLink} onClick={closeMenu}>
          Contato
        </Link>
      </nav>
    </>
  );
} 