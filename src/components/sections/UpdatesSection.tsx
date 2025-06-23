import React from "react";

const updates = [
  {
    date: "2025-06-22",
    content: "Dodano system dropu rzadkich przedmiotów oraz ranking najlepszych graczy.",
  },
  {
    date: "2025-06-21",
    content: "Naprawiono błędy z logowaniem i poprawiono wydajność serwera.",
  },
  {
    date: "2025-06-20",
    content: "Wprowadzono nowy wygląd interfejsu oraz dynamiczne bannery ogłoszeń.",
  },
];

const UpdatesSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4 text-green-900">Ostatnie aktualizacje</h2>
    <ul className="space-y-3">
      {updates.map((u, idx) => (
        <li key={idx} className="bg-green-50 rounded-lg p-3 shadow hover:bg-green-100 transition">
          <span className="font-semibold text-green-700">{u.date}:</span> {u.content}
        </li>
      ))}
    </ul>
  </section>
);

export default UpdatesSection;