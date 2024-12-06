// AboutStyle.js
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';

// Base dimensions for layout
const BASE_ROOT = {
  padding: 2,    // rem
  gap: 1,        // rem
};

// Base dimensions for content
const CONTENT_BASE = {
  avatarSize: 5,        // rem
  introMaxWidth: 30,// rem
  fontSize: 1.0,        // rem
  gap: 2,            // rem
};

// Base dimensions for cards
const BASE_DIMENSIONS = {
  cardWidth: 23,        // rem
  cardHeight: 18,       // rem 
  baseFontSize: 1.5,    // rem
  
  spacing: {
    first: 0,      
    second: 9,     
    third: 14,     
  },
  
  offset: {
    first: 0,     
    second: 10,    
    third: 22,    
  }
};


// Scale multipliers
const SCALE_MULTIPLIERS = {
  xxl: 1.2,    // >= 1600px
  xl: 1.1,     // 1440px - 1599px
  lg: 1,       // 1400px - 1439px (base size)
  md: 0.85,    // 1200px - 1399px
  sm: 0.7,     // 992px - 1199px
  xs: 0.55,    // 768px - 991px
  xxs: 0.45,   // 576px - 767px
};

// Calculate container dimensions
const getContainerDimensions = (multiplier = 1) => ({
  width: (BASE_DIMENSIONS.cardWidth + BASE_DIMENSIONS.offset.third) * multiplier,
  height: (BASE_DIMENSIONS.cardHeight + BASE_DIMENSIONS.spacing.third) * multiplier,
});

// Generate card styles with scaling
const generateCardStyles = (multiplier = 1) => {
  const scaledWidth = BASE_DIMENSIONS.cardWidth * multiplier;
  const scaledHeight = BASE_DIMENSIONS.cardHeight * multiplier;
  const scaledFontSize = BASE_DIMENSIONS.baseFontSize * multiplier;
  
  return {
    developer: {
      backgroundColor: '#C1CBDC',
      top: `${BASE_DIMENSIONS.spacing.third * multiplier}rem`,
      left: `${BASE_DIMENSIONS.offset.third * multiplier}rem`,
      width: `${scaledWidth}rem`,
      height: `${scaledHeight}rem`,
      fontSize: `${scaledFontSize}rem`,
      zIndex: 3,
    },
    researcher: {
      backgroundColor: '#E0E5DF',
      top: `${BASE_DIMENSIONS.spacing.second * multiplier}rem`,
      left: `${BASE_DIMENSIONS.offset.second * multiplier}rem`,
      width: `${scaledWidth}rem`,
      height: `${scaledHeight}rem`,
      fontSize: `${scaledFontSize}rem`,
      zIndex: 2,
    },
    engineer: {
      backgroundColor: '#EAD0D1',
      top: `${BASE_DIMENSIONS.spacing.first * multiplier}rem`,
      left: `${BASE_DIMENSIONS.offset.first * multiplier}rem`,
      width: `${scaledWidth}rem`,
      height: `${scaledHeight}rem`,
      fontSize: `${scaledFontSize}rem`,
      zIndex: 1,
    },
  };
};

