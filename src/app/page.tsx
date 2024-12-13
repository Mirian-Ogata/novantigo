import ClientCarousel from "@/components/home/carousel";
import BannerFeedback from "@/components/home/carousel/banner/BannerFeedback";
import DataComemorativa from "@/components/home/produtos/DataComemorativa";
import InscreverEmail from "@/components/home/email";

export default function Home() {
  return (
    <div>
      <BannerFeedback />
      <DataComemorativa />
      <ClientCarousel />
      <InscreverEmail />
    </div>
  );
}
