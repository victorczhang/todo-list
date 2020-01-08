import { today, sideBar, tableHeading, render, clearTable, categoryArray, categoryBlock, clearSidebar, filterByCategory, removeCategorySidebar, displayDefault } from './domLogic';
import { createTask, getTodayStart, getTodayEnd, getWeek } from './tasks';
import { taskForm, categorySelection } from './taskForm';
import { catForm } from './categoryForm';

today();
sideBar();
taskForm();
// tableHeading();
categoryBlock();

getTodayStart();
getTodayEnd();

var currentState = 1;
var taskArray = [];
var categoryArr = ['Personal', 'Medical', 'Work'];

catForm();
categoryArray(categoryArr);
categorySelection(categoryArr);
filterByCategory(taskArray, categoryArr);

removeCategorySidebar(categoryArr);

tableHeading();
displayDefault(taskArray);

// ADD TASK FORM BELOW

document.getElementById('addTask').addEventListener('click', function() {
    document.getElementById('taskFormInput').setAttribute('id','taskFormInputOpen');
});

document.getElementById('closeTaskForm').addEventListener('click', function() {
    document.getElementById('taskFormInputOpen').setAttribute('id','taskFormInput');
});

// ADD NEW CATEGORY BELOW

document.getElementById('addCategory').addEventListener('click', function() {
    if (document.getElementById('addCategory').innerHTML == '+') {
        document.getElementById('categoryFormInput').classList.add('open');
        document.getElementById('addCategory').innerHTML = '-';
        console.log('Console Log: +');
    } else if (document.getElementById('addCategory').innerHTML == '-') {
        document.getElementById('addCategory').innerHTML = '+';
        document.getElementById('categoryFormInput').classList.remove('open');
        console.log('Console Log: -');
    }
});

document.getElementById('addNewCategory').addEventListener('click', function() {
    var categoryValue = document.getElementById('form-new-category').value;
    categoryArr.push(categoryValue);
    console.log(categoryArr);
    clearSidebar();
//     // clearFieldset();
    categoryArray(categoryArr);
    categorySelection(categoryArr);
    removeCategorySidebar(categoryArr);
    filterByCategory(taskArray, categoryArr);
});

// SIDE BAR LOGIC BELOW

document.getElementById('sidebar-today').addEventListener('click', function() {
    currentState = 1;
    console.log(currentState);
    clearTable();

    var todayStart = getTodayStart();

    document.getElementById('currentCategoryLabel').innerHTML = ('Today');

    const filteredObjects = taskArray.filter(item => item.dueDateAsNumber === todayStart);
    render(filteredObjects);
    console.log('Filtered Objects: ' + filteredObjects);
    console.log(taskArray);
});

document.getElementById('sidebar-week').addEventListener('click', function() {
    currentState = 2;
    console.log(currentState);
    clearTable();

    var todayStart = getTodayStart();
    var endOfWeek = getWeek();

    document.getElementById('currentCategoryLabel').innerHTML = ('Next 7 Days');
    
    const filteredObjects = taskArray.filter(item => (item.dueDateAsNumber >= todayStart && item.dueDateAsNumber <= endOfWeek));
    render(filteredObjects);
    console.log('Filtered Objects: ' + filteredObjects);
    console.log(taskArray);
});

document.getElementById('sidebar-overdue').addEventListener('click', function() {
    currentState = 3;
    console.log(currentState);
    clearTable();

    var todayStart = getTodayStart();

    document.getElementById('currentCategoryLabel').innerHTML = ('Overdue');

    const filteredObjects = taskArray.filter(item => item.dueDateAsNumber < todayStart);
    render(filteredObjects);
    console.log('Filtered Objects: ' + filteredObjects);
    console.log(taskArray);
});

// 

document.getElementById('addTaskSubmit').addEventListener('click',  function() {
    var isDoneValue = 0;
    // var priorityValue = document.getElementById('form-priority-input').value;
    var priorityValue = 1;
    var titleValue = document.getElementById('form-title-input').value;
    // var descValue = document.getElementById('form-desc-input').value;
    var descValue = 1;
    var dueDateValue = document.getElementById('form-dueDate-input').value;
    var dueDateAsNumber = document.getElementById('form-dueDate-input').valueAsNumber;
    var categoryValue = document.getElementById('form-category-input').value;
    var task = createTask(isDoneValue, priorityValue, titleValue, descValue, dueDateValue, dueDateAsNumber, categoryValue);

    taskArray.push(task);

    // console.log(taskArray);
    displayDefault(taskArray);
    clearTable();
    render(taskArray);
});