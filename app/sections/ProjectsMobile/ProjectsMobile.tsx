import Image from 'next/image';
import styles from './ProjectsMobile.module.scss';

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

export default function ProjectsMobile() {
  const projects: Project[] = [
    {
      id: 1,
      image: "/project1.png",
      title: "Apartamento Moderno",
      description: "Transformação completa de apartamento com conceito minimalista e funcional.",
      category: "Residencial"
    },
    {
      id: 2,
      image: "/project2.png",
      title: "Casa de Praia",
      description: "Design aconchegante que integra a beleza natural com conforto contemporâneo.",
      category: "Residencial"
    },
    {
      id: 3,
      image: "/project3.png",
      title: "Escritório Corporativo",
      description: "Ambiente profissional moderno que promove produtividade e bem-estar.",
      category: "Comercial"
    },
    {
      id: 4,
      image: "/project4.png",
      title: "Casa de Campo",
      description: "Projeto que valoriza a natureza local e cria harmonia entre interior e exterior.",
      category: "Residencial"
    },
    {
      id: 5,
      image: "/project5.png",
      title: "Loft Industrial",
      description: "Conversão de espaço industrial em residência moderna preservando elementos originais.",
      category: "Residencial"
    },
    {
      id: 6,
      image: "/project6.png",
      title: "Clínica Médica",
      description: "Design acolhedor e funcional que prioriza conforto e bem-estar dos pacientes.",
      category: "Comercial"
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                quality={100}
              />
            </div>
            <div className={styles.projectContent}>
              <span className={styles.projectCategory}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <button className={styles.projectButton}>Ver Projeto</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 