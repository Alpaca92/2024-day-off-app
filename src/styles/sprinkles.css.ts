import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from './theme.css';

const flexProperties = defineProperties({
  properties: {
    display: ['flex', 'inline-flex'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
    gap: vars.spaces,
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexBasis: ['auto', '0'],
  },
  shorthands: {
    align: ['justifyContent', 'alignItems'],
  },
});

export const sprinkles = createSprinkles(flexProperties);
