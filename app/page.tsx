"use client";

import { useEffect, useState } from "react";
import { hobbies } from "./components/portfolio-data";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import {
  AuditSlide,
  BasicsSlide,
  CareerSlide,
  ClassifiedSlide,
  HobbySlide,
  LockSlide,
  ReviewSlide,
  FamilySlide,
  SocialSlide,
  DomesticSlide,
  ReligionSlide,
} from "./components/PortfolioSlides";

const MAINTENANCE_MODE = true;

function MaintenancePage() {
  const [notificationStatus, setNotificationStatus] = useState<
    "sending" | "sent" | "failed"
  >("sending");

  useEffect(() => {
    let isActive = true;

    fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "maintenance_page_opened" }),
    })
      .then((response) => {
        if (!response.ok && response.status !== 429) {
          throw new Error(`Notification failed with status ${response.status}.`);
        }
        if (isActive) setNotificationStatus("sent");
      })
      .catch((error: unknown) => {
        console.error("Could not send the maintenance page notification.", error);
        if (isActive) setNotificationStatus("failed");
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F2EA] px-6 py-12 text-[#1F1A17]">
      <article className="w-full max-w-3xl border-4 border-[#2C241B] bg-[#EBE6D9] p-8 shadow-[8px_8px_0px_0px_#2C241B] md:p-12">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-[#8C5A2A]">
          Restricted access
        </p>
        <h1 className="mb-8 text-3xl font-black leading-tight md:text-5xl">
          Oh sorry, he&apos;s currently closing his door and still recovering
          his state.
        </h1>
        <div className="space-y-5 text-base leading-relaxed md:text-lg">
          <p>
            You opened this page. He didn&apos;t expect you would open this page
            again, so he closed it. Are you curious about him? You can contact
            him directly.
          </p>
          <p>
            He has currently closed his <code>door</code> and is still
            recovering from his horrible state.
          </p>
          {notificationStatus === "sent" ? (
            <p>
              Oh, by the way, this page has already sent a notification to him
              that someone with this link has opened it again. Since this link
              was only shared directly with you, he gets notified whenever
              it&apos;s opened. Please note that he has already closed this
              page.
            </p>
          ) : (
            <p aria-live="polite">
              {notificationStatus === "sending"
                ? "This page is sending him a notification that someone opened this link."
                : "This page could not send him a notification. Please try again later."}
            </p>
          )}
        </div>
      </article>
    </main>
  );
}

function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Default totalSlides adalah 6 (Index 0 sampai 5: Basics, Career, Hobby, Audit, Review, Lock)
  const [totalSlides, setTotalSlides] = useState(5);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [activeHobby, setActiveHobby] = useState(0);
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide((slide) => slide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide((slide) => slide - 1);
  };

  const handleUnlock = async () => {
    setIsUnlocking(true);
    try {
      await fetch("api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "secret_pages_opened",
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Unlock tetap berjalan meskipun notifikasi API gagal
    }

    window.setTimeout(() => {
      setIsUnlocked(true);
      setTotalSlides(12); // Total slide bertambah menjadi 12 (0 sampai 11)
      setCurrentSlide(5); // Pindah otomatis ke halaman Classified 1
      setIsUnlocking(false);
    }, 1000);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setCurrentSlide((slide) =>
          slide < totalSlides - 1 ? slide + 1 : slide,
        );
      }
      if (event.key === "ArrowLeft") {
        setCurrentSlide((slide) => (slide > 0 ? slide - 1 : slide));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  useEffect(() => {
    if (currentSlide !== 2) return; // Index HobbySlide sekarang adalah 2
    const interval = window.setInterval(() => {
      setActiveAssetIndex(
        (index) => (index + 1) % hobbies[activeHobby].assets.length,
      );
    }, 3500);
    return () => window.clearInterval(interval);
  }, [currentSlide, activeHobby]);

  const background = {
    backgroundColor: "#F7F2EA",
  };

  return (
    <main
      style={background}
      className="h-[100dvh] w-full text-[#1F1A17] font-sans flex flex-col relative border-4 md:border-8 border-[#2C241B] overflow-hidden rounded-[28px]"
    >
      <SiteHeader currentSlide={currentSlide} totalSlides={totalSlides} />

      <div className="flex-1 relative w-full overflow-hidden">
        {/* Slide Publik (Index 0 - 5) */}
        <BasicsSlide active={currentSlide === 0} />
        <CareerSlide active={currentSlide === 1} />
        <HobbySlide
          active={currentSlide === 2}
          hobbyIndex={activeHobby}
          assetIndex={activeAssetIndex}
          onAssetChange={setActiveAssetIndex}
          onHobbyChange={(index) => {
            setActiveHobby(index);
            setActiveAssetIndex(0);
          }}
        />
        <AuditSlide active={currentSlide === 3} />
        <LockSlide
          active={currentSlide === 4}
          unlocked={isUnlocked}
          unlocking={isUnlocking}
          onUnlock={handleUnlock}
        />

        {/* Slide Rahasia (Hanya dipasang jika isUnlocked === true) */}
        {isUnlocked && (
          <>
            <ClassifiedSlide {...({ active: currentSlide === 5, number: 1 } as any)} />
            <ReligionSlide {...({ active: currentSlide === 6, number: 2 } as any)} />
            <FamilySlide {...({ active: currentSlide === 7, number: 3 } as any)} />
            <DomesticSlide {...({ active: currentSlide === 8, number: 4 } as any)} />
            <SocialSlide {...({ active: currentSlide === 9, number: 5 } as any)} />
            <ReviewSlide {...({ active: currentSlide === 10, number: 6 } as any)} />
            <ClassifiedSlide {...({ active: currentSlide === 11, number: 7 } as any)} />
          </>
        )}
      </div>

      <SiteFooter
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        unlocked={isUnlocked}
        onPrevious={prevSlide}
        onNext={nextSlide}
        onSelect={setCurrentSlide}
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}",
        }}
      />
    </main>
  );
}

export default function StrangerCard() {
  return MAINTENANCE_MODE ? <MaintenancePage /> : <PortfolioPage />;
}
