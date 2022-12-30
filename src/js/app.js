const button = document.querySelector("#collapse-button");
const content = document.querySelector("#collapse-content");

button.addEventListener("click", () => {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});
