import UserActionTypes from "./action-types"

export const loginUser = (playload) => ({
    type: UserActionTypes.LOGIN, //aqui seria "user/login,so que criei uma variavel para facilitar e usar mais vezes"
    playload,
});

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT
})
