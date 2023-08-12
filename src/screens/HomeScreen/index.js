import React from 'react'
import { View, Text } from 'react-native';
import HomeMap from '../../components/HomeMap/index';
import CovidMesssage from '../../components/CovidMessage/index';
import HomeSearch from '../../components/HomeSearch/index'

const index = () => {
  return (
    <View>
      <HomeMap/>
      {/* Covid Message */}
      <CovidMesssage/>
      {/* Bottom Component */}
      <HomeSearch/>
    </View>
  )
}

export default index