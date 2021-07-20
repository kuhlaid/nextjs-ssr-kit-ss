import styled from "@emotion/styled";
import { BsServer, BsPersonPlusFill } from "react-icons/bs";
import Button from "lib/components/Layout/Button";
import HomeIcon from "lib/components/Layout/HomeIcon";
import Flex from "lib/components/Layout/Flex";
import FlexEnd from "lib/components/Layout/FlexEnd";
import FlexStart from "lib/components/Layout/FlexStart";
import Link from "lib/components/Navigation/Link";
import type { SeedDB } from "lib/actions/Tags";

export type TagListNavigationProps = {
  className?: string;
  openModal: () => void;
  seedDB: (type: string) => ReturnType<SeedDB>;
};

const TagListNavigationComponent = ({
  className,
  openModal,
  seedDB
}: TagListNavigationProps) => (
  <div data-testid="tag-list-navigation" className={className}>
    <Link href="/">
      <HomeIcon />
      Go Back
    </Link>
    <Flex width="780px" style={{ margin: "20px auto 10px" }}>
      <FlexStart>
        <Button dataTestId="seed-database" type="button" onClick={seedDB}>
          <BsServer className="mr-2" />
          Seed Database
        </Button>
      </FlexStart>
      <FlexEnd>
        <Button dataTestId="open-modal" type="button" onClick={openModal}>
          <BsPersonPlusFill className="mr-2" />
          Create Tag
        </Button>
      </FlexEnd>
    </Flex>
  </div>
);

const TagListNavigation = styled(TagListNavigationComponent)`
  @media (max-width: 800px) {
    ${Flex},${FlexStart}, ${FlexEnd} {
      display: block !important;
      margin-bottom: 10px;
      width: 100% !important;
    }
  }

  margin-bottom: 10px;
`;

export default TagListNavigation;
