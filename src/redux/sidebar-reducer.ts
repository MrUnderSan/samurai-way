import {ActionsType} from './store';
import {FriendsType} from '../components/Friends/Friends';

type InitStateType = {
    friends: FriendsType[]
}

const initState: InitStateType = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
    ]
}

type SidebarAT = {}

export const sidebarReducer = (state: InitStateType = initState, action: SidebarAT): InitStateType => {
    return state
}