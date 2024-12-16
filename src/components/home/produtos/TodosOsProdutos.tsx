import { allProdutos } from "@/constants";
import Produtos from "./Produtos";
import Link from "next/link";

export default function TodosOsProdutos() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-2xl font-semibold text-acqua">Ilumine e Decore</h2>
      <p className="py-2 text-base font-normal text-brown">
        Peças exclusivas e autorais, feitas com muito amor!
      </p>

      <div className="grid w-[70%] grid-cols-5 gap-4 py-10">
        {allProdutos.slice(0, 10).map((produto, index) => (
          <Produtos
            key={index}
            id={produto.id}
            imagem={produto.imagem}
            nomeProduto={produto.nomeProduto}
            categoria={produto.categoria}
            valor={produto.valor}
            parcelas={produto.parcelas}
            tag={produto.tag}
          />
        ))}
      </div>
      <div className="flex w-[70%] items-end justify-end">
        <Link
          href="/todos"
          className="text-xl font-medium text-brown hover:text-orange"
        >
          ver todos...
        </Link>
      </div>
    </div>
  );
}
