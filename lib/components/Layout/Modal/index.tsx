import * as React from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import Flex from "lib/components/Layout/Flex";
import FlexEnd from "lib/components/Layout/FlexEnd";
import FlexStart from "lib/components/Layout/FlexStart";
import BackgroundOverlay from "lib/components/Layout/Modal/BackgroundOverlay";
import CloseModalButton from "lib/components/Layout/Modal/CloseModalButton";
import ModalContent from "lib/components/Layout/Modal/ModalContent";
import ModalContainer from "lib/components/Layout/Modal/ModalContainer";
import ModalRoot from "lib/components/Layout/Modal/ModalRoot";
import ModalTitle from "lib/components/Layout/Modal/ModalTitle";
import WindowContainer from "lib/components/Layout/Modal/WindowContainer";
import { MouseEvent, ReactNode, ReactElement } from "lib/types";

export type ModalProps = {
  children: ReactNode;
  maxWidth?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  title?: ReactNode;
};

const Modal = ({
  children,
  maxWidth,
  onClick,
  title
}: ModalProps): ReactElement => {
  /* istanbul ignore next */
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const appEl = document.getElementById("app");
    if (appEl) appEl.className = "blurred";

    return () => {
      document.body.style.overflow = "visible";
      if (appEl) appEl.className = "";
    };
  }, []);

  return createPortal(
    <div data-testid="modal-overlay">
      <BackgroundOverlay />
      <WindowContainer>
        <ModalRoot>
          <ModalContainer data-testid="modal-container" maxWidth={maxWidth}>
            <ModalContent data-testid="modal-content">
              <Flex
                data-testid="modal-header"
                style={{ padding: 15, width: "auto", background: "#0076ff" }}
              >
                <FlexStart>
                  <ModalTitle data-testid="modal-title">{title}</ModalTitle>
                </FlexStart>
                <FlexEnd>
                  <CloseModalButton
                    data-testid="close-modal"
                    aria-label="close modal"
                    onClick={onClick}
                  >
                    <FaTimes />
                  </CloseModalButton>
                </FlexEnd>
              </Flex>
              <div data-testid="modal-body" style={{ padding: "20px" }}>
                {children}
              </div>
            </ModalContent>
          </ModalContainer>
        </ModalRoot>
      </WindowContainer>
    </div>,
    document.body
  );
};

export default Modal;
