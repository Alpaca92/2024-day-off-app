import { fontFace, globalStyle } from '@vanilla-extract/css';
import { font } from '@styles/layers.css';
import { fonts } from '@asset/index';

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
