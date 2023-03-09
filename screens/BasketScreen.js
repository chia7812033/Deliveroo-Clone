import { Text, View } from 'react-native'

import React from 'react'
import { selectRestaurant } from '../features/reastaurantSlice';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';

const BasketScreen = () => {

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen
