import React from "react";
import ResponsiveLayout from "../../components/ResponsiveLayout";
import settingsIcon from "../../assets/settings.svg";
import nftImage from "../../assets/runner.svg";

const nftData = [
  {
    id: 1,
    name: "SPEED RUNNER",
    number: "#214",
    bonus: "+20% Vision Runner XP",
  },
  {
    id: 2,
    name: "SPEED RUNNER",
    number: "#214",
    bonus: "+20% Vision Runner XP",
  },
  {
    id: 3,
    name: "SPEED RUNNER",
    number: "#214",
    bonus: "+20% Vision Runner XP",
  },
];

const Wallet: React.FC = () => {
  return (
    <ResponsiveLayout>
      <div className="min-h-screen w-full py-8 md:py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Card Container */}
          <div className="bg-[#011138] border border-[#84DEFA] rounded-xl p-6 md:p-8 shadow-lg">
            {/* My Wallet Section */}
            <div className="flex items-start justify-between mb-6 md:mb-8">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wider a4-speed font-robot-crush mb-2">
                  MY WALLET
                </h1>
                <p className="text-white text-sm md:text-base ">
                  View your NFTs, features, and token balances.
                </p>
              </div>
              <button className="shrink-0">
                <img
                  src={settingsIcon}
                  alt="Settings"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </button>
            </div>

            {/* Divider */}
            <hr className="border-white/20 mb-6 md:mb-8" />

            {/* Wallet Balance Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
              <div>
                <h2 className="text-white text-sm md:text-base mb-2 opacity-70">
                  Wallet Balance
                </h2>
                <div className="text-3xl md:text-5xl font-bold text-white mb-1">
                  1.56 SOL
                </div>
                <div className="text-base md:text-xl text-white/70">
                  12,890 $VISION
                </div>
              </div>
              <button className="bg-linear-to-r from-cyan-400 via-[#408DF6] to-[#145FE3] border-none rounded-lg px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30 whitespace-nowrap">
                CLAIM REWARDS
              </button>
            </div>

            {/* Divider */}
            <hr className="border-white/20 mb-6 md:mb-8" />

            {/* My NFTs Section */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wider a4-speed font-robot-crush mb-2">
                    MY NFTS
                  </h2>
                  <p className="text-white text-sm md:text-base t">
                    View your NFTs here and see the rewards tied to each
                  </p>
                </div>
                <button className="bg-transparent border border-white/30 rounded-lg px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:border-white/60 hover:bg-white/10 whitespace-nowrap">
                  View all
                </button>
              </div>

              {/* NFT Cards - Scrollable on mobile, Grid on desktop */}
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-4 md:gap-6 pb-4 md:pb-0 px-2 md:px-0 scrollbar-hide snap-x snap-mandatory md:snap-none">
                {nftData.map((nft) => (
                  <div
                    key={nft.id}
                    className="shrink-0 w-[85%] sm:w-[320px] md:w-auto md:shrink bg-linear-to-b from-[#ffd9001b] to-[#ff660034] border border-[#F6E395] rounded-xl p-4 overflow-hidden transition-all duration-300 snap-center md:snap-none"
                  >
                    {/* NFT Image */}
                    <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                      <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                        <img
                          src={nftImage}
                          alt={nft.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    {/* NFT Info */}
                    <h3 className="text-white a4-speed font-bold text-base md:text-lg mb-1">
                      {nft.name}
                    </h3>
                    <p className="text-white a4-speed font-bold text-base md:text-lg mb-1">
                      {nft.number}
                    </p>
                    <p className="text-[#FFCC2F] text-xs md:text-sm">
                      {nft.bonus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar for carousel */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </ResponsiveLayout>
  );
};

export default Wallet;
