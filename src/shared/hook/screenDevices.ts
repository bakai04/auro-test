export const screenSizes = {
  phone: 320,
  tablet: 768,
  desktop: 1280,
};

const phone = `min-width: ${screenSizes.phone}px`;
const tablet = `min-width: ${screenSizes.tablet}px`;
const desktop = `min-width: ${screenSizes.desktop}px`;

export default {
  phone,
  tablet,
  desktop,
};
