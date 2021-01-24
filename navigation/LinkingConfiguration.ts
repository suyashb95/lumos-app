import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Colors: {
            screens: {
              ColorsScreen: 'one',
            },
          },
          Palettes: {
            screens: {
              PalettesScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
      BleDeviceList: '*'
    },
  },
};
