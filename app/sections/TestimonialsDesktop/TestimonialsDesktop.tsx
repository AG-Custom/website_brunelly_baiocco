'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './TestimonialsDesktop.module.scss';

interface Testimonial {
  text: string;
  author: string;
}

export default function TestimonialsDesktop() {
  const testimonials: Testimonial[] = [
    {
      text: "A Brunelly me surpreendeu com sua criatividade, disponibilidade, pontualidade e suporte rápido durante toda a repaginação da minha sala e transformação do meu banheiro. Sempre atenta aos detalhes, ela tem uma ponte para resolver dúvidas e inseguranças. Recomendo com tranquilidade e procuro sempre buscar um profissional de excelência!",
      author: "Thainá Lopez · Cantoro, Vitória · ES"
    },
    {
      text: "Muito satisfeita com os serviços prestados. A Brunelly foi sempre muito comunicativa e me fez participativa de todo o processo de construção do nosso projeto. Sempre levo o cuidado de atender nossas necessidades e foi muito receptiva às nossas demandas. Em todo o tempo ela se mostrou muito segura e competente em sua área, sendo capaz de fornecer soluções criativas e eficientes para o projeto do nosso grande sonho. Ao longo de todo o curso do projeto, a profissional foi organizada, acessível, respeitosa e cumpriu todos os prazos. Eu recomendo a arquiteta para qualquer pessoa que esteja procurando um profissional competente, experiente e qualificado.",
      author: "Lilian Mendes, Anchieta · ES"
    },
    {
      text: "Conheci a Brunelly através de uma indicação e a Brunelly é uma profissional muito querida! Desde o primeiro contato ela me fez com que o sonho do meu consultório de fisioterapia se tornasse realidade. O mais incrível é que, de tão acertada que estava na minha cabeça, eu consegui executar junto para o projeto se executar! Tudo isso em apenas uma hora de conversa online, pois ainda não nos conhecíamos pessoalmente. Amei cada detalhe, todo o processo foi muito bem sucedido.",
      author: "Thiago Garnica, Vitória · ES"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardClass = (index: number) => {
    const totalCards = testimonials.length;
    const position = (index - currentTestimonial + totalCards) % totalCards;
    
    let cardClass = styles.testimonialCard;
    
    if (position === 0) {
      // Card atual no centro
      cardClass += ` ${styles.center}`;
    } else if (position === 1) {
      // Card à direita
      cardClass += ` ${styles.right}`;
    } else if (position === totalCards - 1) {
      // Card à esquerda
      cardClass += ` ${styles.left}`;
    } else if (position < totalCards / 2) {
      // Cards escondidos à direita
      cardClass += ` ${styles.hiddenRight}`;
    } else {
      // Cards escondidos à esquerda
      cardClass += ` ${styles.hiddenLeft}`;
    }
    
    return cardClass;
  };

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.testimonialsTitle}>Depoimentos</h2>
      
      <div className={styles.carouselContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={getCardClass(index)}>
            <div className={styles.personIcon}>
              <Image
                src="/person.svg"
                alt=""
                width={200}
                height={350}
                quality={100}
              />
            </div>
            <div className={styles.testimonialContent}>
              <p className={styles.testimonialAuthor}>{testimonial.author}</p>
              <p className={styles.testimonialText}>&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          </div>
        ))}

        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevTestimonial}>‹</button>
        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextTestimonial}>›</button>
      </div>
    </section>
  );
} 