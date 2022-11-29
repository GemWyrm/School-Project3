import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { Todos } from './App';

describe('TodoList tests', () => {
  beforeAll(() => {
    render(<Todos />);
  });
  afterAll(() => {
    cleanup();
  });
  it('has a functioning add button', async () => {
    // has add button
    const addButton = screen.getByText('Add Item');
    expect(addButton).toBeInTheDocument();
    // has new todo input
    const input = screen.getByTestId('todo-input');
    expect(input).toBeInTheDocument();
    // can add a todo text to the input
    fireEvent.change(input, {target: {value: 'test todo'}});
    await waitFor(() => {
      const input = screen.getByTestId('todo-input');
      expect(input).toHaveValue('test todo');
    })
    fireEvent.click(addButton);
    await waitFor(() => {
      const todoItem = screen.getByText('test todo');
      expect(todoItem).toBeInTheDocument();
    })
  })
  it('has a functioning delete button', async () => {
    // make sure the todo item starts in the document
    const todoItem = screen.getByText('test todo');
    expect(todoItem).toBeInTheDocument();
    // make sure there is a delete button
    const deleteButton = screen.getByLabelText('delete');
    expect(deleteButton).toBeInTheDocument();
    // make sure the delete button works
    fireEvent.click(deleteButton);
    await waitFor(() => {
      const todoItem = screen.queryByText('test todo');
      expect(todoItem).toBeNull();
    });
  })
  it('deletes the correct element', async () => {
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByText('Add Item');
    // add the first todo
    fireEvent.change(input, {target: {value: 'first todo'}});
    await waitFor(() => {
      const input = screen.getByTestId('todo-input');
      expect(input).toHaveValue('first todo');
    })
    fireEvent.click(addButton);
    // add the second
    fireEvent.change(input, {target: {value: 'second todo'}});
    await waitFor(() => {
      const input = screen.getByTestId('todo-input');
      expect(input).toHaveValue('second todo');
    })
    fireEvent.click(addButton);
    await waitFor(() => {
      const todoItem = screen.getByText('second todo');
      expect(todoItem).toBeInTheDocument();
    })
    // remove the second
    const todoItem = screen.getByText('second todo');
    const deleteButton = todoItem.querySelector('button[aria-label="delete"]');
    fireEvent.click(deleteButton);
    // verify the second is gone, but the first remains
    await waitFor(() => {
      const firstTodo = screen.queryByText('first todo');
      const secondTodo = screen.queryByText('second todo');
      expect(firstTodo).toBeInTheDocument();
      expect(secondTodo).toBeNull();
    });
    
  })
});
