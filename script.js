const imagePaths = [
  "./images/bath.png",
  "./images/dinner.jpg",
  "./images/homework.jpg",
  "./images/snack2.jpg",
];

let currentIndex = 0;
let intervalId = null;

function showNextImage() {
  $("#resultImage").attr("src", imagePaths[currentIndex]);
  currentIndex = (currentIndex + 1) % imagePaths.length;
}

$(document).ready(function () {
  // Startボタン
  $("#startbutton").on("click", function () {
    if (!intervalId) {
      $("#resultText").text("何がでるかな～？？");
      showNextImage();
      intervalId = setInterval(showNextImage, 100);
    }
  });

  // STOPボタン
  $("#stopbutton").on("click", function () {
    clearInterval(intervalId);
    intervalId = null;

    const rand = Math.random();

    if (rand < 0.2) {
      $("#resultImage").attr("src", "./images/bath.png");
      $("#resultText").text("おふろにしよう！！"); // 20%で設定中
    } else if (rand < 0.3) {
      $("#resultImage").attr("src", "./images/dinner.jpg");
      $("#resultText").text("ごはんの時間だよ！！"); // 10%で設定中
    } else if (rand < 0.85) {
      $("#resultImage").attr("src", "./images/homework.jpg");
      $("#resultText").text("しゅくだいだね！！"); // 55%で設定中
    } else {
      $("#resultImage").attr("src", "./images/snack2.jpg");
      $("#resultText").text("おやつタイムー！！"); // 15%で設定中
    }
  });
});

// 音や動画を入れてみたい
// 確率を裏側で持つことができたが、ルーレットは難しかったので断念
// tailwindcssを使うことで、要素配置やレスポンシブ対応は以前より思った通りにできた
