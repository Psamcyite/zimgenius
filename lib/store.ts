import { create } from "zustand";

interface ApplyState {
  isOpen: boolean;
  jobTitle: string;
  formData: {
    name: string;
    email: string;
    coverLetter: string;
  };
  openModal: (title: string) => void;
  closeModal: () => void;
  updateForm: (field: string, value: string) => void;
}

export const useApplyStore = create<ApplyState>((set) => ({
  isOpen: false,
  jobTitle: "",
  formData: { name: "", email: "", coverLetter: "" },
  openModal: (title) => set({ isOpen: true, jobTitle: title }),
  closeModal: () => set({ isOpen: false }),
  updateForm: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    })),
}));