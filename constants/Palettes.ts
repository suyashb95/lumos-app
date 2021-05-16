import tinycolor from 'tinycolor2';

export default [{
    name: 'rainbowColors',
    colors: [
      '#FF0000', '#D52A00', '#AB5500', '#AB7F00',
      '#ABAB00', '#56D500', '#00FF00', '#00D52A',
      '#00AB55', '#0056AA', '#0000FF', '#2A00D5',
      '#5500AB', '#7F0081', '#AB0055', '#D5002B'
    ],
    anchorPoints: []
  }, {
    name: 'partyColors',
    colors: [
      '#5500AB', '#84007C', '#B5004B', '#E5001B',
      '#E81700', '#B84700', '#AB7700', '#ABAB00',
      '#AB5500', '#DD2200', '#F2000E', '#C2003E',
      '#8F0071', '#5F00A1', '#2F00D0', '#0007F9'     
    ],
    anchorPoints: []
  }, {
    name: 'heatColors',
    colors: [
      '#000000', '#330000', '#660000', '#990000', 
      '#CC0000', '#FF0000', '#FF3300', '#FF6600', 
      '#FF9900', '#FFCC00', '#FFFF00', '#FFFF33', 
      '#FFFF66', '#FFFF99', '#FFFFCC', '#FFFFFF',
    ],
    anchorPoints: []
  }, {
    name: 'lavaColors',
    colors: [
      tinycolor('BLACK').toHexString(),
      tinycolor('MAROON').toHexString(),
      tinycolor('BLACK').toHexString(),
      tinycolor('MAROON').toHexString(),
      tinycolor('DARK_RED').toHexString(),
      tinycolor('MAROON').toHexString(),
      tinycolor('DARK_RED').toHexString(),
      tinycolor('DARK_RED').toHexString(),
      tinycolor('DARK_RED').toHexString(),
      tinycolor('RED').toHexString(),
      tinycolor('ORANGE').toHexString(),
      tinycolor('WHITE').toHexString(),
      tinycolor('ORANGE').toHexString(),
      tinycolor('RED').toHexString(),
      tinycolor('DARK_RED').toHexString()
    ],
    anchorPoints: []
  }
]