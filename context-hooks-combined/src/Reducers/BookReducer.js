import { v4 as uuidv4 } from 'uuid';


const bookReducer = (state,action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, {title: action.book, author:action.author, id: uuidv4()}]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
    }
}

export default bookReducer;