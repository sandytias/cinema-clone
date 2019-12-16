const INITIAL_STATE = {
    username: '',
    email: '',
    role: ''
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role
            }
        default:
            return INITIAL_STATE
    }
}
