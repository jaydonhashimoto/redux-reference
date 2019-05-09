//evaluates the actions committed like GET and POST
import { FETCH_POSTS, NEW_POST } from '../actions/types';

//items represents posts
//item represents single post from response
const initialState = {
    items: [],
    item: {}
};

//evalutes what type is being dealt with
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            //return current state and payload
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}