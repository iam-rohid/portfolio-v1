import React from "react";
import Link from "next/link";
const TopCategoriesSection = () => {
  return (
    <section id="categories" className="flex flex-col">
      <h2 className="section-title">Top Categories</h2>
      <div>
        <ul className="flex flex-row flex-wrap gap-4">
          <CategoryItem href="#" name="React.js" />
          <CategoryItem href="#" name="Next.js" />
          <CategoryItem href="#" name="CSS" />
          <CategoryItem href="#" name="Tailwindcss" />
          <CategoryItem href="#" name="TypeScript" />
        </ul>
      </div>
    </section>
  );
};

export default TopCategoriesSection;

const CategoryItem = (props: { href: string; name: string }) => {
  const { href, name } = props;
  return (
    <li>
      <Link href={`/category/${href}`}>
        <a className="block px-4 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {name}
        </a>
      </Link>
    </li>
  );
};
