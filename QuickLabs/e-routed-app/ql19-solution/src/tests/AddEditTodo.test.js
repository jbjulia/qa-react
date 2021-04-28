import React from 'react';
import {act, create} from 'react-test-renderer';
import AddEditTodo from '../Components/AddEditTodo';
import TodoForm from '../Components/TodoForm';

jest.mock("../Components/TodoForm", () => {
    return function DummyTodoForm(props) {
        return (
            <form></form>
        );
    }
});

describe(`Tests for AddEditTodo`, () => {
    let testRenderer;
    let testInstance;
    let submitTodo;
    let updateTodo;

    beforeEach(() => {
        submitTodo = jest.fn();
        updateTodo = jest.fn();
        testRenderer = create(<AddEditTodo submitTodo={submitTodo} updateTodo={updateTodo}/>);
        testInstance = testRenderer.root;
    });

    afterEach(() => {
        testRenderer = null;
        testInstance = null;
    });

    test(`it should render a div with classNames 'addEditTodo row'`, () => {
        expect(testInstance.findByProps({className: `addEditTodo row`})).toBeTruthy();

    });
    test(`it should render a TodoForm`, () => {
        expect(testInstance.findByType(TodoForm)).toBeTruthy();
    });

    test(`it should call submitTodo when submitTodo is called from props on TodoForm`, () => {
        const todoDescription = `Test`;
        const todoDateCreated = new Date(`01/01/1975 12:45:52`);
        const todoCompleted = false;
        const todoForm = testInstance.findByType(TodoForm);

        act(() => {
            todoForm.props.submitAction(todoDescription, todoDateCreated, todoCompleted);
        });

        expect(submitTodo).toHaveBeenCalledTimes(1);
    });

    test(`it should render a div with classNames 'addEditTodo row'`, () => {
        expect(testInstance.findByProps({className: `addEditTodo row`})).toBeTruthy();

    });
});
