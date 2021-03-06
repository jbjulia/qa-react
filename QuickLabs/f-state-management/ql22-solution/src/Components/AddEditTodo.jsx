import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './css/AddEditTodo.css';
// import generateTodoId from './utils/generateId';
import TodoForm from './TodoForm';
// import TodoModel from './utils/Todo.model';
import Modal from './utils/Modal';
import {useTodosState} from '../StateManagement/TodosProvider';


const AddEditTodo = (/*{ submitAction, data }*/) => {

    const [todo, setTodo] = useState(null);
    // const [submitted, setSubmitted] = useState(false);

    const {_id} = useParams();
    const {todos} = useTodosState();

    useEffect(() => {
        if (!_id) setTodo(null);
        // if (_id && !todo?.error) {
        if (_id && todos?.find) {
            const todoToEdit = todos.find(currentTodo => currentTodo._id === _id);
            if (todoToEdit) {
                setTodo(todoToEdit)
            } else {
                setTodo({error: `Todo could not be found`});
            }
        }
        // }, [_id, data, todo]);
    }, [_id, todos]);

    // const submitTodo = (todoDescription, todoDateCreated, todoCompleted, todoId) => {
    //     const id = todoId ? todoId : generateTodoId();
    //     const todoToSubmit = new TodoModel(todoDescription, todoDateCreated, todoCompleted, id);
    //     submitAction(todoToSubmit);
    //     setSubmitted(true);
    // }

    return (
        <>
            {/* {submitted && <Redirect to="/" />} */}
            {todo?.error && <Modal handleClose={() => setTodo(null)} message={todo.error}/>}
            <div className="addEditTodo row">
                <h3>{_id ? `Edit` : `Add`} Todo</h3>
            </div>
            {/* <TodoForm submitAction={submitTodo} todo={todo} /> */}
            <TodoForm todo={todo}/>
        </>
    );
}

// AddEditTodo.propTypes = {
//     submitAction: PropTypes.func.isRequired,
//     todos: PropTypes.arrayOf(
//         PropTypes.exact({
//             _id: PropTypes.string,
//             todoDescription: PropTypes.string,
//             todoDateCreated: PropTypes.string,
//             todoCompleted: PropTypes.bool
//         })
//     )
// };

export default AddEditTodo;
