import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Loader2 } from "lucide-react";

const ToastOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ToastContainer = styled(motion.div)`
  background: var(--color-surface);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  box-shadow: var(--shadow-lg);
  min-width: 200px;
`;

const IconWrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &.loading {
    background-color: var(--color-primary);
  }
  &.success {
    background-color: var(--color-success);
  }
  &.error {
    background-color: var(--color-error);
  }
`;

const Message = styled.p`
  color: var(--color-text);
  text-align: center;
  margin: 0;
  font-weight: 500;
`;

const Toast = ({ status, message, onClose }) => {
  return (
    <AnimatePresence>
      {status && (
        <ToastOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ToastContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <IconWrapper
              className={status}
              initial={{ rotate: 0 }}
              animate={status === "loading" ? { rotate: 360 } : { rotate: 0 }}
              transition={
                status === "loading" ? { repeat: Infinity, duration: 1 } : {}
              }
            >
              {status === "loading" && <Loader2 size={24} />}
              {status === "success" && <Check size={24} />}
              {status === "error" && <X size={24} />}
            </IconWrapper>
            <Message>{message}</Message>
          </ToastContainer>
        </ToastOverlay>
      )}
    </AnimatePresence>
  );
};

export default Toast;
