import React, { useEffect, useRef, useState } from "react";

import { CameraButton } from "@/features/cameraModal/styled";
import type { UseModalProps } from "@/shared/hook/use-modal";
import { CameraHand } from "@/shared/ui/icons";
import { Modal } from "@/shared/ui/modal/modal";

interface ICameraModal extends UseModalProps {}

const CameraModal = (props: ICameraModal) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(true);

  const closeCamera = () => {
    console.log("Closing camera...");
    setIsCameraOpen(false);
  };

  const takePhoto = () => {
    const canvas = document.createElement("canvas");
    if (videoRef.current) {
      // Установка размеров холста
      canvas.width = 500;
      canvas.height = 500;

      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        // Получение данных изображения в формате base64
        canvas.toBlob((blob) => {
          if (blob) {
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
              if (event.target && typeof event.target.result === "string") {
                console.log("ImageDataUrl:", event.target.result);
                localStorage.setItem("capturedImage", event.target.result);
                closeCamera();
                props.close();
              }
            };
            fileReader.readAsDataURL(blob);
          }
        }, "image/jpeg");

        closeCamera();
      } else {
        console.error("Canvas context is not available");
      }
    } else {
      console.error("Video element is not available");
    }
  };

  useEffect(() => {
    console.log("isCameraOpen changed:", isCameraOpen);
    const initializeCamera = async () => {
      try {
        if (videoRef.current) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          videoRef.current.srcObject = stream;
        } else {
          console.error("Video ref is not initialized");
        }
      } catch (error) {
        console.error("Error opening camera:", error);
      }
    };

    if (isCameraOpen) {
      initializeCamera();
    }

    return () => {
      // Cleanup при размонтировании компонента
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        const tracks = stream?.getTracks() || [];
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, [isCameraOpen]);

  return (
    <Modal
      onClose={props.close}
      width={1000}
      css={{
        background: "unset",
        borderRadius: "8px",
        filter: "drop-shadow(0 0 14px rgba(12,31,65,.24))",
        padding: "0 10px",
        width: "500px",
        position: "relative",
      }}
    >
      <video
        width="500px"
        ref={videoRef}
        autoPlay
        playsInline
        style={{ borderRadius: "12px" }}
      />
      <CameraHand
        style={{
          height: "calc(100% - 120px)",
          left: "52%",
          position: "absolute",
          top: "20px",
          webkitTransform: "translate(-50%)",
          transform: "translate(-50%)",
          width: "auto",
        }}
      />
      <CameraButton onClick={takePhoto} />
    </Modal>
  );
};

export default CameraModal;
