// CreateStore
import { createStore } from 'easy-peasy';

// Store
const store = createStore({
    marvel: {
        partialName: '',
        heroes: [],
        isLoading: true,
        details: {},
        fetchName: (state, payload) => {
            return {
                ...state,
                partialName: payload,
                heroes: []
            };
        },
        fetchCharacters: (state, payload) => {
            return {
                ...state,
                heroes: [
                    ...state.heroes,
                    ...payload
                ]
            }
        },
        isItLoading: (state, payload) => {
            return {
                ...state,
                isLoading: payload
            }
        },
        fetchDetails: (state, payload) => {
            return {
                ...state,
                details: payload
            }
        }
    },
})

export default store;