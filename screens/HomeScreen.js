import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { SafeAreaView } from "react-native-safe-area-context";
import sanityClient from "../sanity";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == 'featured'] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
        }`
      )
      .then((data) => {
        setFeaturedCategory(data);
      });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>

        <UserIcon size={35} color='#00CCBB' />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center'>
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>

        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>

      {/* Body */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        <Categories />

        {featuredCategory?.map((cat) => (
          <FeaturedRow
            key={cat._id}
            id={cat._id}
            title={cat.name}
            description={cat.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
