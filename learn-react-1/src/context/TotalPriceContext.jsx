import { createContext, useContext, useReducer } from 'react';

// menyimpan state
const totalPriceContext = createContext(null);

// menyimpan action
const TotalPiceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE': {
			return {
				total: action.payload.total,
			};
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
};

export function TotalPriceProvider({ children }) {
	const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
	return (
		<totalPriceContext.Provider value={totalPrice}>
			<TotalPiceDispatchContext.Provider value={dispatch}>{children}</TotalPiceDispatchContext.Provider>
		</totalPriceContext.Provider>
	);
}

export function useTotalPrice() {
	return useContext(totalPriceContext);
}

export function useTotalPriceDispatch() {
	return useContext(TotalPiceDispatchContext);
}
