import * as d3 from 'd3';
import React, { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RadarGrid } from './RadarGrid';
import Chip from '@mui/material/Chip';

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
  axisConfig,
  skillsData,
  onSkillSelect,
  selectedSkill,
  showChips = true, // New prop to control chip display
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery('(max-width:480px)');
  const [chipInfo, setChipInfo] = useState(null);

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
          skillsData={skillsData}
          onSkillEnter={onSkillSelect}     // just rename for clarity
          onSkillLeave={() => onSkillSelect(null)}
          selectedSkill={selectedSkill} 
          data={data}
          onChipRender={showChips ? (info) => setChipInfo(info) : null}
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
        {/* Only render chips if showChips is true and chipInfo exists */}
        {showChips && chipInfo && (
          <foreignObject
            x={chipInfo.x}
            y={chipInfo.y}
            width={400}
            height={120}
            style={{ overflow: 'visible' }}
          >
            <div xmlns="http://www.w3.org/1999/xhtml" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
            }}>
              {skillsData[chipInfo.skill]?.map(({ name }) => (
                <Chip
                  key={name}
                  label={name}
                  size="small"
                  sx={{
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    height: '24px',
                    backgroundColor: `#E0E5DF`,
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                />
              ))}
            </div>
          </foreignObject>
        )}
      </g>
    </svg>
  );
};