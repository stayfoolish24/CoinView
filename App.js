/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import CoinView from './components/CoinView'
import TopBar from './components/TopBar'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} barStyle="light-content" />
        <TopBar title="Show me the Coin" />
        <CoinView style={styles.coinView} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
    // alignItems: 'center',
    // justifyContent: 'space-around'
  }
})
