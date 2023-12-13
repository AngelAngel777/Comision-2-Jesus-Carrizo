import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <div>
      <h1 className="tit-login" >INICIAR SESION</h1>
      <form
        onSubmit={handleSubmit}
        className="form-control login"
        style={{
          width: "500px",
        }}
      >
        
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control inputColor"
            id="exampleFormControlInput1"
            placeholder="nombre@ejemplo.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control inputColor"
            id="exampleFormControlInput2"
            placeholder="***********"
            value={password}
            onChange={(e) => {
              const valorDelInput = e.target.value;
              setPassword(valorDelInput);
            }}
          />
        </div>
        <button className="btn btn-primary btn-sm btn-1" type="submit">
          Iniciar<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plane-tilt" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" /></svg>
        </button>
      </form>
    </div>
  );
};
