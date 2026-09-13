type SlideFrameProps = {
  active: boolean;
  children: React.ReactNode;
};

export function SlideFrame({ active, children }: SlideFrameProps) {
  return (
    <div
      className={`slide-shell absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden transition-all duration-700 ease-in-out transform ${
        active
          ? "opacity-100 translate-y-0 scale-100 z-10"
          : "opacity-0 translate-y-8 scale-95 pointer-events-none z-0"
      }`}
    >
      {children}
    </div>
  );
}
