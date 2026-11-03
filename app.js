(function () {
  "use strict";

  const catResult = document.getElementById("cat-result");
  const catReveal = document.getElementById("cat-reveal");
  const catHide = document.getElementById("cat-hide");

  const dogResult = document.getElementById("dog-result");
  const dogReveal = document.getElementById("dog-reveal");
  const dogHide = document.getElementById("dog-hide");

  const cowResult = document.getElementById("cow-result");
  const cowReveal = document.getElementById("cow-reveal");
  const cowHide = document.getElementById("cow-hide");

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

  dogReveal.addEventListener("click", function () {
    showResult(dogResult);
  });
  dogHide.addEventListener("click", function () {
    hideResult(dogResult);
  });

  cowReveal.addEventListener("click", function () {
    showResult(cowResult);
  });
  cowHide.addEventListener("click", function () {
    hideResult(cowResult);
  });
})();
