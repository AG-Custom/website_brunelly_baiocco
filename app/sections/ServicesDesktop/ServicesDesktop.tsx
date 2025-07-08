import styles from './ServicesDesktop.module.scss';

const ServicesDesktop = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.backgroundContainer}></div>
      <div className={styles.overlay}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Serviços</h2>
          <p className={styles.subtitle}>Soluções completas</p>
        </div>
        
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardNumber}>1</div>
            <h3 className={styles.cardTitle}>Consultorias de Interiores</h3>
            <p className={styles.cardDescription}>
            A oportunidade de transformar seu ambiente está aqui. Receba orientação personalizada para esclarecer suas dúvidas, mesmo que não tenha um projeto específico em mente.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardNumber}>2</div>
            <h3 className={styles.cardTitle}>Projetos Arquitetônicos</h3>
            <p className={styles.cardDescription}>
            Ambientes que promovem conforto, saúde e bem-estar. Desenvolvemos projetos residenciais e corporativos personalizados, que refletem a identidade de nossos clientes, evitando desperdícios de tempo e dinheiro durante a reforma. Nossos ambientes são planejados para promover conforto, saúde e bem-estar, proporcionando uma melhor qualidade de vida. Otimize o tempo e evite desperdícios, garantindo a satisfação de nossos clientes.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.cardNumber}>3</div>
            <h3 className={styles.cardTitle}>Projetos para Interiores</h3>
            <p className={styles.cardDescription}>
            O ambiente limpo e moderno foi cuidadosamente projetado para atender perfeitamente às suas necessidades, seja para trabalho, lazer ou descanso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDesktop; 