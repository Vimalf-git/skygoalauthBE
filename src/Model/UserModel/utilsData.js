import mongoose from "../index.js";

let Schema=new mongoose.Schema({
    tittle:String
},{
    versionKey:false
})

let utilsModel=mongoose.model('utilsdata',Schema)

export default utilsModel;