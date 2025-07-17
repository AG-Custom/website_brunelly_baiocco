import Image from 'next/image';
import styles from './ServicesMobile.module.scss';

export default function ServicesMobile() {
  const services = [
    {
      id: 1,
      title: "Projetos Arquitetônicos",
      description: "Desenvolvimento completo de projetos residenciais e comerciais, desde a concepção até a execução, com foco na funcionalidade e sustentabilidade.",
      image: "/projects/residencia-contemporanea/1.jpg"
    },
    {
      id: 2,
      title: "Design de Interiores",
      description: "Criação de ambientes funcionais e esteticamente agradáveis, com foco no bem-estar dos usuários e na personalização dos espaços.",
      image: "/projects/projeto-residencial-comercial/1.jpg"
    },
    {
      id: 3,
      title: "Consultoria em Sustentabilidade",
      description: "Soluções eco-friendly para tornar seu projeto mais sustentável e eficiente energeticamente, reduzindo impactos ambientais.",
      image: "/projects/moradia-adaptada/1.jpg"
    },
    {
      id: 4,
      title: "Acompanhamento de Obra",
      description: "Supervisão técnica durante toda a execução do projeto, garantindo qualidade, prazos e fidelidade ao projeto original.",
      image: "/projects/casa-no-campo/1.jpg"
    }
  ];

  return (
    <section id="services-mobile" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Meus Serviços</h2>
        
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  quality={100}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.parallaxSection}>
          <div className={styles.parallaxOverlay}></div>
          <div className={styles.parallaxContent}>
            <h3 className={styles.parallaxTitle}>
              Transforme seu espaço em um ambiente de bem-estar
            </h3>
            <p className={styles.parallaxText}>
              Cada projeto é único e desenvolvido com carinho para atender suas necessidades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 