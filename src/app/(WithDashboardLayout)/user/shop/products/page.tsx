import ManageProducts from "@/components/modules/shop/product";
import { getAllProducts } from "@/services/Product";

export default async function ManageProductsPage() {
  const { data, meta } = await getAllProducts();
  return (
    <div>
      <ManageProducts products={data} />
    </div>
  );
}
