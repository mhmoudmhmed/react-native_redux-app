/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet} from 'react-native';
const CardSection = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding:5,
    borderBottomWidth:1,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection:'row',
    borderColor:'#ddd',
    position:'relative',
  },
});
export default CardSection;
