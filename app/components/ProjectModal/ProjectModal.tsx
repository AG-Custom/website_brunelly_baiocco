import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ProjectModal.module.scss';

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  fullDescription: string;
  images: ProjectImage[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const nextImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!isOpen || !project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header do Modal */}
        <div className={styles.modalHeader}>
          <div className={styles.projectCategory}>{project.category}</div>
          <button className={styles.closeButton} onClick={onClose}>
            <span>✕</span>
          </button>
        </div>

        {/* Carrossel de Imagens */}
        <div className={styles.imageCarousel}>
          <div className={styles.mainImage}>
            <Image
              src={project.images[currentImageIndex]?.src || project.image}
              alt={project.images[currentImageIndex]?.alt || project.title}
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
            
            {/* Controles do Carrossel */}
            {project.images.length > 1 && (
              <>
                <button className={styles.carouselButton} onClick={prevImage}>
                  <span>‹</span>
                </button>
                <button className={`${styles.carouselButton} ${styles.next}`} onClick={nextImage}>
                  <span>›</span>
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className={styles.thumbnails}>
              {project.images.map((img, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => goToImage(index)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || `Imagem ${index + 1} do projeto ${project.title}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={80}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Informações do Projeto */}
        <div className={styles.projectInfo}>
          <div className={styles.projectHeader}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Categoria:</span>
              <span className={styles.detailValue}>{project.category}</span>
            </div>
          </div>

          <div className={styles.fullDescription}>
            <h3>Sobre o Projeto</h3>
            <p>{project.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 