const listNumbers = document.getElementById("listNum");
const resetBtn = document.getElementById("resetBtn");
const showBtn = document.getElementById("showBtn");
const li = document.createElement("li");

const resetNum = () => {
  li.innerHTML = ``;
};

const randomNumbers = () => {
  const numbers = [];
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 49) + 1;
    if (numbers.includes(randomNum)) {
      i--;
    } else {
      numbers.push(randomNum);
    }
  }

  li.innerHTML = ``;
  for (let i = 0; i < numbers.length; i++) {
    li.innerHTML += `
        <div id="numbers">${numbers[i]}</div>
        `;
  }
};
listNumbers.appendChild(li);

showBtn.addEventListener("click", randomNumbers);
resetBtn.addEventListener("click", resetNum);
