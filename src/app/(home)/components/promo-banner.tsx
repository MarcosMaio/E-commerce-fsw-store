import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="px-5">
      <Image
        className="h-auto w-full"
        width={972}
        height={416}
        sizes="(min-width: 1080px) 984px, calc(95.26vw - 26px)"
        quality={95}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default PromoBanner;
