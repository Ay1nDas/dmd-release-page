import { releases } from "./JsData/releaseData.js";

function renderReleaseData() {

  let releaseHTML = '';

  releases.forEach((rel) => {
    releaseHTML += `
        <div class="release release-${rel.releaseVer}">
          <h2 class = "build-version">
            <a href="#">Version ${rel.releaseVer}</a>
          </h2>
          
          <table class = "test-data">
            
            <tr>
              <td>Total User Time (Seconds)</td>
              <td>${rel.userTime.toFixed(2)} sec</td>
            </tr>

            <tr>
              <td>Total System Time (Seconds)</td>
              <td>${rel.systemTime.toFixed(2)} sec</td>
            </tr>
            
            <tr>
              <td>Max CPU Usage</td>
              <td>${rel.cpuPercentUsage.toFixed(2)}%</td>
            </tr>
            
            <tr>
              <td>Max Memory (Kb)</td>
              <td>${rel.maxMemory} Kb</td>
            </tr>
          </table>
        </div>
      `;
  });

  document.querySelector(".js-release-data").innerHTML = releaseHTML;

}

renderReleaseData();
