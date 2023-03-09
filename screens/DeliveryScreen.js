import * as Progress from "react-native-progress";

import { Image, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/solid";
import { selectRestaurant } from "../features/reastaurantSlice";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate("Home")} className="p-2">
            <XMarkIcon color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        <View className='bg-white mx-5 nmy-2 rounded-md p-6 z-50 shadow-sm'>
          <View className='flex-row justify-between '>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-3xl font-bold'>15-20 Minutes</Text>
            </View>
            <Image
              source={{ uri: "http://links.papareact.com/fls" }}
              className='h-20 w-20'
            />
          </View>

          <Progress.Bar size={20} color='#00CCBB' indeterminate={true} />

          <Text className='mt-3 text-gray-500'>
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier='origin'
          pinColor='#00CCBB'
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 pb-10 h-30">
        <Image
          source={{ uri: "http://links.papareact.com/wru" }}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />

        <View className="flex-1">
          <Text className="text-lg">Dan Hung</Text>
          <Text className="text-gray-500">Your Rider</Text>
        </View>

        <Text className="text-[#00CCBB] text-xl mr-5">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
