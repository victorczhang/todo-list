const catForm = () => {
    let contentParent = document.getElementById('sidebar');

    var formCatDiv = document.createElement('div');
    contentParent.appendChild(formCatDiv);
    formCatDiv.setAttribute('id','categoryFormInput');

    var addCategoryDiv = document.createElement('div');
    contentParent.appendChild(addCategoryDiv);
    var addCategoryLabel = document.createTextNode('+');
    addCategoryDiv.appendChild(addCategoryLabel);
    addCategoryDiv.setAttribute('id', 'addCategory')
    // contentParent.setAttribute('id','addCategory');

    // Category Input
    // var catDiv = document.createElement('div');
    // categoryFormInput.appendChild(catDiv);
    // var catLabel = document.createElement('label');
    // formCatDiv.appendChild(catLabel);
    // catLabel.setAttribute('for', 'form-category');
    // catLabel.innerHTML = 'Category';
    var catInput = document.createElement('input');
    formCatDiv.appendChild(catInput);
    catInput.setAttribute('id', 'form-new-category');

    // Submit Category
    // var submitDiv = document.createElement('div');
    // catDiv.appendChild(submitDiv);
    var submitButton = document.createElement('button');
    formCatDiv.appendChild(submitButton);
    submitButton.setAttribute('id', 'addNewCategory');
    submitButton.setAttribute('type', 'button');
    submitButton.innerHTML = 'Submit';
};

const clearFieldset = () => {
    document.getElementById('category-choices').remove();
}

export {catForm, clearFieldset};