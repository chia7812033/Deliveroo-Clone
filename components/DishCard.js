import { Image, Text, View } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import React, { useState } from "react";

import Currency from "react-currency-formatter";
import { TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";

const DishCard = ({ name, short_description, price, imgUrl }) => {
  const [isPress, setIsPress] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPress((item) => !item)}
        className='bg-white border-t border-gray-200 px-4 py-2'
      >
        <View className='flex-row'>
          <View className='flex-1 pr-2 space-y-1'>
            <Text className='text-lg font-bold mb-1'>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Text>
            <Text className='text-sm text-gray-500'>
              {short_description.length > 80
                ? short_description.substr(0, 80) + "..."
                : short_description}
            </Text>
            <Text className='text-sm text-gray-500'>
              <Currency quantity={price} />
            </Text>
          </View>

          <View>
            <Image
              className='h-24 w-24 mt-4'
              source={{
                uri: urlFor(imgUrl).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPress && (
        <View className='bg-white px-2'>
          <View className='flex-row items-center space-x-2 pb-3 '>
            <TouchableOpacity>
              <MinusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishCard;
