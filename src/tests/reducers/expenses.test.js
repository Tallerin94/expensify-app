import moment from 'moment';

import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'New',
        note: '',
        amount: 2000,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const updates = {
        description: 'New Rent'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], {
        id: '2',
        description: updates.description,
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }, expenses[2]]);
});

test('should not edit expense if expense not found', () => {
    const updates = {
        description: 'New Rent'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
