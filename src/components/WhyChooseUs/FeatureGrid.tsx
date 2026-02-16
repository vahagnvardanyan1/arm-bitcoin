"use client";

import type { ReactNode } from "react";

import Grid from "@mui/material/Grid";

import { useScrollReveal } from "@/hooks/useScrollReveal";

import {
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDesc,
  AnimatedGridItem,
} from "./styled";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export const FeatureGrid = ({ features }: FeatureGridProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <Grid container spacing={3} ref={ref}>
      {features.map(({ icon, title, description }, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={title}>
          <AnimatedGridItem visible={isVisible} index={index}>
            <FeatureCard elevation={0}>
              <IconWrapper className="icon-wrapper">{icon}</IconWrapper>
              <FeatureTitle variant="h6">{title}</FeatureTitle>
              <FeatureDesc variant="body2">{description}</FeatureDesc>
            </FeatureCard>
          </AnimatedGridItem>
        </Grid>
      ))}
    </Grid>
  );
};
