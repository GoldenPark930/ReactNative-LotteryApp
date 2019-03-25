import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, Modal, AsyncStorage, Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native'

import { width, height } from '../../constants/config'

import styles from './MainScreenStyles'

export default class NumbersView extends Component {
  renderRow = (row, rowIndex, onItemPress) => {
    const { itemsColor, activeFieldsPos, prefix, lastItemColor } = this.props
    if (row) {
      if (!row.length) {
        return (
          <View key={prefix + '_row_' + index} style={styles.sepLine} />
        )
      } else {
        return row.map((item, idx) => {
          if (item == 'h') {
            return (
              <View key={prefix + '_row_' + rowIndex + '_item_' + idx} style={styles.halfItem}>
              
              </View>  
            )
          } else if (item || item == 0) {
            const WrapperComp = onItemPress
              ? TouchableOpacity
              : View
            // const isActiveField = activeFieldsPos && activeFieldsPos.split('_')[0] == rowIndex && activeFieldPos.split('_')[1] == idx
            const isActiveField = activeFieldsPos && activeFieldsPos.find(fieldObj => fieldObj.rowIndex == rowIndex && fieldObj.idx == idx && fieldObj.prefix == prefix)
            const isLastItemInRow = idx == row.length -1
            return (
              <WrapperComp
                key={prefix + '_row_' + rowIndex + '_item_' + idx}
                onPress={
                  onItemPress
                    ? () => onItemPress(item, rowIndex, idx, prefix)
                    : null
                  }>
                <View style={[styles.itemWrapper, itemsColor && { backgroundColor: itemsColor}, isActiveField && {borderColor: '#579DC3', borderWidth: 4}, isLastItemInRow && lastItemColor && {backgroundColor: lastItemColor}]}>
                  {
                    item == '_'
                      ? null
                      : <Text style={styles.itemNumber}>
                          {item}
                        </Text>
                  }
                </View> 
              </WrapperComp>
            )
          }
        })
      }
    }
  }

  render() {
    const { data, onItemPress, prefix } = this.props
    if (!(data && data.length)) return null
    return data.map((row, idx) => (
      <View key={prefix + '_row_' + idx} style={[styles.rowWrapper, idx%2==0 && {marginLeft: width(3)} ]}>
        {
          this.renderRow(row, idx, onItemPress)
        }  
      </View>
    ))
  }
}