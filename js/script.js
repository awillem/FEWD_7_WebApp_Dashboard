const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalMessage = document.querySelector('.modal-message');

const months = ["Jan", "Feb", "Mar", "April"];

const monthlySales = [16547, 14714, 17288, 14732];

const weeks = ["1-7", "8-14", "15-21", "22-28", "29-4", "5-11", "12-18", "19-25", "26-4"];

const weeklySales = [3702, 3602, 4491, 2436, 4165, 4141, 3747, 3333, 3847];

const days = ["Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22", "Apr 23",
  "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30"];

const dailySales = [740, 239, 755, 15, 72, 881, 835, 259, 274, 301, 761, 81, 93, 400];

const hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", '5pm', '6pm'];

const hourlySales = [0, 57, 25, 49, 10, 120, 78, 12, 49]

var sales = document.getElementById('sales');
var salesChart = new Chart(sales, {
  type: 'line',
  data: {
    labels: ["1-7", "8-14", "15-21", "22-28", "29-4", "5-11", "12-18", "19-25", "26-4"],
    datasets: [{
      data: [3702, 3602, 4491, 2436, 4165, 4141, 3747, 3333, 3847],
      backgroundColor: [
        'rgba(72, 239, 255, 0.4)'
      ],
      borderColor: [
        'rgba(72, 239, 255, 1)'
      ],
      borderWidth: 1,
      lineTension: .2
    }]
  },
  options: {
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItems, data) {
          return '$' + tooltipItems.yLabel;
        }
      }
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
  if (target === 'Hourly') {
    salesChart.data.labels = 0;
    salesChart.data.labels = [...hours];
    salesChart.data.datasets.forEach((dataset) => {
      dataset.data = [...hourlySales];
    });
  } else if (target === 'Daily') {
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
        'rgba(72, 239, 255, 0.6)',
        'rgba(255, 72, 147, 0.6)',
        'rgba(72, 255, 88, 0.6)',
        'rgba(72, 239, 255, 0.6)',
        'rgba(255, 72, 147, 0.6)',
        'rgba(72, 255, 88, 0.6)',
        'rgba(72, 239, 255, 0.6)'
      ],
      borderColor: [
        'rgba(72, 239, 255, 1)',
        'rgba(255, 72, 147, 1)',
        'rgba(72, 255, 88, 1)',
        'rgba(72, 239, 255, 1)',
        'rgba(255, 72, 147, 1)',
        'rgba(72, 255, 88, 1)',
        'rgba(72, 239, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItems, data) {
          return '$' + tooltipItems.yLabel;
        }
      }
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
        'rgba(72, 239, 255, 0.6)',
        'rgba(255, 72, 147, 0.6)',
        'rgba(72, 255, 88, 0.6)',
      ],
      borderColor: [
        'rgba(72, 239, 255, 1)',
        'rgba(255, 72, 147, 1)',
        'rgba(72, 255, 88, 1)',
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

/*Nav - Change Active */
const navDiv = document.querySelector('nav');
const aTags = navDiv.querySelectorAll('a');
navDiv.addEventListener('click', e => {
  console.log(e.target)
  if (!e.target in window) {
    console.log('yes')
  }
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].classList.remove('active');
  }
  const targetClass = e.target.className;
  if (targetClass.baseVal === 'icon' || targetClass === 'icon') {
    e.target.classList.add('active');
  } else if (targetClass.baseVal.includes('icon-')) {
    console.log(e.target.parentNode)
    e.target.parentNode.classList.add('active');
  } else if (targetClass.baseVal === 'path') {
    e.target.parentNode.parentNode.classList.add('active');
  }
});


/*Send Message */
const customer = document.querySelector('#customer');
const message = document.querySelector('#message');
const messageForm = document.querySelector('.message-customer form');

function validCustomer() {
  if (customer.value.length === 0) {
    customer.placeholder = "Please provide a customer name";
    customer.className = "error";
    return false;
  } else {
    return true;
  }
}

