import Image from "next/image";
import Link from "next/link";

export type ProdutosProps = {
  imagem: string;
  nomeProduto: string;
  id: string;
  descricao?: string;
  tag: string;
  destaque?: boolean;
  categoria: string[];
  valor: string;
  parcelas: string;
};

export default function Produtos({
  imagem,
  nomeProduto,
  descricao,
  tag,
  destaque,
  id,
  valor,
  parcelas,
}: ProdutosProps) {
  return (
    <div className="flex w-80 flex-col items-center justify-center text-center">
      <Link
        href={id}
        className="text-base font-normal text-green hover:text-acqua"
      >
        <Image
          className="pb-2"
          src={imagem}
          height={320}
          width={320}
          alt={nomeProduto}
        />
        {nomeProduto}
      </Link>
      <strong className="text-xl text-salmon">R$ {valor}</strong>
      <p className="text-sm font-light text-brown">12x {parcelas}</p>
    </div>
  );
}
