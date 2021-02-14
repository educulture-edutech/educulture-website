import React from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  createMuiTheme,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";

import { ExpandMore } from "@material-ui/icons";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
  accordionRoot: {
    width: "100%",
    boxShadow: "none",
  },

  accordionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const content = [
  {
    subtopicName: "Basics of CSAT",

    chapters: [
      {
        chapterName: "Introduction to CSAT",
      },
      {
        chapterName: "Numbers, BODMAS and Fraction",
      },
      {
        chapterName: "Indices and Test of Divisibility",
      },
      {
        chapterName: "LCM and HCF",
      },
      {
        chapterName: "Linear Equation",
      },
    ],
  },
  {
    subtopicName: "Average",

    chapters: [
      {
        chapterName: "Concept of Average",
      },
    ],
  },
  {
    subtopicName: "Ratio and Proportion",

    chapters: [
      {
        chapterName: "Concept of Ratio and Proportion",
      },
      {
        chapterName: "Ages and Mixture",
      },
      {
        chapterName: "Partnership and Income Expenditure",
      },
    ],
  },
  {
    subtopicName: "Percentage",

    chapters: [
      {
        chapterName: "Concept of Percentage",
      },
      {
        chapterName: "Profit and Loss",
      },
      {
        chapterName: "Simple and Compound Interest",
      },
    ],
  },
  {
    subtopicName: "Work and Time",

    chapters: [
      {
        chapterName: "Concept of Work and Time",
      },
    ],
  },
  {
    subtopicName: "Speed, Time and Distance",

    chapters: [
      {
        chapterName: "Speed, Time and Distance",
      },
    ],
  },
  {
    subtopicName: "Permutation, Combination and Probability",

    chapters: [
      {
        chapterName: "Concepts and Examples on P&C, Probability",
      },
    ],
  },
  {
    subtopicName: "Clock",

    chapters: [
      {
        chapterName: "Concept of Clock",
      },
    ],
  },
  {
    subtopicName: "Calendar",

    chapters: [
      {
        chapterName: "Concept of Calendar",
      },
    ],
  },
  {
    subtopicName: "PSDM",

    chapters: [
      {
        chapterName:
          "PSDM past year papers from 2013,2014,2015,2016,2017,2018,2019",
      },
    ],
  },
  {
    subtopicName: "Syllogism",

    chapters: [
      {
        chapterName: "Syllogism",
      },
    ],
  },
  {
    subtopicName: "Puzzles",

    chapters: [
      {
        chapterName: "Concepts to solve puzzles",
      },
    ],
  },
  {
    subtopicName: "Puzzles",

    chapters: [
      {
        chapterName: "Passages",
      },
    ],
  },
  {
    subtopicName: "And More",

    chapters: [
      {
        chapterName:
          "Input ouput, Venn Diagram, Coding Decoding, Order Ranking, खरे खोटे, Directions",
      },
    ],
  },
];

const CSATContent = () => {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <div className={classes.accordionRoot}>
        {content.map((item, index) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.accordionHeading}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    lineHeight: "25px",
                  }}
                >
                  {item.subtopicName}
                </p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.chapters.map((chapter, index2) => (
                  <p
                    style={{
                      fontSize: "20px",
                      lineHeight: "25px",
                    }}
                  >
                    &bull; {chapter.chapterName} <br />
                  </p>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default CSATContent;
