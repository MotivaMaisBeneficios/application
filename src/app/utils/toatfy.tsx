// src/lib/toast.ts
import { toast as toastify, ToastOptions } from 'react-toastify';

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  pauseOnFocusLoss: true,
};

export const toast = {
  success: (message: string, options: ToastOptions = {}) =>
    toastify.success(message, { ...defaultOptions, ...options }),

  error: (message: string, options: ToastOptions = {}) =>
    toastify.error(message, { ...defaultOptions, ...options }),

  info: (message: string, options: ToastOptions = {}) =>
    toastify.info(message, { ...defaultOptions, ...options }),

  warn: (message: string, options: ToastOptions = {}) =>
    toastify.warn(message, { ...defaultOptions, ...options }),
};
