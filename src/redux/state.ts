export const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Its my first post', likesCount: 20},
            {id: 2, message: 'Yo!', likesCount: 10}
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],

        messages: [
            {id: 1, message: 'Yo!'},
            {id: 2, message: 'Hello!'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'Fine, tnx'}
        ]
    },
    sidebar: {
       friends: [
           {id: 1, name: 'Dimych'},
           {id: 2, name: 'Andrey'},
           {id: 3, name: 'Sveta'},
       ]
    }

}