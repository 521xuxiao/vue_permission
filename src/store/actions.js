import { permission } from "@/api"
import router, {rootRoutes} from "@/router"
import { recursionRouters, setDefaultRouter } from "@/utils/handleRouter"
export default {
     async SET_PERMISSION({commit, state}, permissionList) {
        let data = await permission(state.token),
            realRouter = [];
        // 写好的路由和请求的路由做比对，得到当前登录人的真实路由权限
         realRouter = recursionRouters(data, rootRoutes);
         // 添加404页面
         realRouter.push({
             path: '*',
             component: ()=>import("@/views/404")
         });
         // 设置默认路由
         setDefaultRouter(realRouter);

         router.addRoutes(realRouter);
         // 存储菜单列表
         commit("SET_MENUS", realRouter[0].children);

         // 存储路由权限
         commit("SET_PERMISSIONS", realRouter)
    }
}
