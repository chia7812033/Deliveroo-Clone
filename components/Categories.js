import React, { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../sanity";

import CategoryCard from "./CategoryCard";
import { ScrollView } from "react-native";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'category' ] {
            ...,
        }`
      )
      .then((data) => setCategories(data));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((cat) => (
        <CategoryCard
          key={cat._id}
          imgUrl={urlFor(cat.image).url()}
          title={cat.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
