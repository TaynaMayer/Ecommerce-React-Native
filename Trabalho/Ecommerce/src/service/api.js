import axios from "axios"


export const Api = axios.create({
    baseURL: "https://api-native-final.herokuapp.com/reactnative",    
    auth: {
        username: "reactnative",
        password: "2022"
    }
})