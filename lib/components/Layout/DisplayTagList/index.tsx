/**
 * @abstract Builds the tags list.
 */
import * as React from "react";
import isEmpty from "lodash.isempty";
import Badge from "react-bootstrap/Badge";
import TagForm from "lib/components/Forms/TagForm";
import Card from "lib/components/Layout/TagCard";
import FadeIn from "lib/components/Layout/FadeIn";
import NoData from "lib/components/Layout/NoData";
import { TagData } from "lib/types";

export interface DisplayTagListProps {
  data: any[];
  isEditingID?: string;
  deleteTag: (id: string) => void;
  handleCloseModal: (event: any) => void;
  handleEditClick: (id: string) => void;
  handleResetEditClick: (event: any) => void;
  resetMessage: () => void;
  updateTag: (payload: TagData) => void;
}

const DisplayTagList = ({
  data,
  isEditingID,
  handleCloseModal,
  handleEditClick,
  handleResetEditClick,
  updateTag,
  deleteTag,
  ...rest
}: DisplayTagListProps): JSX.Element => (
  <>
    {!isEmpty(data) ? (
      data.map((props: TagData, idx) => (
        <Badge
          className="m-2 p-2"
          variant="light"
          data-testid="tag-card"
          key={props._id}
        >
          {isEditingID !== props._id ? (
            <Card
              {...props}
              {...rest}
              key={props._id}
              _id={props._id}
              idx={idx}
              handleEditClick={handleEditClick}
              deleteTag={deleteTag}
            />
          ) : (
            <FadeIn timing="0.3s">
              <TagForm
                {...props}
                {...rest}
                key={props._id}
                cancelForm={handleResetEditClick}
                resetForm={handleCloseModal}
                submitAction={updateTag}
              />
            </FadeIn>
          )}
        </Badge>
      ))
    ) : (
      <NoData dataType="tag" />
    )}
  </>
);

export default DisplayTagList;
