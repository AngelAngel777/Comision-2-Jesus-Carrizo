import React, { useState, useEffect } from "react";
export const Post = () => {
  const [desplegado, setDesplegado] = useState(false);
  useEffect(() => {
    // Esta lógica se ejecutará una vez después del montaje del componente
    setDesplegado(true);
  }, []);
  return (
    <div>
      <div
        className={`barra ${desplegado ? 'desplegado' : ''}`}
        onClick={() => setDesplegado(!desplegado)}
      >
        <h1>Inspiración?</h1>
      </div>
      <div className={`galeria ${desplegado ? 'desplegado' : ''}`}>
        <img src="https://picfiles.alphacoders.com/320/320687.jpg" alt="" />
        <img src="https://picfiles.alphacoders.com/236/236802.jpg" alt="" />
        <img src="https://images3.alphacoders.com/103/103147.jpg" alt="" />
        <img
          src="https://picfiles.alphacoders.com/250/thumb-250075.jpg"
          alt=""
        />
        <img src="https://picfiles.alphacoders.com/250/250076.jpg" alt="" />
        <img src="https://images3.alphacoders.com/133/1332803.png" alt="" />
        <img src="https://images4.alphacoders.com/134/1341419.png" alt="" />
        <img src="https://images6.alphacoders.com/133/1330094.png" alt="" />
        <img src="https://images3.alphacoders.com/133/1338664.png" alt="" />
        <img src="https://images3.alphacoders.com/133/1331818.png" alt="" />
        <img src="https://images.alphacoders.com/133/1335323.png" alt="" />
        <img src="https://images7.alphacoders.com/133/1339869.jpeg" alt="" />
        <img src="https://images2.alphacoders.com/130/1308322.jpeg" alt="" />
        <img src="https://images5.alphacoders.com/133/1333098.png" alt="" />
        <img src="https://images2.alphacoders.com/133/1332016.png" alt="" />
      </div>
      <button className="btn btn-primary">Aca se harian las publicaciones </button>
    </div>
  );
};
