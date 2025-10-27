const form = document.querySelector(".form");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const result = document.querySelector(".result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let son1 = Number(input1.value);
  let son2 = Number(input2.value);

  if (!son1 || !son2) {
    result.innerHTML = "Sonlarni kirit!";
    return;
  }

  if (son1 >= son2) {
    result.innerHTML = "Birinchi son ikkinchi sondan kichik bo'lishi kerak!";
    return;
  }

  let sum = 0;
  result.innerHTML = "";
  for (let i = son1; i <= son2; i++) {
    result.innerHTML += `${i}, `;
    sum += i;
  }
  result.innerHTML += `<br>${son1} dan ${son2} gacha bo'lgan sonlar yig'indisi: ${sum}`;
});
