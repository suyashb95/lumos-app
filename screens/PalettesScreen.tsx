import * as React from 'react';
import { Pressable, StyleSheet, SafeAreaView, FlatList } from 'react-native';

import Controls from '../components/Controls';
import { Text, View } from '../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import palettes from '../constants/Palettes';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setPalette } from '../reducers/PatternReducer';
import { clearSelectedDevice, disconnect, getSelectedDeviceId } from '../reducers/BLEDeviceReducer';
import BluetoothManager from '../constants/BluetoothManager';
import { Button } from 'react-native-elements';
import * as tinycolor from 'tinycolor2';

export default function PalettesScreen({ navigation }) {
  const dispatch = useDispatch();
  const [selectedPalette, setSelectedPalette] = useState(-1);

  let connectedDeviceId = useSelector(getSelectedDeviceId);
  
  const disconnectButton = <Button
    title="Disconnect"
    buttonStyle={{backgroundColor: '#000000'}}
    onPress={() => {
      BluetoothManager.getBluetoothManager().cancelDeviceConnection(
        connectedDeviceId
      ).then(device => {
        dispatch(clearSelectedDevice);
        dispatch(disconnect);
        navigation.replace('BluetoothDeviceList');
      })
    }}
  />  
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        disconnectButton
      ),
    });
  }, [navigation]);

  let newPalettes = palettes.map((palette, index) => {
    return {id: index, ...palette}
  });

  let camelCaseToTitleCase = (s: string) => {
    return s.split(/(?=[A-Z])/).map(p => {
      return p.charAt(0).toUpperCase() + p.slice(1)
    }).join(' ')
  };

  const linearGradientItem = ({ item }: {item: any}) => (
    <View style={styles.linearGradientContainer}>
        <Pressable onPress={() => {
          dispatch(setPalette({colors: item.colors.map(color => parseInt(tinycolor.default(color).toHex(), 16)), anchorPoints: item.locations}))
          setSelectedPalette(item.id)}
          }>
          <Text style={ {paddingBottom: 5}}>{ camelCaseToTitleCase(item.name) }</Text>
            <LinearGradient
              start={{x: 0, y: 0}} end={{x: 1, y: 0}}      
              colors={item.colors}
              locations={item.locations}
              style={selectedPalette == item.id ? styles.selectedLinearGradient : styles.linearGradient}>
            </LinearGradient>
        </Pressable>          
    </View>
  )

  return (  
    <View>
      <SafeAreaView style={{ paddingBottom: 30, paddingTop: 45, height: '60%'}}>
        <FlatList
          data={newPalettes}
          renderItem={linearGradientItem} 
          keyExtractor={(item: any) => item.id}
        />
      </SafeAreaView>
      <Controls navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    marginBottom: 10, 
    borderRadius: 13,
    height: 40,
    width: 300,
  },
  selectedLinearGradient: {
    marginBottom: 10, 
    borderRadius: 16,
    borderColor: 'white',
    borderWidth: 1.5,
    height: 40,
    width: 300,
  },
  linearGradientContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
    width: '100%'
  }  
});
