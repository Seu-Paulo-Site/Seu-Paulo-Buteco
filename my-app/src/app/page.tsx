import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Marquee from '@/app/components/Marquee';
import Historia from '@/app/components/Historia';
import Destaques from '@/app/components/Destaques';
import Frase from '@/app/components/Frase';
import Cardapio from '@/app/components/Cardapio';
import Horarios from '@/app/components/Horarios';
import Localizacao from '@/app/components/Localizacao';
import Footer from '@/app/components/Footer';
import FloatingActions from '@/app/components/FloatingActions';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Historia />
        <Destaques />
        <Frase />
        <Cardapio />
        <Horarios />
        <Localizacao />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
