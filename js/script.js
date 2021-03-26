window.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector("#text");
  const submitBtn = document.querySelector(".submit_btn");
  let completedText = document.querySelector("#completed_text");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    completedText.value = text.value
      .replace(/^\d+$/gim, "")
      .replace(/^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$/gm, "")
      .replace(/\n{3,}/g, "\n\n")
      .toLowerCase();
  });
});
