import { Image, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-red-500'>HomeScreen</Text>

      {/* Header */}
      <View>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
