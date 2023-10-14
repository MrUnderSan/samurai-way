import {ActionsType} from './store';
import {SidebarType} from '../App';

const initState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
    ]
}

export const sidebarReducer = (state: SidebarType = initState, action: ActionsType) => {
    return state
}