import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { Navigation } from 'react-native-navigation'

class ValidateScreen extends React.Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <TouchableHighlight style={{alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: 30, marginTop: 30}} onPress={() => {
          Navigation.dismissModal({
            navigatorStyle: {
              navBarHidden: true
            },
            animationType: 'none'
          })
        }}>
          <Text>{`< Back`}</Text>
        </TouchableHighlight>
        <View>
          <Text>
            Validate Screen
          </Text>
        </View>
      </View>
    )
  }
}

export default ValidateScreen