import { Text, TouchableOpacity, View } from "react-native";
import { selectBasketItems, selectTotalPrice } from "../features/basketSlice";

import Currency from "react-currency-formatter";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Basket = () => {
  const items = useSelector(selectBasketItems);
  const totalPrice = useSelector(selectTotalPrice);
  const navigation = useNavigation();

  return (
    <View className='flex-row absolute bottom-10 z-50 px-5'>
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className='bg-[#00CCBB] flex-grow flex-row justify-between items-center
        rounded-lg px-4 py-3'
      >
        <Text className='text-white font-extrabold text-lg bg-green-700 px-2 rounded-xl'>
          {items.length}
        </Text>
        <Text className='flex-1 text-center text-white font-bold text-lg'>
          View Baseket
        </Text>
        <Text className='text-white font-bold text-lg'>
          <Currency quantity={totalPrice} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
