import { StyleSheet } from 'react-native'

import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { width, height, overlay } from '../../constants/config'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    alignItems: 'center',
    flexDirection: 'column'
  },
  modalContainer: {
    backgroundColor: Colors.snow,
    borderRadius: 15,
    alignItems: 'center',
    overflow: 'hidden'
  },
  helpBtn: {
    position: 'absolute',
    top: width(7),
    right: width(3),
    width: width(8),
    height: width(8),
    backgroundColor: '#6c6ed8',
    borderRadius: width(8),
    alignItems: 'center',
    justifyContent: 'center'
  },
  helpText: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  drawingText: {
    marginTop: width(10),
    textAlign: 'center',
    fontSize: Fonts.size.h7,
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
  },
  timeText: {
    textAlign: 'center',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
    marginTop: width(1)
  },
  priceText: {
    textAlign: 'center',
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
    marginTop: width(1)
  },
  setReminderBtn: {
    width: width(40),
    height: width(10),
    backgroundColor: 'transparent',
    borderRadius: width(5),
    borderColor: '#6c6ed8',
    borderWidth: 2,
    marginTop: width(1)
  },
  setReminderText: {
    marginTop: width(2),
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  mainContentBox: {
    borderRadius: width(3),
    backgroundColor: Colors.snow,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: width(2)
  },
  avatarWrapper: {
    width: width(20),
    height: width(20),
    borderRadius: width(20),
    overflow: 'hidden',
    backgroundColor: Colors.snow,
    marginTop: width(2)
  },
  avatarImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  username: {
    textAlign: 'center',
    color: '#36399b',
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  balanceRank: {
    marginTop: width(3),
    flexDirection: 'row',
  },
  balanceContainer: {
    flex: 1, 
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
    borderRightWidth: 1,
    borderRightColor: Colors.borderGray,
  },
  rankContainer: {
    flex: 1, 
    borderTopWidth: 1,
    borderTopColor: Colors.borderGray,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderGray,
  },
  balanceRankText: {
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    color: Colors.darkTextColor,
  },
  balanceRankValue: {
    textAlign: 'center',
    fontSize: Fonts.size.h4,
    fontFamily: Fonts.type.bold,
    color: Colors.mainBgColor,
  },
  ticketsGetMoreContainer: {
    flexDirection: 'row',  
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width(4)  
  },
  ticketsGetMore: {
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
  },
  ticketBtn: {
    marginTop: 2,
    width: width(31),
    height: width(10),
    backgroundColor: 'transparent',
  },
  getMoreBtn: {
    width: width(31),
    height: width(12),
    backgroundColor: 'transparent',
    borderRadius: width(10),
    borderColor: Colors.borderGray,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketsListAllText: {
    marginTop: width(4),
    textAlign: 'center',
    color: Colors.darkTextColor,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  ticketsGetMoreText: {
    textAlign: 'center',
    color: Colors.darkTextColor,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },

  btnGroup: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: width(3),
    padding: width(3),
    marginBottom: width(3),
  },
  inviteBtn: {
    width: width(40),
    height: width(14),
    backgroundColor: '#6c6ed8',
    borderRadius: width(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  earnBtn: {
    width: width(40),
    height: width(14),
    backgroundColor: Colors.pink,
    borderRadius: width(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    backgroundColor: 'transparent'
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    padding: width(0.6)
  },
  giftImg: {
    alignSelf: 'center',
    marginTop: 50,
  },
  closeImg: {
    width: 20,
    height: 20
  },
  modalTitle: {
    marginTop: 50,
    color: Colors.dimgray,
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.bold,
  },
  modalSubTitle: {
    color: Colors.dimgray,
    fontSize: Fonts.size.h4,
    fontFamily: Fonts.type.bold,
  },
  modalText: {
    textAlign: 'center',
    padding: 40,
    paddingBottom: 10,
    color: Colors.dimgray,
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.bold,
  },
  getButton: {
    backgroundColor: Colors.mainBgColor,
    width: 180,
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  getText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
    textAlign: 'center',
    marginTop: 10
  },
  notNowButton: {
    backgroundColor: Colors.transparent,
    margin: 20
  },
  notNowText: {
    color: Colors.darkTextColor,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,    
  },
  underModal: {
    opacity: 0.2,
  },
  tiketBtnWrapper: {
    marginRight: width(1),
    marginBottom: width(3),
    height: width(10)
  },
  ticketBtnInner: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  ticketIconImageWrapper: {
    width: width(10),
    height: width(10),
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7
  },
  ticketIconImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  ticketCounterOverlay: {
    ...overlay,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ticketCounterWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  ticketCounterText: {
    fontSize: Fonts.size.small,
    textAlign: 'center',
    color: 'white',
    fontFamily: Fonts.type.bold,
  },

  modalOverlay: {
    ...overlay,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContentContainer: {
    ...overlay,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentWrapper: {
    width: '100%',
    height: '100%'
  },
  contentInner: {
    width: '100%',
    height: '100%'
  },
  modalTicketListContainer: {
    height: height(70),
    width: width(80),
  },
  ticketsListWrapper: {
    flex: 1,
    marginTop: width(10)
  },
  ticketList: {
    flex: 1
  },
  ticketListInner: {
    flex: 1
  },
  ticketItemWrapper: {
    paddingHorizontal: width(1),
    paddingVertical: width(1),
    width: '100%'
  },
  ticketItemInner: {
    elevation: 6,
    paddingHorizontal: width(2),
    paddingVertical: width(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  ticketIndexText: {
    fontSize: Fonts.size.medium,
    color: '#9B9B9B'
  },
  ticketDataWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width(2)
  },
  ticketDateTextWrapper: {
    position: 'absolute',
    top: width(1),
    right: width(1),
  },
  ticketDateText: {
    fontSize: Fonts.size.tiny,
    color: '#9B9B9B'
  },


  modalAdContainer: {
    height: height(80),
    width: width(90),
  },
  adWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  adText: {
    fontSize: Fonts.size.h5,
  },
  counterWrapper: {
    position: 'absolute',
    top: width(1),
    right: width(1),
    flexDirection: 'row',
    alignItems: 'center'
  },
  counterAmountText: {
    color: 'black',
    fontSize: Fonts.size.medium,
  },
  counterAmountTextSmaller: {
    fontSize: Fonts.size.small,
  },
  spinner: {
    marginLeft: width(3)
  },
  counterOverlay: {
    ...overlay,
    alignItems: 'flex-end',
  },
  counterTextWrapper: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: Fonts.size.tiny,
    color: 'black',
  },

  modalTicktContainer: {
    height: height(80),
    width: width(90),
    justifyContent: 'center'
  },
  ticketViewWrapper: {
    height: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: width(12),
    paddingVertical: width(10)
  },
  bottomPartWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: width(6),
    width: '100%',
    height: 'auto',
    paddingTop: width(3)
  },
  buttonWrapper: {
    height: width(14),
    width: '100%',
    borderRadius: width(8),
    overflow: 'hidden'
  },
  claimButtonInner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CF617F',
    height: '100%'
  },
  claimButtonText: {
    fontSize: Fonts.size.h6,
    color: 'white'
  },
  userTicketViewWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: width(1.4),
    width: '100%',
    alignSelf: 'center'
  },


  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: width(1),
    width: '90%'
  },
  sepLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#A9A9A9',
    marginVertical: width(1.6),
    paddingHorizontal: width(1)
  },
  halfItem: {
    width: width(3.9),
    height: width(5),
    backgroundColor: 'transparent'
  },
  itemWrapper: {
    width: width(6),
    height: width(6),
    backgroundColor: 'transparent',
    borderRadius: width(4),
    borderColor: '#A9A9A9',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width(1.5),
  },
  itemNumber: {
    fontSize: Fonts.size.small,
    color: 'black'
  }
})
