import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main: '#2D3436', // A sophisticated dark gray - good for main elements
        light: '#636E72', // Lighter gray for secondary elements
        dark: '#1E272E', // Darker gray for emphasis
      },
      secondary: {
        main: '#00B894', // A modern teal - good for call-to-action elements
        light: '#55EFC4', // Lighter teal for hover states
        dark: '#00896C', // Darker teal for pressed states
      },
      background: {
        default: '#FFFFFF', // Clean white background
        paper: '#F5F6FA', // Light gray for cards/sections
      },
      text: {
        primary: '#2D3436', // Dark gray for main text
        secondary: '#636E72', // Medium gray for secondary text
      },
      // Custom colors for specific elements
      custom: {
        linkedIn: '#0077B5', // LinkedIn brand color
        github: '#24292E', // GitHub brand color
        // Additional accent colors for various uses
        accent1: '#6C5CE7', // Purple for highlighting skills
        accent2: '#00CDC1', // Turquoise for project categories
        accent3: '#FF7675', // Coral for important notes
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2rem',
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
      },
      h4: {
        fontWeight: 500,
        fontSize: '1.5rem',
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.25rem',
      },
      h6: {
        fontWeight: 500,
        fontSize: '1rem',
      },
      subtitle1: {
        fontSize: '1.1rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
      },
    },
    shape: {
      borderRadius: 8, // Moderate rounding of corners
    },
    shadows: [
      'none',
      '0px 2px 4px rgba(45, 52, 54, 0.1)',
      '0px 4px 8px rgba(45, 52, 54, 0.12)',
      // ... rest of the shadows array
    ],
  });
export default theme;