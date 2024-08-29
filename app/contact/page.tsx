import { Background } from "@/components/Background";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NewsletterSignup from "@/components/newsletter";


export default function Contact() {
  return (
    <Background>
        <Navbar />

        <NewsletterSignup />
        <Footer />
    </Background>
  )
}