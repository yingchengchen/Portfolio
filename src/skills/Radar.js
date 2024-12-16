// Radar.js
import * as d3 from 'd3';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DIMENSIONS } from './scaleUtils';
import { RadarGrid } from './RadarGrid';

const DOT_COLOR = '#7E47FD';

export const Radar = ({ width, height, data, axisConfig }) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const dimensions = isSm ? DIMENSIONS.sm : isMd ? DIMENSIONS.md : isLg ? DIMENSIONS.lg : DIMENSIONS.lg;
  const { margin, innerRadius, dotRadius } = dimensions;

  const outerRadius = Math.min(width, height) / 2 - margin;

  // The x scale provides an angle for each variable of the dataset
  const allVariableNames = axisConfig.map((axis) => axis.name);
  const xScale = d3
    .scaleBand()
    .domain(allVariableNames)
    .range([0, 2 * Math.PI]);

  // Compute the y scales: 1 scale per variable.
  let yScales = {};
  axisConfig.forEach((axis) => {
    yScales[axis.name] = d3
      .scaleRadial()
      .domain([0, axis.max])
      .range([innerRadius, outerRadius]);
  });

  const lineGenerator = d3.lineRadial();

  const allCoordinates = axisConfig.map((axis) => {
    const yScale = yScales[axis.name];
    const angle = xScale(axis.name) ?? 0;
    const radius = yScale(data[axis.name]);
    const coordinate = [angle, radius];
    return coordinate;
  });

  const linePath = lineGenerator([...allCoordinates, allCoordinates[0]]);

  const dotPositions = allCoordinates.map(([angle, radius]) => ({
    x: Math.cos(angle - Math.PI / 2) * radius,
    y: Math.sin(angle - Math.PI / 2) * radius
  }));

  return (
    <svg width={width} height={height}>
      <g transform={'translate(' + width / 2 + ',' + height / 2 + ')'}>
        <RadarGrid
          outerRadius={outerRadius}
          xScale={xScale}
          axisConfig={axisConfig}
          dimensions={dimensions}
        />
        <path
          d={linePath}
          stroke={DOT_COLOR}
          strokeWidth={isSm ? 2 : isMd ? 2.5 : 3}
          fill={DOT_COLOR}
          fillOpacity={0.1}
        />
        {dotPositions.map((pos, i) => (
          <circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r={dotRadius}
            fill={DOT_COLOR}
          />
        ))}
      </g>
    </svg>
  );
};