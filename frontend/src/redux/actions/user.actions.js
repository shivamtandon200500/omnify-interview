import { userConstants } from "./constants";
import axiosInstance from "../../helpers/axios";

export const signup = (user) => {

    console.log(user);

    return async (dispatch) => {
        
        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axiosInstance.post(`/signup`, {
            ...user
        });

        if(res.status === 201){
            const { message } = res.data;
            console.log("inside user action",message);
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}