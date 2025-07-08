'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './TestimonialsMobile.module.scss';

interface Testimonial {
  text: string;
  author: string;
}

export default function TestimonialsMobile() {
  const testimonials: Testimonial[] = [
    {
      text: "A Brunelly me surpreendeu com sua criatividade, disponibilidade, pontualidade e suporte rápido durante toda a repaginação da minha sala e transformação do meu banheiro. Sempre atenta aos detalhes, ela tem uma ponte para resolver dúvidas e inseguranças. Recomendo com tranquilidade e procuro sempre buscar um profissional de excelência!",
      author: "Thainá Lopez · Cantoro, Vitória · ES"
    },
    {
      text: "Muito satisfeita com os serviços prestados. A Brunelly foi sempre muito comunicativa e me fez participativa de todo o processo de construção do nosso projeto. Sempre levou o cuidado de atender nossas necessidades e foi muito receptiva às nossas demandas...",
      author: "Lilian Mendes, Anchieta · ES"
    },
    {
      text: "Conheci a Brunelly através de uma indicação e a Brunelly é uma profissional muito querida! Desde o primeiro contato ela fez com que o sonho do meu consultório de fisioterapia se tornasse realidade...",
      author: "Thiago Garnica, Vitória · ES"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    } else if (diff < -50) {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    setStartX(null);
  };

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.testimonialsTitle}>Depoimentos</h2>

      <div
        className={styles.carouselContainer}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div className={styles.testimonialCard} key={i}>
              <div className={styles.personIcon}>
                <Image
                  src="/person.svg"
                  alt="Pessoa"
                  width={120}
                  height={120}
                  quality={100}
                />
              </div>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialAuthor}>{t.author}</p>
                <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.active : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para depoimento ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </section>
  );
}
