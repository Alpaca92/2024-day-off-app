import { fontFace, globalStyle } from '@vanilla-extract/css';
import { font } from '@styles/layers.css';

const NoonnuBasicGothic = fontFace({
  src: 'url("/assets/fonts/NoonnuBasicGothic.otf") format("opentype")',
  fontWeight: 'normal',
  fontStyle: 'normal',
});

globalStyle(':root', {
  '@layer': {
    [font]: {
      fontFamily: NoonnuBasicGothic,
    },
  },
});
