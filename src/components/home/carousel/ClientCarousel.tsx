import CarouselFeedback from "./CarouselFeedback";

export default function ClientCarousel() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-lightOrange py-6">
      <span className="pb-2 text-2xl font-semibold text-orange">
        Sobre os Nossos Produtos
      </span>
      <p className="pb-8 text-base font-normal text-brown">
        Avaliações de Clientes
      </p>
      <CarouselFeedback />
    </div>
  );
}
