// Список доступних скінів
const skins = {
    "claszian-apostasy": {
      name: "Claszian Apostasy",
      img: "Void.png",
    },
    "abberant-observer": {
      name: "Abberant Observer",
      img: "pudge.png",
    },
    "starlorn-adjudicator": {
      name: "Starlorn Adjudicator",
      img: "Dawnbraker.png",
    },
    "undying-love": {
      name: "Undying Love",
      img: "Undying.png",
    },
    "mocking-bird": {
      name: "Mocking Bird",
      img: "mocking-bird.png",
    },
  }
  
  // Елементи інтерфейсу
  const skinSelect = document.getElementById("skinSelect");
  const openCaseButton = document.getElementById("openCaseButton");
  const caseAnimation = document.getElementById("caseAnimation");
  const rewardContainer = document.getElementById("rewardContainer");
  const rewardElement = document.getElementById("reward");
  const tryAgainButton = document.getElementById("tryAgainButton");
  
  // Функція для відкриття кейсу
  function openCase() {
    const selectedSkinKey = skinSelect.value;
    const selectedSkin = skins[selectedSkinKey];
  
    // Показати анімацію відкриття
    openCaseButton.style.display = "none";
    caseAnimation.classList.remove("hidden");
  
    // Затримка перед відображенням нагороди
    setTimeout(() => {
      displayReward(selectedSkin);
    }, 2000);
  }
  
  // Відображення нагороди
  function displayReward(skin) {
    caseAnimation.classList.add("hidden");
    rewardContainer.classList.remove("hidden");
  
    // Додати назву та зображення скіна
    rewardElement.innerHTML = `
      <span>${skin.name}</span>
      <img src="${skin.img}" alt="${skin.name}">
    `;
  }
  
  // Скидання інтерфейсу для нового відкриття
  function resetCase() {
    rewardContainer.classList.add("hidden");
    openCaseButton.style.display = "inline-block";
  }
  
  // Прив'язка подій
  openCaseButton.addEventListener("click", openCase);
  tryAgainButton.addEventListener("click", resetCase);
  