import Comentarios from "@/components/comentarios";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Populares from "@/components/populares";



export default function Home() {
  return (
    <div className="page">
      <Header/>
      <Hero/>
      <Populares/>
      <Comentarios/>
    </div>
  );
}
