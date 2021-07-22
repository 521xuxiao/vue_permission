import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: ()=>import("@/views/login")
  }
]

export const rootRoutes = [
  {
    path: '/',
    name:'Layout',
    component: ()=>import("@/views/layout"),
    link: '/',
    meta: {
      requireAuth: false,
      name: 'wrap'
    },
    children: [
      {
        path: 'scholl',
        name: 'Scholl',
        component: ()=>import("@/views/layout/views/scholl/index.vue"),
        link: '/scholl',
        meta: {
          requireAuth: true,
          name: '学校'
        },
        children: [
          {
            path: 'addScholl',
            name: 'AddScholl',
            link: '/scholl/addScholl',
            component: ()=>import("@/views/layout/views/scholl/views/addScholl/index.vue"),
            meta: {
              requireAuth: false,
              name: '新增学校'
            },
          },
          {
            path: 'deleteScholl',
            name: 'DeleteScholl',
            link: '/scholl/deleteScholl',
            component: ()=>import("@/views/layout/views/scholl/views/deleteScholl/index.vue"),
            meta: {
              requireAuth: true,
              name: '删除学校'
            }
          }
        ]
      },
      {
        path: 'class',
        name: 'Class',
        link: '/class',
        component: ()=>import("@/views/layout/views/class/index.vue"),
        meta: {
          requireAuth: false,
          name: '班级'
        },
        children: [
          {
            path: 'addClass',
            name: 'AddClass',
            link: '/class/addClass',
            component: ()=>import("@/views/layout/views/class/addClass/index.vue"),
            meta: {
              requireAuth: false,
              name: '新增班级'
            }
          },
          {
            path: 'deleteClass',
            name: 'DeleteClass',
            link: '/class/deleteClass',
            component: ()=>import("@/views/layout/views/class/deleteClass/index.vue"),
            meta: {
              requireAuth: true,
              name: '删除班级'
            }
          }
        ]
      }
    ]
  },
  // {
  //   path: '*',
  //   component: ()=>import("@/views/404")
  // }
];



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// console.log(rootRoutes)
// router.addRoutes(rootRoutes);

export default router
