const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 4.87, value: 34 },
  { minDegree: 4.88, maxDegree: 14.6, value: 17 },
  { minDegree: 14.61, maxDegree: 24.33, value: 25 },
  { minDegree: 24.34, maxDegree: 34.06, value: 2},
  { minDegree: 34.07, maxDegree: 43.79, value: 21},
  { minDegree: 43.8, maxDegree: 53.52, value: 4 },
  { minDegree: 53.53, maxDegree: 63.25, value: 19 },
  { minDegree: 63.26, maxDegree: 72.98, value: 15 },
  { minDegree: 72.99, maxDegree: 82.71, value: 32 },
  { minDegree: 82.72, maxDegree: 92.44, value: 0},
  { minDegree: 92.45, maxDegree: 102.17, value: 26 },
  { minDegree: 102.18, maxDegree: 111.9, value: 3 },
  { minDegree: 111.91, maxDegree: 121.63, value: 35 },
  { minDegree: 121.64, maxDegree: 131.36, value: 12 },
  { minDegree: 131.37, maxDegree: 141.09, value: 28 },
  { minDegree: 141.1, maxDegree: 150.82, value: 7 },
  { minDegree: 150.83, maxDegree: 160.55, value: 29 },
  { minDegree: 160.55, maxDegree: 170.28, value: 18 },
  { minDegree: 170.29, maxDegree: 180.01, value: 22 },
  { minDegree: 180.02, maxDegree: 189.74, value: 9 },
  { minDegree: 189.75, maxDegree: 199.47, value: 31 },
  { minDegree: 199.48, maxDegree: 209.2, value: 14 },
  { minDegree: 209.21, maxDegree: 218.93, value: 20 },
  { minDegree: 218.94, maxDegree: 228.66, value: 1 },
  { minDegree: 228.67, maxDegree: 238.39, value: 33 },
  { minDegree: 238.4, maxDegree: 248.12, value: 16 },
  { minDegree: 248.13, maxDegree: 257.85, value: 24 },
  { minDegree: 257.86, maxDegree: 267.58, value: 5},
  { minDegree: 267.59, maxDegree: 277.31, value: 10 },
  { minDegree: 277.32, maxDegree: 287.04, value: 23},
  { minDegree: 287.05, maxDegree: 296.77, value: 8 },
  { minDegree: 296.77, maxDegree: 306.5, value: 30 },
  { minDegree: 306.51, maxDegree: 316.23, value: 11 },
  { minDegree: 316.24, maxDegree: 325.96, value: 36 },
  { minDegree: 325.97, maxDegree: 335.69, value: 13 },
  { minDegree: 335.7, maxDegree: 345.42, value: 27 },
  { minDegree: 345.43, maxDegree: 355.15, value: 6 },
  { minDegree: 355.16, maxDegree: 360, value: 34 },
];
//Size of each piece
const data = [2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,2.6,];
//background color for each piece
var pieColors = [
  "#008000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "##000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
  "#FF0000",
  "#000000",
];
//Create chart
let myChart = new Chart(wheel, 
{
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 15 },
        anchor: 'end',
        align: 'end',
        offset: -30,
        
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p style="color: #fff;">Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => 
{

  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p style="color: #fff;">Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => 
    {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});

// Funkcija koja se poziva kada se klikne na jedan od brojeva na ruletu
function placeBet(number, betAmount) {
  // Pronalazimo broj na koji je kliknuto
  const selectedNumber = document.querySelector(`.number[data-value="${number}"]`);
  // Ažuriramo vrednost opklade za taj broj
  selectedNumber.dataset.bet = betAmount;
  // Prikazujemo vrednost opklade pored broja
  selectedNumber.innerHTML += `<div class="bet">${betAmount}</div>`;
}

// Dodajemo event listenere na sve brojeve na ruletu
document.querySelectorAll('.number').forEach(number => {
  number.addEventListener('click', () => {
    const betAmount = parseInt(document.querySelector('.selected').id);
    const numberValue = parseInt(number.textContent);
    placeBet(numberValue, betAmount);
  });
});


let clickedDivId;
let betBroja=0;
let ukupanBet=0;
let prethodniClickedDivId=0;
let brKlikova=0;
let brKliktanjaNaTablu=0;
    for (let i = 0; i <= 36; i++) 
    {
      let div = document.getElementById(i.toString());
      if (div) {
        div.addEventListener('click', function() 
        {
          
          clickedDivId = this.id;
          if (prethodniClickedDivId != clickedDivId) {
            betBroja=0;
            let prethodniElement = document.querySelector('.highlight');


          }
          let currentValue = parseInt(document.getElementById(clickedDivId).innerHTML);
            if (!isNaN(currentValue)) {
                if (currentValue === parseInt(clickedDivId)) {
                    betBroja = 0;
                } else {
                    betBroja = currentValue;
                }
            }

          betBroja = betBroja + ulog;
          ukupanBet = ukupanBet + ulog;
          document.getElementById(clickedDivId).innerHTML=betBroja;
          console.log('Clicked div ID:', clickedDivId);
          console.log('prethodni div ID:', prethodniClickedDivId);
          
          prethodniClickedDivId = clickedDivId;
          
          this.classList.add('highlight');
        });
      }
    }





let ulog=0;
function bet()
{
  const z10 = document.getElementById('deset');
  const z25 = document.getElementById('dvapet');
  const z50 = document.getElementById('petnula');
  const z100 = document.getElementById('sto');

  z10.addEventListener('click',() => {
    ulog=10;
    console.log('ulog:', ulog);
  });
  z25.addEventListener('click',() => {
    ulog=25;
    console.log('ulog:', ulog);
  });
  z50.addEventListener('click',() => {
    ulog=50;
    console.log('ulog:', ulog);
  });
  z100.addEventListener('click',() => {
    ulog=100;
    console.log('Ulog:', ulog);
  });
}


