import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const base = style({
  position: 'absolute',
});

const variants = {
  type: {
    center: {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
    leftTop: {
      left: 0,
      top: 0,
    },
    rightTop: {
      right: 0,
      top: 0,
    },
    leftBottom: {
      left: 0,
      bottom: 0,
    },
    rightBottom: {
      right: 0,
      bottom: 0,
    },
  },
  fullSize: {
    true: {
      width: '100%',
      height: '100%',
    },
  },
};

export const absolute = recipe({
  base,
  variants,
});

export interface absoluteRecipeProps {
  type?: keyof typeof variants.type;
  fullSize?: keyof typeof variants.fullSize;
}
