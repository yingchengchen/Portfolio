// EducationAndCareer.js
import React, { useState, useEffect } from "react";
import { Box, Popover } from "@mui/material";
import DateIcon from "@mui/icons-material/DateRange";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IntroModal from "../components/IntroModal";
import AvatarImage from "../images/myAvatar.png";
import {
  EduCaWrapper,
  EducationCareerRoot,
  HeaderTitle,
  ContentContainer,
  TimelineContainer,
  TimelineItem,
  TimelineLine,
  TimelineDot,
  TimelineContent,
  TimelineContentCard,
  TimelinePeriod,
  TimelineTitle,
  TimelineSubtitle,
  CustomAvatar,
  PopoverContent,
} from "./EducationAndCareerStyle";
import data from "../data/data";

const TimelineItemWithPopover = ({ item, totalItems, index, showHopping }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <TimelineItem totalItems={totalItems}>
      <TimelineDot type={item.type}>
        {item.type === "education" ? <SchoolIcon /> : <WorkIcon />}
      </TimelineDot>
      <TimelineContent type={item.type}>
        <TimelineContentCard
          elevation={3}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
          type={item.type}
          index={index}
          showHopping={showHopping}
        >
          <TimelinePeriod>
            <DateIcon fontSize="inherit" /> {item.meta}
          </TimelinePeriod>
          <TimelineTitle>{item.header}</TimelineTitle>
          <TimelineSubtitle id={item.subheader}>
            {item.subheader}
          </TimelineSubtitle>
        </TimelineContentCard>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: item.type === "education" ? "bottom" : "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: item.type === "education" ? "top" : "bottom",
            horizontal: "center",
          }}
          slotProps={{
            paper: {
              elevation: 3,
              sx: {
                mt: item.type === "education" ? 2 : -2,
                mb: item.type === "education" ? -2 : 2,
                border: (theme) =>
                  `1.5px solid ${theme.palette.custom.accent1}`,
                borderRadius: 2,
                overflow: "visible",
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  width: 10,
                  height: 10,
                  backgroundColor: "background.paper",
                  transform: "rotate(-135deg)",
                  ...(item.type === "education"
                    ? {
                        top: -5,
                        left: "calc(50% - 5px)",
                        borderRight: (theme) =>
                          `1.5px solid ${theme.palette.custom.accent1}`,
                        borderBottom: (theme) =>
                          `1.5px solid ${theme.palette.custom.accent1}`,
                      }
                    : {
                        bottom: -5,
                        left: "calc(50% - 5px)",
                        borderLeft: (theme) =>
                          `1.5px solid ${theme.palette.custom.accent1}`,
                        borderTop: (theme) =>
                          `1.5px solid ${theme.palette.custom.accent1}`,
                      }),
                },
              },
            },
          }}
        >
          <PopoverContent>
            {item.location && (
              <div className="location">
                <LocationOnIcon />
                {item.location}
              </div>
            )}
            {item.description && (
              <div className="description">{item.description}</div>
            )}
            {item.chips && (
              <div className="chips-container">
                {item.chips.map((chip, index) => (
                  <span key={index} className={`chip ${chip.type}`}>
                    {chip.label}
                  </span>
                ))}
              </div>
            )}
          </PopoverContent>
        </Popover>
      </TimelineContent>
    </TimelineItem>
  );
};

const EducationAndCareer = ({ id, activeSection }) => {
  const [showIntro, setShowIntro] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);
  const [showHopping, setShowHopping] = useState(false);

  const introText =
    "Let me share my educational background and professional journey with you.";
  // const toggleScroll = (disable) => {
  //   if (disable) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // };
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (
  //         entry.isIntersecting &&
  //         !hasBeenClosed &&
  //         activeSection === "Education & Career"
  //       ) {
  //         setShowIntro(true);
  //         toggleScroll(true);
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );

  //   const section = document.getElementById(id);
  //   if (section) {
  //     observer.observe(section);
  //   }

  //   return () => {
  //     if (section) {
  //       observer.unobserve(section);
  //     }
  //     toggleScroll(false);
  //   };
  // }, [id, hasBeenClosed, activeSection]);

  // const handleModalClose = () => {
  //   setShowIntro(false);
  //   setHasBeenClosed(true);
  //   setShowHopping(true);
  //   toggleScroll(false);
  // };

  const getEndDate = (dateRange) => {
    const endDateStr = dateRange.split(" - ")[1];
    return endDateStr === "now" ? new Date("2099-12-31") : new Date(endDateStr);
  };

  const timelineData = [
    ...data.body.education.items.map((item) => ({
      ...item,
      type: "education",
      endDate: getEndDate(item.meta),
    })),
    ...data.body.workExperience.items.map((item) => ({
      ...item,
      type: "work",
      endDate: getEndDate(item.meta),
    })),
  ].sort((a, b) => b.endDate - a.endDate);

  return (
    <EduCaWrapper id={id}>
      <EducationCareerRoot>
        {/* <IntroModal
          isVisible={showIntro}
          onClose={handleModalClose}
          introText={introText}
          sectionId={id}
          avatarImage={AvatarImage}
        /> */}
        <HeaderTitle>Education & Career Timeline</HeaderTitle>
        <ContentContainer>
          <TimelineContainer>
            <CustomAvatar src={AvatarImage} alt="Avatar" />
            <TimelineLine />
            {[...timelineData].reverse().map((item, index) => (
              <TimelineItemWithPopover
                key={index}
                item={item}
                totalItems={timelineData.length}
                index={index}
                showHopping={showHopping}
              />
            ))}
          </TimelineContainer>
        </ContentContainer>
      </EducationCareerRoot>
    </EduCaWrapper>
  );
};

export default EducationAndCareer;
