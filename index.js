const redux = require('redux');
const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const CHEESECAKE_ORDERED = "CHEESECAKE_ORDERED";
const CHOCOLATECAKE_ORDERED = "CHOCOLATECAKE_ORDERED";

const RESTOCK_CAKE = "RESTOCK_CAKE";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";
const RESTOCK_CHEESECAKE = "RESTOCK_CHEESECAKE";
const RESTOCK_CHOCOLATECAKE = "RESTOCK_CHOCOLATECAKE";


function orderCake(quantity = 1) {
    return {
        type: CAKE_ORDERED,
        payload: quantity
    }
}


function resStock(quantity = 1) {
    return {
        type: RESTOCK_CAKE,
        payload: quantity
    }
}

function orderIceCream(quantity = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: quantity
    };
}

function orderCheeseCake(quantity = 1) {
    return {
        type: CHEESECAKE_ORDERED,
        payload: quantity
    };
}

function orderChocolateCake(quantity = 1) {
    return {
        type: CHOCOLATECAKE_ORDERED,
        payload: quantity
    };
}


function restockIceCream(quantity = 1) {
    return {
        type: RESTOCK_ICECREAM,
        payload: quantity
    };
}

function restockCheeseCake(quantity = 1) {
    return {
        type: RESTOCK_CHEESECAKE,
        payload: quantity
    };
}

function restockChocolateCake(quantity = 1) {
    return {
        type: RESTOCK_CHOCOLATECAKE,
        payload: quantity
    };
}

const initialState = {
    numOfCakes: 13,
    numOfIceCream: 5,
    numOfCheeseCake: 10,
    numOfChocolateCake: 20,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            };
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            };
        case CHEESECAKE_ORDERED:
            return {
                ...state,
                numOfCheeseCake: state.numOfCheeseCake + action.payload
            };
        case CHOCOLATECAKE_ORDERED:
            return {
                ...state,
                numOfChocolateCake: state.numOfChocolateCake + action.payload
            };
        case RESTOCK_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
            case RESTOCK_ICECREAM:
                return {
                    ...state,
                    numOfIceCream: state.numOfIceCream - action.payload
                };
            case RESTOCK_CHEESECAKE:
                return {
                    ...state,
                    numOfCheeseCake: state.numOfCheeseCake - action.payload
                };
            case RESTOCK_CHOCOLATECAKE:
                return {
                    ...state,
                    numOfChocolateCake: state.numOfChocolateCake - action.payload
                };
            default:
                return state
    }
}

const store = createStore(reducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(orderIceCream(2));

store.dispatch(orderCheeseCake(3));

store.dispatch(orderChocolateCake(1));

store.dispatch(resStock());

store.dispatch(restockIceCream());

store.dispatch(restockCheeseCake());

store.dispatch(restockChocolateCake());


unsubscribe();

store.dispatch(resStock());