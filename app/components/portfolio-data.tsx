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
          "https://media.discordapp.net/attachments/738389915401977926/1548358558276648970/IMG_20260912_224345_406.jpg?ex=6aa6c4c7&is=6aa57347&hm=8418a58b260616f12e9d32e9567a68aa0e32461ba7811c78fde248a561f7aa6a&=&format=webp&width=576&height=1024",
      },
      {
        name: "Jogging Route",
        image:
          "https://media.discordapp.net/attachments/738389915401977926/1548348546263158875/IMG_20251130_072915.jpg?ex=6aa6bb74&is=6aa569f4&hm=5df99336d856b43fbe95b77b80e9effbbcfe924d4b0401a2bfa159ec5c13e47e&=&format=webp&width=216&height=384",
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
        image:
          "https://media.discordapp.net/attachments/738389915401977926/1547979022204412024/IMG_20260911_213543.jpg?ex=6aa5634e&is=6aa411ce&hm=d5ce72a4fe9cea4b4c7d55bf25a2789d64fa920687590d40686c8b0889ae8e52&=&format=webp&width=767&height=1024",
      },
      {
        name: "Listening Setup",
        image:
          "https://media.discordapp.net/attachments/738389915401977926/1548325768097038376/IMG_20260912_203337.jpg?ex=6aa6a63d&is=6aa554bd&hm=ce05b0de1a5a8b41bb705381a2ffc2cacef3bcffaa9c529615794310eb5d9c79&=&format=webp&width=576&height=1024",
      },
      {
        name: "Music Finds",
        image:
          "https://media.discordapp.net/attachments/738389915401977926/1548324826543030293/IMG_20260905_202835.jpg?ex=6aa6a55d&is=6aa553dd&hm=1a71f0f01e5b8caf2a16cc2ce60ad8f15bcd8a1783cd72ad8c1150924146fb69&=&format=webp&width=461&height=1024",
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
        image:
          "https://media.discordapp.net/attachments/738389915401977926/1548342131762921563/IMG_20260912_213759.jpg?ex=6aa6b57b&is=6aa563fb&hm=ddfd7ce2ac0fec93ce459fbbc7888e6e80a6ae7f00b1de99b9f6954e2474fad6&=&format=webp&width=461&height=1024",
      },
      {
        name: "Match Moment",
        image:
          "https://media.discordapp.net/attachments/738389915401977926/1548358558809071647/IMG_20260912_224252_984.jpg?ex=6aa6c4c7&is=6aa57347&hm=aa9e36b1cff99d0b6be5b64424530e5715fd6e8270cf83025681166eb2c155b7&=&format=webp&width=576&height=1024",
      },
    ],
  },
];
