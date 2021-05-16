import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { BackHandler } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { clearSelectedDevice, disconnect, isConnected } from '../reducers/BLEDeviceReducer';
import ColorsScreen from '../screens/ColorsScreen';
import PalettesScreen from '../screens/PalettesScreen';
import { BottomTabParamList, ColorsTabParamList, PalettesTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator({ }) {
  const colorScheme = useColorScheme();
  const isDeviceConnected = useSelector(isConnected);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const backAction = () => {
      if (isDeviceConnected) {
        dispatch(clearSelectedDevice);
        dispatch(disconnect);
      }
    }
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, []);        

  return (
    <BottomTab.Navigator
      initialRouteName="ColorsTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="ColorsTab"
        component={ColorScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="PalettesTab"
        component={PaletteScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ColorsScreenStack = createStackNavigator<ColorsTabParamList>();

function ColorScreenNavigator() {
  return (
    <ColorsScreenStack.Navigator>
      <ColorsScreenStack.Screen
        name="ColorsTab"
        component={ColorsScreen}
        options={{ headerTitle: 'Colors' }}
      />
    </ColorsScreenStack.Navigator>
  );
}

const PalettesScreenStack = createStackNavigator<PalettesTabParamList>();

function PaletteScreenNavigator() {
  return (
    <PalettesScreenStack.Navigator>
      <PalettesScreenStack.Screen
        name="PalettesTab"
        component={PalettesScreen}
        options={{ headerTitle: 'Palettes' }}
      />
    </PalettesScreenStack.Navigator>
  );
}
