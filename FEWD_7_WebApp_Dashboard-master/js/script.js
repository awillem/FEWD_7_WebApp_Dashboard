const months = ["Jan", "Feb", "Mar", "April"];

const monthlySales = [16547, 14714, 17288, 14732];

const weeks = ["1-7", "8-14", "15-21", "22-28", "29-4", "5-11", "12-18", "19-25", "26-4"];

const weeklySales = [3702, 3602, 4491, 2436, 4165, 4141, 3747, 3333, 3847];

const days = ["Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22", "Apr 23",
  "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30"];

const dailySales = [740, 239, 755, 15, 72, 881, 835, 259, 274, 301, 761, 81, 93, 40];

var sales = document.getElementById('sales');
var salesChart = new Chart(sales, {
  type: 'line',
  data: {
    labels: ["1-7", "8-14", "15-21", "22-28", "29-4", "5-11", "12-18", "19-25", "26-4"],
    datasets: [{
      data: [3702, 3602, 4491, 2436, 4165, 4141, 3747, 3333, 3847],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1,
      lineTension: .2
    }]
  },
  options: {
    legend: {
      display: false
    },
    // maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            return '$' + value;
          },
          autoSkip: true,
          maxTicksLimit: 8
        }
      }]
    }
  }
});

// Event Listener - updates Sales chart data when changed between Daily, Weekly, Monthly.
const salesNav = document.querySelector('#salesNav');
const salesNavLi = salesNav.childNodes;
salesNav.addEventListener('click', e => {
  const target = e.target.textContent;
  for (let i = 0; i < salesNavLi.length; i++) {
    salesNavLi[i].className = "";
  }
  e.target.className = "active";
  if (target === 'Daily') {
    salesChart.data.labels = 0;
    salesChart.data.labels = [...days];
    salesChart.data.datasets.forEach((dataset) => {
      dataset.data = [...dailySales];
    });
  } else if (target === 'Weekly') {
    salesChart.data.labels = 0;
    salesChart.data.labels = [...weeks];
    salesChart.data.datasets.forEach((dataset) => {
      dataset.data = [...weeklySales];
    });
  } else {
    salesChart.data.labels = 0;
    salesChart.data.labels = [...months];
    salesChart.data.datasets.forEach((dataset) => {
      dataset.data = [...monthlySales];
    });
  }
  salesChart.update();
});



var daily = document.getElementById('daily');
var dailyChart = new Chart(daily, {
  type: 'bar',
  data: {
    labels: ["Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30"],
    datasets: [{
      data: [259, 274, 301, 761, 81, 93, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            return '$' + value;
          },
          autoSkip: true,
          maxTicksLimit: 5
        },
      }]
    }
  }
});

var mobile = document.getElementById('mobile');
var myChart = new Chart(mobile, {
  type: 'doughnut',
  data: {
    labels: ['In-Store', 'Desktop', 'Mobile'],
    datasets: [{
      data: [45, 35, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {

    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        display: false
      }]
    }
  }
});

/* ALERT CLOSE */
const alertDiv = document.querySelector('.alert');
alertDiv.addEventListener('click', e => {
  if (e.target.className === 'close') {
    e.target.parentNode.style.display = 'none';
  }
});