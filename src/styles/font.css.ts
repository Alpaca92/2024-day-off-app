import { fonts } from '@asset/index';
import { font } from '@styles/layers.css';
import { fontFace, globalStyle } from '@vanilla-extract/css';

const NoonnuBasicGothic = fontFace([
  {
    src: `local('NoonnuBasicGothic'), url(${fonts.NoonnuBasicGothic.otf}) format('opentype')`,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
]);

globalStyle('body', {
  '@layer': {
    [font]: {
      fontFamily: NoonnuBasicGothic,
    },
  },
});
