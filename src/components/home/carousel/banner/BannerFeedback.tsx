import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import banners from "@/constants/bannerPrincipal";
import Image from "next/image";

export default function BannerFeedback() {
  return (
    <Carousel opts={{ align: "center", loop: true }}>
      <CarouselContent className="">
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <div className="relative h-80 w-full">
              <Image
                src={banner.imagem}
                alt={banner.alt}
                width={2000}
                height={320}
              ></Image>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
