import React from "react";
import BottomNavigation from "./BottomNavigation";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`min-h-screen w-full bg-linear-to-b from-[#002072] to-[#000000] text-white flex flex-col ${className}`}
    >
      <div className="w-full overflow-y-auto pb-24">{children}</div>
      <BottomNavigation />
    </div>
  );
};

export default ResponsiveLayout;
