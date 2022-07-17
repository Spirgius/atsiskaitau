import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            allUsers: [
                {
                    nickname: 'spirgius',
                    password: 'Passas@',
                    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fe7bc4f98-aef8-4ec5-9abc-399060998a21%2Fde1l6o6-3ebed872-bdf2-49dd-a055-35db91a8dec7.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3YmM0Zjk4LWFlZjgtNGVjNS05YWJjLTM5OTA2MDk5OGEyMVwvZGUxbDZvNi0zZWJlZDg3Mi1iZGYyLTQ5ZGQtYTA1NS0zNWRiOTFhOGRlYzcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HwYLR-LAgXZAFwfeKWu2o1Ti57HP40y2Q7uJVfKUy2g&f=1&nofb=1",
                    role: 'admin',
                    uid: 420,
                    blacklist: [133323323]
                },
                {
                    nickname: 'dede',
                    password: 'Passas@',
                    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    role: 'regular',
                    uid: 43535345,
                    blacklist: [420]
                },
                {
                    nickname: 'brolis',
                    password: 'Passas@',
                    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    role: 'regular',
                    uid: 467167492,
                    blacklist: []
                },
                {
                    nickname: 'sese',
                    password: 'Passas@',
                    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    role: 'regular',
                    uid: 846889996,
                    blacklist: []
                },
                {
                    nickname: 'puske',
                    password: 'Passas@',
                    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    role: 'regular',
                    uid: 564783646,
                    blacklist: []
                },
                {
                    nickname: 'pusbratkis',
                    password: 'Passas@',
                    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    role: 'regular',
                    uid: 133323323,
                    blacklist: []
                }
            ],
            currentUser: null
        }
    },
    reducers: {
        addUser: ({value}, {payload}) => {
            const user = {
                nickname: payload.nickname,
                password: payload.passOne,
                image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                role: payload.role,
                uid: Date.now(),
                blacklist: []
            }
            value.allUsers.push(user)
        },
        setCurrentUser: ({value}, {payload}) => {
            value.currentUser = payload
        },
        updatePhoto: ({value}, {payload}) => {
            const {index, current} = payload
            value.allUsers[index] = current
            value.currentUser = current
        },
        updatePassword: ({value}, {payload}) => {
            const {index, current} = payload
            value.allUsers[index] = current
            value.currentUser = current
        },
        deleteUser: ({value}, {payload}) => {
            value.allUsers.splice(payload,1)
            console.log(value.allUsers)
        },
        addToBlacklist: ({value}, {payload}) => {
            const {index, uid} = payload
            value.allUsers[index].blacklist.push(uid)
        }
    }
})


export const {addUser, setCurrentUser, updatePhoto, updatePassword, deleteUser, addToBlacklist} = userSlice.actions
export default userSlice.reducer