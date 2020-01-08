console.log('AddTask');

myTasks = [];

const createTask = (description, dateCreated, dueDate) => {
    const sayHello = () => console.log('hello!');
    alert('test');
    return { description, dateCreated, dueDate, sayHello };
};

// const personFactory = (name, age) => {
//     const sayHello = () => console.log('hello!');
//     return { name, age, sayHello };
//   };
  

export { createTask };