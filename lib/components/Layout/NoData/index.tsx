import { FaChartArea } from "react-icons/fa";
import Container from "lib/components/Layout/Container";
import Flex from "lib/components/Layout/Flex";
import { CSSProperties, ReactElement } from "lib/types";

const styles = {
  color: "#d4d3d3",
  margin: 0
} as CSSProperties;

// add any properties we want here
export type NoDataProps = {
  dataType: string;
};

const NoData = ({ dataType }: NoDataProps): ReactElement => (
  <Container dataTestId="no-data" innerStyle={{ height: 400 }}>
    <Flex
      direction="column"
      justify="center"
      style={{ textAlign: "center", userSelect: "none", height: "100%" }}
    >
      <FaChartArea style={{ fontSize: 100, color: "#d4d3d3" }} />
      <h1 style={styles}>No Data Found</h1>
      <p style={styles}>Add a {dataType} or seed the database.</p>
    </Flex>
  </Container>
);

export default NoData;
