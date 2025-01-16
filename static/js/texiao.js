 #background-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none; /* Make sure the background doesn't interfere with other elements */
    }
 
    .rectangle {
      position: absolute;
      width: 20px;
      border-radius: 5px;
      opacity: 0.9;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      animation: moveUp linear infinite;
    }
 
    @keyframes moveUp {
      from {
        transform: translateY(110vh);
      }
      to {
        transform: translateY(-10%);
      }
    }
  <div id="background-container"><div class="rectangle" style="top: 0.544638vh; left: 18.0325vw; height: 10.5178px; background: linear-gradient(68.7034deg, rgb(255, 69, 0), rgb(95, 158, 160)); box-shadow: rgba(0, 0, 0, 0.2) 1.60878px 2.77946px 4.24649px; animation-duration: 12.1241s;"></div><div class="rectangle" style="top: 25.0849vh; left: 26.0156vw; height: 10.4574px; background: linear-gradient(65.9918deg, rgb(255, 105, 180), rgb(255, 20, 147)); box-shadow: rgba(0, 0, 0, 0.2) 3.16762px 4.07309px 8.94327px; animation-duration: 13.8677s;"></div><div class="rectangle" style="top: 22.2216vh; left: 27.3172vw; height: 10.6152px; background: linear-gradient(66.8092deg, rgb(255, 105, 180), rgb(255, 218, 185)); box-shadow: rgba(0, 0, 0, 0.2) 1.92282px 3.63863px 5.47269px; animation-duration: 13.8847s;"></div><div class="rectangle" style="top: 27.8361vh; left: 5.19359vw; height: 10.8825px; background: linear-gradient(63.702deg, rgb(255, 160, 122), rgb(255, 140, 0)); box-shadow: rgba(0, 0, 0, 0.2) 0.201935px 2.76276px 0.318047px; animation-duration: 14.938s;"></div><div class="rectangle" style="top: 9.30653vh; left: 3.07115vw; height: 10.5404px; background: linear-gradient(62.6962deg, rgb(255, 99, 71), rgb(255, 182, 193)); box-shadow: rgba(0, 0, 0, 0.2) 1.06473px 0.786889px 7.45183px; animation-duration: 3.01068s;"></div><div class="rectangle" style="top: 20.1194vh; left: 25.0547vw; height: 10.1657px; background: linear-gradient(62.7974deg, rgb(30, 144, 255), rgb(255, 140, 0)); box-shadow: rgba(0, 0, 0, 0.2) 4.37405px 0.938175px 9.92183px; animation-duration: 20.2549s;"></div><div class="rectangle" style="top: 11.3957vh; left: 20.929vw; height: 10.2348px; background: linear-gradient(62.8569deg, rgb(255, 218, 185), rgb(255, 105, 180)); box-shadow: rgba(0, 0, 0, 0.2) 2.06794px 1.29041px 5.61025px; animation-duration: 1.76053s;"></div><div class="rectangle" style="top: 28.0385vh; left: 26.9226vw; height: 10.3267px; background: linear-gradient(60.5707deg, rgb(255, 127, 80), rgb(100, 149, 237)); box-shadow: rgba(0, 0, 0, 0.2) 3.53858px 0.255533px 6.59056px; animation-duration: 14.8482s;"></div><div class="rectangle" style="top: 13.8012vh; left: 14.1215vw; height: 10.7873px; background: linear-gradient(60.5279deg, rgb(255, 218, 185), rgb(70, 130, 180)); box-shadow: rgba(0, 0, 0, 0.2) 0.384487px 3.16923px 4.69347px; animation-duration: 15.8547s;"></div><div class="rectangle" style="top: 10.7271vh; left: 25.3683vw; height: 10.8374px; background: linear-gradient(64.0715deg, rgb(255, 182, 193), rgb(255, 215, 0)); box-shadow: rgba(0, 0, 0, 0.2) 2.0031px 0.181651px 4.8309px; animation-duration: 5.50605s;"></div><div class="rectangle" style="top: 25.0217vh; left: 26.1666vw; height: 10.7702px; background: linear-gradient(60.6217deg, rgb(255, 218, 185), rgb(255, 218, 185)); box-shadow: rgba(0, 0, 0, 0.2) 4.73345px 2.34179px 5.51151px; animation-duration: 20.5504s;"></div><div class="rectangle" style="top: 21.709vh; left: 17.6026vw; height: 10.9322px; background: linear-gradient(64.8407deg, rgb(255, 99, 71), rgb(255, 127, 80)); box-shadow: rgba(0, 0, 0, 0.2) 3.14353px 1.12043px 8.68618px; animation-duration: 9.95687s;"></div><div class="rectangle" style="top: 16.4719vh; left: 21.1604vw; height: 10.709px; background: linear-gradient(64.897deg, rgb(255, 99, 71), rgb(255, 160, 122)); box-shadow: rgba(0, 0, 0, 0.2) 2.58648px 0.635521px 5.08124px; animation-duration: 13.5316s;"></div><div class="rectangle" style="top: 3.23957vh; left: 24.8513vw; height: 10.1186px; background: linear-gradient(60.4088deg, rgb(255, 20, 147), rgb(255, 99, 71)); box-shadow: rgba(0, 0, 0, 0.2) 3.23648px 4.38747px 6.44191px; animation-duration: 5.99842s;"></div><div class="rectangle" style="top: 12.0484vh; left: 22.0025vw; height: 10.4139px; background: linear-gradient(62.6598deg, rgb(255, 215, 0), rgb(255, 20, 147)); box-shadow: rgba(0, 0, 0, 0.2) 4.216px 0.255801px 7.15421px; animation-duration: 16.1341s;"></div><div class="rectangle" style="top: 26.109vh; left: 18.5261vw; height: 10.6455px; background: linear-gradient(67.9096deg, rgb(100, 149, 237), rgb(255, 218, 185)); box-shadow: rgba(0, 0, 0, 0.2) 3.25804px 0.385155px 7.2059px; animation-duration: 2.66893s;"></div><div class="rectangle" style="top: 1.08255vh; left: 1.55752vw; height: 10.1126px; background: linear-gradient(63.771deg, rgb(255, 99, 71), rgb(255, 69, 0)); box-shadow: rgba(0, 0, 0, 0.2) 4.68294px 2.80677px 2.50177px; animation-duration: 13.2944s;"></div><div class="rectangle" style="top: 22.2067vh; left: 0.494192vw; height: 10.0652px; background: linear-gradient(68.5262deg, rgb(255, 140, 0), rgb(255, 215, 0)); box-shadow: rgba(0, 0, 0, 0.2) 0.557666px 2.59631px 0.797535px; animation-duration: 1.02061s;"></div><div class="rectangle" style="top: 17.3201vh; left: 0.890066vw; height: 10.883px; background: linear-gradient(67.8129deg, rgb(255, 160, 122), rgb(255, 105, 180)); box-shadow: rgba(0, 0, 0, 0.2) 4.74016px 3.40774px 3.90199px; animation-duration: 5.00461s;"></div><div class="rectangle" style="top: 9.2276vh; left: 16.7995vw; height: 10.0538px; background: linear-gradient(63.4797deg, rgb(255, 182, 193), rgb(255, 160, 122)); box-shadow: rgba(0, 0, 0, 0.2) 3.59843px 4.614px 1.8767px; animation-duration: 20.683s;"></div><div class="rectangle" style="top: 15.5114vh; left: 13.833vw; height: 10.2052px; background: linear-gradient(63.8752deg, rgb(255, 69, 0), rgb(255, 160, 122)); box-shadow: rgba(0, 0, 0, 0.2) 3.31064px 0.402739px 7.36444px; animation-duration: 10.3355s;"></div><div class="rectangle" style="top: 23.0266vh; left: 24.4227vw; height: 10.7408px; background: linear-gradient(63.3398deg, rgb(255, 182, 193), rgb(255, 218, 185)); box-shadow: rgba(0, 0, 0, 0.2) 0.839842px 1.83692px 6.35825px; animation-duration: 6.54166s;"></div><div class="rectangle" style="top: 8.4245vh; left: 28.7317vw; height: 10.7693px; background: linear-gradient(62.7526deg, rgb(135, 206, 250), rgb(95, 158, 160)); box-shadow: rgba(0, 0, 0, 0.2) 2.82333px 1.71561px 2.32689px; animation-duration: 1.80214s;"></div><div class="rectangle" style="top: 16.8256vh; left: 4.98291vw; height: 10.8899px; background: linear-gradient(61.7921deg, rgb(65, 105, 225), rgb(255, 160, 122)); box-shadow: rgba(0, 0, 0, 0.2) 0.29738px 0.148173px 7.8135px; animation-duration: 3.75537s;"></div><div class="rectangle" style="top: 1.23032vh; left: 28.1815vw; height: 10.6987px; background: linear-gradient(64.5903deg, rgb(255, 127, 80), rgb(173, 216, 230)); box-shadow: rgba(0, 0, 0, 0.2) 0.632581px 3.62769px 4.62434px; animation-duration: 18.564s;"></div><div class="rectangle" style="top: 4.30767vh; left: 0.432929vw; height: 10.7422px; background: linear-gradient(62.571deg, rgb(255, 215, 0), rgb(255, 215, 0)); box-shadow: rgba(0, 0, 0, 0.2) 4.11747px 2.13917px 6.68319px; animation-duration: 3.26077s;"></div><div class="rectangle" style="top: 9.42855vh; left: 12.6943vw; height: 10.198px; background: linear-gradient(64.2421deg, rgb(100, 149, 237), rgb(30, 144, 255)); box-shadow: rgba(0, 0, 0, 0.2) 0.666049px 3.97472px 4.72963px; animation-duration: 20.7371s;"></div><div class="rectangle" style="top: 16.4138vh; left: 12.1917vw; height: 10.9322px; background: linear-gradient(64.9343deg, rgb(30, 144, 255), rgb(255, 127, 80)); box-shadow: rgba(0, 0, 0, 0.2) 1.44045px 2.24133px 3.14952px; animation-duration: 9.43653s;"></div><div class="rectangle" style="top: 26.0967vh; left: 20.0738vw; height: 10.9354px; background: linear-gradient(69.8723deg, rgb(255, 140, 0), rgb(255, 69, 0)); box-shadow: rgba(0, 0, 0, 0.2) 2.58829px 4.87184px 3.48604px; animation-duration: 7.32766s;"></div><div class="rectangle" style="top: 19.6718vh; left: 16.0018vw; height: 10.9493px; background: linear-gradient(68.8454deg, rgb(255, 218, 185), rgb(255, 20, 147)); box-shadow: rgba(0, 0, 0, 0.2) 1.9419px 1.1852px 8.1896px; animation-duration: 5.97738s;"></div><div class="rectangle" style="top: 19.4763vh; left: 6.89628vw; height: 10.6936px; background: linear-gradient(64.159deg, rgb(255, 99, 71), rgb(70, 130, 180)); box-shadow: rgba(0, 0, 0, 0.2) 2.92269px 4.90866px 1.42132px; animation-duration: 18.1824s;"></div><div class="rectangle" style="top: 8.01732vh; left: 10.624vw; height: 10.1115px; background: linear-gradient(63.3829deg, rgb(95, 158, 160), rgb(135, 206, 250)); box-shadow: rgba(0, 0, 0, 0.2) 1.93363px 2.39326px 1.7639px; animation-duration: 10.5592s;"></div><div class="rectangle" style="top: 9.90361vh; left: 20.8446vw; height: 10.0774px; background: linear-gradient(63.5749deg, rgb(255, 160, 122), rgb(255, 182, 193)); box-shadow: rgba(0, 0, 0, 0.2) 1.71516px 4.64591px 3.15435px; animation-duration: 5.40519s;"></div><div class="rectangle" style="top: 20.468vh; left: 19.4393vw; height: 10.6519px; background: linear-gradient(67.1963deg, rgb(65, 105, 225), rgb(255, 99, 71)); box-shadow: rgba(0, 0, 0, 0.2) 4.19858px 1.77921px 7.10955px; animation-duration: 12.8017s;"></div><div class="rectangle" style="top: 27.8063vh; left: 16.4846vw; height: 10.8636px; background: linear-gradient(69.597deg, rgb(255, 160, 122), rgb(0, 191, 255)); box-shadow: rgba(0, 0, 0, 0.2) 1.30559px 2.94868px 8.46234px; animation-duration: 7.27715s;"></div><div class="rectangle" style="top: 15.3356vh; left: 15.5066vw; height: 10.7227px; background: linear-gradient(69.6593deg, rgb(65, 105, 225), rgb(255, 105, 180)); box-shadow: rgba(0, 0, 0, 0.2) 3.77667px 4.36063px 3.95557px; animation-duration: 1.5589s;"></div><div class="rectangle" style="top: 9.47067vh; left: 6.06918vw; height: 10.3638px; background: linear-gradient(62.8233deg, rgb(255, 140, 0), rgb(255, 140, 0)); box-shadow: rgba(0, 0, 0, 0.2) 0.302115px 3.99339px 4.17909px; animation-duration: 19.8457s;"></div><div class="rectangle" style="top: 20.6696vh; left: 14.6473vw; height: 10.8754px; background: linear-gradient(63.2113deg, rgb(255, 218, 185), rgb(255, 105, 180)); box-shadow: rgba(0, 0, 0, 0.2) 4.04032px 3.59467px 2.35809px; animation-duration: 18.9031s;"></div><div class="rectangle" style="top: 22.0271vh; left: 12.5633vw; height: 10.7191px; background: linear-gradient(65.396deg, rgb(255, 99, 71), rgb(255, 140, 0)); box-shadow: rgba(0, 0, 0, 0.2) 1.73298px 2.25114px 4.8511px; animation-duration: 12.6645s;"></div><div class="rectangle" style="top: 26.8595vh; left: 15.0879vw; height: 10.5553px; background: linear-gradient(63.1684deg, rgb(255, 69, 0), rgb(255, 20, 147)); box-shadow: rgba(0, 0, 0, 0.2) 4.02554px 1.35404px 0.151975px; animation-duration: 13.8005s;"></div><div class="rectangle" style="top: 13.0974vh; left: 6.12318vw; height: 10.0084px; background: linear-gradient(66.3206deg, rgb(255, 218, 185), rgb(173, 216, 230)); box-shadow: rgba(0, 0, 0, 0.2) 3.25711px 4.18774px 4.81591px; animation-duration: 14.3326s;"></div><div class="rectangle" style="top: 4.69257vh; left: 4.5782vw; height: 10.7789px; background: linear-gradient(62.5031deg, rgb(255, 182, 193), rgb(255, 218, 185)); box-shadow: rgba(0, 0, 0, 0.2) 1.8428px 0.773753px 7.1318px; animation-duration: 8.00182s;"></div><div class="rectangle" style="top: 3.81157vh; left: 28.5388vw; height: 10.5048px; background: linear-gradient(67.0076deg, rgb(95, 158, 160), rgb(255, 215, 0)); box-shadow: rgba(0, 0, 0, 0.2) 4.31478px 1.31169px 8.62994px; animation-duration: 12.422s;"></div><div class="rectangle" style="top: 20.1134vh; left: 21.5215vw; height: 10.5304px; background: linear-gradient(69.1471deg, rgb(135, 206, 235), rgb(95, 158, 160)); box-shadow: rgba(0, 0, 0, 0.2) 1.64466px 3.52526px 8.01056px; animation-duration: 9.81147s;"></div><div class="rectangle" style="top: 16.3242vh; left: 4.57446vw; height: 10.067px; background: linear-gradient(60.7164deg, rgb(255, 20, 147), rgb(255, 69, 0)); box-shadow: rgba(0, 0, 0, 0.2) 4.0247px 2.46082px 4.75253px; animation-duration: 6.49974s;"></div><div class="rectangle" style="top: 27.4604vh; left: 26.4129vw; height: 10.3799px; background: linear-gradient(69.7844deg, rgb(255, 140, 0), rgb(65, 105, 225)); box-shadow: rgba(0, 0, 0, 0.2) 3.86762px 0.481321px 1.5544px; animation-duration: 13.0538s;"></div><div class="rectangle" style="top: 24.0649vh; left: 0.446017vw; height: 10.4409px; background: linear-gradient(62.4581deg, rgb(255, 160, 122), rgb(135, 206, 250)); box-shadow: rgba(0, 0, 0, 0.2) 3.11728px 3.35665px 7.56079px; animation-duration: 18.6452s;"></div><div class="rectangle" style="top: 5.06931vh; left: 7.07276vw; height: 10.3754px; background: linear-gradient(66.9488deg, rgb(255, 69, 0), rgb(255, 140, 0)); box-shadow: rgba(0, 0, 0, 0.2) 4.70344px 2.00938px 9.74322px; animation-duration: 4.06147s;"></div><div class="rectangle" style="top: 19.1418vh; left: 11.1855vw; height: 10.5243px; background: linear-gradient(63.2158deg, rgb(255, 218, 185), rgb(255, 160, 122)); box-shadow: rgba(0, 0, 0, 0.2) 3.08697px 2.2508px 1.20188px; animation-duration: 8.80082s;"></div><div class="rectangle" style="top: 2.41689vh; left: 23.7569vw; height: 10.2136px; background: linear-gradient(64.6027deg, rgb(255, 20, 147), rgb(255, 160, 122)); box-shadow: rgba(0, 0, 0, 0.2) 3.89648px 3.96848px 9.309px; animation-duration: 20.7652s;"></div></div>
 
  <script>
    // 生成更多长方形并设置随机位置、宽度、颜色、速度
    for (let i = 0; i < 50; i++) {
      createRandomRectangle();
    }
 
    function createRandomRectangle() {
      const rectangle = document.createElement('div');
      rectangle.className = 'rectangle';
      setRandomProperties(rectangle);
 
      document.getElementById('background-container').appendChild(rectangle);
    }
 
    function setRandomProperties(element) {
      element.style.top = getRandomPosition() + 'vh';
      element.style.left = getRandomPosition() + 'vw';
      element.style.height = getRandomWidth() + 'px';
      element.style.background = getRandomGradient();
      element.style.boxShadow = getRandomShadow();
      element.style.animationDuration = getRandomSpeed() + 's';
    }
 
    function getRandomPosition() {
      return Math.random() * 30; // 调整这里以控制随机位置的范围
    }
 
    function getRandomWidth() {
      return Math.random() * 1 + 10; // 调整这里以控制随机宽度的范围
    }
 
    function getRandomGradient() {
      const angle = Math.random() * 10 + 60; // 30度到60度之间
      const color1 = getRandomWarmColor();
      const color2 = getRandomWarmColor();
      return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    }
 
    function getRandomWarmColor() {
      const ratio = Math.random(); // 随机选择是暖色调还是冷色调
      const warmColors = [
        '#FF6347', '#FFA07A', '#FFD700', '#FF8C00', '#FF4500',
        '#FF7F50', '#FFDAB9', '#FFB6C1', '#FF69B4', '#FF1493'
      ]; // 暖色调颜色
      const coldColors = [
        '#87CEEB', '#00BFFF', '#1E90FF', '#4682B4', '#5F9EA0',
        '#ADD8E6', '#B0C4DE', '#87CEFA', '#6495ED', '#4169E1'
      ]; // 冷色调颜色
 
      return ratio < 0.8 ? warmColors[Math.floor(Math.random() * warmColors.length)] : coldColors[Math.floor(Math.random() * coldColors.length)];
    }
 
    function getRandomShadow() {
      const offsetX = Math.random() * 5;
      const offsetY = Math.random() * 5;
      const blurRadius = Math.random() * 10;
      const color = 'rgba(0, 0, 0, 0.2)';
      return `${offsetX}px ${offsetY}px ${blurRadius}px ${color}`;
    }
 
    function getRandomSpeed() {
      return Math.random() * 20 + 1; // 调整这里以控制随机速度的范围
    }
  </script>
        
        <div id="__next">
            <div class="relative dark">
  <!-- 特效结束 -->