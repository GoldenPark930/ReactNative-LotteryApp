import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, FlatList, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import moment from 'moment'

import styles from './MainScreenStyles'
import { Images } from '../../Themes'

export default class TicketsModal extends Component {
  _keyExtractorTicketsList = (item, index) => item.key || index

  renderTicketItem = ({item, index}) => {
    return (
      <View style={styles.ticketItemWrapper}>
        <View style={styles.ticketItemInner}>
          <Text style={styles.ticketIndexText}>
            {index+1}
          </Text>
          <View style={styles.ticketDataWrapper}>
            {
              item.data && item.data.length && item.data.map((field, idx) => {
                return (
                  <View style={[styles.itemWrapper, idx == item.data.length - 1 && {backgroundColor: '#CF617F'}]}>
                    <Text style={styles.itemNumber}>
                      {field}
                    </Text>  
                  </View>  
                )
              })
            }
          </View>
          <View style={styles.ticketDateTextWrapper}>
            <Text style={styles.ticketDateText}>
              {moment.unix(item.date).format('DD-MM-YYYY')}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const { showModal, isBigScreen, data, triggerModal } = this.props
    return (
      <Modal
        visible={showModal}
        animationType={'slide'}
        onRequestClose={() => console.log('close ticket modal')}
        transparent={true}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback style={styles.modalContentContainer} onPress={triggerModal}>
            <View style={[
              styles.modalContainer, 
              styles.modalTicketListContainer,
              isBigScreen 
                ? {margin: 25, marginTop: 80} 
                : {margin: 15, marginTop: 40}
              ]}>
              <TouchableWithoutFeedback style={styles.contentWrapper} onPress={e => e.stopPropagation()}>
                <View style={styles.contentInner}>
                  <TouchableOpacity style={styles.closeBtn} onPress={triggerModal}>
                    <Image source={Images.closeBtn} resizeMode={'contain'} style={styles.closeImg}/>
                  </TouchableOpacity>
                  <View style={styles.ticketsListWrapper}>
                    <FlatList
                      style={styles.ticketList}
                      contentContainerStyle={styles.ticketListInner}
                      data={data}
                      extraData={this.state}
                      keyExtractor={this._keyExtractorTicketsList}
                      renderItem={this.renderTicketItem}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    );
  }
}