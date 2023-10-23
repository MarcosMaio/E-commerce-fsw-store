"use client";

import { Product } from "@prisma/client";
import { ProductItem } from "@/components/ui/product-item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { twMerge } from "tailwind-merge";
import {
  ProductWithBlurDataUrl,
  calculateProductTotalPrice,
} from "@/helpers/product";

interface ProductCarouselListProps {
  products: ProductWithBlurDataUrl[];
}

const ProductCarouselList = ({ products }: ProductCarouselListProps) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={"auto"}
      scrollbar={{ draggable: true }}
      centeredSlides={true}
      centeredSlidesBounds={true}
    >
      {products.map((product, key) => (
        <SwiperSlide
          key={product.id}
          className="max-w-[170px] items-center justify-center first:ml-2 last:mr-2"
        >
          <ProductItem
            product={calculateProductTotalPrice(product)}
            key={product.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { ProductCarouselList };
