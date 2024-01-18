import { css } from './stitchesConfig';

export const textClampCss = css({
  display: '-webkit-box',
  '-webkit-line-clamp': 1,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: '$grayBase',
});
