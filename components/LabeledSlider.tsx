import * as React from 'react';

import { Text, View } from './Themed';
import Slider, { SliderProps } from '@react-native-community/slider';

export function LabeledSlider({ label, ...otherProps }: { label: any, otherProps: SliderProps}) {
  return (
    <View style={{width: '100%'}}>
        <Text style={{marginLeft : 12}}> {label} </Text>        
        <Slider {...otherProps}/>
    </View>
  )
}
