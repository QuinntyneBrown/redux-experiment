function todos(initState: ITodo[], actions) {

    return actions.scan((state, action) => {
        if (action instanceof AddTodoAction) {
            const newToDo = {};
            return [...state, newToDo]
        }
        else {
            return state;
        }
    }, initState);
}