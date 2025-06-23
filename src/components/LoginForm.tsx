import React, { useState } from "react";

export const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: użytkownik admin/admin
    if (login === "admin" && password === "admin") {
      alert("Zalogowano jako admin!");
      // Możesz tu przekierować do panelu admina lub ustawić stan zalogowania
    } else {
      setError("Nieprawidłowy login lub hasło");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Zaloguj</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};