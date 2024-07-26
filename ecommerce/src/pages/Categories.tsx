import CategoriesHero from "../components/CategoriesHero";
import Categories2 from "../components/Categories2";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { categoryType } = useParams<{ categoryType: string }>();
  return (
    <>
      <CategoriesHero categoryType={categoryType} />

      <Categories2 />
    </>
  );
};

export default Categories;
