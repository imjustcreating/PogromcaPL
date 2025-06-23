import React from "react";

const news = [
  {
    title: "Start serwera Beta",
    date: "2025-06-23",
    description: "Oficjalnie uruchamiamy Pogromca.pl! Zapraszamy do wspólnej zabawy i testowania nowych funkcji.",
  },
  {
    title: "Turniej PvP już wkrótce!",
    date: "2025-06-25",
    description: "Przygotujcie się na pierwszy turniej walk! Nagrody dla zwycięzców: unikatowe skiny oraz złoto.",
  },
  {
    title: "Nowa mapa: Dolina Cienia",
    date: "2025-06-27",
    description: "Dodaliśmy nową, rozległą mapę z zadaniami, bossami i sekretnymi przejściami.",
  },
];

const NewsSection: React.FC = () => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-blue-900">Najważniejsze newsy</h2>
    <ul className="space-y-4">
      {news.map((n, idx) => (
        <li key={idx} className="bg-white/80 rounded-lg p-4 shadow hover:bg-blue-50 transition">
          <div className="flex items-center justify-between mb-1">
            <span className="text-lg font-semibold">{n.title}</span>
            <span className="text-xs text-gray-500">{n.date}</span>
          </div>
          <div className="text-gray-700">{n.description}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default NewsSection;