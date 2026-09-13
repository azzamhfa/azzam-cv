import { Activity, Gamepad2, Headphones } from "lucide-react";
import type { ReactNode } from "react";

export type Hobby = {
  id: string;
  title: string;
  shortTitle: string;
  icon: ReactNode;
  desc: string[];
  assets: { name: string; image: string }[];
  songs?: { title: string; src: string }[];
};

export const hobbies: Hobby[] = [
  {
    id: "sports",
    title: "Sports",
    shortTitle: "Sports",
    icon: <Activity className="w-5 h-5 md:w-6 md:h-6" />,
    desc: [
      "Berenang dan Menyelam: Top-tier Olahraga, ya walaupun udah jarang karena jam kerja, Tapi hobi ini bener-bener menenangkan pikiran dari riuhnya dunia.",
      "Jalan Sehat dan Jogging: Olahraga yang cukup sering ku lakukan, bahkan bisa menyempatkan jalan pagi sebelum jam kerja. #BukanPelariKalcer",
      "Pingpong: Keluarga ku punya bloodline pemain pingpong, ya walaupun skill masih medioker. Tapi cocok cuma buat seru-seruan aja.",
    ],
    assets: [
      {
        name: "Swim Session",
        image:
          "/images/swim.jpg",
      },
      {
        name: "Jogging Route",
        image:
          "/images/jog.jpg",
      },
    ],
  },
  {
    id: "music",
    title: "Ngidol & Audiophile",
    shortTitle: "Music",
    icon: <Headphones className="w-5 h-5 md:w-6 md:h-6" />,
    desc: [
      "Ngidol: Hobi paling awet sejak 2011/12, Berawal dari JKT48 dan AKB48, hingga Sakamichi Series.",
      "Audiophile: Sebuah hobi yang ku temukan di tahun 2023 (?), menikmati musik dengan seluruh detail, hingga rasa dari musik itu sendiri.",
    ],
    songs: [
      {
        title: "Nogizaka46 - Sayonara no Imi",
        src: "https://embed.music.apple.com/id/album/sayonarano-imi/1537746569?i=1537746571",
      },
      {
        title: "Keyakizaka46 - Futari Saison",
        src: "https://embed.music.apple.com/id/album/futari-saison/1537737261?i=1537737262",
      },
    ],
    assets: [
      {
        name: "Vinyl Collection",
        image: "/images/idol.jpg",
      },
      {
        name: "Listening Setup",
        image: "/images/music1.jpg",
      },
      {
        name: "Music Finds",
        image: "/images/music2.jpg",
      },
    ],
  },
  {
    id: "gaming",
    title: "Gaming",
    shortTitle: "Gaming",
    icon: <Gamepad2 className="w-5 h-5 md:w-6 md:h-6" />,
    desc: [
      "Football Manager: Sebuah game yang paling sering ku mainkan, game yang mewadahi kemampuan analitis dan logika ku. Bagaimana mengatur sebuah tim dari yang paling simpel hingga detail terkecil.",
      "Dota 2: Game yang kumainkan bareng temen-temenku di discord jika memang diajak untuk party, atau sudah suntuk dengan Football Manager.",
    ],
    assets: [
      {
        name: "Strategy Setup",
        image: "/images/fm.jpg",
      },
      {
        name: "Match Moment",
        image: "/images/game.jpg",
      },
    ],
  },
];
