import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/game");
    } else {
      setError("Niepoprawny email lub hasło.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-fuchsia-900">
      <form onSubmit={handleSubmit} className="bg-white/90 rounded-xl shadow-lg p-10 flex flex-col gap-6 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-blue-700">Logowanie</h2>
        {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
        <input
          className="p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Hasło"
          value={password}
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition" type="submit">
          Zaloguj się
        </button>
        <div className="text-center">
          Nie masz konta?{" "}
          <Link to="/register" className="text-fuchsia-700 hover:underline font-semibold">
            Zarejestruj się
          </Link>
        </div>
        <Link to="/" className="text-sm text-gray-500 hover:underline text-center">
          Wróć do strony głównej
        </Link>
      </form>
    </div>
  );
}