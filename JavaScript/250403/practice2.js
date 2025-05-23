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
         * 레벨2.랜덤 색상 생성(hex)
         * HEX 형식으로 색상을 생성합니다.
         * 각 자리 값은 0-9,A-F 사이의 랜덤한 값입니다.
         * 팁1) 0123456789ABCDEF 문자열에서 랜덤한 인덱스를 이용하여 6자리를 만들 수 있습니다.
         * 팁2) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F] 배열을 만들고 랜덤한 인덱스를 이용하여 6자리를 만들 수 있습니다.
         * 팁3) 255 이하의 숫자를 16진수로 변환할 수 있습니다. r, g, b 각가 2자리 16진수로 변환하여 #RRGGBB 형식으로 만들 수 있습니다.
         * color는 문자열이며, #FF5733 형식으로 반환되어야 합니다.`
         * 예: #FF5733
         */

        /*
        팁1,2)
        const str = "0123456789ABCDEF"; // 16글자
        const strArr = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
        ];
        console.log(str.length); // 0 ~ 15
        let index = Math.floor(Math.random() * 16);
        console.log(index);

        const indexArr = Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * 16)
        );
        console.log(indexArr);
        color = "#";
        color += str[indexArr[0]];
        color += str[indexArr[1]];
        color += str[indexArr[2]];
        color += str[indexArr[3]];
        color += str[indexArr[4]];
        color += str[indexArr[5]];
      */

        // 팁3) #rrggbb
        const r = Math.floor(Math.random() * 256)
          .toString(16)
          .padStart(2, "0");
        console.log(r);
        const g = Math.floor(Math.random() * 256)
          .toString(16)
          .padStart(2, "0");
        const b = Math.floor(Math.random() * 256)
          .toString(16)
          .padStart(2, "0");
        color = "#";
        color += r;
        color += g;
        color += b;
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