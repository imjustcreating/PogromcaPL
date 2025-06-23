import { Link } from "react-router-dom";
import Announcements from "./sections/Announcements";
import Updates from "./sections/Updates";
import MenuSections from "./sections/MenuSections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-indigo-400 to-fuchsia-500 flex flex-col items-center">
      <header className="w-full text-center py-10 bg-white/60 backdrop-blur-md shadow-lg">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600 drop-shadow-lg animate-fade-in">
          Pogromca Światów 2D
        </h1>
        <p className="mt-4 text-2xl text-gray-700 font-semibold">Przygotuj się na przygodę swojego życia!</p>
      </header>
      <main className="flex flex-col gap-8 w-full max-w-5xl px-4 py-8">
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="hero" className="rounded-xl shadow-xl w-full md:w-1/2 animate-floating" />
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex gap-4 justify-center">
              <Link to="/login" className="px-8 py-3 rounded-lg bg-blue-600 text-white text-xl font-semibold shadow-lg hover:bg-blue-700 transition">
                Zaloguj się
              </Link>
              <Link to="/register" className="px-8 py-3 rounded-lg bg-fuchsia-600 text-white text-xl font-semibold shadow-lg hover:bg-fuchsia-700 transition">
                Rejestracja
              </Link>
            </div>
            <MenuSections />
          </div>
        </section>

        <Announcements />
        <Updates />

        <section className="flex justify-center mt-8">
          <Link to="/game" className="text-2xl font-bold px-10 py-4 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-600 text-white shadow-2xl hover:scale-105 hover:shadow-fuchsia-600/30 transition-all animate-bounce">
            Przejdź do gry!
          </Link>
        </section>
      </main>
      <footer className="mt-auto py-4 text-center text-white bg-black/40 w-full">
        &copy; {new Date().getFullYear()} Pogromca Światów 2D &mdash; Stwórz swoją legendę!
      </footer>
    </div>
  );
}