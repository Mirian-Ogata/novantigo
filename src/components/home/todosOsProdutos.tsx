import { allProdutos } from "@/constants";
import Produtos from "../Produtos";

export default function todosOsProdutos() {
  return (
    <div className="flex items-start justify-center gap-6">
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
