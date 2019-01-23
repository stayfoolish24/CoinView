import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Left</Text>
        <Text style={{ fontSize: 20 }}>{this.props.title} </Text>
        <Text>Right</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  }
})

export default TopBar
