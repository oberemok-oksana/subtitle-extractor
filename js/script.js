window.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector("#text");
  const submitBtn = document.querySelector(".submit_btn");
  const copyBtn = document.querySelector(".copy_btn");
  let completedText = document.querySelector("#completed_text");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    completedText.value = text.value
      .replace(/^\d+$/gim, "")
      .replace(
        /^\d{2,}:\d{2,}:\d{2,},\d{3,} --> \d{2,}:\d{2,}:\d{2,},\d{3,}$/gm,
        ""
      )
      .replace(/<i>([\w\W\s.]+)<\/i>/gm, `"$1"`) //прямая речь
      .replace(/\n{3,}/g, "\n\n");
    mySpinner();
  });

  function mySpinner() {
    submitBtn.classList.add("button--loading");
    submitBtn.textContent = "";

    setTimeout(() => {
      submitBtn.classList.remove("button--loading");
      submitBtn.textContent = "Transform!";
    }, 200);
  }

  function copyText() {
    let copyText = document.getElementById("completed_text");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(copyText.value);
    });
  }
  copyText();
});
