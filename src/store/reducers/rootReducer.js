const initState = {
    users: [
        { id: 1, name: 'CNH' },
        { id: 2, name: 'NTH' },
        { id: 3, name: 'LDT' },
    ],
    posts: [],
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'delete_user':
            // console.log(">>>check case delete_user", action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return { ...state, users };
            // break;
        case 'create_user':
            // console.log(">>>check payload:", action.payload.name);
            let {payload} = action;
            // console.log(">>>check payload: ", payload);
            return { ...state, users: [...state.users, payload]};
        default:
            return state;
    }
    // return state;
}

export default rootReducer;