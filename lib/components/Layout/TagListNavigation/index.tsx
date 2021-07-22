import { BsFillHouseFill, BsServer, BsPersonPlusFill } from "react-icons/bs";
import type { SeedDB } from "lib/actions/Tags";
import { Button } from "react-bootstrap";

export type TagListNavigationProps = {
  className?: string;
  openModal: () => void;
  seedDB: (type: string) => ReturnType<SeedDB>;
};

const TagListNavigationComponent = ({
  openModal,
  seedDB
}: TagListNavigationProps) => (
  <div className="border bg-light">
    <div className="d-flex justify-content-center p-2">
      <div>
        <Button variant="outline-primary" href="/">
          <BsFillHouseFill className="me-2" />
          Go Back
        </Button>
      </div>
    </div>
    <div className="p-2 d-flex">
      <div className="justify-content-center">
        <Button
          className="flex-wrap"
          variant="outline-primary"
          dataTestId="seed-database"
          type="button"
          onClick={seedDB}
        >
          <BsServer className="me-2" />
          Seed Database
        </Button>
      </div>
      {/* <div className="flex-fill"> </div> */}
      <div className="ms-auto justify-content-center">
        <Button
          variant="outline-primary"
          className="flex-wrap"
          type="button"
          onClick={openModal}
        >
          <BsPersonPlusFill className="me-2" />
          Create Tag
        </Button>
      </div>
    </div>
  </div>
);

const TagListNavigation = TagListNavigationComponent;

export default TagListNavigation;
