import Database from '../api/Database'
import firebase from 'react-native-firebase';
import { AsyncStorage } from 'react-native'

class Users extends Database {
  constructor() {
    super('users');
    AsyncStorage.getItem('currentUser')
    .then((currentUser) => {
      if (currentUser) {
        try {
          currentUserObj = JSON.parse(currentUser)
          this.user = currentUserObj.user
        } catch (error) {
          console.log('error constructor users model')
          console.log(error)
        }
      }
    })
  }

  init(userModel) {
    console.log('init')
    console.log(userModel)
    this.user = userModel
  }
  
  addUser(userId, userModel) {
    return super.addModelById(userId, userModel)
  }
  modifyUser(userId, keyValue) {
    return super.modifyModel(userId, keyValue)
  }

  async addTicket(userId, ticketModel) {
    return super.pushToChildArray('tickets', userId || this.user.uid, ticketModel)
  }
  deleteTicket(userId, ticketId) {
    return super.deleteModel(`${userId}/tickets/${ticketId}`)
  }
}

export default Users = new Users()