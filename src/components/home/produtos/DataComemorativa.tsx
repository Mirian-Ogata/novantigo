import Produtos from "../produtos/Produtos";
import filtrarPorTag from "@/functions/filtrarPorTag";

export default function DataComemorativa() {
  const tagNatal = filtrarPorTag();
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-2xl font-semibold text-acqua">Natal</h2>
      <p className="py-2 text-base font-normal text-brown">
        Decorações Natalinas
      </p>
      <div className="flex items-start justify-center gap-6 pt-10">
        {tagNatal.map((produto) => (
          <Produtos
            key={produto.id}
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
    </div>
  );
}
