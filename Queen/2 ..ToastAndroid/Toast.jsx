import React from 'react'
import { Button, ToastAndroid, View } from 'react-native'

function Toast() {
    function alertme() {
        ToastAndroid.showWithGravityAndOffset("this toas is at the top ... ", ToastAndroid.SHORT , ToastAndroid.TOP , 0 , 100)
    }
  
  return (
      <View>
            <Button
              title="toast me"
              onPress = {alertme}      
          />
    </View>
  )
}

export default Toast