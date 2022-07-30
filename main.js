fetch('/data.json')
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        insertDataWeekly(data);
        checkTimeFrame(data);
    })

const timeframeHours = document.querySelectorAll('.stat-hours h1');
const timeframePrevHrs = document.querySelectorAll('.stat-hours span');
const timeOptions = document.querySelectorAll('.time-options a li');

function insertDataDaily(data) {
    for (let i=0; i < timeframeHours.length; i++) {
        const daily = data[i].timeframes.daily.current;
        const yesterday = data[i].timeframes.daily.previous;
        timeframeHours[i].innerHTML = daily + 'hrs';
        timeframePrevHrs[i].innerHTML = 'Last week - ' + yesterday + 'hrs';
    }
}

function insertDataWeekly(data) {
    for (let i=0; i < timeframeHours.length; i++) {
        const weekly = data[i].timeframes.weekly.current;
        const lastweek = data[i].timeframes.weekly.previous;
        timeframeHours[i].innerHTML = weekly + 'hrs';
        timeframePrevHrs[i].innerHTML = 'Last week - ' + lastweek + 'hrs';
    }
}

function insertDataMonthly(data) {
    for (let i=0; i < timeframeHours.length; i++) {
        const monthly = data[i].timeframes.monthly.current;
        const lastmonth = data[i].timeframes.monthly.previous;
        timeframeHours[i].innerHTML = monthly + 'hrs';
        timeframePrevHrs[i].innerHTML = 'Last week - ' + lastmonth + 'hrs';
    }
}

function checkTimeFrame(data) {
timeOptions.forEach(option => {
    option.addEventListener('click', function() {
        if (option.classList.contains('active')) 
            return;
        else
            timeOptions.forEach(opt => {
                opt.classList.remove('active');
            })
            option.classList.add('active');
            if (option.innerHTML === ('Monthly')) {
                console.log('monthly');
                insertDataMonthly(data);
            } 
            else if (option.innerHTML === ('Daily')) 
            {
                console.log('daily');
                insertDataDaily(data);
            }
            else if (option.innerHTML === ('Weekly')) 
            {
                console.log('weekly');
                insertDataWeekly(data);
            }
    })

})
}