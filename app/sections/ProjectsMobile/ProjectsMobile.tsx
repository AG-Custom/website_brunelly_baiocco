import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '../../components/ProjectModal';
import styles from './ProjectsMobile.module.scss';

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

export default function ProjectsMobile() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      image: "/projects/residencia-contemporanea/1.jpg",
      title: "Residência Contemporânea",
      description: "Projeto moderno que combina funcionalidade e elegância em uma residência contemporânea.",
      category: "Residencial",
      fullDescription: "Esta residência contemporânea foi projetada para uma família que valoriza o design moderno e a funcionalidade. O projeto prioriza a integração entre os espaços, criando ambientes fluidos que se conectam harmoniosamente. A paleta de cores neutras e materiais naturais cria uma atmosfera sofisticada e acolhedora. A iluminação natural foi maximizada através de grandes aberturas estrategicamente posicionadas, enquanto a iluminação artificial complementa os espaços criando diferentes atmosferas conforme a necessidade.",
      client: "Família Silva",
      location: "Vitória, ES",
      year: "2023",
      area: "180m²",
      images: [
        { src: "/projects/residencia-contemporanea/1.jpg", alt: "Fachada da residência contemporânea" },
        { src: "/projects/residencia-contemporanea/2.jpg", alt: "Sala de estar integrada" },
        { src: "/projects/residencia-contemporanea/3.jpg", alt: "Cozinha moderna com ilha" },
        { src: "/projects/residencia-contemporanea/4.jpg", alt: "Quarto master com closet" },
        { src: "/projects/residencia-contemporanea/5.jpg", alt: "Banheiro com acabamentos premium" },
        { src: "/projects/residencia-contemporanea/6.jpg", alt: "Área gourmet integrada" },
        { src: "/projects/residencia-contemporanea/7.jpg", alt: "Jardim com paisagismo" }
      ]
    },
    {
      id: 2,
      image: "/projects/projeto-residencial-comercial/1.jpg",
      title: "Projeto Residencial Comercial",
      description: "Solução completa que integra espaço residencial e comercial em um projeto inovador.",
      category: "Misto",
      fullDescription: "Este projeto inovador combina espaço residencial e comercial em uma solução integrada. O desafio foi criar ambientes que funcionassem tanto para moradia quanto para atividades comerciais, mantendo a privacidade e funcionalidade de ambos os usos. A planta foi cuidadosamente planejada para separar as áreas públicas e privadas, enquanto mantém a flexibilidade necessária para diferentes tipos de negócios. Materiais duráveis e acabamentos de qualidade garantem a durabilidade necessária para uso comercial.",
      client: "Empreendedor Local",
      location: "Vitória, ES",
      year: "2023",
      area: "250m²",
      images: [
        { src: "/projects/projeto-residencial-comercial/1.jpg", alt: "Fachada do projeto residencial comercial" },
        { src: "/projects/projeto-residencial-comercial/2.jpg", alt: "Área comercial integrada" },
        { src: "/projects/projeto-residencial-comercial/3.jpg", alt: "Espaço residencial privado" },
        { src: "/projects/projeto-residencial-comercial/4.jpg", alt: "Cozinha gourmet" },
        { src: "/projects/projeto-residencial-comercial/5.jpg", alt: "Sala de estar moderna" },
        { src: "/projects/projeto-residencial-comercial/6.jpg", alt: "Quarto com acabamentos premium" },
        { src: "/projects/projeto-residencial-comercial/7.jpg", alt: "Banheiro com design contemporâneo" },
        { src: "/projects/projeto-residencial-comercial/8.jpg", alt: "Área de lazer integrada" },
        { src: "/projects/projeto-residencial-comercial/9.jpg", alt: "Jardim com paisagismo" },
        { src: "/projects/projeto-residencial-comercial/10.jpg", alt: "Vista geral do projeto" }
      ]
    },
    {
      id: 3,
      image: "/projects/moradia-adaptada/1.jpg",
      title: "Moradia Adaptada",
      description: "Projeto inclusivo que prioriza acessibilidade e bem-estar para todas as idades.",
      category: "Residencial",
      fullDescription: "Esta moradia adaptada foi projetada com foco na acessibilidade universal, criando um ambiente que atende às necessidades de pessoas de todas as idades e capacidades. O projeto incorpora soluções inteligentes de acessibilidade sem comprometer a estética e funcionalidade. Corredores amplos, banheiros adaptados, rampas discretas e iluminação adequada garantem conforto e segurança para todos os usuários. A tecnologia foi integrada de forma intuitiva para facilitar o dia a dia.",
      client: "Família com necessidades especiais",
      location: "Vitória, ES",
      year: "2023",
      area: "200m²",
      images: [
        { src: "/projects/moradia-adaptada/1.jpg", alt: "Fachada da moradia adaptada" },
        { src: "/projects/moradia-adaptada/2.jpg", alt: "Entrada acessível" },
        { src: "/projects/moradia-adaptada/3.jpg", alt: "Sala de estar adaptada" },
        { src: "/projects/moradia-adaptada/4.jpg", alt: "Cozinha com adaptações" },
        { src: "/projects/moradia-adaptada/5.jpg", alt: "Quarto adaptado" },
        { src: "/projects/moradia-adaptada/6.jpg", alt: "Banheiro acessível" },
        { src: "/projects/moradia-adaptada/7.jpg", alt: "Corredor amplo" },
        { src: "/projects/moradia-adaptada/8.jpg", alt: "Área de lazer inclusiva" },
        { src: "/projects/moradia-adaptada/9.jpg", alt: "Jardim acessível" },
        { src: "/projects/moradia-adaptada/10.jpg", alt: "Vista geral da moradia" },
        { src: "/projects/moradia-adaptada/11.jpg", alt: "Detalhes de acessibilidade" },
        { src: "/projects/moradia-adaptada/12.jpg", alt: "Iluminação adaptada" },
        { src: "/projects/moradia-adaptada/13.jpg", alt: "Área de convivência" },
        { src: "/projects/moradia-adaptada/14.jpg", alt: "Espaço gourmet adaptado" },
        { src: "/projects/moradia-adaptada/15.jpg", alt: "Quarto secundário" },
        { src: "/projects/moradia-adaptada/16.jpg", alt: "Banheiro secundário" },
        { src: "/projects/moradia-adaptada/17.jpg", alt: "Área de serviço" },
        { src: "/projects/moradia-adaptada/18.jpg", alt: "Lavanderia adaptada" },
        { src: "/projects/moradia-adaptada/19.jpg", alt: "Área técnica" },
        { src: "/projects/moradia-adaptada/20.jpg", alt: "Vista externa" },
        { src: "/projects/moradia-adaptada/21.jpg", alt: "Paisagismo inclusivo" },
        { src: "/projects/moradia-adaptada/22.jpg", alt: "Área de chegada" },
        { src: "/projects/moradia-adaptada/23.jpg", alt: "Vista final do projeto" }
      ]
    },
    {
      id: 4,
      image: "/projects/casa-no-campo/1.jpg",
      title: "Casa no Campo",
      description: "Refúgio rural que valoriza a natureza e cria harmonia entre arquitetura e paisagem.",
      category: "Residencial",
      fullDescription: "Esta casa no campo foi projetada para ser um verdadeiro refúgio da vida urbana, valorizando a conexão com a natureza e criando harmonia entre a arquitetura e a paisagem local. O projeto preserva a vegetação nativa e utiliza materiais regionais como pedra local e madeira de reflorestamento. Os espaços foram pensados para integrar-se ao exterior, com grandes aberturas e varandas que funcionam como extensão dos ambientes internos. A sustentabilidade foi priorizada através de sistemas de captação de água da chuva e energia solar.",
      client: "Família que busca qualidade de vida",
      location: "Interior do ES",
      year: "2023",
      area: "300m²",
      images: [
        { src: "/projects/casa-no-campo/1.jpg", alt: "Fachada da casa no campo" },
        { src: "/projects/casa-no-campo/2.jpg", alt: "Entrada com paisagismo natural" },
        { src: "/projects/casa-no-campo/3.jpg", alt: "Sala com lareira e vista para a natureza" },
        { src: "/projects/casa-no-campo/4.jpg", alt: "Cozinha rústica moderna" },
        { src: "/projects/casa-no-campo/5.jpg", alt: "Quarto master com vista panorâmica" },
        { src: "/projects/casa-no-campo/6.jpg", alt: "Banheiro com acabamentos naturais" },
        { src: "/projects/casa-no-campo/7.jpg", alt: "Varanda integrada com jardim" },
        { src: "/projects/casa-no-campo/8.jpg", alt: "Área de lazer ao ar livre" },
        { src: "/projects/casa-no-campo/9.jpg", alt: "Vista geral da propriedade" }
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
              <button 
                className={styles.projectButton}
                onClick={() => openModal(project)}
              >
                Ver Projeto
              </button>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
} 