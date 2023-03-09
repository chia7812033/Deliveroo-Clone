import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useState } from "react";
import {
  removeFromBasket,
  selectBasketItems,
  selectTotalPrice,
} from "../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

import Currency from "react-currency-formatter";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import { selectRestaurant } from "../features/reastaurantSlice";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const BasketScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurant);
  const [groupItemsBasket, setGroupItemsBasket] = useState([]);
  const dispatch = useDispatch();
  const subTotal = useSelector(selectTotalPrice);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-lg'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full absolute top-3 right-5'
          >
            <XCircleIcon color={"#00CCBB"} size={50} />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center p-4 bg-white my-5'>
          <Image
            source={{ uri: "http://links.papareact.com/wru" }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <Text className='flex-1 text-center'>Deliver in 15-20 mins</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupItemsBasket).map(([key, items]) => (
            <View
              key={key}
              className='flex-row items-center space-x-4 bg-white px-4 py-2'
            >
              <Text className='text-gray-500'>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.imgUrl).url() }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1 font-bold'>
                {items[0]?.name.charAt(0).toUpperCase() +
                  items[0]?.name.slice(1)}
              </Text>

              <Text className='text-gray-600'>
                <Currency quantity={items[0]?.price * items.length} />
              </Text>

              <TouchableOpacity>
                <Text
                  className='text-[#00CCBB] text-xs'
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='mb-4 bg-white divide-y divide-gray-300 shadow'>
          <View className='flex-row p-4'>
            <Text className='flex-1 text-gray-400'>Subtotal</Text>
            <Text className=' text-gray-400'>
              <Currency quantity={subTotal} />
            </Text>
          </View>

          <View className='flex-row p-4'>
            <Text className='flex-1 text-gray-400'>Delivery Fee</Text>
            <Text className=' text-gray-400'>
              <Currency quantity={4.99} />
            </Text>
          </View>

          <View className='flex-row p-4'>
            <Text className='flex-1'>Order Total</Text>
            <Text className='font-extrabold'>
              <Currency quantity={subTotal + 4.99} />
            </Text>
          </View>

          <TouchableOpacity className="bg-[#00CCBB] rounded-lg mx-4 my-2 py-2">
            <Text className="text-white font-bold text-lg text-center">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
