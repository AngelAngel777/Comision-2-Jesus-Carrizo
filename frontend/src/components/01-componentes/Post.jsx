import React, { useState, useEffect } from "react";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';
import img13 from '../../assets/img13.jpg';
import img14 from '../../assets/img14.jpg';
import img15 from '../../assets/img15.jpg';


export const Post = () => {
  const [desplegado, setDesplegado] = useState(true);

  useEffect(() => {
    const handleShownModal = () => {
      const myInput = document.getElementById("myInput");
      if (myInput) {
        myInput.focus();
      }
    };

    const myModal = document.getElementById("modalPublicar");
    if (myModal) {
      myModal.addEventListener("shown.bs.modal", handleShownModal);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      if (myModal) {
        myModal.removeEventListener("shown.bs.modal", handleShownModal);
      }
    };
  }, []);

  return (
    <div>
      <div
        className={`barra ${desplegado ? "desplegado" : ""}`}
        onClick={() => setDesplegado(!desplegado)}
      >
        <h1>Inspiración?</h1>
      </div>
      <div className={`galeria ${desplegado ? "desplegado" : ""}`}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
        <img src={img12} alt="" />
        <img src={img13} alt="" />
        <img src={img14} alt="" />
        <img src={img15} alt="" />

      </div>
      <div className="divPublicar">
        <button className="btn btn-primary btn-publicar" data-bs-toggle="modal" data-bs-target="#modalPublicar"><h2>Publicar <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 18.5v2q0 .2.15.35T18 21q.2 0 .35-.15t.15-.35v-2h2q.2 0 .35-.15T21 18q0-.2-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 15q-.2 0-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 18q0 .2.15.35t.35.15h2ZM18 23q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM8 9h8q.425 0 .713-.288T17 8q0-.425-.288-.713T16 7H8q-.425 0-.713.288T7 8q0 .425.288.713T8 9Zm3.675 12H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v6.7q-.725-.35-1.463-.525T18 11q-.275 0-.513.012t-.487.063q-.225-.05-.5-.062T16 11H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h5.125q-.45.425-.813.925T11.675 15H8q-.425 0-.713.288T7 16q0 .425.288.713T8 17h3.075q-.05.25-.063.488T11 18q0 .825.15 1.538T11.675 21Z"/></svg></h2></button>
      </div>

{/* MODAL  */}
<div class="modal fade" id="modalPublicar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Titulo</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
      <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupFile01">Cargar Imagen</label>
  <input type="file" class="form-control" id="inputGroupFile01"/>
</div>
       <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Descripcion</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Publicar </button>
      </div>
    </div>
  </div>
</div>
{/* FIN MODAL  */}

    </div>
  );
};