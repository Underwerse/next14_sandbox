// components/Modal.tsx
'use client'

import React, { useRef, ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import { Dialog } from "@headlessui/react";

interface ModalProps {
  onClose?: () => void;
  children: ReactNode;
}

export default function Modal({ onClose = () => {}, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        className="fixed inset-0 bg-gray-800/60"
      />
      <div className="relative flex items-center justify-center w-1/2">
        {children}
      </div>
    </Dialog>
  );
}