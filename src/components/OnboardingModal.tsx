import React, { useState } from "react";
import onboardingImage from "../assets/Frame 34.png";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "WELCOME TO VISION RUNNER",
      description: "Run play and earn some $VISION TOKENS",
      image: onboardingImage,
    },
    {
      title: "Earn $VISON TOKENS",
      description: "Access our game and earn our native token",
      image: onboardingImage,
    },
    {
      title: "Get your NFT cards and upgrade",
      description: "Booster packs to level up your gameplay!",
      image: onboardingImage,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-100 p-4">
      <div className="bg-[#011138] rounded-2xl max-w-2xl w-full overflow-hidden border border-[#333333]">
        {/* Image Section */}
        <div className="bg-[#011138] p-4 flex items-center justify-center">
          <div className="bg-[#3A3A3A] rounded-xl border border-[#011138]">
            <img
              src={steps[currentStep].image}
              alt="Onboarding"
              className="w-full object-contain"
            />
          </div>
        </div>
        {/* Progress Indicators */}
        <div className="flex justify-end px-3 gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentStep ? "w-8 bg-[#84DEFA]" : "w-2 bg-[#444444]"
              }`}
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="px-4 bg-[#011138]">
          {/* Title */}
          <h2 className="text-2xl font-bold text-white text-left mb-2 uppercase tracking-wide">
            {steps[currentStep].title}
          </h2>

          {/* Description */}
          <p className="text-white text-left mb-8 text-sm leading-relaxed">
            {steps[currentStep].description
              .split("$VISION")
              .map((part, index) => (
                <span key={index}>
                  {part}
                  {index <
                    steps[currentStep].description.split("$VISION").length -
                      1 && (
                    <span className="font-bold text-[#84DEFA]">
                      $VISION TOKENS
                    </span>
                  )}
                </span>
              ))}
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-start gap-5 items-center mb-8">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-12 py-3 rounded-lg border text-sm font-medium transition-all duration-300 ${
                currentStep === 0
                  ? "bg-[#011138] border-[#444444] text-gray-500 cursor-not-allowed"
                  : "bg-[#011138] border-[#84DEFA] text-white hover:border-white/60 hover:bg-white/10"
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="px-16 py-3 rounded-lg text-sm font-medium text-white transition-all duration-300 bg-linear-to-r from-cyan-400 to-blue-600 hover:shadow-lg hover:shadow-cyan-400/30 hover:-translate-y-0.5"
            >
              {currentStep === steps.length - 1 ? "Get Started" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
