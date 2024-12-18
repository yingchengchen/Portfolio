import * as d3 from 'd3';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RadarGrid } from './RadarGrid';

const DOT_COLOR = '#7E47FD';

export const Radar = ({ 
  width, 
  height, 
  margin,
  innerRadius,
  labelPadding,
  textWidth,
  fontSize,
  dotRadius,
  data, 
  axisConfig 
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery('(max-width:480px)');

  const outerRadius = Math.min(width, height) / 2 - margin;

  // The x scale provides an angle for each variable of the dataset
  const allVariableNames = axisConfig.map((axis) => axis.name);
  const xScale = d3
    .scaleBand()
    .domain(allVariableNames)
    .range([0, 2 * Math.PI]);

  // Compute the y scales: 1 scale per variable
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
    return [angle, radius];
  });

  const linePath = lineGenerator([...allCoordinates, allCoordinates[0]]);

  const dotPositions = allCoordinates.map(([angle, radius]) => ({
    x: Math.cos(angle - Math.PI / 2) * radius,
    y: Math.sin(angle - Math.PI / 2) * radius
  }));

  // Get stroke width based on screen size
  const getStrokeWidth = () => {
    if (isMobile) return 2;
    if (isSm) return 2;
    if (isMd) return 2.5;
    return 3;
  };

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <RadarGrid
          outerRadius={outerRadius}
          innerRadius={innerRadius}
          labelPadding={labelPadding}
          textWidth={textWidth}
          fontSize={fontSize}
          xScale={xScale}
          axisConfig={axisConfig}
          isMobile={isMobile}
        />
        <path
          d={linePath}
          stroke={DOT_COLOR}
          strokeWidth={getStrokeWidth()}
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