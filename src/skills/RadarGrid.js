import { polarToCartesian } from "./polarToCartesian";
import React, { useState } from "react";
import * as d3 from "d3";

const GRID_NUMBER = 5;
const GRID_COLOR = "#2D3436";
const HOVER_COLOR = "#7E47FD";


function wrapText(text, width, fontSize) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const tempText = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  tempText.setAttribute("font-size", fontSize);
  svg.appendChild(tempText);
  document.body.appendChild(svg);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    tempText.textContent = currentLine + " " + word;
    const textWidth = tempText.getComputedTextLength();

    if (textWidth < width) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  document.body.removeChild(svg);
  return lines;
}

export const RadarGrid = ({
  outerRadius,
  innerRadius,
  labelPadding,
  textWidth,
  fontSize,
  xScale,
  axisConfig,
  isMobile,
  onSkillEnter,
  onSkillLeave,
  selectedSkill,
  data,
  onChipRender
}) => {
  const [hoveredAxis, setHoveredAxis] = useState(null);
  const lineGenerator = d3.lineRadial();

  // const handleAxisClick = (axis, event) => {
  //   event.stopPropagation();
  //   onSkillSelect(axis.name);
  // };

  const allAxes = axisConfig.map((axis, i) => {
    const angle = xScale(axis.name);
    if (angle === undefined) return null;

    const path = lineGenerator([
      [angle, innerRadius],
      [angle, outerRadius],
    ]);

    const labelPosition = polarToCartesian(
      angle - Math.PI / 2,
      outerRadius + labelPadding
    );

    const lines = wrapText(axis.name, textWidth, `${fontSize}px`);
    const lineHeight = isMobile ? 1.1 : 1.2;
    const totalHeight = lines.length * lineHeight;
    const startY = labelPosition.y - (totalHeight * fontSize) / 2;

    const isHighlighted =
      hoveredAxis === axis.name || selectedSkill === axis.name;
    const value = data[axis.name];
    
    return (
      <g key={i}>
        <path
          d={path}
          stroke={isHighlighted ? HOVER_COLOR : GRID_COLOR}
          strokeWidth={
            isHighlighted ? (isMobile ? 0.5 : 1) : isMobile ? 0.3 : 0.5
          }
          rx={1}
        />
        <g
          onMouseEnter={() => {
            setHoveredAxis(axis.name);
            onSkillEnter(axis.name);

            // Final chip group position
            const chipInfo = {
              skill: axis.name,
              x: labelPosition.x - textWidth / 2, // center below longest label line
              y: labelPosition.y + fontSize * lines.length * 1.2 + fontSize, // place below last tspan + spacing
            };

            onChipRender?.(chipInfo);

          }}
          onMouseLeave={() => {
            setHoveredAxis(null);
            onSkillLeave(); 
            onChipRender?.(null)            // <- remove highlight + chips
          }}
          style={{ cursor: "pointer" }}
        >
        <>
          <text
            x={labelPosition.x}
            y={startY}
            fontSize={fontSize}
            fill={isHighlighted ? HOVER_COLOR : GRID_COLOR}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {lines.map((line, index) => (
              <tspan
                key={index}
                x={labelPosition.x}
                dy={index === 0 ? "0em" : `${lineHeight}em`}
                fontWeight="600"
              >
                {line}
              </tspan>
            ))}
            <tspan
              x={labelPosition.x}
              dy={`${lineHeight + 0.2}em`}
              fontSize={fontSize * 0.9}
              fontWeight="500"
            >
              {value}%
            </tspan>
          </text>
        </>

        </g>
      </g>
    );
  });

  const allCircles = [...Array(GRID_NUMBER).keys()].map((position, i) => {
    const radius =
      innerRadius +
      (position * (outerRadius - innerRadius)) / (GRID_NUMBER - 1);
    const value = Math.round((position / (GRID_NUMBER - 1)) * 100);

    return (
      <g key={i}>
        <circle
          cx={0}
          cy={0}
          r={radius}
          stroke={GRID_COLOR}
          strokeWidth={isMobile ? 0.3 : 0.5}
          fill="none"
        />
        {i > 0 && (
          <text
            x={10}
            y={radius}
            fontSize={isMobile ? fontSize - 1 : fontSize - 2}
            fill="#98a0a3"
            textAnchor="middle"
            dominantBaseline="middle"
            dy={isMobile ? -3 : -5}
          >
            {value}
          </text>
        )}
      </g>
    );
  });

  return (
    <g>
      {allCircles}
      {allAxes}
    </g>
  );
};
