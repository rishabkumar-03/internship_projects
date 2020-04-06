import { ACTIONS } from '../Actions';

let listId = 2;
let cardId = 16;

const initialState = [
    {
        title: 'To-Do',
        id: 0,
        cards: [
            {
                text: 'Components',
                id: 10
            },
            {
                text: 'Actions',
                id: 11
            },
            {
                text: 'Store',
                id: 12
            },
            {
                text: 'Reducers',
                id: 13
            }
        ]
    },
    {
        
        title: 'Doing',
        id: 1,
        cards: [
            {
                text: 'Breaking into Components',
                id: 14
            },
            {
                text: 'Creating',
                id: 15
            }
        ]
    }
    
]

const ListsReducer = (state= initialState, action) => {
    switch(action.type){

        case ACTIONS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listId
            }
            listId = listId + 1;
            return [...state, newList];
        case ACTIONS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardId
            }
            cardId += 1;
            const newState=state.map( list => {
                if(list.id === action.payload.listId){
                    return { ...list, cards: [ ...list.cards, newCard]};
                }
                else{
                    return list;
                }
            });
            return newState; 
        default: 
            return state;
    }
};

export default  ListsReducer;