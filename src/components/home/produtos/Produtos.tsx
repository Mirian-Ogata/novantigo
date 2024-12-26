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
    <Link
      href={id}
      className="bg-z flex w-full flex-col items-center justify-center gap-2 text-center text-lg font-normal text-green drop-shadow-md hover:text-acqua"
    >
      <Image src={imagem} height={320} width={320} alt={nomeProduto} />
      <div className="flex flex-col items-center justify-center py-2">
        <span className="h-8 w-52 truncate font-light">{nomeProduto}</span>
        <strong className="text-xl text-salmon">R$ {valor}</strong>
        <p className="text-base font-light text-brown">12x {parcelas}</p>
      </div>
    </Link>
  );
}
