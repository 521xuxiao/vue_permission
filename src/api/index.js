import axios from "../utils/http"

export function logins(user) {
    return axios.get("/api/login?user="+user);
}

export const permission = (user)=>{
    return axios.get("/api/permission?user="+user);
}
