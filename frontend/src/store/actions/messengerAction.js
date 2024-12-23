import axios from 'axios';
import {FRIEND_GET_SUCCESS,MESSAGE_GET_SUCCESS,MESSAGE_SEND_SUCCESS,THEME_GET_SUCCESS,THEME_SET_SUCCESS,DELETE_MINE_MSG_SUCCESS,DELETE_MINE_MSG_FAILED,DELETE_BOTH_MSG_SUCCESS,DELETE_BOTH_MSG_FAILED} from "../types/messengerType";

const API=axios.create({baseURL:'https://final-messenger-2.onrender.com',withCredentials: true,});

// https://final-messenger-2.onrender.com

export const getFriends = () => async(dispatch) => {
     try{
          const response = await API.get('/api/messenger/get-friends');
           dispatch({
                type: FRIEND_GET_SUCCESS,
                payload : {
                     friends : response.data.friends   
                }
           })

     }catch (error){
          console.log(error.response.data);
     }
}

export const messageSend = (data) => async(dispatch) => {
    try{
     const response = await API.post('/api/messenger/send-message',data);
     dispatch({
          type : MESSAGE_SEND_SUCCESS,
          payload : {
               message : response.data.message
          }
     })
    }catch (error){
     console.log(error.response.data);
    }
}


export const getMessage = (id) => {
     return async(dispatch) => {
          try{
               const response = await API.get(`/api/messenger/get-message/${id}`)
              dispatch({
                   type : MESSAGE_GET_SUCCESS,
                   payload : {
                    message : response.data.message
                   }
              })
          }catch (error){
               console.log(error.response.data)
          }
     }
}


export const ImageMessageSend = (data) => async(dispatch)=>{

     try{
          const response = await API.post('/api/messenger/image-message-send',data);
          dispatch({
               type: MESSAGE_SEND_SUCCESS,
               payload : {
                    message : response.data.message
               }
          })
     }catch (error){
          console.log(error.response.data);

     }

}

export const seenMessage = (msg) => async(dispatch)=> {
     try{
          const response = await API.post('/api/messenger/seen-message',msg);
          // console.log(response.data);
     }catch (error){
          console.log(error.response.message)

     }
}


export const updateMessage = (msg) => async(dispatch)=> {
     try{
          const response = await API.post('/api/messenger/delivared-message',msg);
          // console.log(response.data);
     }catch (error){
          console.log(error.response.message)

     }
}


export const getTheme = () => async(dispatch) => {

     const theme = localStorage.getItem('theme');
     dispatch({
          type: "THEME_GET_SUCCESS",
          payload : {
               theme : theme? theme : 'white'
          }
     })

}


export const themeSet = (theme) => async(dispatch) => {

     localStorage.setItem('theme',theme);
     dispatch({
          type: "THEME_SET_SUCCESS",
          payload : {
               theme : theme
          }
     })
     
}



export const deleteMineMessage=({msgId, myId})=>async(dispatch)=>{

          try{
               const response = await API.post(`/api/messenger/delete-mine-msg`, {
                    msgId:msgId, 
                    myId:myId
               })

         
               if(response.data.msg==="success"){

                    dispatch({
                         type : DELETE_MINE_MSG_SUCCESS,
                         payload : {
                          message : msgId,
                          message2:myId
                         }
                    })
               }else{
                    dispatch({type:DELETE_MINE_MSG_FAILED})
               }
          }catch (error){
               console.log(error.response.data)
          }
   


}



export const deleteBothMsg=({msgId, myId})=>async(dispatch)=>{

     try{
          const response = await API.post(`/api/messenger/delete-both-msg`, {
               msgId:msgId, 
          })

    
          if(response.data.msg==="success"){

               dispatch({
                    type : DELETE_BOTH_MSG_SUCCESS,
                    payload : {
                     message : msgId,
                    }
               })
          }else{
               dispatch({type:DELETE_BOTH_MSG_FAILED})
          }
     }catch (error){
          console.log(error.response.data)
     }
}