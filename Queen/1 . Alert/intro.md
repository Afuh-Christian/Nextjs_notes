# On android ... 

    max of 3 buttons



    Alert.alert("waring", "good message",
            [
                { text: "close" , onPress: () => {console.warn("Hide this now ")} }, /// each button....
               
                { text: "cancel", onPress: () => { console.warn("Open it ok") } },
                { text: "cancel", onPress: () => { console.warn("Open it ok") } },
                
                
            ])