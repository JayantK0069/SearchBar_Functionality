let count2 = -1;
document.addEventListener("keyup", (event) => {
  const rows = document.querySelectorAll(".tabHolder tr td");
  if (rows.length === 0) return;
  if (event.key === "ArrowDown") {
    count2++;
    if (count2 >= 5) {
      count2 = 4;
    }
    rows[count2].style.backgroundColor = "lightblue";
    rows[count2].setAttribute("class", "main")
    rows.forEach((i, j) => {
      if (j != count2) {
        i.style.backgroundColor = "#D3D3D3";
        i.setAttribute("class", `rest`)
      }
    });
  } else if (event.key === "ArrowUp") {
    --count2;
    if (count2 < 0) {
      count2 = 0;
    }
    rows[count2].style.backgroundColor = "lightblue";
    rows[count2].setAttribute("class", "main")
    rows.forEach((i, j) => {
      if (j != count2) {
        i.style.backgroundColor = "#D3D3D3";
        i.setAttribute("class", `rest`)
      }
    });
  }
  if (event.key === "Enter") {
    if (rows[count2] && rows[count2].className === "main") {
      inputField.value = rows[count2].innerText;
    }
  }

});
