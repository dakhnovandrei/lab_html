const portfolioBtn = document.querySelector(".menu_button");
const portfolioList = document.querySelector(".menu__list");
function togglePortfolioVisibility() {
  portfolioList.classList.toggle("hide");
}
portfolioBtn.addEventListener("click", togglePortfolioVisibility);