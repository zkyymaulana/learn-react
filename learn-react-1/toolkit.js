import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// Define actions
const addToCart = createAction('ADD_TO_CART');

// Define reducer
const cartReducer = createReducer([], builder => {
	builder.addCase(addToCart, (state, action) => {
		state.push(action.payload);
	});
});

const login = createAction('CREATE_SESSION');

const loginReducer = createReducer({ status: false }, builder => {
	builder.addCase(login, (state, action) => {
		state.status = true;
	});
});

// Create store
const store = configureStore({
	reducer: {
		cart: cartReducer,
		login: loginReducer,
	},
});
console.log('oncreate store : ', store.getState());

// Subscribe to store updates
store.subscribe(() => {
	console.log('STORE CHANGE:', store.getState());
});

// Dispatch action
const action1 = addToCart({ id: 1, qty: 20 });
store.dispatch(action1);
const action2 = addToCart({ id: 2, qty: 10 });
store.dispatch(action2);
store.dispatch(login());
