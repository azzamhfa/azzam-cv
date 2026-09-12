"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function SiteHeader({
  currentSlide,
  totalSlides,
}: {
  currentSlide: number;
  totalSlides: number;
}) {
  return (
    <header className="absolute top-0 w-full z-50 bg-[#EBE6D9]/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none border-b-2 md:border-b-0 border-[#2C241B]/10">
      <div className="h-1.5 md:h-2 w-full bg-[#D4C4A8]">
        <div
          className="h-full bg-[#8C5A2A] transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>
      <div className="flex justify-between items-center p-4 md:p-6 md:px-10">
        <div className="font-black text-xl md:text-2xl text-[#2C241B] tracking-tighter uppercase">
          Profile
        </div>
        <div className="text-[#F4F1EA] text-xs md:text-sm font-bold tracking-widest bg-[#2C241B] px-3 md:px-4 py-1.5 md:py-2 uppercase border border-[#5C4C3C]">
          Slide 0{currentSlide + 1} / 0{totalSlides}
        </div>
      </div>
    </header>
  );
}
export function SiteFooter({
  currentSlide,
  totalSlides,
  unlocked,
  onPrevious,
  onNext,
  onSelect,
}: {
  currentSlide: number;
  totalSlides: number;
  unlocked: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  const nextDisabled =
    currentSlide === totalSlides - 1 || (currentSlide === 6 && !unlocked);

  return (
    <footer className="w-full p-4 md:p-6 md:px-10 border-t-2 md:border-t-4 border-[#2C241B] bg-[#E8E3D9] flex justify-between items-center z-50">
      {/* Tombol Previous */}
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 font-black text-xs uppercase tracking-widest rounded-full border-2 border-[#2C241B] bg-[#F4F1EA] text-[#1A1612] shadow-[2px_2px_0px_0px_#2C241B] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-30 disabled:hover:translate-y-0 disabled:shadow-none"
      >
        <ChevronLeft size={16} />
        Prev
      </button>

      {/* Indikator Slide (Pagination Dots) */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }, (_, index) => {
          const isLocked = !unlocked && index > 6;
          const isActive = currentSlide === index;

          return (
            <button
              key={index}
              onClick={() => (isLocked ? undefined : onSelect(index))}
              disabled={isLocked}
              className={`h-2.5 md:h-3 rounded-full transition-all duration-300 border border-[#2C241B] ${
                isActive
                  ? "w-7 md:w-8 bg-[#8C5A2A]"
                  : isLocked
                    ? "w-2.5 md:w-3 bg-red-900/20 border-red-900/40 cursor-not-allowed"
                    : "w-2.5 md:w-3 bg-[#D4C4A8] hover:bg-[#8C5A2A]/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>

      {/* Tombol Next */}
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 font-black text-xs uppercase tracking-widest rounded-full border-2 border-[#2C241B] bg-[#2C241B] text-[#F4F1EA] shadow-[2px_2px_0px_0px_#8C5A2A] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-30 disabled:hover:translate-y-0 disabled:shadow-none"
      >
        Next
        <ChevronRight size={16} />
      </button>
    </footer>
  );
}
