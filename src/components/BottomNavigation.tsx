import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../assets/home.svg";
import gameIcon from "../assets/game.svg";
import starIcon from "../assets/updates.svg";
import tasksIcon from "../assets/tasks.svg";
import walletIcon from "../assets/wallet.svg";

interface BottomNavigationProps {
  className?: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  className = "",
}) => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: homeIcon, label: "Home" },
    { path: "/game", icon: gameIcon, label: "Game" },
    { path: "/upgrades", icon: starIcon, label: "Upgrades" },
    { path: "/tasks", icon: tasksIcon, label: "Tasks" },
    { path: "/wallet", icon: walletIcon, label: "Wallet" },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-[#000A24] border-t rounded-t-3xl border-[#13D5FF] py-4 flex justify-around items-center backdrop-blur-xl z-50 shadow-lg ${className}`}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center text-slate-400 transition-all duration-300 p-2 rounded-lg hover:text-cyan-400 hover:-translate-y-0.5 ${
              isActive ? "text-cyan-400 bg-cyan-400/10" : ""
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`w-6 h-6 mb-1 transition-all duration-300 ${
                isActive ? "brightness-125" : "brightness-80"
              }`}
            />
            <span className="text-xs sm:text-2xl text-white font-medium tracking-wider">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
