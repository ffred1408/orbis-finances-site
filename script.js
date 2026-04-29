document.addEventListener("DOMContentLoaded", () => {
  const yearTarget = document.querySelector("[data-year]");
  if (yearTarget) yearTarget.textContent = new Date().getFullYear();

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const notice = document.querySelector("[data-form-notice]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (notice) {
        notice.textContent = "Thank you. A senior advisor will contact you within one business day.";
      }
      form.reset();
    });
  }
});
