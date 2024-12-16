import ClientCarousel from "@/components/home/carousel";
import BannerFeedback from "@/components/home/carousel/banner/BannerFeedback";
import DataComemorativa from "@/components/home/produtos/DataComemorativa";
import InscreverEmail from "@/components/home/email";
import TodosOsProdutos from "@/components/home/produtos/TodosOsProdutos";

export default function Home() {
  return (
    <div>
      <BannerFeedback />
      <DataComemorativa />
      <TodosOsProdutos />
      <ClientCarousel />
      <InscreverEmail />
    </div>
  );
}
