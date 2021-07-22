/**
 * @abstract This script is the main route wrapper for listing tags.
 */
import * as React from "react";
import { connect } from "react-redux";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { resetMessage } from "lib/actions/Server";
import * as actions from "lib/actions/Tags";
import TagForm from "lib/components/Forms/TagForm";
import DisplayTagList from "lib/components/Layout/DisplayTagList";
import Modal from "lib/components/Layout/Modal";
import LoadingTags from "lib/components/Layout/LoadingTags";
import Header from "lib/components/Navigation/Header";
import TagListNavigation from "lib/components/Layout/TagListNavigation";
import {
  ConnectedProps,
  ReactElement,
  TagData,
  PickReduxState
} from "lib/types";

/* istanbul ignore next */
const mapState = ({ tags, server }: PickReduxState<"tags" | "server">) => ({
  data: tags.data,
  isLoading: tags.isLoading,
  serverError: server.error,
  serverMessage: server.message
});

/* istanbul ignore next */
const mapDispatch = {
  ...actions,
  resetMessage
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type ShowTagsState = {
  isEditingID: string;
  openModal: boolean;
};

const ShowTags = ({
  createTag,
  deleteTag,
  fetchTags,
  isLoading,
  resetMessage,
  seedDB,
  updateTag,
  ...rest
}: PropsFromRedux): ReactElement => {
  const [state, setState] = React.useState<ShowTagsState>({
    isEditingID: "",
    openModal: false
  });

  const createTagAction = React.useCallback((payload: TagData) => {
    createTag(payload);
  }, []);

  const deleteTagAction = (id: string): void => {
    deleteTag(id);
  };

  const updateTagAction = React.useCallback((payload: TagData): void => {
    updateTag(payload);
  }, []);

  const handleEditClick = (id: string): void => {
    setState(prevState => ({ ...prevState, isEditingID: id }));
  };

  const handleResetEditClick = (): void => {
    setState(prevState => ({
      ...prevState,
      isEditingID: ""
    }));
  };

  const handleOpenModal = (): void => {
    setState(prevState => ({
      ...prevState,
      openModal: true,
      isEditingID: ""
    }));
  };

  const handleCloseModal = (): void => {
    setState(prevState => ({
      ...prevState,
      openModal: false,
      isEditingID: ""
    }));
  };

  React.useEffect(() => {
    if (isLoading) fetchTags();
  }, [fetchTags, isLoading]);

  return (
    <>
      <Header title="Tags" url="/tags" />
      <div>
        <TagListNavigation openModal={handleOpenModal} seedDB={seedDB} />
      </div>
      <div>
        <div>
          {state.openModal && (
            <Modal
              onClick={handleCloseModal}
              title={
                <>
                  <BsFillPersonPlusFill
                    style={{
                      fontSize: 18,
                      marginRight: 8,
                      position: "relative",
                      top: 2
                    }}
                  />
                  New Tag Form
                </>
              }
              maxWidth="750px"
            >
              <TagForm
                {...rest}
                _id=""
                submitAction={createTagAction}
                resetMessage={resetMessage}
                cancelForm={handleCloseModal}
                resetForm={handleCloseModal}
              />
            </Modal>
          )}
          {isLoading ? (
            <LoadingTags height={398} width={780} opacity="1" />
          ) : (
            <DisplayTagList
              {...state}
              {...rest}
              deleteTag={deleteTagAction}
              handleCloseModal={handleCloseModal}
              handleEditClick={handleEditClick}
              handleResetEditClick={handleResetEditClick}
              resetMessage={resetMessage}
              updateTag={updateTagAction}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default connector(ShowTags);
