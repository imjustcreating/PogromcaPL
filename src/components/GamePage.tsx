import React, { useEffect, useRef } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const SPRITE_SIZE = 48;
const MAP_WIDTH = 12;
const MAP_HEIGHT = 8;

const map = [
  "........GGGG....",
  "...GGGGGGGGGG...",
  "..GGGGFFFFGGG...",
  ".GGFF....FFGG...",
  ".GFF......FGG...",
  "..GGFFFFFFGG....",
  "...GGGGGGGG.....",
  ".....GGGGG......",
].map(row => row.split(""));

const playerSprite = "#FFD700"; // gold

const GamePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [player, setPlayer] = React.useState({ x: 2, y: 2 });

  // Movement
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      setPlayer(pos => {
        let { x, y } = pos;
        if (e.key === "ArrowUp" && y > 0) y--;
        else if (e.key === "ArrowDown" && y < MAP_HEIGHT - 1) y++;
        else if (e.key === "ArrowLeft" && x > 0) x--;
        else if (e.key === "ArrowRight" && x < MAP_WIDTH - 1) x++;
        return { x, y };
      });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw map
    for (let y = 0; y < MAP_HEIGHT; y++) {
      for (let x = 0; x < MAP_WIDTH; x++) {
        const tile = map[y][x];
        ctx.fillStyle =
          tile === "G" ? "#6ee7b7" : tile === "F" ? "#374151" : "#fef9c3";
        ctx.fillRect(
          x * SPRITE_SIZE,
          y * SPRITE_SIZE,
          SPRITE_SIZE,
          SPRITE_SIZE
        );
      }
    }
    // Draw player
    ctx.fillStyle = playerSprite;
    ctx.beginPath();
    ctx.arc(
      player.x * SPRITE_SIZE + SPRITE_SIZE / 2,
      player.y * SPRITE_SIZE + SPRITE_SIZE / 2,
      SPRITE_SIZE / 2.5,
      0,
      2 * Math.PI
    );
    ctx.fill();
    // Draw username
    ctx.font = "bold 16px monospace";
    ctx.fillStyle = "#222";
    ctx.textAlign = "center";
    ctx.fillText(
      user?.username || "",
      player.x * SPRITE_SIZE + SPRITE_SIZE / 2,
      player.y * SPRITE_SIZE - 5
    );
  }, [player, user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-200 flex flex-col items-center justify-center">
      <div className="absolute top-2 right-4">
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700"
        >
          Wyloguj się
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-2 text-blue-900 drop-shadow-md">Pogromca.pl – Świat gry 2D</h1>
      <div className="mb-4 text-gray-700">Poruszaj się strzałkami! (demo mapy)</div>
      <canvas
        ref={canvasRef}
        width={MAP_WIDTH * SPRITE_SIZE}
        height={MAP_HEIGHT * SPRITE_SIZE}
        className="border-4 border-blue-300 rounded-2xl shadow-lg bg-white"
      />
    </div>
  );
};

export default GamePage;