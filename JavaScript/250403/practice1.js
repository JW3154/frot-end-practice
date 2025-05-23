<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #app {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 200px;
        border: 1px solid #ccc;
      }

      #btn-change {
        padding: 6px 12px;
        border: none;
        cursor: pointer;
        background: white;
        border: 2px solid black;
        border-radius: 5px;

        &:hover {
          background: black;
          color: white;
        }
      }
    </style>
  </head>
  <body>
    <div id="app">
      <p id="color"></p>
      <button id="btn-change">color change</button>
    </div>
    <script>
      function getRandomColor() {
        let color = "";
        /**
         * 레벨1. 랜덤 색상 생성 (rgb)
         * rgb(r, g, b) 형식으로 색상을 생성합니다.
         * r, g, b는 각각 0-255 사이의 랜덤한 정수입니다.
         * color는 문자열이며, rgb(r, g, b) 형식으로 반환되어야 합니다.
         * 예: rgb(255, 87, 51)
         */
        // 랜덤한 정수 Math.random() : 0부터 1 사이의 랜덤한 숫자 -> 0~ 256 랜덤 숫자
        // 버림 Math.floor() :
        console.log(Math.floor(Math.random() * 256));
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        // 숫자를 포함하는 문자열로 변환하는 방법
        // 1) 문자열 연결 연산자 2) 템플릿 리터럴
        // color = "rgb(" + r + "," + g + "," + b + ")";
        color = `rgb(${r}, ${g}, ${b})`;

        return color;
      }

      const color = getRandomColor();
      document.getElementById("app").style.backgroundColor = color;
      document.getElementById("color").innerText = color;

      const btn = document.getElementById("btn-change");
      btn.addEventListener("click", () => {
        const color = getRandomColor();
        document.getElementById("app").style.backgroundColor = color;
        document.getElementById("color").innerText = color;
      });
    </script>
  </body>
</html>