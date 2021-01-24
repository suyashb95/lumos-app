import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ColorWheel } from 'react-native-color-wheel';

import Controls from '../components/Controls';
import { View } from '../components/Themed';
import { useDispatch } from 'react-redux';
import * as tinycolor from 'tinycolor2';
import { setPalette } from '../reducers/PatternReducer';

export default function ColorsScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <View>
      <View style={{alignItems: 'center', height: '60%'}}>
        <ColorWheel
          initialColor="#ee0000"
          onColorChangeComplete={(color: any) => {
            let rgb = tinycolor.default(color).toHex();
            dispatch(setPalette({
              colors: [rgb],
              anchorPoints: []
            }))
          }}
          style={{width: 300}}
          thumbStyle={{ height: 50, width: 50, borderRadius: 30}}
        />         
      </View>      
      <Controls navigation={navigation}/>
    </View>
  );
}
