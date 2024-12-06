import Image from "next/image";

export type CardsProps = {
  nomeCliente: string;
  avaliacaoProduto: string;
};

export default function CardsCarrousel({
  nomeCliente,
  avaliacaoProduto,
}: CardsProps) {
  return (
    <div className="flex flex-1 flex-col justify-start items-start h-56 text-xl">
      <div>
        <h2 className="font-semibold text-acqua">{nomeCliente}</h2>
        <Image
          src="./star.svg"
          alt="avaliação"
          className="py-2 "
          width={100}
          height={100}
        />
        <p className="text-brown">{avaliacaoProduto}</p>
      </div>
    </div>
  );
}
