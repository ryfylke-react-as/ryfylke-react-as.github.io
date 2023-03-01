import { CSSProperties, ReactNode } from "react";

export type SectionProps = {
  flex?: boolean;
  background?: string;
  style?: CSSProperties;
  children?: ReactNode;
  className?: string;
  id?: string;
};
