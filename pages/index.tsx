'use client';
import { Inter } from "next/font/google";
import First from "@/components/First";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <First />
  );
}
