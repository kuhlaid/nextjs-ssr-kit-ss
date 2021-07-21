import CardWrapper from "lib/components/Layout/Container/CardWrapper";
import ContainerWrapper from "lib/components/Layout/Container/ContainerWrapper";
import { CSSProperties, ReactElement, ReactNode } from "lib/types";

export type ContainerProps = {
  children: ReactNode;
  dataTestId?: string;
  innerStyle?: CSSProperties;
  style?: CSSProperties;
};

const Container = ({
  children,
  dataTestId,
  innerStyle,
  style
}: ContainerProps): ReactElement => (
  <ContainerWrapper data-testid={dataTestId} style={style}>
    <CardWrapper style={innerStyle}>{children}</CardWrapper>
  </ContainerWrapper>
);

export default Container;
