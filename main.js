// Список доступних скінів
const skins = {
    "claszian-apostasy": {
      name: "Claszian Apostasy",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjBcDf4FthB8&psig=AOvVaw1GT7NzaQU0lgFg2fiH-Jkj&ust=1734192200828000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOibp8KPpYoDFQAAAAAdAAAAABAI",
    },
    "abberant-observer": {
      name: "Abberant Observer",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhawk.live%2Fru%2Fposts%2Fcrownfall-sokrovishnica-pudge-aberrant-observer&psig=AOvVaw2N1iz_0b1YABsXckbidUv9&ust=1734192232518000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiFptGPpYoDFQAAAAAdAAAAABAP",
    },
    "starlorn-adjudicator": {
      name: "Starlorn Adjudicator",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.olx.ua%2Fd%2Fobyavlenie%2Fstarlorn-adjudicator-dota-2-sety-IDVnDme.html&psig=AOvVaw1g9-HpCjjnr5NkUQ8i8dwx&ust=1734192271788000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC93-SPpYoDFQAAAAAdAAAAABAJ",
    },
    "undying-love": {
      name: "Undying Love",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fl%3Dukrainian%26id%3D3096946990&psig=AOvVaw0kxC3rI0P2PoS7vtmxtQIY&ust=1734192146425000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCcvqiPpYoDFQAAAAAdAAAAABAE",
    },
    "mocking-bird": {
      name: "Mocking Bird",
      img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbattlepass.ru%2Fservice%2Fdota_mall&psig=AOvVaw3vXCK0k9frk8qKLZWAjKou&ust=1734192173762000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKj_mLWPpYoDFQAAAAAdAAAAABAHhttps://via.placeholder.com/200?text=Mocking+Bird",
    },
  };
  
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
  