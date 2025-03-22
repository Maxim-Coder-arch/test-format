// const hotelCardsContainer = document.querySelector(".hotel-cards-container");
// const hotelCardsWrapper = document.querySelector(".hotel-cards-wrapper");
// const hotelCards = Array.from(document.querySelectorAll(".hotel-card"));
// const hotelCardsOverlay = document.querySelector(".hotel-cards-overlay");

// const applyOverlayMask = (e) => {
//   const overlayEl = e.currentTarget;
//   const x = e.pageX - hotelCardsContainer.offsetLeft;
//   const y = e.pageY - hotelCardsContainer.offsetTop;

//   overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
// };

// const createOverlayCta = (overlayCard, ctaEl) => {
//   const overlayCta = document.createElement("div");
//   overlayCta.classList.add("hotel-card-cta");
//   overlayCta.textContent = ctaEl.textContent;
//   overlayCta.setAttribute("aria-hidden", true);
//   overlayCard.append(overlayCta);
// };

// const observer = new ResizeObserver((entries) => {
//   entries.forEach((entry) => {
//     const cardIndex = hotelCards.indexOf(entry.target);
//     let width = entry.borderBoxSize[0].inlineSize;
//     let height = entry.borderBoxSize[0].blockSize;

//     if (cardIndex >= 0) {
//       hotelCardsOverlay.children[cardIndex].style.width = `${width}px`;
//       hotelCardsOverlay.children[cardIndex].style.height = `${height}px`;
//     }
//   });
// });

// const initOverlayCard = (cardEl) => {
//   const overlayCard = document.createElement("div");
//   overlayCard.classList.add("hotel-card");
//   createOverlayCta(overlayCard, cardEl.lastElementChild);
//   hotelCardsOverlay.append(overlayCard);
//   observer.observe(cardEl);
// };

// hotelCards.forEach(initOverlayCard);
// document.body.addEventListener("pointermove", applyOverlayMask);
