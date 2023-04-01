import React from 'react'
import { Alert, Button, View } from 'react-native'

function AlertMe() {

    const alertme = () => {
        Alert.alert("waring", "good message",
            [
                {text: "ok"},
                { text: "close" , onPress: () => {console.warn("Hide this now ")} },               
                { text: "cancel", onPress: () => { console.warn("Open it ok") } },
               
            ], {
                cancelable: true, 
                onDismiss: () => {
                    console.warn("Alert dismissed")
                }
                })
    }
  return (
      <View>
          <Button
              title="alert me"
              onPress = {alertme}
          />
    </View>
  )
}

export default AlertMe