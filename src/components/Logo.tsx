import logo from "@/assets/leeds-plumber-logo.png";

const Logo = ({ isDark = false }: { isDark?: boolean }) => {
  const textColor = isDark ? "text-white" : "text-primary";
  const detailColor = isDark ? "text-white/55" : "text-primary/55";

  return (
    <div className="flex items-center gap-3" aria-label="Leedsplumber.uk">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm">
        <img src={logo} alt="Leedsplumber.uk mark" className="h-full w-full object-contain" />
      </span>
      <span className="flex min-w-0 flex-col whitespace-nowrap">
        <span className={`font-sans text-[17px] font-bold leading-none tracking-[-0.03em] sm:text-[18px] ${textColor}`}>
          Leedsplumber<span className="text-tertiary">.uk</span>
        </span>
        <span className={`mt-1 text-[9px] font-semibold uppercase leading-none tracking-[0.16em] ${detailColor}`}>
          Emergency plumbing · Leeds
        </span>
      </span>
    </div>
  );
};

export default Logo;
