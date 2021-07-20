import styled from "@emotion/styled";
import { BsServer, BsPersonPlusFill } from "react-icons/bs";
import Button from "lib/components/Layout/Button";
import HomeIcon from "lib/components/Layout/HomeIcon";
import Flex from "lib/components/Layout/Flex";
import FlexEnd from "lib/components/Layout/FlexEnd";
import FlexStart from "lib/components/Layout/FlexStart";
import Link from "lib/components/Navigation/Link";
import type { SeedDB } from "lib/actions/Users";
import type { CSSProperties } from "lib/types";

const iconStyle = {
  position: "relative",
  top: 2,
  fontSize: 18,
  marginRight: 8
} as CSSProperties;

export type UserListNavigationProps = {
  className?: string;
  openModal: () => void;
  seedDB: (type: string) => ReturnType<SeedDB>;
};

const UserListNavigationComponent = ({
  className,
  openModal,
  seedDB
}: UserListNavigationProps) => (
  <div data-testid="user-list-navigation" className={className}>
    <Link href="/">
      <HomeIcon />
      Go Back
    </Link>
    <Flex width="780px" style={{ margin: "20px auto 10px" }}>
      <FlexStart>
        <Button dataTestId="seed-database" type="button" onClick={seedDB}>
          <BsServer style={iconStyle} />
          Seed Database
        </Button>
      </FlexStart>
      <FlexEnd>
        <Button dataTestId="open-modal" type="button" onClick={openModal}>
          <BsPersonPlusFill style={iconStyle} />
          Create User
        </Button>
      </FlexEnd>
    </Flex>
  </div>
);

const UserListNavigation = styled(UserListNavigationComponent)`
  @media (max-width: 800px) {
    ${Flex},${FlexStart}, ${FlexEnd} {
      display: block !important;
      margin-bottom: 10px;
      width: 100% !important;
    }
  }

  margin-bottom: 10px;
`;

export default UserListNavigation;
