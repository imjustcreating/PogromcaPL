import React from "react";

const banners = [
  {
    title: "Wielka premiera Pogromca.pl!",
    text: "Już dziś startuje nowa przygoda – sprawdź świat i zostań bohaterem legendy!",
    color: "from-yellow-300 to-yellow-500",
    icon: "🔥",
  },
  {
    title: "Event: Letnie Wyzwania",
    text: "Weź udział w letnich turniejach i wygraj unikatowe nagrody!",
    color: "from-blue-300 to-blue-500",
    icon: "🏆",
  },
  {
    title: "Nowy system klanów",
    text: "Dołącz do istniejącego lub stwórz własny klan – rywalizuj o sławę!",
    color: "from-green-300 to-green-500",
    icon: "🛡️",
  },
];

const AnnouncementBanner: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const banner = banners[index];

  return (
    <div
      className={`w-full rounded-xl py-3 px-6 flex items-center shadow-xl text-lg font-semibold bg-gradient-to-r ${banner.color} transition-all duration-500`}
    >
      <span className="text-2xl mr-3">{banner.icon}</span>
      <div>
        <span className="font-bold mr-2">{banner.title}</span>
        <span className="text-gray-900/80">{banner.text}</span>
      </div>
    </div>
  );
};

export default AnnouncementBanner;