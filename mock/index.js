const express = require("express");
const app = express();

const admin = require("./data/admin_login.json");
const vip = require("./data/vip_login.json");

const adminPermission = require("./data/admin_permission.json")
const vipPermission = require("./data/vip_permission.json")

app.get("/login", (req, res)=>{
    if(req.query.user == "admin") {
        res.send(admin);
    }else if(req.query.user == "vip") {
        res.send(vip);
    }else{
        res.send({
            code: 404,
            message: "请求的用户不存在"
        })
    }
});

app.get("/permission", (req, res)=>{
    if(req.query.user == "admin") {
        res.send(adminPermission);
    }else if(req.query.user == "vip") {
        res.send(vipPermission);
    }else{
        res.send({
            code: 404,
            message: "用户不存在"
        })
    }
})

app.listen(3300, ()=>{
    console.log("服务端跑在3300端口");
})
