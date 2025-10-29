import React from "react";
import ResponsiveLayout from "../../components/ResponsiveLayout";

const Game: React.FC = () => {
  return (
    <ResponsiveLayout>
      <div className="p-10 text-center text-white">
        <h1 className="text-3xl font-bold text-cyan-400 mb-5 drop-shadow-lg">
          Game Page
        </h1>
        <p className="text-lg text-slate-400">
          Game content will be implemented here
        </p>
      </div>
    </ResponsiveLayout>
  );
};

export default Game;
