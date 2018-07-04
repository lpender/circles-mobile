import React from 'react'
import { Dimensions, Text, TouchableHighlight, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Card } from 'antd-mobile-rn'

class WalletScreen extends React.Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'space-between', alignItems: 'stretch'}}>
        <View style={{flex: 1, backgroundColor: 'grey'}}>
          <TouchableHighlight style={{alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 30, width: 30, marginTop: 30}} onPress={() => {
            // Navigation.dismissModal({
            //   navigatorStyle: {
            //     navBarHidden: true
            //   }
            // })
            this.props.navigation.goBack()
          }}>
            <Text>X</Text>
          </TouchableHighlight>
          <View>
            <Text style={{textAlign: 'center'}}>Ashoka Finley</Text>
            <Text style={{textAlign: 'center'}}>Account Value: 1000 CCS</Text>
          </View>
        </View>
        <View style={{flex: 2, backgroundColor: 'yellow'}}>
          <Text style={{textAlign: 'center'}}>Your next Circles issuance is due in 7 Days</Text>
          <Card style={{flex: 1, margin: 5, width: Dimensions.get('window').width - 10}}>
            <Card.Header
              title='This is title'
              thumb='https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'
              // extra={<span>this is extra</span>}
            />
            <Card.Body>
              <Text>
                Omg this is amazing
              </Text>
            </Card.Body>
            <Card.Footer content='footer content' extra={<Text>Hello</Text>} />
          </Card>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue'}}>
          <Text style={{textAlign: 'center'}}>Connect with people in your network that you trust to spend your circles</Text>
        </View>
        <View style={{flexDirection: 'row', height: 60}}>
          <TouchableHighlight style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRightWidth: 1}} onPress={() => {
            Navigation.dismissModal({
              navigatorStyle: {
                navBarHidden: true
              }
            })
          }}>
            <Text>Add Contacts</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}} onPress={() => {
            Navigation.showModal({
              navigatorStyle: {
                navBarHidden: true
              },
              screen: 'ValidateScreen', // unique ID registered with Navigation.registerScreen
              animationType: 'none'
            })
          }}>
            <Text>Get Validated</Text>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
}

export default WalletScreen