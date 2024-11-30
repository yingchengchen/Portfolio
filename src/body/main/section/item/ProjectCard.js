import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Divider,
  Collapse,
  Fab,
  Grid,
  styled,
} from '@mui/material';
import {
  Language as WebIcon,
  GitHub as GitHubIcon,
  Add as AddIcon,
  Close as CloseIcon,
  DateRange as DateIcon,
  NavigateBefore,
  NavigateNext,
} from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';

// Reuse existing styled components
import {
  ProjectContent,
  ProjectHeader,
  ProjectLink,
  CarouselContainer,
  CarouselSlide,
  CarouselImage,
  CarouselNavButton,
  ShowMoreButton,
  ChipContainer,
  StyledChip,
  BulletList,
} from './sectionItemStyle';

const ThumbnailCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  minHeight: '350px',  // Add minimum height
  maxHeight: '400px',  // Add maximum height
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
}));

const ThumbnailImage = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
});

const DetailDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: '1000px',
    width: '90vw',
    maxHeight: '90vh',
    margin: theme.spacing(2),
  },
}));

const DialogHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(1),
}));

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
        <ThumbnailImage
          src={props.images?.[0] || '/placeholder-image.jpg'}
          alt={props.header}
        />
        <ProjectContent>
          <Typography variant="h6" sx={{
            fontWeight: 600,
            fontSize: '1.0rem',
            marginBottom: 1,
            lineHeight: 1.3
          }}>
            {props.header}
          </Typography>
          <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: 'text.secondary'
                  }}>
                    <DateIcon sx={{ fontSize: '1.0rem' }} />
                    <Typography sx={{ fontSize: '0.9rem' }}>{props.meta}</Typography>
                  </Box>
          
          <Box sx={{ position: 'absolute', bottom: 16, right: 16 }}>
            <Fab
              color="primary"
              aria-label="view details"
              size="small"
              onClick={handleOpen}
            >
              <AddIcon />
            </Fab>
          </Box>
        </ProjectContent>
      </ThumbnailCard>

      <DetailDialog
        open={open}
        onClose={handleClose}
        scroll="paper"
      >
        <DialogHeader>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </DialogHeader>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <CarouselContainer>
                <Carousel
                  animation="fade"
                  autoPlay={false}
                  NavButton={({ onClick, next }) => (
                    <CarouselNavButton
                      onClick={onClick}
                      direction={next ? 'next' : 'prev'}
                      size="small"
                    >
                      {next ? <NavigateNext /> : <NavigateBefore />}
                    </CarouselNavButton>
                  )}
                  timeout={300}
                  interval={null}
                  swipe={true}
                >
                  {props.images?.map((image, i) => (
                    <CarouselSlide key={i}>
                      <CarouselImage
                        src={image}
                        alt={`${props.header} - ${i + 1}`}
                      />
                    </CarouselSlide>
                  ))}
                </Carousel>
              </CarouselContainer>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <ProjectHeader>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
                    {props.header}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: 'text.secondary'
                  }}>
                    <DateIcon sx={{ fontSize: '1.0rem' }} />
                    <Typography sx={{ fontSize: '0.9rem' }}>{props.meta}</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
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

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {props.description}
              </Typography>

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

              <ShowMoreButton onClick={() => setShowDetails(!showDetails)} disableRipple>
                {showDetails ? 'Show less' : 'Show more'}
              </ShowMoreButton>

              <Collapse in={showDetails} timeout="auto">
                <Box sx={{ paddingTop: 2 }}>
                  <BulletList>
                    {props.listItems?.map((item, index) => (
                      <li key={index}>
                        <Typography component="div">{item.main}</Typography>
                        {item.subItems && (
                          <BulletList isSubList>
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Typography variant="body2">{subItem}</Typography>
                              </li>
                            ))}
                          </BulletList>
                        )}
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
      main: PropTypes.string.isRequired,
      subItems: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  chips: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['primary', 'secondary']).isRequired
    })
  )
};

export default ProjectCard;