import * as React from "react";
// import styled from "@emotion/styled";
import { BsPencilSquare, BsThreeDots, BsTrash } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import Dropdown from "lib/components/Layout/Dropdown";
import Flex from "lib/components/Layout/Flex";
import FlexEnd from "lib/components/Layout/FlexEnd";
import FlexStart from "lib/components/Layout/FlexStart";
import FadeIn from "lib/components/Layout/FadeIn";
import Menu from "lib/components/Layout/Menu";
import MenuButton from "lib/components/Layout/MenuButton";
import MenuItem from "lib/components/Layout/MenuItem";
import TagCategory from "./TagCategory";
import TagName from "./TagName";

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
  className,
  _id,
  idx,
  deleteTag,
  handleEditClick,
  category,
  tagName
}: CardProps): JSX.Element => (
  <FadeIn data-testid="card-container" timing={`${0.5 + idx / 10}s`}>
    <div className={className}>
      <Flex>
        <FlexStart>
          <TagName>{tagName}</TagName>
        </FlexStart>
        <FlexEnd>
          <Badge className="m-2">
            <Dropdown
              menu={
                <Menu>
                  <MenuItem>
                    <MenuButton
                      className="h4"
                      role="button"
                      data-testid="edit"
                      onClick={() => handleEditClick(_id)}
                    >
                      <BsPencilSquare />
                    </MenuButton>
                  </MenuItem>
                  <MenuItem>
                    <MenuButton
                      className="h4"
                      role="button"
                      data-testid="delete"
                      onClick={() => deleteTag(_id)}
                    >
                      <BsTrash />
                    </MenuButton>
                  </MenuItem>
                </Menu>
              }
            >
              <BsThreeDots className="text-muted lead" />
            </Dropdown>
          </Badge>
        </FlexEnd>
      </Flex>
      <TagCategory className="mt-2">{category}</TagCategory>
    </div>
  </FadeIn>
);

// Note: you can only change the styles of the elements inside Flex (not CardWrapper)***
// const Card = styled(CardComponent)`
//   ${Flex} {
//     background: #0101;
//   }

//   ${TagCategory} {
//     background: #0303;
//     font-size: 12px;
//   }

//   ${Flex}, ${TagCategory} {
//     padding: 5px;
//   }
// `;

const Card = CardComponent;
export default Card;
