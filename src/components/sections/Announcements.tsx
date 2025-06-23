export default function Announcements() {
  return (
    <section className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow font-medium mb-4 animate-fade-in-down">
      <h2 className="text-2xl font-bold text-yellow-700 mb-2">Ogłoszenia</h2>
      <ul className="list-disc list-inside text-yellow-800 space-y-1">
        <li>Wielki start serwera już wkrótce!</li>
        <li>Dołącz do naszej społeczności na Discordzie.</li>
        <li>Nowe klasy postaci i system walki w przygotowaniu.</li>
      </ul>
    </section>
  );
}