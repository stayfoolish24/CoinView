import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class CoinDetail extends Component {
  render() {
    let date = new Date()
    let now = date.toLocaleString()

    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              'https://blocis.com/wp-content/uploads/kboard_attached/3/201806/5b2c650b6809c7061933.jpg'
          }}
        />
        <Text style={[styles.text, { flex: 1 }]}>
          {'#' + (this.props.rank || 'Rank')}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {this.props.name || 'Name'}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {'Price: ' + (this.props.price || 0)}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {'Volume: ' + (this.props.volumn || 0)}
        </Text>
        <Text style={[styles.text, { flex: 1 }]}>
          {'Updated: ' + (this.props.time || 0)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    color: 'white'
  }
})

export default CoinDetail
