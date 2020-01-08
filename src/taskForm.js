const taskForm = () => {
    let contentParent = document.getElementById('content');

    var formInputDiv = document.createElement('div');
    contentParent.appendChild(formInputDiv);
    formInputDiv.setAttribute('id','taskFormInput');

    // Title Input
    var titleDiv = document.createElement('div');
    formInputDiv.appendChild(titleDiv);
    var titleLabel = document.createElement('label');
    // titleDiv.appendChild(titleLabel);
    titleDiv.setAttribute('id', 'div-title');
    // titleLabel.setAttribute('for', 'form-title');
    // titleLabel.innerHTML = 'Title';
    var titleInput = document.createElement('input');
    titleDiv.appendChild(titleInput);
    titleInput.setAttribute('id', 'form-title-input');

    // Description Input

    // var descDiv = document.createElement('div');
    // formInputDiv.appendChild(descDiv);
    // var descLabel = document.createElement('label');
    // descDiv.appendChild(descLabel);
    // descDiv.setAttribute('id', 'div-descDiv');
    // descLabel.setAttribute('for', 'form-desc');
    // descLabel.innerHTML = 'Description';
    // var descInput = document.createElement('input');
    // descDiv.appendChild(descInput);
    // descInput.setAttribute('id', 'form-desc-input');

    // Due Date Input
    var dueDateDiv = document.createElement('div');
    formInputDiv.appendChild(dueDateDiv);
    // var dueDateLabel = document.createElement('label');
    // dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.setAttribute('id', 'div-dueDate');
    // dueDateLabel.setAttribute('for', 'form-dueDate');
    // dueDateLabel.innerHTML = 'Due Date';
    var dueDateInput = document.createElement('input');
    dueDateDiv.appendChild(dueDateInput);
    dueDateInput.setAttribute('id', 'form-dueDate-input');
    dueDateInput.setAttribute('type', 'date');

    // Priority Input

    // var priorityDiv = document.createElement('div');
    // formInputDiv.appendChild(priorityDiv);
    // var priorityLabel = document.createElement('label');
    // priorityDiv.appendChild(priorityLabel);
    // priorityDiv.setAttribute('id', 'div-priority');
    // priorityLabel.setAttribute('for', 'form-priority');
    // priorityLabel.innerHTML = 'Priority';
    // var priorityInput = document.createElement('input');
    // priorityDiv.appendChild(priorityInput);
    // priorityInput.setAttribute('id', 'form-priority-input');

    // Category Input
    var categoryDiv = document.createElement('div');
    formInputDiv.appendChild(categoryDiv);
    // var categoryLabel = document.createElement('label');
    // categoryDiv.appendChild(categoryLabel);
    categoryDiv.setAttribute('id', 'div-category');
    // categoryLabel.setAttribute('for', 'form-category');
    // categoryLabel.innerHTML = 'Category';
    var categoryInput = document.createElement('input');
    categoryDiv.appendChild(categoryInput);
    categoryInput.setAttribute('id', 'form-category-input');
    categoryInput.setAttribute('list', 'category-choices');
    
    // 

    var buttonDiv = document.createElement('div');
    formInputDiv.appendChild(buttonDiv);
    buttonDiv.setAttribute('id', 'div-button');

    // Add Task Button
    var submitDiv = document.createElement('div');
    buttonDiv.appendChild(submitDiv);
    submitDiv.setAttribute('id', 'addTaskSubmit-div');
    var submitButton = document.createElement('button');
    submitDiv.appendChild(submitButton);
    submitButton.setAttribute('id', 'addTaskSubmit');
    submitButton.setAttribute('type', 'button');
    submitButton.innerHTML = 'Submit';

    // Close Button
    var closeDiv = document.createElement('div');
    buttonDiv.appendChild(closeDiv);
    closeDiv.setAttribute('id', 'close-Div');
    var closeButton = document.createElement('button');
    closeDiv.appendChild(closeButton);
    closeButton.setAttribute('id', 'closeTaskForm');
    closeButton.setAttribute('type', 'button');
    closeButton.innerHTML = 'Close';
};

const categorySelection = (arr) => {
    let contentParent = document.getElementById('div-category');

    var categoryDatalist = document.createElement('datalist');
    contentParent.appendChild(categoryDatalist);
    categoryDatalist.setAttribute('id', 'category-choices');
    var i = 0;

    var listParent = document.getElementById('category-choices');

    for (i=0; i < arr.length; i++) {
        var catOption = document.createElement('option');
        catOption.value = arr[i];
        listParent.appendChild(catOption);
        catOption.setAttribute('id', `dropdown-category-${i}`);
        // var categoryLabel = document.createTextNode(arr[i]);
        // catDivs.appendChild(categoryLabel);
    };
}



export {taskForm, categorySelection };