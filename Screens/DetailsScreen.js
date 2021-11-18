import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const DetailsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
           <Image style={styles.logo} source={require('../javascript-logo.png')} />     
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    logo: {
    height: 200,
    width: 200,
  }

});
  