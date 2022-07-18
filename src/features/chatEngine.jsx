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
                isBlockedBy: payload.isBlockedBy,
                convoId: Date.now()
            }
            value.chatRooms.push(newConvo)

            value.currentChatRoom = newConvo
        },
        deleteChatroom: ({value}, {payload}) => {
            value.chatRooms.splice(payload,1)
        },
        blockConvo: ({value}, {payload}) => {
            const {index, uid} = payload
            console.log(payload)
            // value.chatRooms[index].isBlockedBy = uid
        }
    }
})


export const {addChatroom, deleteChatroom, blockConvo} = chatEngineSlice.actions
export default chatEngineSlice.reducer