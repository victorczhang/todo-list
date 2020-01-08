const today = () => {
    let contentParent = document.getElementById('content');

    var todayDiv = document.createElement('div');
    todayDiv.setAttribute('id','todayHeader')
    contentParent.appendChild(todayDiv);

    var labelDiv = document.createElement('div');
    todayDiv.appendChild(labelDiv);
    var todayLabel = document.createTextNode('Today');
    labelDiv.appendChild(todayLabel);
    labelDiv.setAttribute('id', 'currentCategoryLabel');

    var labelDiv = document.createElement('div');
    todayDiv.appendChild(labelDiv);
    labelDiv.setAttribute('id','addTask');
    var todayLabel = document.createTextNode('+ Add Task');
    labelDiv.appendChild(todayLabel);
};

const sideBar = () => {
    let contentParent = document.getElementById('sidebar');

    var sidebarDiv = document.createElement('div');
    contentParent.appendChild(sidebarDiv);
    sidebarDiv.setAttribute('id','sidebar-data');

    // OVERDUE
    var overdueDiv = document.createElement('div');
    sidebarDiv.appendChild(overdueDiv);
    overdueDiv.setAttribute('id', 'sidebar-overdue');
    overdueDiv.setAttribute('class', 'sidebar-default');
    var overdueLabel = document.createTextNode('Overdue');
    overdueDiv.appendChild(overdueLabel);

    // TODAY
    var labelDiv = document.createElement('div');
    sidebarDiv.appendChild(labelDiv);
    labelDiv.setAttribute('id', 'sidebar-today');
    labelDiv.setAttribute('class', 'sidebar-default');
    var todayLabel = document.createTextNode('Today');
    labelDiv.appendChild(todayLabel);
    
    // NEXT 7 DAYS
    var weekDiv = document.createElement('div');
    sidebarDiv.appendChild(weekDiv);
    weekDiv.setAttribute('id', 'sidebar-week');
    weekDiv.setAttribute('class', 'sidebar-default');
    var weekLabel = document.createTextNode('Next 7 Days');
    weekDiv.appendChild(weekLabel);
}

const tableHeading = () => {
    let contentParent = document.getElementById('content');

    var todayTasksDiv = document.createElement('div');
    contentParent.appendChild(todayTasksDiv);
    var todayTable = document.createElement('table');
    todayTable.setAttribute('id','task-data');
    todayTasksDiv.appendChild(todayTable);
    todayTasksDiv.setAttribute('id', 'taskTableData');
    
    // var tableRow = document.createElement('tr');
    // todayTable.appendChild(tableRow);
    // tableRow.setAttribute('id', 'table-heading');

    // var tableHeading = document.createElement('th');
    // // tableHeading.innerHTML = 'Is Done?';
    // tableRow.appendChild(tableHeading);
    // tableHeading.setAttribute('id', 'completed-heading');

    // var tableHeading = document.createElement('th');
    // // tableHeading.innerHTML = 'Priority';
    // tableRow.appendChild(tableHeading);
    // tableHeading.setAttribute('id', 'priority-heading');

    // var tableHeading = document.createElement('th');
    // tableHeading.innerHTML = 'To-Do';
    // tableRow.appendChild(tableHeading);
    // tableHeading.setAttribute('id', 'title-heading');

    // var tableHeading = document.createElement('th');
    // tableHeading.innerHTML = 'Description';
    // tableRow.appendChild(tableHeading);

    // var tableHeading = document.createElement('th');
    // tableHeading.innerHTML = 'Due Date';
    // tableRow.appendChild(tableHeading);
    // tableHeading.setAttribute('id', 'dueDate-heading');
    
    // var tableHeading = document.createElement('th');
    // tableHeading.innerHTML = 'Category';
    // tableRow.appendChild(tableHeading);
    // tableHeading.setAttribute('id', 'category-heading');
};

