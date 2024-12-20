import React, { useRef, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const WIDTH = 200;

const PopupContent = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#F5F6FA',
  padding: theme.spacing(0,1),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.main}`,
  width: `${WIDTH}px`,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',

  [theme.breakpoints.down('lg')]: {
    width: `${WIDTH*0.9}px`,  // 350 * 0.9
  },
  [theme.breakpoints.down('md')]: {
    width: `${WIDTH*0.8}px`,  // 350 * 0.8
  },
  [theme.breakpoints.down('sm')]: {
    width: `${WIDTH*0.7}px`,  // 350 * 0.7
  },
  '@media (max-width: 480px)': {
    width: `${WIDTH*0.6}px`,  // 350 * 0.6s
  }
}));

const ChartContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
}));

const SkillDetailsPopup = ({ skill, data, onClose }) => {
  const chartRef = useRef(null);
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:480px)');

  // Get scale based on screen size
  const scale = isMobile ? 0.6 
    : isSm ? 0.7 
    : isMd ? 0.8 
    : isLg ? 1
    : 1;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chartRef.current && !chartRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!skill || !data) return null;
  const transformedData = data.map(item => ({
    name: item.name,
    displayValue: item.value / 2,  // This will show as the bar length
    originalValue: item.value      // This will be used for the label
  }));
  // Scale dimensions
  const width = Math.floor(200 * scale);
  const height = Math.floor(32 * data.length * scale);
  const fontSize = Math.floor(14 * scale);
  const labelFontSize = Math.floor(10 * scale);
  const barSize = Math.floor(8 * scale);
  const yAxisWidth = Math.floor(90 * scale);
  const tickMargin = Math.floor(6 * scale);

  return (
    <PopupContent ref={chartRef}>
      <ChartContainer>
        <BarChart
          width={width}
          height={height}
          data={transformedData}
          layout="vertical"
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis 
            type="number" 
            domain={[0, 100]}
            axisLine={false}
            tickLine={false}
            hide={true}
          />
          <YAxis 
            type="category" 
            dataKey="name"
            axisLine={false}
            tickLine={false}
            width={yAxisWidth}
            fontSize={fontSize}
            style={{
              fill: theme => theme.palette.primary.main,
            }}
            tickMargin={tickMargin}
          />
          <Bar 
            dataKey="displayValue" 
            fill="#2dd4bf"
            radius={[2, 2, 2, 2]}
            barSize={barSize}
            label={{
              position: 'right',
              fill: theme.palette.primary.main,
              fontSize: labelFontSize,
              formatter: (value) => `${value*2}%`,
            }}
          />
        </BarChart>
      </ChartContainer>
    </PopupContent>
  );
};

export default SkillDetailsPopup;