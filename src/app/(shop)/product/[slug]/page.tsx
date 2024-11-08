import { initialData } from "@/seed/seed";
import notFound from "../not-found";
import { titleFont } from "@/config/fonts";
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
} from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product?.title ?? ""}
          images={product?.images ?? []}
          className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={product?.title ?? ""}
          images={product?.images ?? []}
          className="hidden md:block"
        />
      </div>

      {/* Details */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product?.title}
        </h1>

        <p className="text-lg mb-5">{product?.price}</p>

        {/* Size Selector */}
        <SizeSelector
          selectedSize={product?.sizes[0] ?? "M"}
          availableSizes={product?.sizes ?? []}
        />

        {/* Quantity Selector */}
        <QuantitySelector quantity={1} />

        {/* Button */}
        <button className="btn-primary my-5">Add to Cart</button>

        {/* Description */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product?.description}</p>
      </div>
    </div>
  );
}
