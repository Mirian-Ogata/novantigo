import { allProdutos } from "@/constants";

export default function filtrarPorTag() {
  const produtosFiltrados = allProdutos.filter(
    (produto) => produto.tag! === "Decoração Natalina",
  );
  return produtosFiltrados.length > 0 ? produtosFiltrados : [];
}
