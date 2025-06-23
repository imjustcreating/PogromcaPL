export default function MenuSections() {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <div className="p-4 rounded-lg bg-white/80 shadow border-l-4 border-cyan-600">
        <span className="text-lg font-semibold text-cyan-700">Poznaj świat gry — eksploruj, walcz, rozwijaj postać!</span>
      </div>
      <div className="p-4 rounded-lg bg-white/80 shadow border-l-4 border-fuchsia-600">
        <span className="text-lg font-semibold text-fuchsia-700">Różnorodne klasy i przedmioty — stwórz własną legendę!</span>
      </div>
      <div className="p-4 rounded-lg bg-white/80 shadow border-l-4 border-yellow-500">
        <span className="text-lg font-semibold text-yellow-700">Społeczność graczy — czat, gildie, eventy!</span>
      </div>
    </div>
  );
}