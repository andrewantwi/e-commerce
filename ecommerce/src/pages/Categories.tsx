import CategoriesHero from "../components/CategoriesHero";
import Categories2 from "../components/Categories2";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { categoryType } = useParams<{ categoryType: string }>();
  const categoryValue: string = categoryType || "men";
  return (
    <>
      <CategoriesHero categoryType={categoryValue} />

      <Categories2 categoryType={categoryValue} />
    </>
  );
};

export default Categories;
