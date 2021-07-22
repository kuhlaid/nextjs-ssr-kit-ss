import * as React from "react";
import { BsPencilSquare, BsListUl, BsTrash } from "react-icons/bs";
import { Dropdown, DropdownButton } from "react-bootstrap";

export interface CardProps {
  _id: string;
  tagName?: string;
  category?: string;
  key: any;
  className?: string;
  idx: number;
  handleEditClick: (id: string) => void;
  deleteTag: (id: string) => void;
}

const CardComponent = ({
  _id,
  idx,
  deleteTag,
  handleEditClick,
  category,
  tagName
}: CardProps): JSX.Element => (
  <div key={idx} className="border rounded-2 p-2 alert alert-light">
    <div className="d-flex">
      <div className="h2 pe-2">{tagName}</div>
      <div>
        <DropdownButton
          variant="outline-primary"
          id="dropdown-basic-button"
          title={<BsListUl />}
        >
          <Dropdown.Item onClick={() => handleEditClick(_id)}>
            Edit <BsPencilSquare />
          </Dropdown.Item>
          <Dropdown.Item onClick={() => deleteTag(_id)}>
            Delete <BsTrash />
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
    <span className="ps-2 pe-2 small p-1 bg-info text-light rounded-pill">{category}</span>
  </div>
);

const Card = CardComponent;
export default Card;
