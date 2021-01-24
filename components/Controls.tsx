import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';

import { Text, View } from './Themed';
import { Behavior } from '../constants/Behavior';
import { getBehavior, setBehavior, setSpeed, setBrightness, setPalette, getBrightness, getSpeed } from '../reducers/PatternReducer';
import { LabeledSlider } from './LabeledSlider';
import Navigation from '../navigation';

export default function Controls({ navigation }) {
  const dispatch = useDispatch();
  const behavior = useSelector(getBehavior);
  const brightness = useSelector(getBrightness);
  const speed = useSelector(getSpeed);

  return (
    <View>   
      <View style={styles.fixToText}>
        <LabeledSlider
          value={brightness}
          label={"Brightness"}
          style={{height: 40, width: '90%'}}
          minimumValue={0}
          maximumValue={1}
          onSlidingComplete={(value: any) => dispatch(setBrightness(value))}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <LabeledSlider
          value={speed}
          label={"Speed"}
          style={{height: 40, width: '90%'}}
          minimumValue={0}
          maximumValue={1}
          onSlidingComplete={(value: any) => dispatch(setSpeed(value))}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Text style={{marginLeft: 10, marginBottom: 10}} >Effect</Text>
        <Picker
          style={{marginLeft: 10, marginBottom: 20, backgroundColor: '#fff', width: '30%'}}
          onValueChange={(value, _) => dispatch(setBehavior(value))}
          selectedValue={behavior}
          mode={Picker.MODE_DROPDOWN}>
            <Picker.Item label="None" value={Behavior.NONE} />
            <Picker.Item label="Fade" value={Behavior.FADE} />
            <Picker.Item label="Wave" value={Behavior.WAVE} />
            <Picker.Item label="Twinkle" value={Behavior.TWINKLE} />
        </Picker>
        <View style={{marginLeft: 10}}>
          <Button
            onPress={() => navigation.navigate('BluetoothDeviceList')}
            title="Update"
            color="#841584"
            accessibilityLabel="Update"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fixToText: {
    marginLeft: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    height: '60%'
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  slider: {
    marginRight: 10,
    marginLeft: 10,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
