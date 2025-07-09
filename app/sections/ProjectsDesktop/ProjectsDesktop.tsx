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
  client: string;
  location: string;
  year: string;
  area: string;
  images: ProjectImage[];
}

export default function ProjectsDesktop() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      image: "/project1.png",
      title: "Apartamento Moderno",
      description: "Transformação completa de apartamento com conceito minimalista e funcional.",
      category: "Residencial",
      fullDescription: "Este projeto representa uma transformação completa de um apartamento de 120m², onde priorizamos a funcionalidade sem abrir mão da estética. O conceito minimalista guiou todas as decisões, desde a escolha da paleta de cores neutras até a seleção de mobiliário com linhas clean. A integração dos espaços sociais criou uma sensação de amplitude, enquanto soluções inteligentes de armazenamento mantêm a organização visual. A iluminação natural foi maximizada através de grandes aberturas e espelhos estrategicamente posicionados.",
      client: "Família Silva",
      location: "São Paulo, SP",
      year: "2023",
      area: "120m²",
      images: [
        { src: "/project1.png", alt: "Sala principal do apartamento moderno" },
        { src: "/project2.png", alt: "Cozinha integrada com ilha" },
        { src: "/project3.png", alt: "Quarto master com closet" },
        { src: "/project4.png", alt: "Banheiro com acabamentos modernos" }
      ]
    },
    {
      id: 2,
      image: "/project2.png",
      title: "Casa de Praia",
      description: "Design aconchegante que integra a beleza natural com conforto contemporâneo.",
      category: "Residencial",
      fullDescription: "Localizada a poucos metros do mar, esta residência de veraneio foi projetada para maximizar a conexão com a natureza. Utilizamos materiais naturais como madeira e pedra, criando uma harmonia perfeita com o ambiente costeiro. Os espaços foram pensados para proporcionar relaxamento e contemplação, com grandes aberturas que permitem a entrada da brisa marinha e oferecem vistas deslumbrantes do oceano. A paleta de cores inspirada no mar e na areia complementa a atmosfera serena do projeto.",
      client: "Família Costa",
      location: "Búzios, RJ",
      year: "2023",
      area: "180m²",
      images: [
        { src: "/project2.png", alt: "Vista frontal da casa de praia" },
        { src: "/project1.png", alt: "Varanda com vista para o mar" },
        { src: "/project3.png", alt: "Sala de estar com decoração natural" },
        { src: "/project4.png", alt: "Quarto com vista panorâmica" }
      ]
    },
    {
      id: 3,
      image: "/project3.png",
      title: "Escritório Corporativo",
      description: "Ambiente profissional moderno que promove produtividade e bem-estar.",
      category: "Comercial",
      fullDescription: "Este projeto corporativo foi desenvolvido com foco no bem-estar dos colaboradores e na otimização da produtividade. Criamos espaços flexíveis que se adaptam às diferentes necessidades de trabalho, desde áreas colaborativas até espaços para concentração individual. A iluminação foi cuidadosamente planejada para reduzir o cansaço visual, enquanto elementos biofílicos foram incorporados para melhorar a qualidade do ar e criar um ambiente mais saudável. A acústica foi tratada com materiais específicos para garantir conforto sonoro.",
      client: "TechCorp Solutions",
      location: "São Paulo, SP",
      year: "2022",
      area: "450m²",
      images: [
        { src: "/project3.png", alt: "Recepção do escritório corporativo" },
        { src: "/project1.png", alt: "Área de trabalho colaborativo" },
        { src: "/project2.png", alt: "Sala de reuniões executiva" },
        { src: "/project4.png", alt: "Espaço de descanso e café" }
      ]
    },
    {
      id: 4,
      image: "/project4.png",
      title: "Casa de Campo",
      description: "Projeto que valoriza a natureza local e cria harmonia entre interior e exterior.",
      category: "Residencial",
      fullDescription: "Situada em meio à vegetação nativa, esta casa de campo foi projetada para ser um refúgio da vida urbana. O projeto valoriza a topografia natural do terreno e preserva a vegetação existente. Utilizamos materiais regionais como pedra local e madeira de reflorestamento, criando uma arquitetura que dialoga respeitosamente com o entorno. Os espaços internos foram pensados para integrar-se ao exterior, com grandes aberturas e varandas que funcionam como extensão dos ambientes internos. A sustentabilidade foi priorizada através de captação de água da chuva e energia solar.",
      client: "Família Oliveira",
      location: "Campos do Jordão, SP",
      year: "2023",
      area: "280m²",
      images: [
        { src: "/project4.png", alt: "Fachada da casa de campo" },
        { src: "/project1.png", alt: "Sala com lareira e vista para a natureza" },
        { src: "/project2.png", alt: "Varanda integrada com jardim" },
        { src: "/project3.png", alt: "Cozinha rústica moderna" }
      ]
    },
    {
      id: 5,
      image: "/project5.png",
      title: "Loft Industrial",
      description: "Conversão de espaço industrial em residência moderna preservando elementos originais.",
      category: "Residencial",
      fullDescription: "A transformação deste antigo galpão industrial em uma residência contemporânea foi um desafio empolgante. Preservamos elementos originais como as estruturas metálicas, tijolos aparentes e o pé-direito alto, que se tornaram protagonistas do projeto. A distribuição dos espaços foi repensada para criar diferentes ambientes dentro do conceito de loft, usando divisórias que não tocam o teto para manter a sensação de amplitude. A iluminação industrial foi reinterpretada com peças contemporâneas que respeitam a identidade do espaço original.",
      client: "Casal Martins",
      location: "São Paulo, SP",
      year: "2022",
      area: "200m²",
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
      client: "Clínica Bem Viver",
      location: "Rio de Janeiro, RJ",
      year: "2023",
      area: "320m²",
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