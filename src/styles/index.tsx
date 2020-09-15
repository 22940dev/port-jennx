import { css, injectGlobal } from 'emotion';
import { isNil } from 'lodash-es';
import { getParams } from '../utils/native';


export const colors = {
  white: '#F8F5F2',
  blue: '#4E6B86',
  redorange: '#EF665A',
  yellow: '#FBC225',
  grey: '#606060',
  black: '#292929',
  orange: '#D03F17',
  petrolBlue: '#118383',
  liquorice: '#171616',
  silver: '#74726D',
  sugar: '#fffefa',
  snow: '#fff',
  fog: '#F8F8F8',
  tungsten: '#504E4B',
  berry: '#D03F17',
  berryAir: '#FAEBE5',
  earth: '#836714',
  earthAir: '#F2EFE7',
  leaf: '#189D39',
  leafAir: '#E7F5EB',
};

export const boxShadow = 'box-shadow: 0 1px 3px rgba(23, 22, 22, 0.2);';

export const borderRadius = '8px';

export const spacing = {
  milli: '4px',
  centi: '8px',
  deci: '16px',
  regular: '24px',
  hecto: '40px',
  kilo: '48px',
  mega: '64px',
};

export const fontFamilies = {
  Lato: `'Lato'`,
  RobotoMono: `'
  @font-face {
    font-family: 'RobotoMono';
    src: local('Lato'), url(./fonts/RobotoMono-Regular.otf) format('truetype');
  }'`
};



export const fontStyles = {
  rhinotitle: css`
    font-family: Roboto Mono;
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 1.75rem;
  `,
  shark: css`
    font-family: Lato;
    font-weight: 500;
    font-size: 1.38rem;
    line-height: 1.88rem;
  `,
  roboShark: css`
    font-family: Lato;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.88rem;
  `,
  horse: css`
    font-family: Roboto Mono;
    font-weight: 600;
    font-size: 1.13rem;
    line-height: 1.5rem;
  `,
  lion: css`
    font-family: Roboto Mono;
    font-weight: 500;
    font-size: 4.06rem;
    line-height: 4.44rem;
  `,
  dog: css`
    font-family: Lato;
    font-weight: 300;
    font-size: 1.5 rem;
    line-height: 1.5rem;
  `,
  cat: css`
    font-family: Roboto Mono;
    font-weight: 400;
    font-size: 0.94rem;
    line-height: 1.31rem;
  `,
  roboCat: css`
    font-family: Roboto Mono;
    font-weight: 400;
    font-size: 0.88rem;
    line-height: 1.31rem;
  `,
  mouse: css`
    font-family: Roboto Mono;
    font-weight: 500;
    font-size: 0.81rem;
    line-height: 1.19rem;
  `,
  flea: css`
    font-family: Roboto Mono;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.06rem;
  `,
};

export const mediaQuery = {
  small: 'min-width: 576px',
  medium: 'min-width: 768px',
};

export const statusColorMap: { [index: string]: string } = {
  NONE: colors.liquorice,
  POSITIVE: colors.leaf,
  NEGATIVE: colors.berry,
  NEUTRAL: colors.tungsten,
};

export const calculateChangeColor = (changeRatio?: number) => {
  if (isNil(changeRatio)) {
    return colors.liquorice;
  }

  return changeRatio < 0 ? colors.berry : colors.leaf;
};

// export const buildPageSpacing = (base: string, side: 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT') => {
//   const { os } = getParams();

//   const androidMappings: { [index: string]: string } = {
//     TOP: '24px',
//     RIGHT: '0px',
//     BOTTOM: '0px',
//     LEFT: '0px',
//   };

//   const safeAreaMappings: { [index: string]: string } = {
//     TOP: 'env(safe-area-inset-top)',
//     RIGHT: 'env(safe-area-inset-right)',
//     BOTTOM: 'env(safe-area-inset-bottom)',
//     LEFT: 'env(safe-area-inset-left)',
//   };

//   const androidSpacing = os === 'android' ? androidMappings[side] : '0px';

//   const fullStyle = `calc(${base} + ${androidSpacing} + ${safeAreaMappings[side]})`;

//   return CSS.supports(`padding: ${fullStyle}`) ? fullStyle : base;
// };

export const inject = () => injectGlobal`



@font-face {
  font-family: 'Lato';
  src: local('Lato'), url(./fonts/Lato-Regular.otf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-weight: 900;
    src: local('Lato'), url(./fonts/Lato-Bold.otf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-weight: 900;
    src: local('Lato'), url(./fonts/Lato-Black.otf) format('truetype');
}

@font-face {
  font-family: 'RobotoMono';
  src: local('Lato'), url(./fonts/RobotoMono-Regular.otf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-weight: 900;
    src: local('Lato'), url(./fonts/RobotoMono-Bold.otf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-weight: 900;
    src: local('Lato'), url(./fonts/RobotoMono-Medium.otf) format('truetype');
}

@font-face {
  font-family: 'Lato';
  font-weight: 900;
  src: local('Lato'), url(./fonts/RobotoMono-SemiBold.ttf) format('truetype');
}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  body {
    font-size: 16px;
    color: ${colors.liquorice};
    font-weight: 400;
    margin: 0;
    background-color: ${colors.sugar};
  }

  a {
    color: ${colors.petrolBlue};
    text-decoration: none;
  }


`;
