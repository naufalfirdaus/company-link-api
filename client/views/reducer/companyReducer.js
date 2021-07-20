import {
    COMPANY_FIND_REQUEST,
    COMPANY_FIND_SUCCESS,
    COMPANY_FIND_FAIL,
    COMPANY_FINDONE_REQUEST,
    COMPANY_FINDONE_FAIL,
    COMPANY_FINDONE_SUCCESS,
    COMPANY_FINDONE1_REQUEST,
    COMPANY_FINDONE1_FAIL,
    COMPANY_FINDONE1_SUCCESS,
} from '../constants/CompanyConstant'

export const companyListReducer = (state = {}, action) => {
    switch (action.type) {
        case COMPANY_FIND_REQUEST:
            return { loading: true }
        case COMPANY_FIND_SUCCESS:
            return { loading: true, company: action.payload }
        case COMPANY_FIND_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const companyListOneReducer = (state = {}, action) => {
    switch (action.type) {
        case COMPANY_FINDONE_REQUEST:
            return { loading: true }
        case COMPANY_FINDONE_SUCCESS:
            return { loading: true, company: action.payload }
        case COMPANY_FINDONE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const companyListOne1Reducer = (state = {}, action) => {
    switch (action.type) {
        case COMPANY_FINDONE1_REQUEST:
            return { loading: true }
        case COMPANY_FINDONE1_SUCCESS:
            return { loading: true, params: action.payload }
        case COMPANY_FINDONE1_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
