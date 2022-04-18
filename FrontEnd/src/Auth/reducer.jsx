import * as types from "./types"
const initialState = {
    loading: false,
    error: "",
    user: {},
    isRegistered: false
}
export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case (types.LOGIN_REQUEST):
            return { ...state, loading: true, isRegistered: false }
        case (types.LOGIN_SUCCESS):
            return { ...state, loading: false, accessToken: action.payload.accessToken, user: action.payload.user }
        case (types.LOGIN_FAIL):
            return { ...state, loading: false, error: action.payload.error }

        case (types.SIGNUP_REQUEST):
            return { ...state, loading: true, isRegistered: false }
        case (types.SIGNUP_SUCCESS):
            return { ...state, loading: false, isRegistered: true }
        case (types.SIGNUP_FAIL):
            return { ...state, loading: false, error: action.payload.error }

        case (types.LOGOUT):
            return { initialState, accessToken: null }
        default:
            return state
    }
}
const initialStateData = {
    loading: false,
    flat: [],
    resident: []
}
export const apartmentReducer = (state = initialStateData, action) => {

    switch (action.type) {

        case (types.REQ_APARTMENT_DATA):
            return { ...state, loading: true, }
        case (types.GET_APARTMENT_DATA):
            return { ...state, loading: false, flat: action.payload }
        case (types.REQ_APARTMENT_DATA_FAIL):
            return { ...state, loading: false, error: true }

        case (types.GET_RESIDENT):
            return { ...state, resident: [...state.resident, ...action.payload], loading: false }

        default:
            return state
    }
}