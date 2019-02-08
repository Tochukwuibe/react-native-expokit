import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';

import { Button , Header} from 'react-native-elements';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
  />
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View>
                <Button onPress={this.onToStories} style={styles.stories_button} title="Stories" raised={true} />
            </View>
        </ScrollView>
      </SafeAreaView >
    );
  }

  onToStories = () => {
    this.props.navigation.navigate('Stories')
  }

  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stories_button: {
    width: 200,
    maxWidth: 200
  }
});
