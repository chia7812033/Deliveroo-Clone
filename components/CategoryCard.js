import { Image, Text, TouchableOpacity } from "react-native";
import React, { Component } from "react";

export default class CategoryCard extends Component {
  render() {
    const { imgUrl, title } = this.props;

    return (
      <TouchableOpacity className='relative mr-2'>
        <Image
          source={{
            uri: imgUrl,
          }}
          className='h-20 w-20 rounded'
        />
        <Text className='absoulte bottom-5 left-1 text-white font-bold'>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