function validMessage() {
  if (message.value.length === 0) {
    message.placeholder = "Please provide a message";
    message.className = "error";
    return false;
  } else {
    return true;
  }
}
messageForm.addEventListener('submit', e => {
  e.preventDefault();
  let flag = true;
  console.log(validCustomer(), validMessage())
  if (!validCustomer()) {
    flag = false;
  }
  if (!validMessage()) {
    flag = false;
  }
  console.log(flag)
  // if (!validCustomer() || !validMessage()) {
  //   flag = false;
  // }
  if (flag) {
    modal.classList.add('open');
    modalMessage.innerHTML = `
      <p> Message successfully sent! <p>
    `;
    message.value = "";
    customer.value = "";
    message.className = "";
    customer.className = ""
    message.placeholder = "Message for Customer"
    customer.placeholder = "Search for Customer"
  }
});

/*Alert Modal */
const alerts = [
  'Alert 1: Don\'t forget to start the sale on Monday.',
  'Alert 2: Place new supply order before end of week.'
];

const bell = document.querySelector('.bell');
bell.addEventListener('click', e => {
  let message = "";
  alerts.forEach(alert => {
    message += `
      <p class="bell-alert">${alert}</p>
    `;

  });
  modal.classList.add('open');
  modalMessage.innerHTML = message;
});



/*MODAL Close*/

modal.addEventListener('click', e => {
  if (e.target.className === 'modal open' || e.target.className === 'close' || e.target.tagName === 'SPAN') {
    closeModal()
  }
})

document.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove('open');
  modalMessage.innerHTML = "";
}

/*Name Match autocomplete*/
const names = [
  'Jessica Jones',
  'Tony Stark',
  'Carol Danvers',
  'Stephen Strange',
  'Peter Parker',
  'Wanda Maximoff',
  'Clinton Barton',
  'Steve Rogers'
];

const autocomplete = document.querySelector('.autocomplete');
const autoUL = document.querySelector('.autocomplete ul');


customer.addEventListener('keyup', e => {
  if (customer.value.length === 0) {
    autocomplete.classList.remove('active');
  } else {
    let matched = [];
    names.forEach(name => {
      console.log(name.toLowerCase(), customer.value.toLowerCase())
      if (name.toLowerCase().includes(customer.value.toLowerCase())) {
        matched.push(name);
      }
    });
    if (matched.length > 0) {
      let list = ""
      matched.forEach(match => {
        list += `
          <li>${match}</li>
        `
      });
      autocomplete.innerHTML = list;
      autocomplete.classList.add('active')
    }
    console.log(matched);
  }
});


autocomplete.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    customer.value = e.target.innerText;
    autocomplete.classList.remove('active');
  }
})


/*SETTINGS*/

const save = document.querySelector('.save');
const cancel = document.querySelector('.cancel');
const email = document.querySelector('#email');
const profile = document.querySelector('#profile');
const timeZone = document.querySelector('#timezone');
console.log(email.checked, profile.value, timeZone.value)

save.addEventListener('click', e => {
  e.preventDefault();
  let settings = {};
  settings.email = email.checked;
  settings.profile = profile.checked;
  settings.timeZone = timeZone.value;
  window.localStorage.setItem('settings', JSON.stringify(settings));
});

function settings() {
  let settings = JSON.parse(window.localStorage.getItem('settings'));
  email.checked = settings.email;
  profile.checked = settings.profile;
  timeZone.value = settings.timeZone;
  console.log(settings);
}

cancel.addEventListener('click', e => {
  e.preventDefault();
  if (window.localStorage.getItem('settings')) {
    settings();
  } else {
    email.checked = false;
    profile.checked = false;
    timeZone.value = 'GMT Greenwich Mean Time GMT';
  }
});

document.addEventListener('DOMContentLoaded', e => {
  settings();
});























