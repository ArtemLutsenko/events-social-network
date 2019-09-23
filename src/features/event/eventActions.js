import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "./eventConstants"
import { asyncActionsStart, asyncActionsFinish, asyncActionsError } from "../async/asyncActions"
import { fetchSampleData } from "../../app/data/mockApi"

export const createEvent = (event) =>{
    return{
        type: CREATE_EVENT,
        payload:{
            event
        }
    }
} 

export const updateEvent = (event) =>{
    return{
        type: UPDATE_EVENT,
        payload: {
            event
        }
    }
}

export const deleteEvent = (eventId) =>{
    return{
        type: DELETE_EVENT,
        payload: {
            eventId
        }
    }
}

export const loadEvents = () =>{
    return async dispatch =>{
        try{
            dispatch(asyncActionsStart())
            const events = await fetchSampleData()
            dispatch({type: FETCH_EVENTS, payload: {events}})
            dispatch(asyncActionsFinish())
        }
        catch(error){
                console.log(error);
                dispatch(asyncActionsError())
        }
    }
}