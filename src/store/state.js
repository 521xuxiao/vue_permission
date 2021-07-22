export default {
    get token() {
        return sessionStorage.getItem("token")
    },
    set token(value) {
        sessionStorage.setItem("token", value);
    },

    permissionList: null,
    menuList: []
}
