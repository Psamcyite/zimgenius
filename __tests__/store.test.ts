import { useApplyStore } from "../lib/store";
import { describe } from "@jest/globals";

describe("useApplyStore", () => {
  beforeEach(() => {
    // Reset store before each test
    useApplyStore.setState({
      isOpen: false,
      jobTitle: "",
      formData: { name: "", email: "", coverLetter: "" },
    });
  });

  test("should open modal with job title", () => {
    useApplyStore.getState().openModal("Frontend Developer");
    expect(useApplyStore.getState().isOpen).toBe(true);
    expect(useApplyStore.getState().jobTitle).toBe("Frontend Developer");
  });

  test("should close modal", () => {
    useApplyStore.getState().openModal("Frontend Developer");
    useApplyStore.getState().closeModal();
    expect(useApplyStore.getState().isOpen).toBe(false);
  });

  test("should update form data", () => {
    useApplyStore.getState().updateForm("name", "Sam Potter");
    expect(useApplyStore.getState().formData.name).toBe("Sam Potter");
  });
});