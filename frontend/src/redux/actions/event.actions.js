import { eventConstants } from "./constants";
import axiosInstance from "../../helpers/axios";

export const eventList = (event) => {
    console.log('user', event)
    return async (dispatch) => {

        dispatch({ type: eventConstants.EVENT_REQUEST});
        const res = await axiosInstance.post('/event',event);
        console.log(res)

        if(res.status === 200){
            const {resultDay} = res.data.event;
            console.log("resultDay",resultDay)
            dispatch({
                type: eventConstants.EVENT_SUCCESS,
                payload: {
                    resultDay,message:"Event Generated Successfully"
                }
            })
        }else{
            if(res.status === 400){
                dispatch({
                    type: eventConstants.EVENT_FAILURE,
                    payload: {error:res.data.error}
                })
            }
        }
    }
}
