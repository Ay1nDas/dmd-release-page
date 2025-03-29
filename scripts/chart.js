import { releases } from "./JsData/releaseData.js";

function renderChart() {
  const ctx = document.querySelector(".release-chart").getContext("2d");

let ver = releases.slice().reverse().map((rel) => {
  return rel.releaseVer;
}
);

let runTime = releases.slice().reverse().map((rel) => {
  return rel.userTime + rel.systemTime;
}
);

const releaseChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ver,
    datasets: [{
      label: "Progress Over Time",
      data: runTime,
      borderColor: "#B03931",
      borderWidth: 2,
      pointBackgroundColor: "#ccc",
      tension: 0.2
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "DMD Release Versions"
        }
      },
      y: {
        title: {
          display: true,
          text: "Total Time to run (Seconds)"
        },
        // beginAtZero: true
      }
    }
  }
});
}

renderChart();