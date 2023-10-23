import Image from "next/image";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={imageUrls[0]}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">     
        {imageUrls.map((imageUrl) => (
        <div
          key={imageUrl}
          className="flex h-[80px] items-center justify-center rounded-lg bg-accent"
        >
          <Image
            src={imageUrl}
            alt={name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
