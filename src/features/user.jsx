import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            allUsers: [
                {
                    email: 'spirgabu@gmail.com',
                    password: 'passas',
                    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fe7bc4f98-aef8-4ec5-9abc-399060998a21%2Fde1l6o6-3ebed872-bdf2-49dd-a055-35db91a8dec7.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3YmM0Zjk4LWFlZjgtNGVjNS05YWJjLTM5OTA2MDk5OGEyMVwvZGUxbDZvNi0zZWJlZDg3Mi1iZGYyLTQ5ZGQtYTA1NS0zNWRiOTFhOGRlYzcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HwYLR-LAgXZAFwfeKWu2o1Ti57HP40y2Q7uJVfKUy2g&f=1&nofb=1",
                    id: 123456789
                },
                {
                    email: 'accountas1@gmail.com',
                    password: 'passas',
                    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    id: 123634154
                },
                {
                    email: 'accountas2@gmail.com',
                    password: 'passas',
                    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                    id: 53155313
                },
            ],
            currentUser: null
        }
    },
    reducers: {
        addUser: ({value}, {payload}) => {
            const timestamp = Date.now()
            const user = {
                email: payload.email,
                password: payload.passOne,
                image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                id: timestamp
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
        }
    }
})

export const {addUser, setCurrentUser, updatePhoto} = userSlice.actions
export default userSlice.reducer;