import React, { useState, useEffect } from "react";

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
  <label class="input-group-text" for="inputGroupFile01">Cargar Imagen</label>
  <input type="file" class="form-control" id="inputGroupFile01"/>
</div>
       <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Descripcion</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* FIN MODAL  */}

    </div>
  );
};
