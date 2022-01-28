import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyInfoAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography> My 42 Status </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <img
          style={{ width: '100vw' }}
          src="https://badge42.herokuapp.com/api/stats/suhshin"
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default MyInfoAccordion;
