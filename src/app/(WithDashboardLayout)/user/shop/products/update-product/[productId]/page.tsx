import UpdateProductsForm from "@/components/modules/shop/product/UpdateProductForm";
import { getSingleProduct } from "@/services/Product";
import { Fragment } from "react";

export default async function UpdateProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const { data: product } = await getSingleProduct(productId);

  return (
    <Fragment>
      <div className="flex justify-center ">
        <UpdateProductsForm product={product} />
      </div>
    </Fragment>
  );
}
