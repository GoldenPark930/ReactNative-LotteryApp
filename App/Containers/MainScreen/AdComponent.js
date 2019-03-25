import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, Modal, AsyncStorage, Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native'
import Spinner from 'react-native-spinkit'

import { width, height } from '../../constants/config'

import styles from './MainScreenStyles'

export default class AdComponent extends Component {
  render() {
    const { showModal, isBigScreen, triggerModal, counter, adAmount, nativeAd } = this.props
    console.log('ad comp props')
    console.log(this.props)
    return (
      <Modal
        visible={showModal}
        animationType={'slide'}
        onRequestClose={() => console.log('close ticket modal')}
        transparent={true}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback style={styles.modalContentContainer} onPress={this.triggerModal}>
            <View style={[
              styles.modalContainer, 
              styles.modalAdContainer,
              isBigScreen 
                ? {margin: width(6), marginTop: 80} 
                : {margin: width(4), marginTop: 40}
              ]}>
              <TouchableWithoutFeedback style={styles.contentWrapper} onPress={e => e.stopPropagation()}>
                <View style={styles.contentInner}>
                  <View style={styles.adWrapper}>
                    <Text style={styles.adText}>
                      {'this is ad'}
                    </Text>
                    <View style={styles.counterWrapper}>
                      <Text style={[styles.counterAmountText, counter%2 == 0 && styles.counterAmountTextSmaller]}>
                        {adAmount}
                      </Text>
                      <Spinner style={styles.spinner} isVisible={true} size={30} type={"Circle"} color={"grey"}/>
                      <View style={styles.counterOverlay}>
                        <View style={styles.counterTextWrapper}>
                          <Text style={styles.counterText}>
                            {counter}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    )
  }
}