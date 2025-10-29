import React, { useState, useRef, useEffect } from "react";
import ResponsiveLayout from "../../components/ResponsiveLayout";
import upgrade1 from "../../assets/upgrade1.png";
import upgrade2 from "../../assets/upgrade2.png";
import gemIcon from "../../assets/gem.svg";
import vector from "../../assets/vector.svg";
import boostIcon from "../../assets/boost.svg";
import skinIcon from "../../assets/skin.svg";
import quest from "../../assets/quest.png";
import speed from "../../assets/speed.svg";
import xp from "../../assets/xp.svg";
import nft from "../../assets/nft.svg";

type TabType = "NFT PACKS" | "PAID UPGRADE" | "FREE UPGRADE";

const Upgrades: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("NFT PACKS");
  const [selectedIndex, setSelectedIndex] = useState(2); // Start with center item
  const [carouselPadding, setCarouselPadding] = useState({ left: 0, right: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);

  const tabs: TabType[] = ["NFT PACKS", "PAID UPGRADE", "FREE UPGRADE"];

  // NFT items for the carousel
  const nftItems = [
    { id: 1, image: upgrade1, type: "axe" },
    { id: 2, image: upgrade2, type: "sword" },
    { id: 3, image: upgrade1, type: "axe" },
    { id: 4, image: upgrade2, type: "potion" },
    { id: 5, image: upgrade1, type: "axe" },
  ];

  // Handle scroll to detect which item is in the center
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const containerWidth = container.offsetWidth;
    const containerCenter = containerWidth / 2;

    // Find which item is closest to the center
    let closestIndex = 0;
    let closestDistance = Infinity;

    container.childNodes.forEach((child, index) => {
      if (child instanceof HTMLElement) {
        const rect = child.getBoundingClientRect();
        const itemCenter =
          rect.left + rect.width / 2 - container.getBoundingClientRect().left;
        const distance = Math.abs(itemCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });

    setSelectedIndex(closestIndex);
  };

  // Scroll to selected item
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const containerWidth = container.offsetWidth;
    const itemWidth = containerWidth < 768 ? 192 : 224; // w-48 or w-56
    const gap = 16; // gap-4 = 16px

    // Calculate scroll position to center the item
    const totalItemWidth = itemWidth + gap;
    const scrollPosition = index * totalItemWidth;

    // For edge items, we allow negative scroll (handled by padding)
    // But we clamp to the max scroll position
    const maxScroll = container.scrollWidth - containerWidth;
    const finalScroll = Math.min(Math.max(0, scrollPosition), maxScroll);

    container.scrollTo({
      left: finalScroll,
      behavior: "smooth",
    });
  };

  // Calculate padding to center edge items
  useEffect(() => {
    const updatePadding = () => {
      if (!carouselRef.current) return;
      const container = carouselRef.current;
      const containerWidth = container.offsetWidth;
      const itemWidth = containerWidth < 768 ? 192 : 224; // w-48 or w-56
      const padding = containerWidth / 2 - itemWidth / 2;
      setCarouselPadding({ left: padding, right: padding });
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, [activeTab]);

  return (
    <ResponsiveLayout>
      <div className="min-h-screen w-full py-8 md:py-24">
        {/* Header Section */}
        <div className="pt-4 md:pt-8 px-4 md:px-8">
          <h1 className="text-2xl md:text-4xl lg:text-[64px] font-bold text-white text-center mb-4 md:mb-6 a4-speed uppercase tracking-wider">
            UPGRADES
          </h1>

          {/* Navigation Tabs */}
          <div className="flex bg-linear-to-r from-[#7BE3FA] via-[#408DF6] to-[#145FE3] w-full md:w-fit mx-auto rounded-[12px] py-1.5 md:py-2 px-2 md:px-6 justify-center gap-1.5 md:gap-3 lg:gap-4 mb-4 md:mb-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 md:px-4 lg:px-14 py-1 md:py-1.5 rounded-lg text-base md:text-base lg:text-[28px] robot-crush font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#0A306F96] text-white border-2 border-[#84DEFA] shadow-lg shadow-cyan-400/30"
                    : "text-white hover:border-[#84DEFA]/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Section */}
          {activeTab === "NFT PACKS" && (
            <div className="bg-[#011138] border border-[#84DEFA] rounded-xl p-4 pb-26 md:p-6  md:pb-32 mx-auto max-w-4xl relative">
              <div className="absolute border-0 hidden md:block">
                <img src={vector} alt="" className="w-full h-auto" />
              </div>
              <div className="pt-6 md:pt-12 lg:pt-20 px-4 md:px-8 lg:px-[120px]">
                {/* Section Header */}
                <div className="flex flex-row items-start sm:items-center justify-start gap-3 sm:gap-5 mb-4">
                  <h2 className="text-xl md:text-2xl lg:text-[36px] font-bold text-white uppercase tracking-wide robot-crush">
                    NFT PACKS OPENING
                  </h2>
                  <div className="flex items-center gap-2">
                    <img
                      src={gemIcon}
                      alt="Gem"
                      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                </div>
                {/* Description */}
                <p className="text-white text-xs md:text-sm lg:text-base mb-4 md:mb-6 leading-relaxed">
                  Each pack holds rare NFTs that can enhance your Vision Runner
                  gameplay from character upgrades to bonus features.
                </p>
                <hr className="border-[#84DEFA]/30 mb-4 md:mb-6" />
              </div>

              {/* NFT Cards Carousel */}
              <div className="my-6 md:my-10 lg:my-14 px-2 md:px-0">
                <div
                  ref={carouselRef}
                  className="flex overflow-x-auto gap-3 md:gap-4 pb-4 scrollbar-hide snap-x snap-mandatory"
                  onScroll={handleScroll}
                  style={{
                    scrollSnapType: "x mandatory",
                    paddingLeft: `${carouselPadding.left}px`,
                    paddingRight: `${carouselPadding.right}px`,
                  }}
                >
                  {nftItems.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    const distance = Math.abs(index - selectedIndex);
                    const scale = isSelected
                      ? 1.15
                      : Math.max(0.85, 1 - distance * 0.1);
                    const opacity = isSelected
                      ? 1
                      : Math.max(0.5, 1 - distance * 0.2);
                    const zIndex = isSelected ? 10 : 5 - distance;

                    return (
                      <div
                        key={item.id}
                        onClick={() => scrollToIndex(index)}
                        className={`shrink-0 w-40 sm:w-48 md:w-56 rounded-xl overflow-hidden transition-all duration-500 ease-out cursor-pointer snap-center ${
                          isSelected
                            ? " shadow-2xl shadow-cyan-400/50 bg-linear-to-br from-cyan-500/30 to-blue-500/30"
                            : "border border-[#84DEFA]/20 bg-[#00174D]"
                        }`}
                        style={{
                          transform: `scale(${scale})`,
                          opacity: opacity,
                          zIndex: zIndex,
                        }}
                      >
                        <div className="aspect-square flex items-center justify-center p-3 md:p-4 bg-[#000A24]">
                          <img
                            src={item.image}
                            alt={`NFT ${item.type}`}
                            className={`w-full h-full object-contain transition-all duration-500 ${
                              isSelected ? "brightness-125" : "brightness-75"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col justify-center sm:flex-row gap-3 md:gap-4 px-4 md:px-6 lg:px-0 mx-auto w-full sm:w-auto sm:mx-0">
                {" "}
                <button className="flex-1 sm:flex-none sm:w-auto bg-linear-to-r from-cyan-400 via-[#408DF6] to-[#145FE3] border-none rounded-lg px-12 py-2 text-sm md:text-base font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                  BUY WITH SOL
                </button>
                <button className="flex-1 sm:flex-none sm:w-auto bg-linear-to-r from-cyan-400 via-[#408DF6] to-[#145FE3] border-none rounded-lg px-12 py-2 text-sm md:text-base font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                  OPEN NOW
                </button>
              </div>
            </div>
          )}

          {/* Paid Upgrade Tab Content */}
          {activeTab === "PAID UPGRADE" && (
            <div className="bg-[#011138] border border-[#84DEFA] rounded-xl p-4 md:p-6 lg:p-8 mx-auto max-w-4xl">
              {/* Section Header */}
              <div className="pt-6 md:pt-12 lg:pt-20 px-4 md:px-8 lg:px-[120px]">
                {/* Section Header */}
                <div className="flex flex-row items-start sm:items-center justify-start gap-3 sm:gap-5 mb-4">
                  <h2 className="text-xl md:text-2xl lg:text-[36px] font-bold text-white uppercase tracking-wide robot-crush">
                    Premium upgrades{" "}
                  </h2>
                  <div className="flex items-center gap-2">
                    <img
                      src={gemIcon}
                      alt="Gem"
                      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                </div>
                {/* Description */}
                <p className="text-white text-xs md:text-sm lg:text-base mb-4 md:mb-6 leading-relaxed">
                  “Use $SOL to access advanced features and power-ups that push
                  your gameplay to the next level.{" "}
                </p>
                <hr className="border-[#84DEFA]/30 mb-4 md:mb-6" />
              </div>

              {/* Upgrade Cards - Scrollable on mobile, Grid on desktop */}
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-3 md:gap-4 lg:gap-6 pb-4 md:pb-0 px-2 md:px-0 scrollbar-hide snap-x snap-mandatory md:snap-none">
                {/* Card 1: Vision Speed Boost */}
                <div className="shrink-0 w-[85%] sm:w-[320px] md:w-auto md:shrink bg-[#00174D] border border-[#84DEFA]/30 rounded-xl p-4 md:p-6 overflow-hidden snap-center md:snap-none">
                  <div className="aspect-square flex items-center justify-center p-4 md:p-6 bg-[#000A24] rounded-lg mb-4 relative">
                    <img
                      src={boostIcon}
                      alt="Speed Boost"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-2 right-2 bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center">
                      <span className="text-yellow-900 font-bold text-xs">
                        +1
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[#FFD700] robot-crush font-bold text-sm md:text-base lg:text-lg uppercase tracking-wide mb-2 font-robot-crush">
                    VISION SPEED BOOST
                  </h3>
                  <p className="text-white text-xs md:text-sm lg:text-base mb-4">
                    Increase runner speed by{" "}
                    <span className="text-[#84DEFA]">15%</span> for{" "}
                    <span className="text-[#84DEFA]">7 days</span>
                  </p>
                  <button className="w-full bg-linear-to-r from-cyan-400 via-[#408DF6] to-[#145FE3] border-none rounded-lg py-2 md:py-2.5 lg:py-3 text-xs md:text-sm lg:text-lg font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                    0.05 SOL
                  </button>
                </div>

                {/* Card 2: Epic Loot Multiplier */}
                <div className="shrink-0 w-[85%] sm:w-[320px] md:w-auto md:shrink bg-[#00174D] border border-[#84DEFA]/30 rounded-xl p-4 md:p-6 overflow-hidden snap-center md:snap-none">
                  <div className="aspect-square flex items-center justify-center p-4 md:p-6 bg-[#000A24] rounded-lg mb-4">
                    <img
                      src={quest}
                      alt="Epic Loot"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#FFD700] robot-crush font-bold text-sm md:text-base lg:text-lg uppercase tracking-wide mb-2 font-robot-crush">
                    EPIC LOOT MULTIPLIER
                  </h3>
                  <p className="text-white text-xs md:text-sm lg:text-base mb-4">
                    Double all rewards for{" "}
                    <span className="text-[#84DEFA]">24h</span>
                  </p>
                  <button className="w-full bg-linear-to-r from-cyan-400 via-[#408DF6] to-[#145FE3] border-none rounded-lg py-2 md:py-2.5 lg:py-3 text-xs md:text-sm lg:text-lg font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                    0.02 SOL
                  </button>
                </div>

                {/* Card 3: Exclusive NFT Pack */}
                <div className="shrink-0 w-[85%] sm:w-[320px] md:w-auto md:shrink bg-[#00174D] border border-[#84DEFA]/30 rounded-xl p-4 md:p-6 overflow-hidden snap-center md:snap-none">
                  <div className="aspect-square flex items-center justify-center p-4 md:p-6 bg-[#000A24] rounded-lg mb-4 relative">
                    <img
                      src={skinIcon}
                      alt="NFT Pack"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#FFD700] robot-crush font-bold text-sm md:text-base lg:text-lg uppercase tracking-wide mb-2 font-robot-crush">
                    EXCLUSIVE NFT PACK
                  </h3>
                  <p className="text-white text-xs md:text-sm lg:text-base mb-4">
                    Unlock a rare NFT character skin
                  </p>
                  <button className="w-full bg-linear-to-r from-cyan-400 via-[#408DF6] to-[#145FE3] border-none rounded-lg py-2 md:py-2.5 lg:py-3 text-xs md:text-sm lg:text-lg font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                    0.1 SOL
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Free Upgrade Tab Content */}
          {activeTab === "FREE UPGRADE" && (
            <div className="bg-[#011138] border border-[#84DEFA] rounded-xl p-4 md:p-6 lg:p-8 mx-auto max-w-4xl">
              {/* Section Header */}
              <div className="pt-6 md:pt-12 lg:pt-20 px-4 md:px-8 lg:px-[120px]">
                {/* Section Header */}
                <div className="flex flex-row items-start sm:items-center justify-start gap-3 sm:gap-5 mb-4">
                  <h2 className="text-xl md:text-2xl lg:text-[36px] font-bold text-white uppercase tracking-wide robot-crush">
                    Free upgrade{" "}
                  </h2>
                  <div className="flex items-center gap-2">
                    <img
                      src={gemIcon}
                      alt="Gem"
                      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                </div>
                {/* Description */}
                <p className="text-white text-xs md:text-sm lg:text-base mb-4 md:mb-6 leading-relaxed">
                  Spend your Vision tokens to enhance your gear or gameplay
                </p>
                <hr className="border-[#84DEFA]/30 mb-4 md:mb-6" />
              </div>

              {/* Upgrade Cards - Scrollable on mobile, Grid on desktop */}
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-3 md:gap-4 lg:gap-6 pb-4 md:pb-0 px-2 md:px-0 scrollbar-hide snap-x snap-mandatory md:snap-none">
                {/* Card 1: Vision Speed Boost */}
                <div className="shrink-0 w-[85%] sm:w-[320px] md:w-auto md:shrink bg-[#00174D] border border-[#84DEFA]/30 rounded-xl p-4 md:p-6 overflow-hidden snap-center md:snap-none">
                  <div className="aspect-square flex items-center justify-center p-4 md:p-6 bg-[#000A24] rounded-lg mb-4 relative">
                    <img
                      src={speed}
                      alt="Speed Boost"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#FFD700] robot-crush font-bold text-base lg:text-2xl uppercase tracking-wide mb-2 font-robot-crush">
                    mini speed boost{" "}
                  </h3>

                  <button className="w-full bg-linear-to-r from-cyan-400 via-[#408DF6] to-[#145FE3] border-none rounded-lg py-2 md:py-2.5 lg:py-3 text-xs md:text-sm lg:text-lg font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                    200 VISION{" "}
                  </button>
                </div>

                {/* Card 2: Epic Loot Multiplier */}
                <div className="shrink-0 w-[85%] sm:w-[320px] md:w-auto md:shrink bg-[#00174D] border border-[#84DEFA]/30 rounded-xl p-4 md:p-6 overflow-hidden snap-center md:snap-none">
                  <div className="aspect-square flex items-center justify-center p-4 md:p-6 bg-[#000A24] rounded-lg mb-4">
                    <img
                      src={xp}
                      alt="Epic Loot"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#FFD700] robot-crush font-bold text-base lg:text-2xl uppercase tracking-wide mb-2 font-robot-crush">
                    bonus xp pack{" "}
                  </h3>
                  <button className="w-full bg-linear-to-r from-cyan-400 via-[#408DF6] to-[#145FE3] border-none rounded-lg py-2 md:py-2.5 lg:py-3 text-xs md:text-sm lg:text-lg font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                    500 VISION{" "}
                  </button>
                </div>

                {/* Card 3: Exclusive NFT Pack */}
                <div className="shrink-0 w-[85%] sm:w-[320px] md:w-auto md:shrink bg-[#00174D] border border-[#84DEFA]/30 rounded-xl p-4 md:p-6 overflow-hidden snap-center md:snap-none">
                  <div className="aspect-square flex items-center justify-center p-4 md:p-6 bg-[#000A24] rounded-lg mb-4 relative">
                    <img
                      src={nft}
                      alt="NFT Pack"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-[#FFD700] robot-crush font-bold text-base lg:text-2xl uppercase tracking-wide mb-2 font-robot-crush">
                    Lucky nft chance{" "}
                  </h3>

                  <button className="w-full bg-linear-to-r from-cyan-400 via-[#408DF6] to-[#145FE3] border-none rounded-lg py-2 md:py-2.5 lg:py-3 text-xs md:text-sm lg:text-lg font-semibold text-white uppercase tracking-wider cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30">
                    1000 VISION{" "}
                  </button>
                </div>
              </div>
            </div>
          )}
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

export default Upgrades;
