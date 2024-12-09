import ClientCarousel from "@/components/ClientCarousel";
import Email from "@/components/Email";
import CarouselFeedback from "@/components/home/CarouselFeedback";
import ButtonPrincipal from "@/components/shared/ButtonPrincipal";
import InputTexto from "@/components/shared/InputTexto";

export default function Home() {
  return (
    <div>
      <ClientCarousel />
      <Email />
    </div>
  );
}
