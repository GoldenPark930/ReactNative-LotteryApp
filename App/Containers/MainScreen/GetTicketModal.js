import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View, Modal, AsyncStorage, Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native'

import { width, height } from '../../constants/config'

import styles from './MainScreenStyles'
import { Images } from '../../Themes'

import NumbersView from './NumbersView'

const ticketViewShapeTopEx = [
  ['_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
]

const ticketViewShapeBottomEx = [
  ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_' ],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
]

export default class GetTicketModal extends Component {
  constructor(props) {
    super(props);
    console.log('this.transformData(ticketViewShapeTopEx)')
    console.log(this.transformData(ticketViewShapeTopEx))
    this.state = {
      ticketViewShapeBottom: this.transformData(ticketViewShapeBottomEx),
      ticketViewShapeTop: this.transformData(ticketViewShapeTopEx),
      userTicket: []
    }
  }

  // randomizeData = (data) => {
  //   return data.map(row => {
  //     return row.map(item => {
  //       if (item && item == '_') {
  //         return Math.floor(Math.random() * 10)
  //       }
  //       return item
  //     })
  //   })
  // }

  transformData = (data) => {
    let i = 0;
    return data.map((row, rowIdx) => {
      return row.map((item, itemIdx) => {
        if (item && item == '_') {
          i++
          return i
        }
        return item
      })
    })
  }

  // getEmptyField = (data) => {
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i] && data[i].length) {
  //       for (let j = 0; j < data[i].length; j++) {
  //         if (data[i][j] && data[i][j] == '_') {
  //           return i + '_' + j
  //         }
  //       }
  //     }
  //   }
  // }
  
  onTicketNumberPress = (item, rowIndex, idx, prefix) => {
    // const { userTicket } = this.state
    // const posOfEmptyField = this.getEmptyField(userTicket)
    // if (posOfEmptyField) {
    //   const newStateUserTicket = userTicket
    //   const fDimentionArray = posOfEmptyField.split('_')[0]
    //   const sDimentionArray = posOfEmptyField.split('_')[1]
    //   newStateUserTicket[fDimentionArray][sDimentionArray] = item
    //   this.setState({userTicket: newStateUserTicket})
    // }
    let newStateUserTicket = this.state.userTicket
    const newFieldObj = {value: item, rowIndex, idx, prefix}
    // const indexOfFieldInTicket = newStateUserTicket.findIndex(filedObj => newFieldObj.prefix == filedObj.prefix && newFieldObj.rowIndex == filedObj.rowIndex && newFieldObj.idx == filedObj.idx)
    // if (indexOfFieldInTicket != -1) {
    //   newStateUserTicket.splice(indexOfFieldInTicket, 1)
    //   const indexOfFieldInTicketFromBottom = newStateUserTicket.findIndex(filedObj => filedObj.prefix == 'ticketViewBottom')
    //   if (indexOfFieldInTicketFromBottom != -1) {
    //     newStateUserTicket.splice(indexOfFieldInTicketFromBottom, 1)
    //   }
    // } else {
      if (newStateUserTicket.length < 6) {
        if (newStateUserTicket.length == 5 && prefix == 'ticketViewBottom') {
          newStateUserTicket.push(newFieldObj)
        } else if (newStateUserTicket.length < 5 && prefix == 'ticketViewTop') {
          newStateUserTicket.push(newFieldObj)
        }
      }
    // }
    this.setState({userTicket: newStateUserTicket})
  }

  onUserTicketNumberPress = (item, rowIndex, idx, prefix) => {
    let newStateUserTicket = this.state.userTicket
    newStateUserTicket.splice(idx, 1)
    this.setState({userTicket: newStateUserTicket})
  }

  // onUserNumberPress = (item, rowIndex, idx) => {
  //   const newStateUserTicket = this.state.userTicket
  //   newStateUserTicket[rowIndex][idx] = '_'
  //   this.setState({userTicket: newStateUserTicket})
  // }

  render() {
    const { showModal, triggerModal, onItemPress, isBigScreen, onClaimPress } = this.props
    const { ticketViewShapeBottom, ticketViewShapeTop, userTicket } = this.state
    // const posOfEmptyField = this.getEmptyField(userTicket)
    // let posOfNextAfterEmpty;
    // if (posOfEmptyField) {
    //   const fDimentionArray = Number(posOfEmptyField.split('_')[0])
    //   const sDimentionArray = Number(posOfEmptyField.split('_')[1])
    //   if (userTicket[fDimentionArray].length == sDimentionArray - 1) {
    //     if (userTicket[fDimentionArray + 1] && userTicket[fDimentionArray + 1].length) {
    //       posOfNextAfterEmpty = (fDimentionArray + 1) + '_0'
    //     }
    //   } else {
    //     posOfNextAfterEmpty = fDimentionArray + '_' + (sDimentionArray + 1)
    //   }
    // }
    return (
      <Modal
        visible={showModal}
        animationType={'slide'}
        onRequestClose={() => console.log('close ticket modal')}
        transparent={true}>
        <TouchableWithoutFeedback style={styles.modalContentContainer} onPress={this.triggerModal}>
          <View style={{height: height(100), width: width(100)}}>
            <View style={[
              styles.modalContainer, 
              styles.modalTicktContainer,
              isBigScreen 
                ? {margin: width(6), marginTop: 80} 
                : {margin: width(4), marginTop: 40}
              ]}>
              <TouchableWithoutFeedback style={styles.contentWrapper} onPress={e => e.stopPropagation()}>
                <View style={styles.contentInner}>
                  <TouchableOpacity style={styles.closeBtn} onPress={triggerModal}>
                    <Image source={Images.closeBtn} resizeMode={'contain'} style={styles.closeImg}/>
                  </TouchableOpacity>
                  <View style={styles.ticketViewWrapper}>  
                    <View style={{marginLeft: width(3)}}>  
                      <NumbersView prefix="ticketViewTop" data={ticketViewShapeTop} onItemPress={this.onTicketNumberPress} />
                    </View>
                    <View style={styles.rowWrapper}>
                      <View style={styles.sepLine} />
                    </View>
                    <NumbersView prefix="ticketViewBottom" onItemPress={this.onTicketNumberPress} itemsColor="#CF617F"  data={ticketViewShapeBottom} />
                    <View style={styles.userTicketViewWrapper}>
                      <NumbersView prefix="userTicket" onItemPress={this.onTicketNumberPress} onItemPress={this.onUserTicketNumberPress} lastItemColor="#CF617F" data={[['_', '_', '_', '_', '_', '_'].map((item, idx) => userTicket[idx] ? userTicket[idx].value : '_')]} />
                    </View>  
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.bottomPartWrapper}>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity style={{flex: 1}} onPress={() => onClaimPress(userTicket)}>
                  <View style={styles.claimButtonInner}>
                    <Text style={styles.claimButtonText}>
                      CLAIM TICKET!
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>  
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}