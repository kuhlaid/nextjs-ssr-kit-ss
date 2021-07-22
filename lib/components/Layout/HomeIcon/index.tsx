import { BsFillHouseFill } from "react-icons/bs";
import { ReactElement } from "lib/types";

// here we simply use className="me-2" to set Bootstrap styling
const HomeIcon = (): ReactElement => (
  <span data-testid="home-icon" className="me-2">
    <BsFillHouseFill />
  </span>
);

export default HomeIcon;
