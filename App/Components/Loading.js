import React, { Component } from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-spinkit'

export default class Loading extends Component {
  render() {
    return (
      <View>
        <Spinner style={styles.spinner} isVisible={true} size={60} type={"Circle"} color={"grey"}/>
      </View>
    )
  }
}