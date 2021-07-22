// 比对路由
export function recursionRouters(userRouter=[], allRouter=[]) {
    let realRouter = [];
    allRouter.forEach(v => {
        userRouter.forEach((item, index)=>{
            if(item.name == v.meta.name) {
                if(item.children && item.children.length > 0) {
                    v.children = recursionRouters(item.children, v.children);
                }
                realRouter.push(v);
            }
        })
    });
    return realRouter;
}


export function setDefaultRouter(routes) {
    routes.forEach((v, i)=>{
        if(v.children && v.children.length) {
            v.redirect = {name: v.children[0].name}
            setDefaultRouter(v.children);
        }
    })
}
