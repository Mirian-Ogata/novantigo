import Image from "next/image";

export type CardsProps = {
  nomeCliente: string;
  avaliacaoProduto: string;
};

export default function CardsCarousel({
  nomeCliente,
  avaliacaoProduto,
}: CardsProps) {
  return (
    <div className="flex h-80 flex-1 flex-col items-start justify-start p-6">
      <h2 className="text-lg font-semibold text-acqua">{nomeCliente}</h2>
      <Image
        src="./star.svg"
        alt="avaliação"
        className="py-1"
        width={100}
        height={100}
      />
      <p className="pb-6 text-lg text-brown">{avaliacaoProduto}</p>
    </div>
  );
}
