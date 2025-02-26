export interface Shades {
    [key: string]: string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
  }
  
  export type ShadeKey = '100' | '200' | '300' | '400' | '500';
  
  export type Color = {
    [key in ShadeKey]: string;
  } & {
    a: Shades;
    p3: Shades;
    p3a: Shades;
  };
  
  export const azure: Color = {
    '100': '#ECF3FA',
    '200': '#9FC5EA',
    '300': '#3373B1',
    '400': '#0C407B',
    '500': '#002147',
    a: {
      '100': '#005EBC13',
      '200': '#0065C860',
      '300': '#00509ECC',
      '400': '#003775F3',
      '500': '#002147FF',
    },
    p3: {
      '100': 'oklch(96.09% 0.012 247.95)',
      '200': 'oklch(80.87% 0.0665 247.97)',
      '300': 'oklch(54.38% 0.1172 250.26)',
      '400': 'oklch(37.47% 0.1132 255.31)',
      '500': 'oklch(25.05% 0.0808 254.42)',
    },
    p3a: {
      '100': 'color(display-p3 0.0078 0.3373 0.6706 / 0.071)',
      '200': 'color(display-p3 0.0039 0.3333 0.7294 / 0.346)',
      '300': 'color(display-p3 0 0.2471 0.5569 / 0.734)',
      '400': 'color(display-p3 0 0.149 0.4 / 0.887)',
      '500': 'color(display-p3 0 0.0941 0.2392 / 0.965)',
    },
  };
  
  export const purpure: Color = {
    '100': '#F5F0FF',
    '200': '#C9B1F6',
    '300': '#9175CC',
    '400': '#5A438A',
    '500': '#251547',
    a: {
      '100': '#5500FF0F',
      '200': '#4F00E24E',
      '300': '#3400A18A',
      '400': '#1F0060BC',
      '500': '#110037EA',
    },
    p3: {
      '100': 'oklch(96.33% 0.0206 301.15)',
      '200': 'oklch(80.5% 0.0989 300.14)',
      '300': 'oklch(62.55% 0.1301 297.33)',
      '400': 'oklch(44.22% 0.1142 296.38)',
      '500': 'oklch(24.95% 0.089 293.66)',
    },
    p3a: {
      '100': 'color(display-p3 0.2706 0.0039 0.9373 / 0.059)',
      '200': 'color(display-p3 0.2471 0.0039 0.8196 / 0.302)',
      '300': 'color(display-p3 0.1686 0 0.5843 / 0.538)',
      '400': 'color(display-p3 0.098 0 0.3529 / 0.734)',
      '500': 'color(display-p3 0.0549 0 0.1961 / 0.914)',
    },
  };

  export const rose: Color = {
    '100': '#FFE8F5',
    '200': '#F4A3D5',
    '300': '#EC74BC',
    '400': '#BD5F97',
    '500': '#542641',
    a: {
      '100': '#FF009117',
      '200': '#E1008B5C',
      '300': '#DD00858B',
      '400': '#96005AA0',
      '500': '#360020D9',
    },
    p3: {
      '100': 'oklch(95.32% 0.0301 342.62)',
      '200': 'oklch(80.95% 0.1141 342.33)',
      '300': 'oklch(71.96% 0.1686 345.2)',
      '400': 'oklch(61.45% 0.1376 345.2)',
      '500': 'oklch(34.19% 0.0775 345.75)',
    },
    p3a: {
      '100': 'color(display-p3 0.8235 0.0118 0.5059 / 0.087)',
      '200': 'color(display-p3 0.7412 0.0039 0.4902 / 0.346)',
      '300': 'color(display-p3 0.7451 0 0.4706 / 0.518)',
      '400': 'color(display-p3 0.498 0 0.3176 / 0.608)',
      '500': 'color(display-p3 0.1765 0 0.1137 / 0.844)',
    },
  };

  export const gules: Color = {
    '100': '#FFDEDC',
    '200': '#FF9F8E',
    '300': '#EE6149',
    '400': '#C34935',
    '500': '#60241B',
    a: {
      '100': '#FF0F0023',
      '200': '#FF270071',
      '300': '#E72200B6',
      '400': '#B31900CA',
      '500': '#4D0A00E4',
    },
    p3: {
      '100': 'oklch(92.73% 0.0368 21.97)',
      '200': 'oklch(79.59% 0.117952 30.7134)',
      '300': 'oklch(66.82% 0.1791 31.8)',
      '400': 'oklch(56.81% 0.1603 31.67)',
      '500': 'oklch(34.72% 0.0897 30.75)',
    },
    p3a: {
      '100': 'color(display-p3 0.8549 0.0667 0.0078 / 0.134)',
      '200': 'color(display-p3 0.8824 0.1569 0.0039 / 0.428)',
      '300': 'color(display-p3 0.8039 0.1412 0 / 0.679)',
      '400': 'color(display-p3 0.6196 0.102 0 / 0.761)',
      '500': 'color(display-p3 0.2627 0.0431 0 / 0.883)',
    },
  };

  export const tawny: Color = {
    '100': '#FEEDDE',
    '200': '#FFCFA0',
    '300': '#FEAC60',
    '400': '#CB8647',
    '500': '#533921',
    a: {
      '100': '#F8740021',
      '200': '#FF7F005F',
      '300': '#FE7A009F',
      '400': '#B75800B8',
      '500': '#3A1C00DE',
    },
    p3: {
      '100': 'oklch(95.56% 0.0272 63.96)',
      '200': 'oklch(88.52% 0.0817 65.85)',
      '300': 'oklch(80.96% 0.1333 61.88)',
      '400': 'oklch(67.85% 0.1159 61.16)',
      '500': 'oklch(36.84% 0.0522 62.76)',
    },
    p3a: {
      '100': 'color(display-p3 0.8745 0.4549 0.0039 / 0.122)',
      '200': 'color(display-p3 0.9098 0.4863 0.0039 / 0.35)',
      '300': 'color(display-p3 0.9098 0.4588 0 / 0.573)',
      '400': 'color(display-p3 0.6431 0.3176 0 / 0.679)',
      '500': 'color(display-p3 0.1922 0.098 0 / 0.855)',
    },
  };

  export const or: Color = {
    '100': '#FFFBE6',
    '200': '#F8E5B1',
    '300': '#E9C363',
    '400': '#A98F4D',
    '500': '#50421F',
    a: {
      '100': '#FFD70019',
      '200': '#E9AA004E',
      '300': '#DB9D009C',
      '400': '#845F00B2',
      '500': '#382800E0',
    },
    p3: {
      '100': 'oklch(98.56% 0.0278 98.05)',
      '200': 'oklch(92.47% 0.0701 90.35)',
      '300': 'oklch(83.13% 0.1227 87.96)',
      '400': 'oklch(65.95% 0.0909 88.33)',
      '500': 'oklch(38.53% 0.0548 87.92)',
    },
    p3a: {
      '100': 'color(display-p3 0.9608 0.8314 0.0118 / 0.091)',
      '200': 'color(display-p3 0.8627 0.6549 0.0039 / 0.283)',
      '300': 'color(display-p3 0.8039 0.5843 0 / 0.553)',
      '400': 'color(display-p3 0.4667 0.3412 0 / 0.659)',
      '500': 'color(display-p3 0.1922 0.1412 0 / 0.859)',
    },
  };

  export const vert: Color = {
    '100': '#F9FFE8',
    '200': '#D9E5A6',
    '300': '#B6C869',
    '400': '#6F8053',
    '500': '#232B18',
    a: {
      '100': '#BDFF0017',
      '200': '#93B50059',
      '300': '#83A20096',
      '400': '#2A4300AC',
      '500': '#0C1500E7',
    },
    p3: {
      '100': 'oklch(98.94% 0.0307 118.85)',
      '200': 'oklch(89.76% 0.083 116.87)',
      '300': 'oklch(79.84% 0.1224 118.1)',
      '400': 'oklch(57.42% 0.0683 125.31)',
      '500': 'oklch(27.54% 0.035 127.13)',
    },
    p3a: {
      '100': 'color(display-p3 0.7647 1 0.0078 / 0.083)',
      '200': 'color(display-p3 0.5647 0.6863 0.0039 / 0.322)',
      '300': 'color(display-p3 0.4941 0.5961 0 / 0.542)',
      '400': 'color(display-p3 0.1569 0.2353 0 / 0.655)',
      '500': 'color(display-p3 0.0471 0.0745 0 / 0.899)',
    },
  };

  export const cendree: Color = {
    '100': '#F3F0E9',
    '200': '#DCD7C7',
    '300': '#8A8679',
    '400': '#636057',
    '500': '#363530',
    a: {
      '100': '#74520016',
      '200': '#60490038',
      '300': '#21190086',
      '400': '#120E00A8',
      '500': '#080600CF',
    },
    p3: {
      '100': 'oklch(95.55% 0.0099 87.47)',
      '200': 'oklch(87.88% 0.0223 92.53)',
      '300': 'oklch(61.97% 0.0197 92.79)',
      '400': 'oklch(48.9% 0.0145 91.64)',
      '500': 'oklch(32.82% 0.0087 97.6)',
    },
    p3a: {
      '100': 'color(display-p3 0.3882 0.2941 0.0078 / 0.083)',
      '200': 'color(display-p3 0.3373 0.2627 0.0039 / 0.212)',
      '300': 'color(display-p3 0.1137 0.0902 0 / 0.522)',
      '400': 'color(display-p3 0.0627 0.0471 0 / 0.655)',
      '500': 'color(display-p3 0.0314 0.0235 0 / 0.812)',
    },
  };

  export const sable: Color = {
    '100': '#A4A2A0',
    '200': '#787673',
    '300': '#494847',
    '400': '#2C2B2A',
    '500': '#191818',
    a: {
      '100': '#0B06005F',
      '200': '#0A06008C',
      '300': '#030200B8',
      '400': '#020100D5',
      '500': '#010000E7',
    },
    p3: {
      '100': 'oklch(71.33% 0.0037 67.76)',
      '200': 'oklch(56.67% 0.0052 78.28)',
      '300': 'oklch(40.23% 0.0021 67.76)',
      '400': 'oklch(28.97% 0.0023 67.73)',
      '500': 'oklch(21.02% 0.0016 17.28)',
    },
    p3a: {
      '100': 'color(display-p3 0.0471 0.0235 0.0039 / 0.373)',
      '200': 'color(display-p3 0.0353 0.0235 0 / 0.55)',
      '300': 'color(display-p3 0.0118 0.0078 0 / 0.722)',
      '400': 'color(display-p3 0.0078 0.0039 0 / 0.836)',
      '500': 'color(display-p3 0.0039 0 0 / 0.906)',
    },
  };

  export const argent: Color = {
    '100': '#FFFFFF',
    '200': '#F9F9F9',
    '300': '#E8E8E8',
    '400': '#D8D8D8',
    '500': '#BBB',
    a: {
      '100': '#FFFFFFFF',
      '200': '#00000006',
      '300': '#00000017',
      '400': '#00000027',
      '500': '#00000044',
    },
    p3: {
      '100': 'oklch(100% 0 0)',
      '200': 'oklch(98.21% 0 0)',
      '300': 'oklch(93.1% 0 0)',
      '400': 'oklch(88.22% 0 0)',
      '500': 'oklch(79.21% 0 0)',
    },
    p3a: {
      '100': 'color(display-p3 1 1 1 / 1)',
      '200': 'color(display-p3 0 0 0 / 0.0235)',
      '300': 'color(display-p3 0 0 0 / 0.0902)',
      '400': 'color(display-p3 0 0 0 / 0.1529)',
      '500': 'color(display-p3 0 0 0 / 0.2667)',
    },
  };
  
  export const colors = { azure, purpure, rose, gules, tawny, or, vert, cendree, sable, argent };