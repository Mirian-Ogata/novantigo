import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { avaliacoes } from "@/constants";
import CardsCarrousel from "./CardsCarousel";

export default function CarouselFeedback() {
  return (
    <Carousel opts={{ align: "center", loop: true }} className="w-[70%]">
      <CarouselContent>
        {avaliacoes.map((avaliacao, index) => (
          <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
            <div className="select-none overflow-auto rounded bg-white scrollbar-none">
              <CardsCarrousel
                nomeCliente={avaliacao.nomeCliente}
                avaliacaoProduto={avaliacao.avaliacaoProduto}
              ></CardsCarrousel>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="border-none bg-transparent text-salmon"
        variant={"semHover"}
      />
      <CarouselNext
        className="border-none bg-transparent text-salmon"
        variant={"semHover"}
      />
    </Carousel>
  );
}
