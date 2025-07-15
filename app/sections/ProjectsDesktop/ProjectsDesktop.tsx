import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '../../components/ProjectModal';
import styles from './ProjectsDesktop.module.scss';

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

export default function ProjectsDesktop() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      image: "/projects/casa-no-campo/1.jpg",
      title: "Casa no campo",
      description: "Harmonia entre natureza e arquitetura",
      category: "Residencial",
      fullDescription: " Desenvolvido com a proposta de combinar a elegância e o conforto da arquitetura contemporânea com a serenidade e a conexão com a natureza.",
      images: [
        { src: "/projects/casa-no-campo/1.jpg", alt: "" },
        { src: "/projects/casa-no-campo/2.jpg", alt: "" },
        { src: "/projects/casa-no-campo/3.jpg", alt: "" },
        { src: "/projects/casa-no-campo/4.jpg", alt: "" },
        { src: "/projects/casa-no-campo/5.jpg", alt: "" },
        { src: "/projects/casa-no-campo/6.jpg", alt: "" },
        { src: "/projects/casa-no-campo/7.jpg", alt: "" },
        { src: "/projects/casa-no-campo/8.jpg", alt: "" },
        { src: "/projects/casa-no-campo/9.jpg", alt: "" }
      ]
    },
    {
      id: 2,
      image: "/projects/residencia-contemporanea/1.jpg",
      title: "Residência contemporânea",
      description: "Harmonia entre formas e funcionalidade",
      category: "Residencial",
      fullDescription: " Encante-se com um espaço acolhedor e elegante, especialmente projetado para atender às necessidades dos residentes.",
      images: [
        { src: "/projects/residencia-contemporanea/1.jpg", alt: "" },
        { src: "/projects/residencia-contemporanea/2.jpg", alt: "" },
        { src: "/projects/residencia-contemporanea/3.jpg", alt: "" },
        { src: "/projects/residencia-contemporanea/4.jpg", alt: "" },
        { src: "/projects/residencia-contemporanea/5.jpg", alt: "" },
        { src: "/projects/residencia-contemporanea/6.jpg", alt: "" },
        { src: "/projects/residencia-contemporanea/7.jpg", alt: "" }
      ]
    },
    {
      id: 3,
      image: "/projects/projeto-residencial-comercial/1.jpg",
      title: "Projeto residencial e comercial",
      description: "Projeto residencial e comercial que transformam espaços",
      category: "Comercial",
      fullDescription: "Um projeto inovador de um edifício de uso misto, com andares dedicados a kitnets e uma loja comercial no térreo. Este empreendimento foi concebido com o intuito de proporcionar um ambiente inspirador e produtivo.",
      images: [
        { src: "/projects/projeto-residencial-comercial/1.jpg", alt: "" },
        { src: "/projects/projeto-residencial-comercial/2.jpg", alt: "" },
        { src: "/projects/projeto-residencial-comercial/3.jpg", alt: "" },
        { src: "/projects/projeto-residencial-comercial/4.jpg", alt: "" },
        { src: "/projects/projeto-residencial-comercial/5.jpg", alt: "" },
        { src: "/projects/projeto-residencial-comercial/6.jpg", alt: "" },
        { src: "/projects/projeto-residencial-comercial/7.jpg", alt: "" },
        { src: "/projects/projeto-residencial-comercial/8.jpg", alt: "" },
        { src: "/projects/projeto-residencial-comercial/9.jpg", alt: "" },
        { src: "/projects/projeto-residencial-comercial/10.jpg", alt: "" }
      ]
    },
    {
      id: 4,
      image: "/projects/moradia-adaptada/1.jpg",
      title: "Moradia Adaptada para o Envelhecimento Ativo",
      description: "Moradia adaptada para o envelhecimento ativo",
      category: "Residencial",
      fullDescription: "Através da integração de elementos arquitetônicos e da natureza, nosso projeto visa oferecer aos idosos uma experiência de pertencimento, conforto e bem-estar em sua residência na terceira idade.",
      images: [
        { src: "/projects/moradia-adaptada/1.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/2.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/3.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/4.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/5.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/6.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/7.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/8.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/9.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/10.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/11.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/12.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/13.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/14.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/15.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/16.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/17.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/18.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/19.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/20.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/21.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/22.jpg", alt: "" },
        { src: "/projects/moradia-adaptada/23.jpg", alt: "" }
      ]
    },
    {
      id: 5,
      image: "/project5.png",
      title: "Loft Industrial",
      description: "Conversão de espaço industrial em residência moderna preservando elementos originais.",
      category: "Residencial",
      fullDescription: "A transformação deste antigo galpão industrial em uma residência contemporânea foi um desafio empolgante. Preservamos elementos originais como as estruturas metálicas, tijolos aparentes e o pé-direito alto, que se tornaram protagonistas do projeto. A distribuição dos espaços foi repensada para criar diferentes ambientes dentro do conceito de loft, usando divisórias que não tocam o teto para manter a sensação de amplitude. A iluminação industrial foi reinterpretada com peças contemporâneas que respeitam a identidade do espaço original.",
      images: [
        { src: "/project5.png", alt: "Vista geral do loft industrial" },
        { src: "/project1.png", alt: "Cozinha com estrutura metálica aparente" },
        { src: "/project2.png", alt: "Quarto com tijolos originais" },
        { src: "/project3.png", alt: "Área social com pé-direito duplo" }
      ]
    },
    {
      id: 6,
      image: "/project6.png",
      title: "Clínica Médica",
      description: "Design acolhedor e funcional que prioriza conforto e bem-estar dos pacientes.",
      category: "Comercial",
      fullDescription: "O projeto desta clínica médica teve como premissa principal criar um ambiente que transmitisse tranquilidade e confiança aos pacientes. Fugimos da estética hospitalar tradicional, optando por cores suaves, iluminação natural e materiais que remetem ao conforto residencial. O layout foi cuidadosamente planejado para otimizar o fluxo de pacientes e profissionais, garantindo privacidade e eficiência operacional. Elementos biofílicos foram incorporados para reduzir a ansiedade dos pacientes, enquanto a acústica foi tratada para garantir sigilo médico e conforto sonoro.",
      images: [
        { src: "/project6.png", alt: "Recepção acolhedora da clínica" },
        { src: "/project1.png", alt: "Consultório médico moderno" },
        { src: "/project2.png", alt: "Sala de espera confortável" },
        { src: "/project3.png", alt: "Corredor com iluminação natural" }
      ]
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              <button 
                className={styles.projectButton}
                onClick={() => openModal(projects[0])}
              >
                Ver Projeto
              </button>
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
              <button 
                className={styles.projectButton}
                onClick={() => openModal(projects[1])}
              >
                Ver Projeto
              </button>
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
              <button 
                className={styles.projectButton}
                onClick={() => openModal(projects[2])}
              >
                Ver Projeto
              </button>
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
              <button 
                className={styles.projectButton}
                onClick={() => openModal(projects[3])}
              >
                Ver Projeto
              </button>
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
              <button 
                className={styles.projectButton}
                onClick={() => openModal(projects[4])}
              >
                Ver Projeto
              </button>
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
              <button 
                className={styles.projectButton}
                onClick={() => openModal(projects[5])}
              >
                Ver Projeto
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
} 