import CreateCategoryModal from "./CreateCategoryModal";

export default function ManageCategories() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold text-xl">Manage categories</h2>
      <CreateCategoryModal />
    </div>
  );
}
