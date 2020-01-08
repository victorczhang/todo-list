const createTask = ( isDone, priority, title, description, dueDate, dueDateAsNumber, category) => {
    return { isDone, priority, title, description, dueDate, dueDateAsNumber, category };
};

const getTodayStart = () => {
    var initDate = new Date();
    var setHours = initDate.setUTCHours(0,0,0,0);
    var todayString = new Date(setHours);
    var todayInMs = todayString.getTime();
    // console.log(todayString);
    // console.log(todayInMs);
    return todayInMs - 86400000;
    // return todayInMs;
};

const getTodayEnd = () => {
    var todayDate = new Date();
    var todayDateEnd = todayDate.setHours(23,59,59,999);
    console.log(todayDateEnd);
    return todayDateEnd;
}

const getWeek = () => {
    var initDate = new Date();
    var setHours = initDate.setUTCHours(0,0,0,0);
    var todayString = new Date(setHours);
    var todayMS = todayString.getTime() - 86400000;
    // var todayMS = getTodayStart();

    var endWeek = todayMS + (86400000 * 7);
    // console.log('week: ' + endWeek);
    // console.log('type: ' + typeof(endWeek));
    return endWeek;
}

// function bindClick(i) {
//     return function() {
//         console.log("you clicked region number " + i);
//     };
// }

// const removeFilterCategory = (arr) => {
//     var i = 0;
//     // console.log('filtre by category');
//     for (i=0; i < arr.length; i++) {
//         document.getElementById(`sidebar-category-label-${i}`).removeEventListener('click', false);
//     };
// }

export { createTask, getTodayStart, getTodayEnd, getWeek };