export default {
    SET_TOKEN(state, token) {
        state.token = token;
    },
    CLEAR_TOKEN(state) {
        state.token = "";
    },

    SET_PERMISSIONS(state, permissionList) {
        state.permissionList = permissionList;
    },
    CLEAR_PERMISSIONS(state) {
        state.permissionList = null;
    },
    SET_MENUS(state, menuList) {
        state.menuList = menuList;
    },
    CLEAR_MENUS(state, menuList) {
        state.menuList = [];
    }
}
