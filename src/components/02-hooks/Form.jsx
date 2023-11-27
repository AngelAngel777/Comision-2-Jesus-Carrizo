import { useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form-control"
        style={{
          width: "500px",
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="***********"
            value={password}
            onChange={(e) => {
              const valorDelInput = e.target.value;
              setPassword(valorDelInput);
            }}
          />
        </div>
        <button className="btn btn-primary btn-sm" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
