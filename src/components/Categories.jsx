import { category } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-3xl mt-10 text-center">Shop by Categories</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 m-10">
        {category.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
