import Image from 'next/image';
import styles from './ProjectsDesktop.module.scss';

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

export default function ProjectsDesktop() {
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
        {/* Linha 1: Projeto 1 (menor) | Projeto 2 (maior) */}
        <div className={styles.projectRow}>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                quality={100}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{projects[0].title}</h3>
              <p className={styles.projectDescription}>{projects[0].description}</p>
              <button className={styles.projectButton}>Ver Projeto</button>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                quality={100}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{projects[1].title}</h3>
              <p className={styles.projectDescription}>{projects[1].description}</p>
              <button className={styles.projectButton}>Ver Projeto</button>
            </div>
          </div>
        </div>

        {/* Linha 2: Projeto 3 (maior) | Projeto 4 (menor) */}
        <div className={styles.projectRow}>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={projects[2].image}
                alt={projects[2].title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                quality={100}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{projects[2].title}</h3>
              <p className={styles.projectDescription}>{projects[2].description}</p>
              <button className={styles.projectButton}>Ver Projeto</button>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={projects[3].image}
                alt={projects[3].title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                quality={100}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{projects[3].title}</h3>
              <p className={styles.projectDescription}>{projects[3].description}</p>
              <button className={styles.projectButton}>Ver Projeto</button>
            </div>
          </div>
        </div>

        {/* Linha 3: Projeto 5 (menor) | Projeto 6 (maior) */}
        <div className={styles.projectRow}>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={projects[4].image}
                alt={projects[4].title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                quality={100}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{projects[4].title}</h3>
              <p className={styles.projectDescription}>{projects[4].description}</p>
              <button className={styles.projectButton}>Ver Projeto</button>
            </div>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={projects[5].image}
                alt={projects[5].title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                quality={100}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{projects[5].title}</h3>
              <p className={styles.projectDescription}>{projects[5].description}</p>
              <button className={styles.projectButton}>Ver Projeto</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 