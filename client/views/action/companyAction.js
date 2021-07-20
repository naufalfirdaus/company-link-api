import axios from "axios"
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
} from "../constants/CompanyConstant"

export const listCompany =()=> async(dispatch)=>{
    dispatch({
        type: COMPANY_FIND_REQUEST
    })
    try{
        const {data} = await axios.get("http://dev3.dansmultipro.co.id/api/recruitment/positions.json")
        dispatch({
            type:COMPANY_FIND_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type:COMPANY_FIND_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listoneCompany =(id)=> async(dispatch)=>{
    dispatch({
        type: COMPANY_FINDONE_REQUEST
    })
    try {
        const {data} = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
        dispatch({type: COMPANY_FINDONE_SUCCESS, payload:data})
    } catch (error) {
        dispatch({
            type: COMPANY_FINDONE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })
    }
}

export const listone1Company =(filterParams)=> async(dispatch)=>{
    dispatch({
        type: COMPANY_FINDONE1_REQUEST
    })
    try {
        const {desc,location,fullTime} = filterParams;
        const {data} = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${desc}&location=${location}&full_time=${fullTime}`)
        dispatch({type: COMPANY_FINDONE1_SUCCESS, payload:data})
    } catch (error) {
        dispatch({
            type: COMPANY_FINDONE1_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })
    }
}