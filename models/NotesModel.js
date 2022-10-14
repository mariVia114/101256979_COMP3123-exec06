const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    noteTitle:{
        type:String,
        require:true
    },
    noteDescription:{
        type:String
    },
    priority:{
        type: String,
        uppercase:true,
        enum:["HIGH", "LOW", "MEDIUM"]
    },
    dateAdded:{
        type:Date,
        require:true
    },
    dateUpdated:{
        type:Date,
    }
    
})

module.exports = mongoose.model("notes", noteSchema)

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated