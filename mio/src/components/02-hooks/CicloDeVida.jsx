import { useState, useEffect } from "react";

export const CicloDeVida = () => {
  // se ejecuta cuando se crea el componente
  const [contador, setContador] = useState(0);

  useEffect(() => {
    return () => {
      console.log("se ejecuta cuando se destruye el componente");
    };
  }, [contador]);

  return (
    <div>
      CicloDeVida
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        {contador}
      </button>
    </div>
  );
};
