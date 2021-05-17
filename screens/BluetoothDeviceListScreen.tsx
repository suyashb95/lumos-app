import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Pressable, StyleSheet, FlatList} from 'react-native';
import { View, Text } from '../components/Themed';
import { RootStackParamList } from '../types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BleManager, State, Device } from 'react-native-ble-plx';
import { connect, isConnected, setSelectedDevice } from '../reducers/BLEDeviceReducer';
import BluetoothManager from '../constants/BluetoothManager';
import { Header, Button, Icon } from 'react-native-elements';

export default function BluetoothDeviceListScreen({
  navigation,  
}: StackScreenProps<RootStackParamList, 'BluetoothDeviceList'>) {

  const dispatch = useDispatch(); 
  let [devices, setDevices] = useState({});
  let [isScanning, setIsScanning] = useState(false);
  let scanTimeoutHandle: any = null;
  const SCAN_TIMEOUT = 5000;

  let isSensorPoweredOn = () => {
    return BluetoothManager.getBluetoothManager().state().then(state => {
      return state === State.PoweredOn;
    })
  };

  const bluetoothDeviceComponent = ({ item }: { item: Device}) => {
    return (
      <View style={{width: '100%', paddingBottom: 5}}>
        <Pressable onPress={() => {
          item.connect()
          .then(device => {
            return device.discoverAllServicesAndCharacteristics()
          })
          .then(device => {
            dispatch(setSelectedDevice(device.id));
            dispatch(connect({}));
            navigation.replace('Root');
          })
          .catch(error => {
            console.log(error)
          })
          }}>
          <Text style={{marginLeft : 12}}> Device Name: {item.name} </Text>
          <Text style={{marginLeft : 12}}> Device ID: {item.id} </Text>
        </Pressable>
      </View>
    )
  }  

  let scanDevices = () => {
    if (!isSensorPoweredOn()) return;
    if (isScanning) return;
    clearTimeout(scanTimeoutHandle);
    setIsScanning(true)

    BluetoothManager.getBluetoothManager().startDeviceScan(["6E400001-B5A3-F393-E0A9-E50E24DCCA9E"], null, (err, device) => {
      if (err) {
        return;
      }     
      if (device !== null) {
        if (!(device.id in devices)) {
          setDevices(prevState => ({
            ...prevState,
            [device.id]: device
          }));
        }
      }
    }); 

    scanTimeoutHandle = setTimeout(() => {
      BluetoothManager.getBluetoothManager().stopDeviceScan();
      console.log('here');
      setIsScanning(false); 
    }, SCAN_TIMEOUT) 
  };

  const scanButton = <Button
    onPress={() => scanDevices()}
    title="Scan"
    titleStyle={{color: '#ffffff'}}
    type="clear"
    loading={isScanning}
    loadingProps={{color: '#fff'}}
    disabled={isScanning}
  /> 


  return (
    <View>
      <Header
        backgroundColor="#841584"
        leftComponent={{ text: 'Lumos', style: { color: '#fff', fontSize: 18, paddingTop: 10, fontWeight: 'bold' } }}
        rightComponent={scanButton}
      />
      {Object.keys(devices).length === 0 && 
        <View style={{height: '66%', justifyContent: 'center'}}>
          <Icon
            color='#696969'
            name='search'
            size={100}/>      
          <Text style={{marginTop: 25, textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold', fontSize: 25, color: '#696969'}}>
            No nearby devices found
          </Text>
        </View>
      }
      <FlatList style={{paddingTop: 10, paddingBottom: 10}}
          data={Object.values(devices)}
          renderItem={bluetoothDeviceComponent} 
          keyExtractor={(item: any) => item.id}
        />      

    </View>
  );
}
