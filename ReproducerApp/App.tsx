
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  //Text,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';

import Text from 'CustomText';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        style={{flex: 1, paddingHorizontal: 8}}
        enabled>
        <ScrollView>
          <Text style={styles.pageTitle}>DLP</Text>
          <Text style={styles.pageHeader}>Basic React Native components</Text>

          <Text style={styles.blockHeader}> Text > Text</Text>
          <Text >
            Text > (All Text-nested elements are inline) :
            <Text selectable> | Text > Selectable Text (NOTE: to make it selectable - place {'<Text>'} inside {'<View>'} tag) | </Text>
            <Text> | Text > Text | </Text>
          </Text>

          <Text style={styles.blockHeader}> View > Text</Text>
          <View>
            <Text selectable>| View > Text (selectable) |</Text>
            <Text>| View > Text (non-selectable) |</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: 45,
              padding: 10,
            }}>
            <View style={{backgroundColor: '#4486f5', flex: 0.3}} />
            <View style={{backgroundColor: 'orange', flex: 0.5}} />
            <Text selectable>  Empty {'<View>'} rectangles combination with {'<Text>'}</Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  ); 

}

const styles = StyleSheet.create({
  pageTitle: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 12,
    color: '#4486f5',
    fontSize: 22,
    fontWeight: 'bold'
  },
  pageHeader: {
    paddingVertical: 7,
    fontSize: 18,
    fontWeight: 'bold'
  },
  blockHeader: {
    paddingVertical: 3,
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#000'
  }
});


export default App;

