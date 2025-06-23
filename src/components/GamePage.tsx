import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function GamePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Przykład automatycznego przekierowania, jeśli ktoś nie jest zalogowany
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-300 via-blue-400 to-purple-600">
      <div className="bg-white/90 rounded-xl shadow-2xl p-12 flex flex-col gap-6 items-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-fuchsia-700">
          Witaj w świecie gry!
        </h1>
        <p className="text-lg text-gray-700">Tu pojawi się świat 2D...</p>
        <button className="px-6 py-2 bg-red-500 text-white rounded font-bold hover:bg-red-700 transition" onClick={logout}>
          Wyloguj się
        </button>
      </div>
    </div>
  );
}