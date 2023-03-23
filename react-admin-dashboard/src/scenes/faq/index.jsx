import { Box, useTheme, Typography } from "@mui/material";
import { Header } from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            First Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          Answer for the question
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Second Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Answer for the question
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Third Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Answer for the question
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Forth Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          Answer for the question
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Fifth Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Answer for the question
          </Typography>
        </AccordionDetails>
      </Accordion>      
    </Box>
  );
};
