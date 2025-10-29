import React from "react";
import ResponsiveLayout from "../../components/ResponsiveLayout";
import coinIcon from "../../assets/coin.svg";
import emeraldIcon from "../../assets/emerald.svg";
import starIcon from "../../assets/star.svg";
import quest from "../../assets/quest.png";
import icon from "../../assets/icon.png";

const Home: React.FC = () => {
  return (
    <ResponsiveLayout>
      <div className="h-screen w-full">
        {/* Desktop Layout */}
        <div className="hidden py-[100px] md:grid md:grid-cols-[350px_1fr] md:gap-6 md:h-full md:w-full md:px-6">
          {/* Left Panel - Current Estimate */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#011138] border border-[#84DEFA] rounded-xl p-5 backdrop-blur-sm shadow-lg h-fit">
              <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
                Current Estimate
              </h3>
              <div className="text-5xl font-bold text-white mb-5 drop-shadow-lg">
                235
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3 py-2 border-b border-white/10">
                  <span className="text-sm text-[#84DEFA] font-medium">
                    Network Fee
                  </span>
                  <span className="text-sm text-white font-semibold">
                    0.00521%
                  </span>
                </div>
                <div className="flex justify-between items-center mb-3 py-2 border-b border-white/10">
                  <span className="text-sm text-[#84DEFA] font-medium">
                    Farming $VISION per day
                  </span>
                  <span className="text-sm text-white font-semibold">
                    0.00521%
                  </span>
                </div>
              </div>
              <button className="w-full bg-linear-to-r from-[#7BE3FA] via-[#408DF6] to-blue-500 border-none rounded-xl py-4 text-base font-semibold text-white uppercase tracking-wide cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                CLAIM $VISION
              </button>
            </div>

            {/* Right Panel - Booster Pack */}
            <div className="flex flex-col gap-4 bg-[#011138] border border-[#84DEFA] rounded-xl p-4">
              {/* Booster Pack Button */}
              <button className="bg-linear-to-b from-[#011138] to-[#52147C] rounded-xl px-6 py-0 flex items-center justify-center gap-3 text-white font-bold text-2xl tracking-wide hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                Booster Pack
                <img src={emeraldIcon} alt="Emerald" className="" />
              </button>

              {/* Scrollable Cards Section */}
              <div className=" p-5 backdrop-blur-sm shadow-lg">
                <div className="flex overflow-x-auto gap-4 pb-4">
                  {/* Card 1 */}
                  <div className="shrink-0 w-48">
                    <div className="flex flex-col items-center gap-4">
                      {/* Treasure Chest Image */}
                      <img src={quest} alt="" />
                      <div className="bg-[#011138] border border-[#84DEFA] rounded-xl p-2">
                        <div className=" flex justify-between items-center">
                          <div className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider">
                            EPIC LOOT MULTIPLIER
                          </div>
                          <div className="text-base font-bold text-[#84DEFA]">
                            0.02 SOL
                          </div>
                        </div>
                        <button className="w-full bg-linear-to-r from-[#7BE3FA] via-[#408DF6] to-[#145FE3] mt-3 border-none rounded-md py-2.5 text-xs font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                          BUY
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="shrink-0 w-48">
                    <div className="flex flex-col items-center gap-4">
                      {/* Treasure Chest Image */}
                      <img src={quest} alt="" />
                      <div className="bg-[#011138] border border-[#84DEFA] rounded-xl p-2">
                        <div className=" flex justify-between items-center">
                          <div className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider">
                            EPIC LOOT MULTIPLIER
                          </div>
                          <div className="text-base font-bold text-[#84DEFA]">
                            0.02 SOL
                          </div>
                        </div>
                        <button className="w-full bg-linear-to-r from-[#7BE3FA] via-[#408DF6] to-[#145FE3] mt-3 border-none rounded-md py-2.5 text-xs font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                          BUY
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="shrink-0 w-48">
                    <div className="flex flex-col items-center gap-4">
                      {/* Treasure Chest Image */}
                      <img src={quest} alt="" />
                      <div className="bg-[#011138] border border-[#84DEFA] rounded-xl p-2">
                        <div className=" flex justify-between items-center">
                          <div className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider">
                            EPIC LOOT MULTIPLIER
                          </div>
                          <div className="text-base font-bold text-[#84DEFA]">
                            0.02 SOL
                          </div>
                        </div>
                        <button className="w-full bg-linear-to-r from-[#7BE3FA] via-[#408DF6] to-[#145FE3] mt-3 border-none rounded-md py-2.5 text-xs font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                          BUY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEE MORE Button */}
              <button className="bg-transparent border border-[#84DEFA] rounded-xl py-3 text-sm font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:border-white/60 hover:bg-white/10">
                SEE MORE
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col px-[70px] py-[40px] bg-[#011138] rounded-[20px] border border-[#84DEFA] items-center justify-start p-0 h-full overflow-y-auto">
            {/* Level Progress */}
            <div className="mb-8 mt-5 bg-[#00174D] w-full px-[34px] py-[24px] flex justify-between items-center rounded-[10px]">
              <div className=" w-[30%] ">
                <div className="text-base font-semibold text-white text-left mb-3">
                  Level 10/20
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-3 bg-[#1A2B5C] rounded-lg relative overflow-hidden">
                    <div className="h-full w-[50%] bg-linear-to-r from-blue-400 via-pink-500 to-green-400 rounded-lg"></div>
                    <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-2 border-green-400 shadow-lg"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-base font-semibold text-white">
                <img src={starIcon} alt="Star" className="" />
                <span>3000/7000</span>
              </div>
            </div>

            {/* Central Avatar */}
            <div className="my-6">
              <img src={icon} alt="" />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6 mb-[170px]">
              <div className="bg-linear-to-b fro-[#062163] to-[#057EFF] border border-[#1F6BE8] rounded-lg py-1 px-6 flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 min-w-[140px]">
                <div className="flex flex-col items-center ">
                  <span className="text-sm text-white font-medium tracking-wider">
                    Earn per tap
                  </span>
                  <div className="flex justify-center items-center ">
                    <img src={coinIcon} alt="Coin" className="" />
                    <p className="text-2xl leading-[20px] text-white font-bold">
                      +400pts
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-linear-to-b fro-[#062163] to-[#057EFF] border border-[#1F6BE8] rounded-lg py-3 px-24 flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 min-w-[140px]">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-white font-medium uppercase tracking-wider">
                    Coins to level up
                  </span>
                  <p className="text-2xl leading-[20px] text-white font-bold">
                    3M
                  </p>
                </div>
              </div>
              <div className="bg-linear-to-b fro-[#062163] to-[#057EFF] border border-[#1F6BE8] rounded-lg py-1 px-6 flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 min-w-[140px]">
                <div className="flex flex-col items-center ">
                  <span className="text-sm text-white font-medium tracking-wider">
                    Profit per hr{" "}
                  </span>
                  <div className="flex justify-center items-center ">
                    <img src={coinIcon} alt="Coin" className="" />
                    <p className="text-2xl leading-[20px] text-white font-bold">
                      +30.32k{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center p-4 max-w-sm mx-auto h-full overflow-y-auto md:hidden">
          {/* Level Progress */}
          <div className="mb-8 mt-5 bg-[#00174D] w-full px-[34px] py-[14px] flex justify-between items-center rounded-[10px]">
            <div className=" w-[60%] ">
              <div className="text-base font-semibold text-white text-left mb-3">
                Level 10/20
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-3 bg-[#1A2B5C] rounded-lg relative overflow-hidden">
                  <div className="h-full w-[50%] bg-linear-to-r from-blue-400 via-pink-500 to-green-400 rounded-lg"></div>
                  <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-2 border-green-400 shadow-lg"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-0 text-sm font-semibold text-white">
              <img src={starIcon} alt="Star" className="w-6" />
              <span>3000/7000</span>
            </div>
          </div>

          {/* Central Avatar */}
          <div className="my-6">
            <img src={icon} alt="" />
          </div>

          {/* Action Buttons - Mobile */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 mb-[170px]">
            <div className="bg-linear-to-b fro-[#062163] to-[#057EFF] border border-[#1F6BE8] rounded-lg py-1 px-4 flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 min-w-[140px]">
              <div className="flex flex-col items-center ">
                <span className="text-sm text-white font-medium tracking-wider">
                  Earn per tap
                </span>
                <div className="flex justify-center items-center ">
                  <img src={coinIcon} alt="Coin" className="w-[40px] " />
                  <p className="text-xl leading-[20px] text-white font-bold">
                    +400pts
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-b fro-[#062163] to-[#057EFF] border border-[#1F6BE8] rounded-lg py-1 px-4 flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 min-w-[140px]">
              <div className="flex flex-col items-center ">
                <span className="text-sm text-white font-medium tracking-wider">
                  Profit per hr{" "}
                </span>
                <div className="flex justify-center items-center ">
                  <img src={coinIcon} alt="Coin" className="w-[40px] " />
                  <p className="text-xl leading-[20px] text-white font-bold">
                    +30.32k{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-b fro-[#062163] to-[#057EFF] border border-[#1F6BE8] rounded-lg py-3 px-24 flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 min-w-[140px]">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs text-white font-medium uppercase tracking-wider">
                  Coins to level up
                </span>
                <p className="text-2xl leading-[20px] text-white font-bold">
                  3M
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
};

export default Home;