// Root container
export const AboutRoot = styled('div')(({ theme }) => ({
  height: 'calc(100vh - var(--navbar-height))',
  width: '100%',
  backgroundColor: '#F0EFFC',
  padding: `${BASE_ROOT.padding}rem`,
  display: 'flex',
  alignItems: 'flex-start',
  gap: `${BASE_ROOT.gap}rem`,
  overflow: 'hidden',
  transition: 'all 0.3s ease',

  // Height-aware media queries
  '@media (min-width: 1600px) and (min-height: 1000px)': {
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.xxl}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.xxl}rem`,
  },
  '@media (min-width: 1440px) and (min-height: 900px) and (max-width: 1599px)': {
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.xl}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.xl}rem`,
  },
  '@media (max-width: 1399px), (max-height: 799px)': {
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.md}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.md}rem`,
  },
  '@media (max-width: 1199px), (max-height: 699px)': {
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.sm}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.sm}rem`,
  },
  '@media (max-width: 991px), (max-height: 599px)': {
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.xs}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.xs}rem`,
  },

  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - var(--mobile-navbar-height))',
    flexDirection: 'column',
    padding: `${BASE_ROOT.padding * SCALE_MULTIPLIERS.xxs}rem`,
    gap: `${BASE_ROOT.gap * SCALE_MULTIPLIERS.xxs}rem`,
  }
}));

// ContentWrapper - Center content horizontally and vertically
export const ContentWrapper = styled('div')(({ theme }) => ({
  flex: '1',
  display: 'flex',
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'center', // Add this to center horizontally
  gap: `${CONTENT_BASE.gap}rem`,
  width: '100%',
  height: '100%',
  transition: 'all 0.3s ease',

  // Height-aware media queries
  '@media (min-width: 1600px) and (min-height: 1000px)': {
    gap: `${CONTENT_BASE.gap * SCALE_MULTIPLIERS.xxl}rem`,
  },
  '@media (min-width: 1440px) and (min-height: 900px) and (max-width: 1599px)': {
    gap: `${CONTENT_BASE.gap * SCALE_MULTIPLIERS.xl}rem`,
  },
  '@media (max-width: 1399px), (max-height: 799px)': {
    gap: `${CONTENT_BASE.gap * SCALE_MULTIPLIERS.md}rem`,
  },
  '@media (max-width: 1199px), (max-height: 699px)': {
    gap: `${CONTENT_BASE.gap * SCALE_MULTIPLIERS.sm}rem`,
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  }
}));

// Create a new wrapper for the avatar and intro container
export const ContentInnerGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: `${CONTENT_BASE.gap}rem`,
  maxWidth: `${CONTENT_BASE.introMaxWidth + CONTENT_BASE.avatarSize + CONTENT_BASE.gap}rem`, // Combined max-width
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

// StyledAvatar - Keep fixed size but align to the left
export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: `${CONTENT_BASE.avatarSize}rem`,
  height: `${CONTENT_BASE.avatarSize}rem`,
  flexShrink: 0, // Prevent avatar from shrinking
  transition: 'all 0.3s ease',

  '@media (min-width: 1600px) and (min-height: 1000px)': {
    width: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.xxl}rem`,
    height: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.xxl}rem`,
  },
  '@media (min-width: 1440px) and (min-height: 900px) and (max-width: 1599px)': {
    width: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.xl}rem`,
    height: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.xl}rem`,
  },
  '@media (max-width: 1399px), (max-height: 799px)': {
    width: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.md}rem`,
    height: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.md}rem`,
  },
  '@media (max-width: 1199px), (max-height: 699px)': {
    width: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.sm}rem`,
    height: `${CONTENT_BASE.avatarSize * SCALE_MULTIPLIERS.sm}rem`,
  }
}));

// IntroContainer - Take remaining width
export const IntroContainer = styled('div')(({ theme }) => ({
  flex: 1, // Take up remaining space
  display: 'flex',
  alignItems: 'center',
  maxWidth: `${CONTENT_BASE.introMaxWidth}rem`,
  transition: 'all 0.3s ease',

  '@media (min-width: 1600px) and (min-height: 1000px)': {
    maxWidth: `${CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.xxl}rem`,
  },
  '@media (min-width: 1440px) and (min-height: 900px) and (max-width: 1599px)': {
    maxWidth: `${CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.xl}rem`,
  },
  '@media (max-width: 1399px), (max-height: 799px)': {
    maxWidth: `${CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.md}rem`,
  },
  '@media (max-width: 1199px), (max-height: 699px)': {
    maxWidth: `${CONTENT_BASE.introMaxWidth * SCALE_MULTIPLIERS.sm}rem`,
  },

  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
  }
}));

// Typed text styling
export const StyledTyped = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  fontStyle: 'italic',
  letterSpacing: '.10em',
  fontSize: `${CONTENT_BASE.fontSize}rem`,
  transition: 'all 0.3s ease',
  '& .typed-cursor': {
    color: '#697478',
  },

  '@media (min-width: 1600px) and (min-height: 1000px)': {
    fontSize: `${CONTENT_BASE.fontSize * SCALE_MULTIPLIERS.xxl}rem`,
  },
  '@media (min-width: 1440px) and (min-height: 900px) and (max-width: 1599px)': {
    fontSize: `${CONTENT_BASE.fontSize * SCALE_MULTIPLIERS.xl}rem`,
  },
  '@media (max-width: 1399px), (max-height: 799px)': {
    fontSize: `${CONTENT_BASE.fontSize * SCALE_MULTIPLIERS.md}rem`,
  },
  '@media (max-width: 1199px), (max-height: 699px)': {
    fontSize: `${CONTENT_BASE.fontSize * SCALE_MULTIPLIERS.sm}rem`,
  },

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  }
}));

