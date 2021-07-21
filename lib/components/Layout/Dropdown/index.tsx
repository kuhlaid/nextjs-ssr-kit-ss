import ClickHandler from "lib/components/Layout/Dropdown/ClickHandler";
import DropdownContainer from "lib/components/Layout/Dropdown/DropdownContainer";
import DropdownMenu from "lib/components/Layout/Dropdown/DropdownMenu";
import SelectContainer from "lib/components/Layout/Dropdown/SelectContainer";
import { ReactNode, ReactElement } from "lib/types";

export type DropdownProps = {
  children: ReactNode;
  menu: ReactNode;
};

const Dropdown = ({ children, menu }: DropdownProps): ReactElement => (
  <ClickHandler>
    {({ isVisible, handleMenuClick }) => (
      <SelectContainer data-testid="select-container">
        <DropdownContainer
          data-testid="dropdown-container"
          onClick={handleMenuClick}
        >
          {children}
        </DropdownContainer>
        {isVisible && (
          <DropdownMenu data-testid="dropdown-menu">{menu}</DropdownMenu>
        )}
      </SelectContainer>
    )}
  </ClickHandler>
);

export default Dropdown;
