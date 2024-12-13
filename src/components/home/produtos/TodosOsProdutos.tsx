import { allProdutos } from "@/constants";
import Produtos from "./Produtos";

export default function TodosOsProdutos() {
  return (
    <div className="w-[70%] grid-cols-4">
      {allProdutos.map((produto, index) => (
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
  );
}
