import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Pilares } from "@/components/Pilares";
import { Desarrollo } from "@/components/Desarrollo";
import { Configurador } from "@/components/Configurador";
import { Calculadora } from "@/components/Calculadora";
import { Clientes } from "@/components/Clientes";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { Bot } from "@/components/Bot";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Pilares />
        <Desarrollo />
        <Configurador />
        <Calculadora />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
      <Bot />
    </>
  );
}
