import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import Video from 'react-native-video'
import Orientation from 'react-native-orientation';
// Styles
import styles from './NotificationAllowScreenStyles'

import MainScreen from '../MainScreen/MainScreen'

import { Images } from '../../Themes'

export default class NotificationAllowScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      repeat: true
    }
  }
  
  componentDidMount() {
    // this locks the view to Portrait Mode
    Orientation.lockToPortrait();
  }

  goToMainScreen = () => {
    const { navigation } = this.props
    this.setState({
      paused: true,
      repeat: false
    }, () => {
      navigation.navigate('MainScreen')
    })
  }

  render () {
    const { navigation } = this.props;
    const { paused, repeat } = this.state
    return (
      <View style={styles.mainContainer}>
        <View style={styles.backgroundVideo}>
          <Video
            source={require('../../Images/bgVideo.mp4')}
            rate={1.0}
            volume={1.0}
            muted={false}
            paused={paused}
            resizeMode={'cover'}
            repeat={repeat}
            style={styles.backgroundVideo}
            />
        </View>
        {/* <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
          <Image source={Images.backButton}/>
        </TouchableOpacity> */}
        <View style={styles.centered}>
          <TouchableOpacity style={styles.NoBtn} onPress={this.goToMainScreen}>
            <Text style={styles.NoText}>Nah</Text>
          </TouchableOpacity>
          <Text style={styles.questionText}>Get notified when is live?</Text>
          <TouchableOpacity style={styles.YepBtn} onPress={this.goToMainScreen}>
              <Text style={styles.btnText}>Yep!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
