import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  // Inicializa como undefined para evitar flash de conteúdo
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Executa imediatamente na primeira renderização
    checkIsMobile();

    // Adiciona listener para redimensionamento
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}; 