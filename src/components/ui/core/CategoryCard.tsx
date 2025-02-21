import { ICategory } from "@/types";
import Image from "next/image";

export default function CategoryCard({ category }: { category: ICategory }) {
  return (
    <div className="bg-gray-100 bg-opacity-50 border-2 border-white rounded-2xl text-center p-6 h-44">
      <Image
        src={category?.icon as string}
        width={100}
        height={150}
        alt="category icon"
        className="mx-auto"
      />
      <h3 className="text-lg font-semibold truncate mt-3">{category?.name}</h3>
    </div>
  );
}
