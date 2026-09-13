"use client";
import { useEffect, useState } from "react";

import {
  AlertCircle,
  Briefcase,
  BeerOff,
  ShieldOff,
  Building,
  CircleFadingPlus,
  Ear,
  MapPin,
  Brain,
  Ruler,
  GraduationCap,
  Heart,
  Lock,
  Quote,
  Unlock,
  Wifi,
  Users,
  Home,
  Sparkles,
  ChevronDown,
  User,
  Mosque,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  CigaretteOff,
  Banknote,
  UserCheck,
  Coffee,
  Utensils,
  Shirt,
  Sparkle,
} from "lucide-react";
import { hobbies } from "./portfolio-data";
import { SlideFrame } from "./SlideFrame";

type SlideProps = { active: boolean };

const imageStyle = (image: string) => ({ backgroundImage: `url(${image})` });

export function CoverSlide({ active }: SlideProps) {
  return (
    <SlideFrame active={active}>
      <div className="min-h-full w-full max-w-5/7 mx-auto flex flex-col justify-center px-6 py-24 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 md:gap-4 order-2 md:order-1">
            <Photo
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
              label="my vibe"
              wide
            />
            <Photo
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
              label="little joys"
            />
            <Photo
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80"
              label="daily rhythm"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 order-1 md:order-2">
            {/* <div className="inline-block border-l-4 border-[#A97346] pl-3 md:pl-4">
              <p className="text-[#A97346] font-bold tracking-[0.22em] uppercase text-[10px] md:text-xs">
                
              </p>
            </div> */}
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.06em] text-[#1F1A17] leading-[0.9]">
              Hai
              <br />
              Namaku, Azzam
            </h1>
            <p className="text-lg md:text-2xl text-[#5B4A3F] font-medium border-t border-[#D8C7AF] pt-4 mt-4 leading-relaxed">
              Sebuah
            </p>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

function Photo({
  image,
  label,
  wide = false,
}: {
  image: string;
  label: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`${wide ? "col-span-2 aspect-[2/1]" : "aspect-square"} bg-[#2C241B] bg-cover bg-center rounded-[26px] border border-white/30 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(31,26,23,0.15)] relative`}
      style={imageStyle(image)}
    >
      <div className="absolute inset-0 bg-[#1F1A17]/35" />
    </div>
  );
}
export function BasicsSlide({ active }: SlideProps) {
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);

  // Daftar Foto Carousel Profil
  const profileAssets = [
    {
      name: "me",
      image: "/images/me.jpg",
    },
    {
      name: "casual",
      image: "/images/me2.jpg",
    },
    {
      name: "casual2",
      image: "/images/me3.jpg",
    },
    {
      name: "casual3",
      image: "/images/me1.jpg",
    },
  ];

  // Auto-play Carousel (4 Detik)
  useEffect(() => {
    if (!active || profileAssets.length <= 1) return;
    const interval = setInterval(() => {
      setActiveAssetIndex((prev) => (prev + 1) % profileAssets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [active, profileAssets.length]);

  return (
    <SlideFrame active={active}>
      {/* Container utama pas 1 layar tanpa scroll vertikal */}
      <div className="h-full w-full max-w-5/7 mx-auto flex flex-col justify-center px-6 py-4 md:py-6">
        <SectionTitle number="01" title="General Info" />

        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
          {/* Carousel Foto Profil (35% Width) */}
          <div className="w-full h-full md:w-5/12 bg-[#E8E3D9] border-2 md:border-4 border-[#5C4C3C] shadow-[4px_4px_0px_0px_#2C241B] p-4 flex flex-col overflow-hidden relative rounded-[20px] min-h-[300px] md:min-h-[300px]">
            {/* Header Mini Carousel & Dots Navigation */}
            <div className="flex items-center justify-between mb-3 border-b-2 border-[#D4C4A8] pb-2 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8C5A2A] rounded-full"></div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#2C241B]">
                  Galeri
                </h3>
              </div>
              <div className="flex gap-1.5">
                {profileAssets.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAssetIndex(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      activeAssetIndex === idx
                        ? "w-4 bg-[#8C5A2A]"
                        : "w-1.5 bg-[#D4C4A8] hover:bg-[#5C4C3C]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Slider Images */}
            <div className="flex-1 overflow-hidden relative w-full h-full rounded-xl">
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${activeAssetIndex * 100}%)`,
                }}
              >
                {profileAssets.map((asset, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full shrink-0 flex items-center justify-center p-0.5"
                  >
                    <div
                      className="w-full h-full bg-[#2C241B] bg-cover bg-center border-2 border-[#8C5A2A] relative shadow-inner flex flex-col items-center justify-center rounded-lg overflow-hidden"
                      style={{ backgroundImage: `url(${asset.image})` }}
                    >
                      <div className="absolute inset-0 bg-[#1A1612]/10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Informasi: Grid rapi & tinggi seimbang dengan foto */}
          <div className="w-full md:w-7/12 flex flex-col gap-2.5">
            {/* Nama Lengkap */}
            <Info
              icon={<Heart className="w-4 h-4" />}
              label="Nama Lengkap"
              value="Azzamuddien Hanifa"
            />
            <Info
              icon={<Mosque className="w-4 h-4" />}
              label="Agama"
              value="Islam"
            />

            {/* Grid 2x2 Info Singkat */}
            <div className="grid grid-cols-2 gap-2.5">
              <Info
                icon={<MapPin className="w-4 h-4" />}
                label="TTL"
                value="Surakarta, 22 Maret 2000"
              />
              <Info
                icon={<Brain className="w-4 h-4" />}
                label="MBTI"
                value="INFJ"
              />
              <Info
                icon={<Ruler className="w-4 h-4" />}
                label="TB / BB"
                value="160 cm / 52 kg"
              />
              <Info
                icon={<CircleFadingPlus className="w-4 h-4" />}
                label="Instagram"
                value="@azzamhfa"
              />
            </div>

            {/* Pekerjaan */}
            <Info
              icon={<Briefcase className="w-4 h-4" />}
              label="Pekerjaan"
              value="Pegawai Negeri Sipil"
              detail="Dinas Kependudukan dan Pencatatan Sipil Kota Surakarta"
            />

            {/* Pendidikan */}
            <Info
              icon={<GraduationCap className="w-4 h-4" />}
              label="Pendidikan Terakhir"
              value="Master of Engineering (M.Eng.)"
              detail="Universitas Gadjah Mada"
            />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

function Info({
  icon,
  label,
  value,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="bg-[#F3E9DE]/90 backdrop-blur-sm px-3.5 py-2.5 md:px-4 md:py-3 border border-[#D5B794] rounded-2xl shadow-[0_4px_16px_rgba(44,36,27,0.04)] flex items-center gap-3 md:gap-3.5 transition-all hover:bg-[#F3E9DE]">
      {/* Icon Pill yang lembut */}
      <div className="w-8 h-8 md:w-9 md:h-9 bg-[#2C241B] text-[#F9F4EE] rounded-xl flex items-center justify-center shrink-0 border border-[#8C5A2A]/40 shadow-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] md:text-[11px] text-[#8C5A2A] uppercase tracking-wider font-bold leading-none mb-1">
          {label}
        </p>
        <p className="text-sm md:text-base font-extrabold text-[#1F1A17] tracking-tight truncate leading-tight">
          {value}
        </p>
        {detail && (
          <p className="text-[10px] md:text-xs text-[#6B5A4B] font-medium leading-tight mt-0.5">
            {detail}
          </p>
        )}
      </div>
    </div>
  );
}

export function CareerSlide({ active }: SlideProps) {
  return (
    <SlideFrame active={active}>
      <div className="min-h-full w-full max-w-5/7 mx-auto flex flex-col justify-center px-6 py-24 md:p-12">
        <SectionTitle number="02" title="Pekerjaan" />

        <div className="flex flex-col gap-6 md:gap-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div
              className="overflow-hidden shadow-lg border-2 border-[#A97346] transition-transform duration-300 hover:scale-[1.02]"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            >
              <Photo image="/images/work1.jpg" label="work mode" />
            </div>

            <div
              className="overflow-hidden shadow-lg border-2 border-[#A97346] transition-transform duration-300 hover:scale-[1.02]"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            >
              <Photo image="/images/work2.jpg" label="team work" />
            </div>

            <div
              className="overflow-hidden shadow-lg border-2 border-[#A97346] transition-transform duration-300 hover:scale-[1.02]"
              style={{
                borderRadius: "40% 60% 60% 40% / 70% 30% 70% 30%",
              }}
            >
              <Photo image="/images/work4.jpg" label="daily rhythm" />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#2C241B] text-[#F4F1EA] p-5 md:p-6 border-l-4 md:border-l-8 border-[#A97346] shadow-[4px_4px_0px_0px_#A97346] flex flex-col justify-between rounded-[20px]">
              <div>
                <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-[#D6B793] mb-2 md:mb-3" />
                <h3 className="text-lg md:text-xl font-black tracking-tight">
                  Pegawai Negeri Sipil
                </h3>
              </div>
              <p className="text-[#E9D8C9] text-[11px] md:text-xs tracking-[0.18em] uppercase mt-2">
                Dinas Kependudukan dan Pencatatan Sipil Kota Surakarta
              </p>
            </div>

            <InfoBox
              label="Deskripsi Singkat"
              value="Alhamdulillah, Sejak 2025 kemarin, Allah berikan diri ini sebuah amanah untuk bekerja disini, menjadi Pegawai Negeri Sipil di Homebase adalah sebuah hal istimewa."
            />
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#E8E3D9] p-5 md:p-6 border-2 border-[#5C4C3C] shadow-[4px_4px_0px_0px_#2C241B]">
      <p className="text-[10px] md:text-xs text-[#8C5A2A] mb-1 uppercase tracking-widest font-black">
        {label}
      </p>
      <p className="text-base md:text-md text-[#1A1612] tracking-tight leading-snug">
        {value}
      </p>
    </div>
  );
}
export function HobbySlide({
  active,
  hobbyIndex,
  assetIndex,
  onAssetChange,
  onHobbyChange,
}: {
  active: boolean;
  hobbyIndex: number;
  assetIndex: number;
  onAssetChange: (index: number) => void;
  onHobbyChange: (index: number) => void;
}) {
  const hobby = hobbies[hobbyIndex];

  return (
    <SlideFrame active={active}>
      <div className="min-h-full w-full max-w-5/7 mx-auto flex flex-col pt-24 pb-2 px-6 md:pt-12 md:pb-2 md:px-12 h-full">
        {/* =========================
            SECTION TITLE
        ========================== */}
        <SectionTitle number="03" title="Hobi dan Kesukaan" />

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 mb-3 min-h-0">
          {/* =========================
              LEFT - IMAGE SLIDER
          ========================== */}
          <div className="w-full md:w-5/12 bg-[#F3E9DE] border-2 md:border-[3px] border-[#D5B794] shadow-[0_16px_40px_rgba(31,26,23,0.08)] p-3 md:p-4 flex flex-col overflow-hidden rounded-[24px] min-h-0">
            {/* IMAGE INDICATOR */}
            <div className="flex items-center justify-between mb-3 border-b border-[#D9C7AF] pb-2 shrink-0">
              <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#2C241B]"></h3>

              <div className="flex gap-1.5">
                {hobby.assets.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onAssetChange(index)}
                    className={`h-1.5 transition-all rounded-full ${
                      assetIndex === index
                        ? "w-4 bg-[#A97346]"
                        : "w-1.5 bg-[#DCC6A4]"
                    }`}
                    aria-label={`View asset ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* IMAGE SLIDER */}
            <div className="flex-1 overflow-hidden min-h-0">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${assetIndex * 100}%)`,
                }}
              >
                {hobby.assets.map((asset) => (
                  <div
                    key={asset.name}
                    className="w-full h-full shrink-0 p-0.5"
                  >
                    <div className="w-full h-full relative rounded-[16px] overflow-hidden border-2 border-[#A97346] bg-[#1F1A17]">
                      <img
                        src={asset.image}
                        alt={asset.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT - DESCRIPTION
          ========================== */}
          <div className="w-full md:w-7/12 bg-[#F3E9DE] border-2 md:border-[3px] border-[#D5B794] p-4 md:p-6 flex flex-col min-h-0 overflow-hidden rounded-[24px]">
            {/* HEADER */}
            <div className="flex items-center gap-3 mb-3 border-b border-[#D9C7AF] pb-3 shrink-0">
              {hobby.icon}

              <h3 className="text-xl md:text-3xl font-black text-[#1F1A17] tracking-[-0.05em]">
                {hobby.title}
              </h3>
            </div>

            {/* SCROLLABLE DESCRIPTION */}
            <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3">
              {hobby.desc.map((item) => {
                const [title, ...rest] = item.split(":");

                return (
                  <div
                    key={item}
                    className="flex gap-3 items-start bg-[#F4F1EA] p-3 border border-[#D4C4A8]"
                  >
                    {/* BULLET */}
                    <div className="w-2.5 h-2.5 bg-[#8C5A2A] mt-1 shrink-0" />

                    {/* DESCRIPTION */}
                    <p className="text-xs md:text-sm font-bold text-[#2C241B] leading-snug">
                      <span className="font-black text-[#1A1612] block mb-0.5">
                        {title}:
                      </span>

                      {rest.join(":")}
                    </p>
                  </div>
                );
              })}

              {/* =========================
                  FAVORITE TRACKS
              ========================== */}
              {hobby.songs && (
                <div className="pt-3 border-t-2 border-[#D4C4A8]">
                  <p className="text-xs font-black uppercase tracking-widest text-[#8C5A2A] mb-2">
                    Favorite Tracks
                  </p>

                  <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
                    {hobby.songs.map((song) => (
                      <iframe
                        key={song.src}
                        title={song.title}
                        src={song.src}
                        height="150"
                        className="w-full max-w-[300px] shrink-0"
                        allow="autoplay *; encrypted-media *;"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =========================
            HOBBY NAVIGATION
        ========================== */}
        <div className="flex gap-2 md:gap-4 overflow-x-auto hide-scrollbar pb-1 shrink-0">
          {hobbies.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onHobbyChange(index)}
              className={`flex-1 min-w-[120px] p-3 border-2 flex flex-col items-center gap-2 font-black uppercase tracking-widest ${
                hobbyIndex === index
                  ? "bg-[#2C241B] text-[#F4F1EA]"
                  : "bg-[#E8E3D9] text-[#2C241B]"
              }`}
            >
              {item.icon}

              <span className="text-[10px] text-center">{item.shortTitle}</span>
            </button>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

export function AuditSlide({ active }: SlideProps) {
  return (
    <SlideFrame active={active}>
      <div className="min-h-full max-w-5/7 mx-auto flex flex-col justify-center px-6 py-24 md:p-12">
        <SectionTitle number="04" title="Pros and Cons" />
        <div className="grid md:grid-cols-2 gap-8">
          <AuditPanel
            dark
            title="Kelebihan"
            icon={<Wifi />} // Tambahkan icon jika dibutuhkan
            items={[
              {
                title: "Kemampuan Analisis dan Planning",
                desc: "Ya betul, aku cukup pintar untuk mengatur sebuah rencana / skenario, dari bagaimana awal hingga resiko yang mungkin terjadi.",
              },
              {
                title: "Problem-oriented solving",
                desc: "Mungkin karena aku menjalani kehidupan ku dalam bidang teknik, idk if it's a good thing or not. Tapi dengan begitu, setidaknya aku bisa menyelesaikan masalah dengan tepat",
              },
              {
                title: "Chill dan Slow-paced",
                desc: " ",
              },
            ]}
          />
          {/* <AuditPanel
            dark
            title="Kelebihan"
            icon={<Wifi />} // Tambahkan icon jika dibutuhkan
            items={[
              
            ]}
          /> */}
          <AuditPanel
            title="Kekurangan"
            icon={<AlertCircle />}
            items={[
              {
                title: "Perfectionist",
                desc: "Salah satu resiko menjadi `si paling teknis`, adalah ini. Aku begitu teliti ketika dihadapkan sebuah perencanaan / project yang berdampak besar.",
              },
              {
                title: "Keeping things simple",
                desc: "Lucunya adalah aku bisa seperti ini, tidak mau terlalu `ngoyo `.",
              },
              {
                title: "GAK BISA SENI SAMA SEKALI",
                desc: "Betul, apa mungkin karena logika dan analisis ku mentok kanan. Jadi aku gak punya skill seni apapun.",
              },
            ]}
          />
        </div>
      </div>
    </SlideFrame>
  );
}

function AuditPanel({
  dark = false,
  title,
  icon,
  items,
}: {
  dark?: boolean;
  title: string;
  icon?: React.ReactNode;
  items: { title: string; desc: string }[];
}) {
  return (
    <div
      className={`${
        dark
          ? "bg-[#2C241B] text-[#F4F1EA]"
          : "border-4 border-[#2C241B] text-[#1A1612]"
      } p-6 md:p-10`}
    >
      <div className="flex items-center gap-3 border-b-2 border-[#8C5A2A] pb-4 mb-6">
        {icon}
        <h2 className="text-xl md:text-2xl font-black uppercase">{title}</h2>
      </div>
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 items-start">
            <div className="w-3 h-3 bg-[#B59960] mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-extrabold uppercase">{item.title}</h3>
              <p
                className={`text-sm font-medium mt-1 ${
                  dark ? "text-[#D4C4A8]" : "text-[#5C4C3C]"
                }`}
              >
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ReviewSlide({ active }: SlideProps) {
  return (
    <SlideFrame active={active}>
      <div className="min-h-full max-w-5xl mx-auto flex flex-col justify-center px-6 py-12 md:py-6">
        {/* Section Title */}
        <SectionTitle number="06" title="What people labelled me" />

        {/* Grid 3 Kartu Testimonial / Label */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:gap-8 mt-6">
          {/* Card 1: Personal Note / Quote */}
          <div className="bg-[#F3E9DE] p-6 border-4 border-[#2C241B] shadow-[6px_6px_0px_0px_#D4A779] rounded-[24px] flex flex-col justify-between text-left">
            <div>
              <Quote className="mb-4 text-[#A97346] w-8 h-8" />
              <p className="text-base md:text-lg font-black text-[#1F1A17] tracking-tight leading-snug mb-6">
                &quot;Kamu benar-benar orang yang loyal zam dan masalahnya hanya
                beberapa orang saja yang bisa menyadari itu. Siapapun itu, dia
                adalah orang yang beruntung.&quot;
              </p>
            </div>
            <div className="inline-flex items-center gap-3 bg-[#2C241B] px-3.5 py-2 text-[#F9F4EE] rounded-full self-start">
              <span className="font-black text-sm">P</span>
              <span className="font-bold uppercase tracking-[0.15em] text-[10px]">
                Konselorku
              </span>
            </div>
          </div>

          {/* Card 2: Label dari Teman / Rekan (Contoh) */}
          <div className="bg-[#F3E9DE] p-6 border-4 border-[#2C241B] shadow-[6px_6px_0px_0px_#D4A779] rounded-[24px] flex flex-col justify-between text-left">
            <div>
              <Quote className="mb-4 text-[#A97346] w-8 h-8" />
              <p className="text-base md:text-lg font-black text-[#1F1A17] tracking-tight leading-snug mb-6">
                &quot;Kata siapa kamu nggak belajar? Kamu itu selalu belajar
                tapi dengan cara yang berbeda dari murid-murid ku yang
                lain.&quot;
              </p>
            </div>
            <div className="inline-flex items-center gap-3 bg-[#2C241B] px-3.5 py-2 text-[#F9F4EE] rounded-full self-start">
              <span className="font-black text-sm">F</span>
              <span className="font-bold uppercase tracking-[0.15em] text-[10px]">
                Mentorku
              </span>
            </div>
          </div>

          {/* Card 3: Label dari Orang Lain / Pekerjaan (Contoh) */}
          <div className="bg-[#F3E9DE] p-6 border-4 border-[#2C241B] shadow-[6px_6px_0px_0px_#D4A779] rounded-[24px] flex flex-col justify-between text-left">
            <div>
              <Quote className="mb-4 text-[#A97346] w-8 h-8" />
              <p className="text-base md:text-lg font-black text-[#1F1A17] tracking-tight leading-snug mb-6">
                &quot;Mas Azzam, kamu itu baik banget dengan orang-orang.
                Pendengar dan Pemberi Saran terbaik&quot;
              </p>
            </div>
            <div className="inline-flex items-center gap-3 bg-[#2C241B] px-3.5 py-2 text-[#F9F4EE] rounded-full self-start">
              <span className="font-black text-sm">C</span>
              <span className="font-bold uppercase tracking-[0.15em] text-[10px]">
                Teman Dekat dari SMP
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

export function LockSlide({
  active,
  unlocked,
  unlocking,
  onUnlock,
}: {
  active: boolean;
  unlocked: boolean;
  unlocking: boolean;
  onUnlock: () => void;
}) {
  return (
    <SlideFrame active={active}>
      <div className="min-h-full max-w-3xl mx-auto flex flex-col justify-center px-6 py-24 text-center">
        <div className="bg-[#2C241B] p-8 md:p-16 border-8 border-[#A97346] text-[#F4F1EA] rounded-[30px] shadow-[12px_12px_0px_0px_#D4A779]">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#1A1612] rounded-full flex items-center justify-center border-4 border-[#D6B793]">
              {unlocked ? (
                <Unlock className="text-[#D6B793]" />
              ) : (
                <Lock className="text-[#D6B793]" />
              )}
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.05em] mb-6">
            Oh hey, You've scrolled too deep.
          </h2>
          <p className="text-[#E9D8C9] font-medium mb-10 leading-relaxed">
            Let's dive deeper into my personal life.
          </p>
          <button
            onClick={onUnlock}
            disabled={unlocked || unlocking}
            className="w-full py-5 bg-[#A97346] font-black uppercase tracking-[0.2em] border-4 border-[#A97346] rounded-full text-[#F9F4EE]"
          >
            {unlocking
              ? "Opening..."
              : unlocked
                ? "Access granted"
                : "Let's go deeper"}
          </button>
        </div>
      </div>
    </SlideFrame>
  );
}

export function ClassifiedSlide({
  active,
  number,
}: SlideProps & { number: number }) {
  return (
    <SlideFrame active={active}>
      <div className="min-h-full max-w-5/8 mx-auto flex flex-col justify-center px-6 py-24 md:p-12">
        {number === 1 ? (
          <div className="space-y-6">
            <div className="bg-[#2C241B] text-[#F4F1EA] p-6 md:p-8 border-b-4 border-[#A97346] shadow-xl relative overflow-hidden text-left rounded-[24px]">
              <div className="absolute top-3 right-3 md:top-4 md:right-4 border-2 border-[#D6B793] text-[#F4E7D8] font-bold px-3 py-1 uppercase text-[10px] md:text-xs tracking-[0.18em] rounded-full bg-[#1F1A17]/70">
                personal note
              </div>

              <p className="text-[#D6B793] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-1">
                Slide 01
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-[-0.05em] text-[#F4F1EA]">
                Siapa Azzam?
              </h2>
              {/* <p className="text-[#E9D8C9] font-medium text-xs md:text-sm uppercase tracking-[0.18em] mt-2 border-t border-[#5C4C3C] pt-2">
                values, perspective, and the way I approach life
              </p> */}
            </div>

            <div className="bg-[#F3E9DE] p-6 md:p-10 border-2 md:border-[3px] border-[#D5B794] shadow-[8px_8px_0px_0px_#2C241B] space-y-6 text-left rounded-[24px]">
              <div className="bg-[#F9F4EE] p-4 md:p-6 border border-[#E3D0B1] relative rounded-[18px]">
                <div className="w-2 h-2 bg-[#A97346] absolute top-2 left-2 rounded-full"></div>
                <p className="text-[10px] md:text-xs font-bold text-[#A97346] uppercase tracking-[0.2em] mb-1">
                  introduction
                </p>
                <p className="text-sm md:text-base font-medium text-[#1F1A17] leading-relaxed">
                  - "Just a regular man" mungkin adalah sebuah sebutan yang
                  tepat buat diri ini. Orang yang kaku kayak kanebo kering tapi
                  bisa mengalir jadi orang yang bisa mencairkan suasana ketika
                  sudah akrab.
                </p>
                <p className="text-sm md:text-base font-medium text-[#1F1A17] leading-relaxed">
                  - Pribadi yang Hidup dari keluarga yang diberikan rezeki
                  lebih, yang sejak dulu hidup dengan lifestyle yang sederhana /
                  lowprofile serta punya tujuan dalam hidup menjadi seorang yang
                  bisa memberikan manfaat kepada orang lain dan terus belajar.
                </p>
                <div className="flex items-start gap-2.5 bg-[#F4FDF7] p-2.5 my-2 rounded-xl border border-[#C5E1A5]">
                  <div className="p-1 bg-[#E8F5E9] text-[#2E7D32] rounded-md shrink-0 mt-0.5">
                    <Ear className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-[#1F1A17] leading-snug">
                      Pendengar & Pemberi Saran Yang Baik
                    </p>
                    <p className="text-[11px] text-[#558B2F] font-medium">
                      Kusadari ini berdasarkan apa yang teman-teman dekatku
                      katakan tentang aku.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-[#F4FDF7] p-2.5 my-2 rounded-xl border border-[#C5E1A5]">
                  <div className="p-1 bg-[#E8F5E9] text-[#2E7D32] rounded-md shrink-0 mt-0.5">
                    <CigaretteOff className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-[#1F1A17] leading-snug">
                      Bukan Perokok dan Tidak dari Keluarga Perokok
                    </p>
                    <p className="text-[11px] text-[#558B2F] font-medium">
                      Salah satu bagian dari 26,8% populasi di Indonesia.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-[#F4FDF7] p-2.5 my-2 rounded-xl border border-[#C5E1A5]">
                  <div className="p-1 bg-[#E8F5E9] text-[#2E7D32] rounded-md shrink-0 mt-0.5">
                    <BeerOff className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-[#1F1A17] leading-snug">
                      Bukan Pemabuk / Peminum
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-[#F4FDF7] p-2.5 my-2 rounded-xl border border-[#C5E1A5]">
                  <div className="p-1 bg-[#E8F5E9] text-[#2E7D32] rounded-md shrink-0 mt-0.5">
                    <Banknote className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-[#1F1A17] leading-snug">
                      Bebas Pinjol
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-[#F4FDF7] p-2.5 my-2 rounded-xl border border-[#C5E1A5]">
                  <div className="p-1 bg-[#E8F5E9] text-[#2E7D32] rounded-md shrink-0 mt-0.5">
                    <ShieldOff className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-[#1F1A17] leading-snug">
                      Bebas Judol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black text-[#A97346] tracking-[-0.06em]">
              Salam Kenal!
            </h2>
            <p className="text-sm md:text-sm text-[#A97346] tracking-[-0.06em]">
              Memang masih banyak kurangnya, tapi semoga berkenan.
            </p>
            <p className="text-sm md:text-sm text-grey tracking-[-0.06em]">
              Made with ❤️ by Azzamhfa.
            </p>
          </div>
        )}
      </div>
    </SlideFrame>
  );
}

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-end border-b-4 border-[#2C241B] pt-4 pb-4 mb-2">
      <div>
        <p className="text-[#8C5A2A] font-bold tracking-widest uppercase text-xs mb-1">
          Section {number}
        </p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#1A1612] uppercase">
          {title}
        </h2>
      </div>
    </div>
  );
}

interface FamilySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  desc: string[];
  assets: { name: string; image: string }[];
}
export function FamilySlide({ active }: { active: boolean }) {
  const [openSection, setOpenSection] = useState<string>("general");
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);

  // Variabel desc bisa berupa string (paragraf) ATAU string[] (poin-poin)
  const familySections: {
    id: string;
    title: string;
    icon: React.ReactNode;
    desc: string | string[];
    assets: { name: string; image: string }[];
  }[] = [
    {
      id: "general",
      title: "Keluarga",
      icon: <Home className="w-5 h-5" />,
      desc: "Inilah keluarga ku, sebuah keluarga kecil, keluarga sederhana yang membesarkan aku dari lahir sampai saat ini. Kami semua sangat bersyukur diberikan banyak hal, seperti Pendidikan yang tinggi, Rezeki yang cukup untuk kami.",
      assets: [
        {
          name: "Gathering",
          image: "/images/fam2.jpg",
        },
        {
          name: "Gathering2",
          image: "/images/fam3.jpg",
        },
      ],
    },
    {
      id: "parents",
      title: "Orang Tua",
      icon: <Heart className="w-5 h-5" />,
      desc: [
        "Orang yang mengusahakan yang terbaik bagi anak-anaknya sampai ditahap ini. Mengajarkan ku bagaimana menjadi pribadi yang low profile.",
        "Bapak: Seorang Guru Swasta yang saat ini diamanahi menjadi Wakil Kepala Sekolah.",
        "Ibu: Seorang Dosen di Universitas Sebelas Maret.",
      ],
      assets: [
        {
          name: "Orang Tua",
          image: "/images/parent.jpg",
        },
      ],
    },
    {
      id: "siblings",
      title: "Adik",
      icon: <Users className="w-5 h-5" />,
      desc: "Salah satu manusia yang bikin pusing Masnya, tapi menjadi salah satu manusia yang paling kusayangi dan kujaga sepenuh hati. Saat ini sedang struggle dengan Skripsi dan Studi Magister (Fastrack) nya di UGM",
      assets: [
        {
          name: "Momen Bersama Adik",
          image: "/images/sis.jpg",
        },
        {
          name: "Momen Bersama Adik2",
          image: "/images/sis2.jpg",
        },
      ],
    },
  ];

  const currentSectionData =
    familySections.find((item) => item.id === openSection) || familySections[0];

  useEffect(() => {
    if (!active || currentSectionData.assets.length <= 1) return;
    const interval = setInterval(() => {
      setActiveAssetIndex(
        (prev) => (prev + 1) % currentSectionData.assets.length,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [active, openSection, currentSectionData.assets.length]);

  const toggleSection = (id: string) => {
    if (openSection === id) {
      setOpenSection("general");
    } else {
      setOpenSection(id);
    }
    setActiveAssetIndex(0);
  };

  return (
    <SlideFrame active={active}>
      {/* 1. Kurangi padding vertikal agar tidak sempit di layar HP */}
      <div className="h-full w-full max-w-5/7 mx-auto flex flex-col pt-16 pb-4 px-4 md:pt-10 md:pb-2 md:px-12">
        {/* Header Title */}
        <div className="flex items-end justify-between border-b-2 md:border-b-4 border-[#2C241B] pb-2 md:pb-4 mb-3 shrink-0">
          <div>
            <p className="text-[#8C5A2A] font-bold tracking-widest uppercase text-[10px] md:text-sm mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5" /> Section 03 //
              Family Roots
            </p>
            <h2 className="text-2xl md:text-5xl font-black tracking-tighter text-[#1A1612] uppercase">
              Keluarga
            </h2>
          </div>
        </div>

        {/* 2. Main Layout dengan min-h-0 agar flex-1 bekerja optimal di mobile */}
        <div className="flex-1 flex flex-col md:flex-row gap-3 md:gap-6 min-h-0 overflow-hidden">
          {/* KIRI / ATAS: Carousel Foto (Dikunci tingginya di Mobile, flex-1 di Desktop) */}
          <div className="w-full md:w-5/12 h-[400px] md:h-auto md:flex-1 bg-[#E8E3D9] border-2 md:border-4 border-[#5C4C3C] shadow-[4px_4px_0px_0px_#2C241B] p-3 md:p-4 flex flex-col overflow-hidden relative rounded-[20px] shrink-0">
            <div className="flex items-center justify-between mb-2 border-b-2 border-[#D4C4A8] pb-1.5 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#8C5A2A] rounded-full"></div>
                <h3 className="text-[10px] md:text-sm font-black uppercase tracking-widest text-[#2C241B]">
                  {currentSectionData.title}
                </h3>
              </div>
              <div className="flex gap-1.5">
                {currentSectionData.assets.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAssetIndex(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      activeAssetIndex === idx
                        ? "w-4 bg-[#8C5A2A]"
                        : "w-1.5 bg-[#D4C4A8] hover:bg-[#5C4C3C]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Slider Foto menggunakan <img> asli */}
            <div className="flex-1 overflow-hidden relative w-full rounded-[14px] border-2 border-[#8C5A2A] bg-[#1F1A17]">
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${activeAssetIndex * 100}%)`,
                }}
              >
                {currentSectionData.assets.map((asset, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full shrink-0 relative flex items-center justify-center"
                  >
                    <img
                      src={asset.image}
                      alt={asset.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Efek gradient tipis supaya estetik, tanpa merusak kejelasan gambar utama */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1612]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KANAN / BAWAH: Accordion Menu (Mengambil sisa layar & bisa di-scroll internal) */}
          <div className="w-full md:w-7/12 flex-1 bg-[#E8E3D9] border-2 md:border-4 border-[#5C4C3C] shadow-[4px_4px_0px_0px_#2C241B] p-3.5 md:p-6 flex flex-col overflow-y-auto hide-scrollbar rounded-[20px] gap-2.5 min-h-0">
            {familySections.map((section) => {
              const isOpen = openSection === section.id;

              return (
                <div
                  key={section.id}
                  className={`border-2 transition-all rounded-xl overflow-hidden shrink-0 ${
                    isOpen
                      ? "border-[#2C241B] bg-[#F4F1EA] shadow-[3px_3px_0px_0px_#2C241B]"
                      : "border-[#D4C4A8] bg-[#F4F1EA]/60 hover:bg-[#F4F1EA]"
                  }`}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-2.5 md:p-4 flex items-center justify-between text-left transition-colors"
                  >
                    <div className="flex items-center gap-2.5 md:gap-3">
                      <div
                        className={`p-1.5 md:p-2 rounded-lg ${
                          isOpen
                            ? "bg-[#2C241B] text-[#F4F1EA]"
                            : "bg-[#D4C4A8] text-[#2C241B]"
                        }`}
                      >
                        {section.icon}
                      </div>
                      <span className="font-black text-xs md:text-lg text-[#1A1612] uppercase tracking-tight">
                        {section.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 md:w-5 md:h-5 text-[#8C5A2A] transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Area Konten Akordion */}
                  {isOpen && (
                    <div className="px-3 md:px-4 pb-3 md:pb-4 pt-1 border-t border-[#D4C4A8]">
                      {Array.isArray(section.desc) ? (
                        <ul className="space-y-1.5 bg-[#E8E3D9]/50 p-2.5 md:p-3.5 rounded-lg border border-[#D4C4A8]">
                          {section.desc.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-[11px] md:text-sm font-semibold text-[#2C241B] leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 bg-[#8C5A2A] rounded-full mt-1.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[11px] md:text-sm font-semibold text-[#2C241B] leading-relaxed bg-[#E8E3D9]/50 p-2.5 md:p-3.5 rounded-lg border border-[#D4C4A8]">
                          {section.desc}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

export function SocialSlide({ active }: { active: boolean }) {
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);

  // Data Lingkaran Sosial & Pertemanan
  const socialData = {
    title: "Friends & Social Circle",
    assets: [
      {
        name: "",
        image: "/images/friend1.jpg",
      },
      {
        name: "",
        image: "/images/friend2.png",
      },
      {
        name: "",
        image: "/images/friend3.jpg",
      },
    ],
    circles: [
      {
        title: "Pertemanan",
        icon: <Users className="w-4 h-4 text-[#8C5A2A]" />,
        desc: "Alhamdulillah, Allah selalu berikan diri ini hubungan pertemanan yang sehat dan Jika bertemu dengan orang yang kurang baik, pasti selalu dijauhkan. Tidak perlu yang selalu membuat diri ini berkembang, Namun setidaknya mereka memberikan energi positif. Kebanyakan dari mereka adalah orang yang baik, mampu memberikan tangan mereka, dan tentunya tidak menyakiti perasaan.",
      },
      {
        title: "Gaya Interaksi & Nongkrong",
        icon: <Coffee className="w-4 h-4 text-[#8C5A2A]" />,
        desc: "Aku orang yang introvert cukup kewalahan jika bertemu orang pertama kalinya, seperti yang dijelaskan diawal MBTI tadi. Namun aku bukan se-introvert itu. Aku cukup bersosial di Lingkungan Rumahku, di Lingkungan Pekerjaanku, di Lingkungan Pendidikanku, dan Sedikit Bersosial di Lingkungan Hobi ku. Aku lebih prefer dalam Circle Kecil",
      },
    ],
  };

  // Auto-play carousel foto sosial
  useEffect(() => {
    if (!active || socialData.assets.length <= 1) return;
    const interval = setInterval(() => {
      setActiveAssetIndex((prev) => (prev + 1) % socialData.assets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [active, socialData.assets.length]);

  return (
    <SlideFrame active={active}>
      <div className="min-h-full w-full max-w-5/7 mx-auto flex flex-col pt-20 pb-10 px-6 md:pt-10 md:pb-6 md:px-12 h-full">
        {/* Header Title */}
        <div className="flex items-end justify-between border-b-2 md:border-b-4 border-[#2C241B] pb-3 md:pb-4 mb-4 shrink-0">
          <div>
            <p className="text-[#8C5A2A] font-bold tracking-widest uppercase text-xs md:text-sm mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Section 05 // Social Life
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#1A1612] uppercase">
              Friends & Social
            </h2>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 mb-2 min-h-0">
          {/* KIRI: Carousel Foto Sosial (35% Width) */}
          <div className="w-full h-full md:w-5/12 bg-[#E8E3D9] border-2 md:border-4 border-[#5C4C3C] shadow-[4px_4px_0px_0px_#2C241B] p-4 flex flex-col overflow-hidden relative rounded-[20px]">
            <div className="flex items-center justify-between mb-3 border-b-2 border-[#D4C4A8] pb-2 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8C5A2A] rounded-full"></div>
                <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#2C241B]">
                  Social Moments
                </h3>
              </div>
              {/* Dots Navigation */}
              <div className="flex gap-1.5">
                {socialData.assets.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAssetIndex(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      activeAssetIndex === idx
                        ? "w-4 bg-[#8C5A2A]"
                        : "w-1.5 bg-[#D4C4A8] hover:bg-[#5C4C3C]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Photo Container */}
            <div className="flex-1 overflow-hidden relative w-full h-full min-h-[180px] md:min-h-[250px] rounded-xl">
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${activeAssetIndex * 100}%)`,
                }}
              >
                {socialData.assets.map((asset, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full shrink-0 flex items-center justify-center p-0.5"
                  >
                    <div
                      className="w-full h-full bg-[#2C241B] bg-cover bg-center border-2 border-[#8C5A2A] relative shadow-inner flex flex-col items-center justify-center rounded-lg overflow-hidden"
                      style={{ backgroundImage: `url(${asset.image})` }}
                    >
                      <div className="absolute inset-0 bg-[#1A1612]/20" />
                      <span className="text-[#F4F1EA] text-[10px] md:text-xs font-bold uppercase tracking-widest bg-[#1A1612]/80 backdrop-blur-sm px-3 py-1.5 border border-[#8C5A2A] text-center z-10 rounded-md">
                        {asset.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KANAN: Flat Container Tanpa Accordion (65% Width) */}
          <div className="w-full md:w-7/12 bg-[#E8E3D9] border-2 md:border-4 border-[#5C4C3C] shadow-[4px_4px_0px_0px_#2C241B] p-4 md:p-6 flex flex-col overflow-y-auto rounded-[20px] gap-3">
            {socialData.circles.map((item, index) => (
              <div
                key={index}
                className="bg-[#F4F1EA] p-3.5 md:p-4 rounded-xl border-2 border-[#2C241B] shadow-[3px_3px_0px_0px_#2C241B] flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-[#E8E3D9] rounded-md border border-[#D4C4A8]">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-sm md:text-base text-[#1A1612] uppercase tracking-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs md:text-sm font-semibold text-[#2C241B] leading-relaxed pl-1 text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

export function DomesticSlide({ active }: SlideProps) {
  return (
    <SlideFrame active={active}>
      <div className="min-h-full max-w-5/8 mx-auto flex flex-col justify-center px-6 py-24 md:p-12">
        <div className="space-y-6">
          {/* Banner Header */}
          <div className="bg-[#2C241B] text-[#F4F1EA] p-6 md:p-8 border-b-4 border-[#A97346] shadow-xl relative overflow-hidden text-left rounded-[24px]">
            <div className="absolute top-3 right-3 md:top-4 md:right-4 border-2 border-[#D6B793] text-[#F4E7D8] font-bold px-3 py-1 uppercase text-[10px] md:text-xs tracking-[0.18em] rounded-full bg-[#1F1A17]/70">
              Skill di Rumah
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.05em] text-[#F4F1EA]">
              Household & Cooking
            </h2>
          </div>

          {/* Content Card Utama */}
          <div className="bg-[#F3E9DE] p-6 md:p-10 border-2 md:border-[3px] border-[#D5B794] shadow-[8px_8px_0px_0px_#2C241B] space-y-4 text-left rounded-[24px]">
            {/* Container 1: Cleaning & Laundry */}
            <div className="bg-[#F9F4EE] p-4 md:p-6 border border-[#E3D0B1] relative rounded-[18px] space-y-3">
              <div className="w-2 h-2 bg-[#A97346] absolute top-2 left-2 rounded-full"></div>
              <p className="text-[10px] md:text-xs font-bold text-[#A97346] uppercase tracking-[0.2em] mb-1">
                cleaning & home care
              </p>

              {/* Skill Pro Cleaner */}
              <div className="flex items-start gap-3 bg-[#F4FDF7] p-3.5 rounded-xl border border-[#C5E1A5]">
                <div className="p-2 bg-[#E8F5E9] text-[#2E7D32] rounded-md shrink-0 mt-0.5">
                  <Sparkle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold text-[#1F1A17] leading-snug">
                    Intermediate to Pro Cleaner 🧹
                  </p>
                  <p className="text-xs md:text-sm text-[#558B2F] font-medium mt-1 leading-relaxed">
                    Alhamdulillah Ibukku selalu mengajari makna Mandiri sejak
                    kecil, &quot;dipaksa&quot; untuk merapikan kamar sendiri.
                    Ditambah 6 tahun ngekost (S1&amp;S2) cukup mengasah skill
                    tersebut hingga sampai saat ini. (Ya walaupun masih belum
                    sebersih ibukku)
                  </p>
                </div>
              </div>
              {/* Kelemahan: Setrika */}

              <div className="flex items-start gap-2.5 bg-[#FFF8E1] p-3 rounded-xl border border-[#FFE082]">
                <div className="p-1.5 bg-[#FFF3E0] text-[#E65100] rounded-md shrink-0 mt-0.5">
                  <Shirt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-[#1F1A17] leading-snug">
                    Weakness: Setrika Pakaian 🧺
                  </p>
                  <p className="text-[11px] text-[#E65100] font-medium mt-0.5">
                    Dari semua skillset diatas, ini yang paling malesin untuk
                    dilakukan. Bisa dan Lumayan Rapi, tapi capek banget
                    dibandingkan dengan Skillset lainnya
                  </p>
                </div>
              </div>
            </div>

            {/* Container 2: Cooking Skill */}

            <div className="bg-[#F9F4EE] p-4 md:p-6 border border-[#E3D0B1] relative rounded-[18px]">
              <div className="w-2 h-2 bg-[#A97346] absolute top-2 left-2 rounded-full"></div>
              <p className="text-[10px] md:text-xs font-bold text-[#A97346] uppercase tracking-[0.2em] mb-1">
                cooking skill
              </p>

              <div className="flex items-start gap-2.5 bg-[#F4FDF7] p-3 rounded-xl border border-[#FFCC80]">
                <div className="p-1.5 bg-[#FFE0B2] text-[#E65100] rounded-md shrink-0 mt-0.5">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-[#1F1A17] leading-snug">
                    Bisa Masak Rumahan
                  </p>
                  <p className="text-sm text-[#558B2F] font-medium mt-0.5 leading-relaxed">
                    Bisa masak menu apa pun yang biasa ditemuin di warung
                    masakan Jawa, ya walaupun rasanya SNI wkwk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

export function ReligionSlide({ active }: SlideProps) {
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);

  // Data Keyakinan & Pandangan Spiritual
  const religionData = {
    title: "Faith & Values",
    assets: [
      {
        name: "Masjid & Daily Life",
        image: "/images/religion.jpg",
      },
      {
        name: "Quiet Moments",
        image: "/images/religion2.png",
      },
    ],
    points: [
      {
        title: "Ibadah",
        desc: "Sholat 5 Waktu, Puasa Ramadhan & Beberapa Sunnah, Zakat (Alhamdulillah karena udah kerja jadi Zakat Mandiri), Qurban. Insyaallah.",
      },
      {
        title: "Kajian",
        desc: "Sejak dari 2019 bertemu dengan Kajian Sunnah, Sering ikut Kajian pas dulu Studi S2 di Jogja. Untuk pas kerja, terkadang ikut walaupun masih belom ketemu Kajian Sunnah di Solo.",
      },
      {
        title: "Proses Belajar",
        desc: "Dari Kajian-Kajian yang diikuti, Banyak Hal Yang Kupelajari dan Banyak hal pula yang masih belum aku pelajari. Tapi aku beruntung punya Mentor yang bisa ngasih masukkan dari sisi agama",
      },
    ],
  };

  // Auto-play carousel foto
  useEffect(() => {
    if (!active || religionData.assets.length <= 1) return;
    const interval = setInterval(() => {
      setActiveAssetIndex((prev) => (prev + 1) % religionData.assets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [active, religionData.assets.length]);

  return (
    <SlideFrame active={active}>
      <div className="min-h-full w-full max-w-5/7 mx-auto flex flex-col pt-20 pb-10 px-6 md:pt-10 md:pb-6 md:px-12 h-full">
        {/* Header Title */}
        <div className="flex items-end justify-between border-b-2 md:border-b-4 border-[#2C241B] pb-3 md:pb-4 mb-4 shrink-0">
          <div>
            <p className="text-[#8C5A2A] font-bold tracking-widest uppercase text-xs md:text-sm mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Section 02 // Spiritual Life
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#1A1612] uppercase">
              Religion
            </h2>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 mb-2 min-h-0 max-h-9/10">
          {/* KIRI: Carousel Foto (35% Width) */}
          <div className="w-full h-full md:w-5/12 bg-[#E8E3D9] border-2 md:border-4 border-[#5C4C3C] shadow-[4px_4px_0px_0px_#2C241B] p-4 flex flex-col overflow-hidden relative rounded-[20px]">
            <div className="flex items-center justify-between mb-3 border-b-2 border-[#D4C4A8] pb-2 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8C5A2A] rounded-full"></div>
                <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#2C241B]">
                  Spiritual Moments
                </h3>
              </div>
              {/* Dots Navigation */}
              <div className="flex gap-1.5">
                {religionData.assets.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveAssetIndex(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      activeAssetIndex === idx
                        ? "w-4 bg-[#8C5A2A]"
                        : "w-1.5 bg-[#D4C4A8] hover:bg-[#5C4C3C]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Photo Container */}
            <div className="flex-1 overflow-hidden relative w-full h-full min-h-[180px] md:min-h-[250px] rounded-xl">
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${activeAssetIndex * 100}%)`,
                }}
              >
                {religionData.assets.map((asset, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full shrink-0 flex items-center justify-center p-0.5"
                  >
                    <div
                      className="w-full h-full bg-[#2C241B] bg-cover bg-center border-2 border-[#8C5A2A] relative shadow-inner flex flex-col items-center justify-center rounded-lg overflow-hidden"
                      style={{ backgroundImage: `url(${asset.image})` }}
                    >
                      <div className="absolute inset-0 bg-[#1A1612]/20" />
                      {/* <span className="text-[#F4F1EA] text-[10px] md:text-xs font-bold uppercase tracking-widest bg-[#1A1612]/80 backdrop-blur-sm px-3 py-1.5 border border-[#8C5A2A] text-center z-10 rounded-md">
                        {asset.name}
                      </span> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KANAN: Flat Container Tanpa Icon (65% Width) */}
          <div className="w-full md:w-7/12 bg-[#E8E3D9] border-2 md:border-4 border-[#5C4C3C] shadow-[4px_4px_0px_0px_#2C241B] p-4 md:p-6 flex flex-col overflow-y-auto rounded-[20px] gap-3">
            {religionData.points.map((item, index) => (
              <div
                key={index}
                className="bg-[#F4F1EA] p-4 rounded-xl border-2 border-[#2C241B] shadow-[3px_3px_0px_0px_#2C241B] flex flex-col gap-1.5"
              >
                <h4 className="font-black text-sm md:text-base text-[#1A1612] uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm font-semibold text-[#2C241B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
