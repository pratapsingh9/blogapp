'use client'
import { Background } from "@/components/Background";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <Background>
      <Navbar />
      <Footer />
    </Background>
  );
}