var j = 0;
const render = (arr) => {
    var table = document.getElementById('task-data');
    for (j=0; j < arr.length; j++) {
        // var table = document.getElementById('task-data');
        var row = table.insertRow();
        var cell1 = row.insertCell(0);

        cell1.setAttribute('id', `checkbox-${j}`);
        cell1.setAttribute('class', 'checkboxes');

        var cell2 = row.insertCell(1);

        cell2.setAttribute('class', 'importance');

        var cell3 = row.insertCell(2);

        cell3.setAttribute('class', 'task-title');

        var cell4 = row.insertCell(3);

        cell4.setAttribute('class', 'task-dueDates');

        var cell5 = row.insertCell(4);

        cell5.setAttribute('class', 'task-categories');

        // var cell4 = row.insertCell(3);
        // var cell5 = row.insertCell(4);
        // var cell6 = row.insertCell(5);

        // cell1.innerHTML = arr[j].isDone;

        cell1.innerHTML = '<input type="checkbox" class="checkbox" value="1">';

        cell2.innerHTML = arr[j].priority;
        cell3.innerHTML = arr[j].title;
        // cell4.innerHTML = arr[j].description;
        cell4.innerHTML = arr[j].dueDate;
        cell5.innerHTML = arr[j].category;
    };
};

const clearTable = () => {
    while (document.getElementById('task-data').rows.length > 0) {
        document.getElementById('task-data').deleteRow(0);
    };
};

const clearSidebar = () => {
    while (document.getElementById('sidebar-categories').childNodes.length > 0) {
        document.getElementById('sidebar-categories').childNodes[0].remove();
    };
}

const categoryBlock = () => {
    let contentParent = document.getElementById('sidebar');

    var categoryDiv = document.createElement('div');
    contentParent.appendChild(categoryDiv);
    categoryDiv.setAttribute('id','sidebar-categories');
}

const categoryArray = (arr) => {
    var i = 0;
    // contentParent = document.getElementById('sidebar-categories');
    for (i=0; i < arr.length; i++) {
        let contentParent = document.getElementById('sidebar-categories');
        var catDivs = document.createElement('div');
        contentParent.appendChild(catDivs);
        catDivs.setAttribute('id', `sidebar-category-${i}`);
        catDivs.setAttribute('class', 'sidebar-format');
        var labelDiv = document.createElement('div');

        // console.log('Jerry Dinner: ' + arr[i]);
        // console.log('Victor: ' + i);
        
        // var x = i;
        // console.log(x);

        // labelDiv.addEventListener('click', function() {
        //     console.log(i);
        //     const filteredObjects = tasks.filter(item => item.category == arr[i]);
        //     render(filteredObjects);
        //     console.log('Filtered Objects: ' + filteredObjects);
        //     console.log(tasks);
        //     console.log(arr[i]);
        // });

        catDivs.appendChild(labelDiv);
        labelDiv.setAttribute('id', `sidebar-category-label-${i}`);
        labelDiv.setAttribute('class', 'category-label-highlight');
        var categoryLabel = document.createTextNode(arr[i]);
        labelDiv.appendChild(categoryLabel);

        var removeCat = document.createElement('div');
        catDivs.appendChild(removeCat);
        removeCat.setAttribute('id', `remove-sidebar-${i}`);
        removeCat.setAttribute('class', 'remove-cat-hover');
        var removeLabel = document.createTextNode('X');
        removeCat.appendChild(removeLabel);
    };
}

const filterByCategory = (tasks, arr) => {
    for (let i=0; i < arr.length; i++) {
        document.getElementById(`sidebar-category-label-${i}`).addEventListener('click', function() {
            console.log(i);
            const filteredObjects = tasks.filter(item => item.category == arr[i]);
            clearTable();
            render(filteredObjects);
            console.log('Filtered Objects: ' + filteredObjects);
            console.log(tasks);
            console.log(arr[i]);
        });
    }
};

const removeCategorySidebar = (arr) => {
  for (let i=0; i < arr.length; i++) {
        document.getElementById(`remove-sidebar-${i}`).addEventListener('click', function() {
            // console.log(i);
            arr.splice(i, 1);
            // console.log(arr);
            refreshSidebar(arr);
        });
    }
};

const refreshSidebar = (arr) => {
    clearSidebar();
    categoryArray(arr);
    removeCategorySidebar(arr);
}

const displayDefault = (arr) => {
    if (arr.length == 0) {
        console.log('Empty');
        var parent = document.getElementById('taskTableData');
        var newElem = document.createElement('div');
        newElem.setAttribute('id', 'empty-display');
        parent.appendChild(newElem);
        newElem.innerHTML = 'No tasks due ' + '&#127881';
    } else {
        document.getElementById('empty-display').remove();
    }
};

export { today, sideBar, tableHeading, render, clearTable, categoryBlock, categoryArray, clearSidebar, filterByCategory, removeCategorySidebar, displayDefault };