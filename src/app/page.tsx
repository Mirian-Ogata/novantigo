import CarouselFeedback from "@/components/home/CarouselFeedback";
import InputTexto from "@/components/shared/InputTexto";

export default function Home() {
  return (
    <div>
      <span>teste</span>
      <InputTexto placeholder="Um texto legal" />

      <div className="flex flex-1 items-center justify-center bg-lightOrange p-8">
        <CarouselFeedback />
      </div>
    </div>
  );
}
