import Container from "@mui/material/Container";

import { SectionRoot } from "./styled";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

export const SectionWrapper = ({ id, children }: SectionWrapperProps) => (
  <SectionRoot id={id}>
    <Container maxWidth="lg">{children}</Container>
  </SectionRoot>
);
