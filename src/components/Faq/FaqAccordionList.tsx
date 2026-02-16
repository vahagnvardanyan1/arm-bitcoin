"use client";

import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useScrollReveal } from "@/hooks/useScrollReveal";

import {
  FaqListColumn,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  QuestionText,
  AnswerText,
  ToggleIcon,
  AnimatedFaqItem,
} from "./styled";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionListProps {
  items: FaqItem[];
}

export const FaqAccordionList = ({ items }: FaqAccordionListProps) => {
  const [expanded, setExpanded] = useState<number | false>(0);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const handleChange = (index: number) => () => {
    setExpanded((prev) => (prev === index ? false : index));
  };

  return (
    <FaqListColumn ref={ref}>
      {items.map(({ question, answer }, index) => (
        <AnimatedFaqItem key={index} visible={isVisible} index={index}>
          <StyledAccordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            disableGutters
            elevation={0}
          >
            <StyledAccordionSummary
              expandIcon={
                <ToggleIcon expanded={expanded === index}>
                  {expanded === index ? (
                    <RemoveIcon fontSize="small" />
                  ) : (
                    <AddIcon fontSize="small" />
                  )}
                </ToggleIcon>
              }
            >
              <QuestionText>{question}</QuestionText>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <AnswerText>{answer}</AnswerText>
            </StyledAccordionDetails>
          </StyledAccordion>
        </AnimatedFaqItem>
      ))}
    </FaqListColumn>
  );
};
