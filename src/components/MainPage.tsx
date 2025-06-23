import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import AnnouncementBanner from "./sections/AnnouncementBanner";
import NewsSection from "./sections/NewsSection";
import UpdatesSection from "./sections/UpdatesSection";

const MainPage: React.FC = () => {
  const [showRegister, setShowRegister] = useState(false); // placeholder do rozbudowy
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(loginForm.username, loginForm.password);
    if (success) {
      navigate("/game");
    } else {
      setError("Nieprawidłowy login lub hasło.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-0 m-0 font-sans">
      <header className="bg-gradient-to-r from-green-800 to-blue-900 text-white shadow-lg py-6 flex flex-col md:flex-row items-center justify-between px-8">
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="Pogromca.pl" className="w-14 h-14 mr-3 rounded-xl shadow-md border-2 border-white" /> */}
          <div className="w-14 h-14 mr-3 rounded-xl bg-green-600 flex items-center justify-center text-2xl font-extrabold shadow-md border-2 border-white">
            P
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-lg">Pogromca.pl</h1>
        </div>
        <div className="mt-4 md:mt-0">
          <form onSubmit={handleLogin} className="flex flex-col md:flex-row gap-2 items-center">
            <input
              className="px-3 py-2 rounded border w-32 outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="username"
              placeholder="Login"
              value={loginForm.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />
            <input
              className="px-3 py-2 rounded border w-32 outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="password"
              placeholder="Hasło"
              value={loginForm.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow transition"
            >
              Zaloguj się
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 shadow transition"
              onClick={() => setShowRegister(true)}
            >
              Zarejestruj się
            </button>
          </form>
          {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
        </div>
      </header>
      <main className="max-w-4xl mx-auto mt-7 space-y-8">
        <AnnouncementBanner />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <NewsSection />
            <UpdatesSection />
          </div>
          <div className="flex-1 hidden md:block">
            {/* <img
              src="/main-banner.png"
              alt="Pogromca.pl banner"
              className="rounded-2xl shadow-xl border-4 border-blue-200 animate-pulse"
            /> */}
            <div className="rounded-2xl shadow-xl border-4 border-blue-200 bg-gradient-to-r from-blue-100 to-green-200 flex items-center justify-center h-60 text-3xl text-blue-700 font-bold animate-pulse">
              Pogromca.pl
            </div>
            <div className="mt-4 bg-white/80 rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">Dołącz do pogromców!</h3>
              <ul className="list-disc list-inside text-gray-800">
                <li>Setki potworów i unikalnych questów</li>
                <li>Handel, PvP, klany, system reputacji</li>
                <li>Stałe eventy, turnieje i nagrody!</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-10 py-6 text-center text-gray-500 bg-white/60">
        &copy; 2025 Pogromca.pl – Wszystkie prawa zastrzeżone. | Inspirowane Margonem.pl
      </footer>
      {showRegister && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-2xl flex flex-col items-center max-w-xs">
            <h2 className="text-2xl font-bold mb-4">Rejestracja</h2>
            <p className="text-gray-600 mb-4">Moduł rejestracji wkrótce dostępny!</p>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2"
              onClick={() => setShowRegister(false)}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;