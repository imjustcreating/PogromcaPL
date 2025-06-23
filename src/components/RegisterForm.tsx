import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== repeat) {
      setError("Hasła nie są identyczne.");
      return;
    }
    if (register(email, password)) {
      navigate("/game");
    } else {
      setError("Nie udało się zarejestrować.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-fuchsia-800 via-sky-900 to-blue-900">
      <form onSubmit={handleSubmit} className="bg-white/90 rounded-xl shadow-lg p-10 flex flex-col gap-6 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-fuchsia-700">Rejestracja</h2>
        {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
        <input
          className="p-3 rounded border border-gray-300 focus:ring-2 focus:ring-fuchsia-400"
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="p-3 rounded border border-gray-300 focus:ring-2 focus:ring-fuchsia-400"
          type="password"
          placeholder="Hasło"
          value={password}
          autoComplete="new-password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          className="p-3 rounded border border-gray-300 focus:ring-2 focus:ring-fuchsia-400"
          type="password"
          placeholder="Powtórz hasło"
          value={repeat}
          autoComplete="new-password"
          onChange={e => setRepeat(e.target.value)}
          required
        />
        <button className="bg-fuchsia-600 text-white p-3 rounded font-semibold hover:bg-fuchsia-700 transition" type="submit">
          Zarejestruj się
        </button>
        <div className="text-center">
          Masz już konto?{" "}
          <Link to="/login" className="text-blue-700 hover:underline font-semibold">
            Zaloguj się
          </Link>
        </div>
        <Link to="/" className="text-sm text-gray-500 hover:underline text-center">
          Wróć do strony głównej
        </Link>
      </form>
    </div>
  );
}