import { InnerContainer, StyledSection } from "./Section.styles";
import { SectionProps } from "./Section.types";

export const Section = ({ children, ...props }: SectionProps) => {
  return (
    <StyledSection {...props}>
      <InnerContainer flex={props.flex}>{children}</InnerContainer>
    </StyledSection>
  );
};
