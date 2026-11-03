(function () {
  "use strict";

  const catResult = document.getElementById("cat-result");
  const catReveal = document.getElementById("cat-reveal");
  const catHide = document.getElementById("cat-hide");

  function showResult(resultBox) {
    resultBox.classList.remove("hidden");
  }

  function hideResult(resultBox) {
    resultBox.classList.add("hidden");
  }

  catReveal.addEventListener("click", function () {
    showResult(catResult);
  });
  catHide.addEventListener("click", function () {
    hideResult(catResult);
  });
})();
