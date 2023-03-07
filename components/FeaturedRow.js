import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";

import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

export class FeaturedRow extends Component {
  render() {
    const { id, title, description } = this.props;

    return (
      <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
          <Text className='font-bold text-lg'>{title}</Text>
          <ArrowRightIcon color='#00CCBB' />
        </View>

        <Text className='text-xs text-gray-500 px-4'>{description}</Text>

        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
          className='pt-4'
        >
          {/* Restaurant cards... */}
          <RestaurantCard
            id={123}
            imgUrl={"https://links.papareact.com/gn7"}
            title={"Sushi Store"}
            rating={4.5}
            genre={"Japanese"}
            address={"123 St."}
            short_description='Short description'
            dishes={[]}
            long={0}
            lat={0}
          />
          <RestaurantCard
            id={123}
            imgUrl={"https://links.papareact.com/gn7"}
            title={"Sushi Store"}
            rating={4.5}
            genre={"Japanese"}
            address={"123 St."}
            short_description='Short description'
            dishes={[]}
            long={0}
            lat={0}
          />
          <RestaurantCard
            id={123}
            imgUrl={"https://links.papareact.com/gn7"}
            title={"Sushi Store"}
            rating={4.5}
            genre={"Japanese"}
            address={"123 St."}
            short_description='Short description'
            dishes={[]}
            long={0}
            lat={0}
          />
          <RestaurantCard
            id={123}
            imgUrl={"https://links.papareact.com/gn7"}
            title={"Sushi Store"}
            rating={4.5}
            genre={"Japanese"}
            address={"123 St."}
            short_description='Short description'
            dishes={[]}
            long={30}
            lat={10}
          />
        </ScrollView>
      </View>
    );
  }
}

export default FeaturedRow;