// Card container
export const CardContainer = styled('div')(({ theme }) => ({
  flex: '1',
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  
  [theme.breakpoints.down('md')]: {
    width: '60%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}));

// Cards group
export const CardsGroup = styled('div')(({ theme }) => {
  const baseDimensions = getContainerDimensions(1);
  
  return {
    position: 'relative',
    width: `${baseDimensions.width}rem`,
    height: `${baseDimensions.height}rem`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    
    // Height-aware media queries
    '@media (min-width: 1600px) and (min-height: 1000px)': {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.xxl).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.xxl).height}rem`,
    },
    '@media (min-width: 1440px) and (min-height: 900px) and (max-width: 1599px)': {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.xl).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.xl).height}rem`,
    },
    // Base size
    '@media (min-width: 1400px) and (min-height: 800px) and (max-width: 1439px)': {
      width: `${baseDimensions.width}rem`,
      height: `${baseDimensions.height}rem`,
    },
    // Scale down for smaller dimensions
    '@media (max-width: 1399px), (max-height: 799px)': {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.md).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.md).height}rem`,
    },
    '@media (max-width: 1199px), (max-height: 699px)': {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.sm).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.sm).height}rem`,
    },
    '@media (max-width: 991px), (max-height: 599px)': {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.xs).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.xs).height}rem`,
    },
    '@media (max-width: 767px), (max-height: 499px)': {
      width: `${getContainerDimensions(SCALE_MULTIPLIERS.xxs).width}rem`,
      height: `${getContainerDimensions(SCALE_MULTIPLIERS.xxs).height}rem`,
    },
  };
});

export const RoleCard = styled('div')(({ theme, cardType = 'developer' }) => {
  const baseStyles = generateCardStyles(1)[cardType];
  
  return {
    padding: '1.5rem',
    borderRadius: theme.shape.borderRadius,
    border: '0.156rem solid #697478',
    position: 'absolute',
    cursor: 'pointer',
    color: '#697478',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    display: 'flex',
    
    ...baseStyles,
    
    '& > span': {
      width: '50%',
      wordWrap: 'break-word',
      wordBreak: 'break-word',
      hyphens: 'auto',
      overflow: 'hidden',
      display: 'block',
      boxSizing: 'border-box',
    },
    
    '&:hover': {
      transform: 'translateX(0.625rem) scale(1.05)',
      boxShadow: '0 0.625rem 1.25rem rgba(0,0,0,0.1)',
    },

    // Height-aware media queries
    '@media (min-width: 1600px) and (min-height: 1000px)': {
      ...generateCardStyles(SCALE_MULTIPLIERS.xxl)[cardType],
      padding: `${1.5 * SCALE_MULTIPLIERS.xxl}rem`,
    },
    '@media (min-width: 1440px) and (min-height: 900px) and (max-width: 1599px)': {
      ...generateCardStyles(SCALE_MULTIPLIERS.xl)[cardType],
      padding: `${1.5 * SCALE_MULTIPLIERS.xl}rem`,
    },
    '@media (min-width: 1400px) and (min-height: 800px) and (max-width: 1439px)': {
      ...generateCardStyles(1)[cardType],
      padding: '1.5rem',
    },
    '@media (max-width: 1399px), (max-height: 799px)': {
      ...generateCardStyles(SCALE_MULTIPLIERS.md)[cardType],
      padding: `${1.5 * SCALE_MULTIPLIERS.md}rem`,
    },
    '@media (max-width: 1199px), (max-height: 699px)': {
      ...generateCardStyles(SCALE_MULTIPLIERS.sm)[cardType],
      padding: `${1.5 * SCALE_MULTIPLIERS.sm}rem`,
    },
    '@media (max-width: 991px), (max-height: 599px)': {
      ...generateCardStyles(SCALE_MULTIPLIERS.xs)[cardType],
      padding: `${1.5 * SCALE_MULTIPLIERS.xs}rem`,
    },
    '@media (max-width: 767px), (max-height: 499px)': {
      ...generateCardStyles(SCALE_MULTIPLIERS.xxs)[cardType],
      padding: `${1.5 * SCALE_MULTIPLIERS.xxs}rem`,
    },
  };
});


export const SelectedLayout = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  gap: `${BASE_ROOT.gap * 2}rem`,
  transition: 'all 0.5s ease',
});

// Left side container
export const LeftSide = styled('div')({
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.5s ease',
});

// Right side container
export const RightSide = styled('div')({
  flex: '2',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: `${BASE_ROOT.gap}rem`,
  transition: 'all 0.5s ease',
});

// Top cards container
export const TopCards = styled('div')({
  flex: '2', // 40% of the height
  display: 'flex',
  gap: `${BASE_ROOT.gap}rem`,
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.5s ease',
});

