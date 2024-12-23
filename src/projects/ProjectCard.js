import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  DialogContent,
  IconButton,
  Typography,
  Box,
  Divider,
  Collapse,
  Grid,
  Button,
} from "@mui/material";
import {
  Language as WebIcon,
  GitHub as GitHubIcon,
  Add as AddIcon,
  Close as CloseIcon,
  DateRange as DateIcon,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";

import {
  ThumbnailCard,
  ThumbnailImage,
  DetailDialog,
  DialogHeader,
  FabButton,
  ProjectContent,
  ProjectHeader,
  ProjectLink,
  CarouselContainer,
  CarouselSection,
  CarouselSlide,
  CarouselImage,
  ChipContainer,
  StyledChip,
  BulletList,
} from "./ProjectCardStyle";

const ProjectCard = (props) => {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowDetails(false);
  };

  return (
    <>
      <ThumbnailCard>
        <ThumbnailImage>
          <img
            src={props.images?.[0] || "/placeholder-image.jpg"}
            alt={props.header}
          />
        </ThumbnailImage>
        <ProjectContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "1.0rem",
              marginBottom: 1,
              lineHeight: 1.3,
            }}
          >
            {props.header}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "text.secondary",
            }}
          >
            <DateIcon sx={{ fontSize: "1.0rem" }} />
            <Typography sx={{ fontSize: "0.9rem" }}>{props.meta}</Typography>
          </Box>
          {props.chips && (
            <ChipContainer>
              {props.chips.map((chip, index) => (
                <StyledChip
                  key={index}
                  label={chip.label}
                  chipType={chip.type}
                  size="small"
                />
              ))}
            </ChipContainer>
          )}

          <Box sx={{ position: "absolute", bottom: 16, right: 16 }}>
            <FabButton
              aria-label="view details"
              size="small"
              onClick={handleOpen}
              sx={{
                bgcolor: "#f5f5f5",
                color: "#757575",
                "@media (hover: hover)": {
                  "&:hover": {
                    bgcolor: "#e0e0e0",
                  },
                },
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <AddIcon />
            </FabButton>
          </Box>
        </ProjectContent>
      </ThumbnailCard>

      <DetailDialog open={open} onClose={handleClose} scroll="paper">
        <DialogHeader>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogHeader>
        <DialogContent>
          <Grid container spacing={3} direction="column">
            <Grid item xs={12}>
              <CarouselSection>
                <CarouselContainer>
                  <Carousel
                    animation="slide"
                    autoPlay={false}
                    indicators={false}
                    timeout={300}
                    interval={null}
                    swipe={true}
                    cycleNavigation={true}
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{
                      style: {
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: 20,
                      },
                    }}
                    NextIcon={<NavigateNext />}
                    PrevIcon={<NavigateBefore />}
                  >
                    {props.images?.map((image, i) => (
                      <CarouselSlide key={i}>
                        <CarouselImage
                          src={image}
                          alt={`${props.header} - ${i + 1}`}
                          loading="lazy"
                        />
                      </CarouselSlide>
                    ))}
                  </Carousel>
                </CarouselContainer>
              </CarouselSection>
            </Grid>

            <Grid item xs={12}>
              <ProjectHeader>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, marginBottom: 1 }}
                  >
                    {props.header}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                  {props.githubLink && (
                    <ProjectLink
                      href={props.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                      <Typography variant="body2">Source Code</Typography>
                    </ProjectLink>
                  )}
                  {props.publicationLink && (
                    <ProjectLink
                      href={props.publicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WebIcon />
                      <Typography variant="body2">Publication</Typography>
                    </ProjectLink>
                  )}
                  {props.demoLink && (
                    <ProjectLink
                      href={props.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WebIcon />
                      <Typography variant="body2">Demo</Typography>
                    </ProjectLink>
                  )}
                </Box>
              </ProjectHeader>

              <Divider sx={{ my: 2 }} />

              <Typography
                variant="body2"
                sx={{ color: "text.secondary", textAlign: "justify" }}
              >
                {props.description}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Button
                  onClick={() => setShowDetails(!showDetails)}
                  disableRipple
                  sx={{
                    minWidth: "unset",
                    padding: 0,
                    color: "primary.main",
                    "@media (hover: hover)": {
                      "&:hover": {
                        background: "none",
                        textDecoration: "underline",
                      },
                    },
                  }}
                >
                  {showDetails ? "Show less" : "Show more"}
                </Button>
              </Box>

              <Collapse in={showDetails} timeout="auto">
                <Box sx={{ paddingTop: 2 }}>
                  <BulletList>
                    {props.listItems?.map((item, index) => (
                      <li key={index}>
                        <Typography variant="body2" component="div">{item.main}</Typography>
                      </li>
                    ))}
                  </BulletList>
                </Box>
              </Collapse>
            </Grid>
          </Grid>
        </DialogContent>
      </DetailDialog>
    </>
  );
};

ProjectCard.propTypes = {
  header: PropTypes.string.isRequired,
  meta: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  demoLink: PropTypes.string,
  githubLink: PropTypes.string,
  publicationLink: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      subItems: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      ),
    })
  ),
  chips: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
    })
  ),
};

export default ProjectCard;
