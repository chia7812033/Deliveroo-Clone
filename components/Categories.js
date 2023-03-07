import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";

import CategoryCard from "./CategoryCard";

export class Categories extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <CategoryCard
          imgUrl='https://links.papareact.com/gn7'
          title='Testing 1'
        />
        <CategoryCard
          imgUrl='https://links.papareact.com/gn7'
          title='Testing 2'
        />
        <CategoryCard
          imgUrl='https://links.papareact.com/gn7'
          title='Testing 3'
        />
        <CategoryCard
          imgUrl='https://links.papareact.com/gn7'
          title='Testing 4'
        />
        <CategoryCard
          imgUrl='https://links.papareact.com/gn7'
          title='Testing 5'
        />
        <CategoryCard
          imgUrl='https://links.papareact.com/gn7'
          title='Testing 6'
        />
      </ScrollView>
    );
  }
}

export default Categories;
