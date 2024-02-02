import React, { useRef } from "react";

import { KeyName, useKeyDown } from "@/shared/hook/use-key-down";
import { useOnClickOutside } from "@/shared/hook/use-outside-click";
import { ModalContent, ModalWrapper } from "@/shared/ui/modal/styled";

export interface IModal extends React.ComponentProps<typeof ModalContent> {
  children?: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose, ...props }: IModal) => {
  const ref = useRef(null);
  useKeyDown(KeyName.ESC, onClose);
  useOnClickOutside(ref, () => onClose());
  return (
    <ModalWrapper>
      <ModalContent ref={ref} onClick={(e) => e.stopPropagation()} {...props}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};
