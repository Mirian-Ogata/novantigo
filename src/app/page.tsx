import ClientCarousel from "@/components/home/carousel";
import BannerFeedback from "@/components/home/carousel/banner/BannerFeedback";
import InscreverEmail from "@/components/home/email";

export default function Home() {
  return (
    <div>
      <BannerFeedback />
      <ClientCarousel />
      <InscreverEmail />
    </div>
  );
}
