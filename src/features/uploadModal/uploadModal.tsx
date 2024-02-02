import React from "react";

import CameraModal from "@/features/cameraModal/cameraModal";
import {
  UploadModalFileButton,
  UploadModalItem,
  UploadModalPhotoButton,
} from "@/features/uploadModal/styled";
import type { UseModalProps } from "@/shared/hook/use-modal";
import { Modals } from "@/shared/hook/use-modal";
import { Camera, FileIcon } from "@/shared/ui/icons";
import { Modal } from "@/shared/ui/modal/modal";

interface IUploadModal extends UseModalProps {}

const UploadModal = (props: IUploadModal) => {
  const openCamera = () => {
    console.log("Opening camera...");
    Modals.open(CameraModal, {});
  };

  return (
    <>
      <Modal
        onClose={props.close}
        width={1000}
        css={{
          background: "$mainGradient",
          borderRadius: "8px",
          filter: "drop-shadow(0 0 14px rgba(12,31,65,.24))",
          padding: "0 10px",
          width: "500px",
        }}
      >
        <>
          <UploadModalItem>
            <UploadModalPhotoButton onClick={openCamera}>
              Take Photo
              <Camera />
            </UploadModalPhotoButton>
          </UploadModalItem>
          <UploadModalItem>
            <UploadModalFileButton>
              Choose File
              <FileIcon />
            </UploadModalFileButton>
          </UploadModalItem>
        </>
      </Modal>
    </>
  );
};

export default UploadModal;
