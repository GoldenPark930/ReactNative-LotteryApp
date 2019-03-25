import { FBApp } from '../constants/config'

export default class Database {
  constructor(modelName) {
    this.modelName = modelName
  }
  
  modifyModel(id, keyValue) {
    return FBApp.database().ref(`/${this.modelName}/${id}`).update(keyValue)
  }
  setModelById(id = new Date().getTime(), model) {
    return FBApp.database().ref(`/${this.modelName}/${id}`).set(model)
  }
  updateModelById(id, model) {
    if (id) return FBApp.database().ref(`/${this.modelName}/${id}`).update(model)
  }
  pushToChildArray(childName, id, value) {
    if (childName && id) return FBApp.database().ref(`/${this.modelName}/${id}`).child(childName).push(value)
  }
  pushModel(model) {
    return FBApp.database().ref(`/${this.modelName}/`).push(model)
  }
  deleteModel(path) {
    return FBApp.database().ref(`/${this.modelName}/${path}`).remove();
  }
}