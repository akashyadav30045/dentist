'use client';
import { createContext, useContext, useState } from 'react';

type BookingContextType = {
  isOpen: boolean;
  openModal: (treatment?: string) => void;
  closeModal: () => void;
  selectedTreatment: string;
};

const BookingContext = createContext<BookingContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  selectedTreatment: '',
});

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  const openModal = (treatment = '') => {
    setSelectedTreatment(treatment);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ isOpen, openModal, closeModal, selectedTreatment }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
