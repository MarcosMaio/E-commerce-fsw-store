import { CategoryItem } from "./category-item";
import { CategoryWithBlurDataUrl } from "@/helpers/category";

interface CategoryListProps {
  categories: CategoryWithBlurDataUrl[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-8 lg:grid-cols-3">
      {categories.map((category) => (
        <li key={category.id}>
          <CategoryItem key={category.id} category={category} />
        </li>
      ))}
    </ul>
  );
};

export { CategoryList };
