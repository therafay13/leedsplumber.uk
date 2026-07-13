import logo from "@/assets/leeds-plumber-logo.png";

const Logo = ({ isDark = false }: { isDark?: boolean }) => {
  const textColor = isDark ? "text-white" : "text-primary";

  return (
    <div className="flex items-center gap-2.5" aria-label="LeedsPlumber.Uk">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm">
        <img src={logo} alt="LeedsPlumber.Uk logo" className="h-full w-full object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-bebas text-[15px] font-black tracking-[0.2em] ${textColor}`}>
          LEEDS
        </span>
        <span className="font-bebas pl-2 text-[15px] font-black tracking-[0.2em] text-tertiary">
          PLUMBER.UK
        </span>
      </span>
    </div>
  );
};

export default Logo;
