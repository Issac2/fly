var engineWrapper = require("../dist/engine-wrapper")
var adapter = require("./adapter/node")
var  Fly=require("../dist/fly")
engineWrapper.setAdapter(adapter)
module.exports=new Fly(engineWrapper)