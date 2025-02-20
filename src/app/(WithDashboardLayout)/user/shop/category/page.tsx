import ManageCategories from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/Category";
import { Fragment } from "react";

export default async function CreateCategoryPage() {
  const { data, meta } = await getAllCategories();
  console.log(data);
  return (
    <Fragment>
      <ManageCategories categories={data} />
    </Fragment>
  );
}
