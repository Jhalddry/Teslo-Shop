import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "Men",
    women: "Women",
    kid: "Kids",
    unisex: "Unisex",
  };

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title title={`${labels[id]}`} subtitle="All Products" className="mb-2" />

      <ProductGrid products={products} />
    </>
  );
}
