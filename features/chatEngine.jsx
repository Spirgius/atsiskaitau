import {createSlice} from "@reduxjs/toolkit";

export const chatEngineSlice = createSlice({
    name: "chatEngine",
    initialState: {
        value: {
            chatRooms: [],
            currentChatRoom: null
        }
    },
    reducers: {
        addChatroom: ({value}, {payload}) => {
            const newConvo = {
                participants: payload.participants,
                messages: payload.messages,
                isBlockedBy: payload.isBlockedBy
            }
            value.chatRooms.push(newConvo)

            value.currentChatRoom = newConvo
        }
    }
})


export const {addChatroom} = chatEngineSlice.actions
export default chatEngineSlice.reducer