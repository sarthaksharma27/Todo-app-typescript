const btn = document.querySelector("button") as HTMLButtonElement;
const ul = document.querySelector("ul") as HTMLUListElement;
const input = document.querySelector("input") as HTMLInputElement;

btn.addEventListener("click", () => {
  const item = document.createElement("li");
  item.innerText = input.value;

  const delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("delete");

  item.appendChild(delbtn);
  ul.appendChild(item);
  input.value = "";
});

ul.addEventListener("click", function (event) {
  if ((event.target as HTMLElement).nodeName === "BUTTON") {
    const listItem = (event.target as HTMLElement).parentElement;
    if (listItem) {
      listItem.remove();
    }
  }
});

