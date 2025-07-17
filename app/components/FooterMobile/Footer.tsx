import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function FooterMobile() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          © 2025 Powered By AG Custom. Todos os Direitos Reservados
        </p>

        <div className={styles.logo}>
          <Link href="https://website-ag-custom.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logoAG.svg"
              alt="AG Custom Logo"
              width={25}
              height={10}
              quality={100}
              priority={false}
              style={{
                objectFit: 'contain',
                imageRendering: 'crisp-edges'
              }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
} 