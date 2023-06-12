// 獲取所有的 td
let tds = document.querySelectorAll("td");
tds.forEach((item) => {
  item.onclick = function () {
    this.style.background = "#222";
  };
});
