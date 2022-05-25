const githubReducer = (state, action) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
            }

        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        default:
            return state;
    }
};

export default githubReducer;