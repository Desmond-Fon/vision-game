import React from "react";
import ResponsiveLayout from "../../components/ResponsiveLayout";
import xpIcon from "../../assets/coin.svg";

const tasksData = [
  { id: 1, text: "Follow our twitter", href: "#" },
  { id: 2, text: "Join Our Telegram", href: "#" },
  { id: 3, text: "Follow our twitter", href: "#" },
  { id: 4, text: "Follow our twitter", href: "#" },
];

const Tasks: React.FC = () => {
  return (
    <ResponsiveLayout>
      <div className="min-h-screen w-full py-8 md:py-16 px-4 md:px-8">
        {/* Header Row */}
        <div className="flex items-center justify-between max-w-5xl mx-auto mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wider a4-speed font-a4-speed uppercase">
            TASKS
          </h1>
          <div className="flex items-center gap-2 border-2 border-[#84DEFA] rounded-lg px-8 py-1 bg-[#001A4D]/40 shadow-[0_0_20px_rgba(19,213,255,0.3)]">
            <img src={xpIcon} alt="xp" className="w-10 h-10" />
            <span className="text-white font-semibold tracking-wide text-sm md:text-[32px] robot-crush">
              2000XP
            </span>
          </div>
        </div>

        {/* Banner */}
        <div className="max-w-5xl mx-auto mb-6 md:mb-10">
          <div className="rounded-xl p-4 md:p-6 bg-linear-to-r from-[#7BE3FA] via-[#408DF6] to-[#145FE3] shadow-[0_10px_30px_rgba(20,95,227,0.35)]">
            <div className="grid grid-cols-4 gap-3 opacity-60">
              <div className="h-10 md:h-12 rounded bg-white/20"></div>
              <div className="h-10 md:h-12 rounded bg-white/20"></div>
              <div className="h-10 md:h-12 rounded bg-white/20"></div>
              <div className="h-10 md:h-12 rounded bg-white/20"></div>
            </div>
          </div>
        </div>

        {/* Task List Card */}
        <div className="max-w-5xl mx-auto border border-[#84DEFA] rounded-xl bg-[#02103A]/80 shadow-lg">
          <div className="p-4 md:p-6 max-h-[60vh] overflow-y-auto">
            <ol className="space-y-6">
              {tasksData.map((task, idx) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#84DEFA] font-semibold w-6 text-right">
                      {idx + 1}.
                    </span>
                    <span className="text-white text-sm md:text-base">
                      {task.text}
                    </span>
                  </div>
                  <a
                    href={task.href}
                    className="shrink-0 px-4 md:px-5 py-2 rounded-md text-[11px] md:text-xs font-semibold uppercase tracking-wider text-white bg-linear-to-r from-[#7BE3FA] via-[#408DF6] to-[#145FE3] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_10px_20px_rgba(64,141,246,0.35)]"
                  >
                    CLICK LINK
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
};

export default Tasks;
