'use client'

import dynamic from 'next/dynamic'
import { Background } from "@/components/Background";
import Footer from "@/components/footer";

const Navbar = dynamic(() => import('@/components/navbar'), { ssr: false })

export default function Home() {
  return (
    <Background>
      <Navbar />
      <Footer />
    </Background>
  );
}