import ProductBanner from "@/components/modules/products/banner";
import ProductDetails from "@/components/modules/products/productDetails";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleProduct } from "@/services/Product";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);

  return (
    <NMContainer>
      <ProductBanner
        title="Product Details"
        path="Home - Products - Product Details"
      />
      <ProductDetails product={product} />
    </NMContainer>
  );
}
