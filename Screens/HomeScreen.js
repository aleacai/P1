import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title="JavaScript" 
                onPress={()=>navigation.navigate('Javascript')}
            />

            <Button 
                title="React" 
                onPress={()=>navigation.navigate('React')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  