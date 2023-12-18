const tasks = [
    'task1',
    'task2',
    'task3',
    'task4',
    'task5',
    'task6',
];

const splicedTasks = tasks.toSpliced(2, 1, 'hacer la cama');

// no modifica al Array original
console.log(tasks);
console.log(splicedTasks);