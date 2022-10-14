const express = require("express")
const routes = express();
const noteModel = require('../models/NotesModel.js');


//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    // Validate request
    try{
        const newNote = new noteModel(req.body)
        const note = await newNote.save()
        res.status(201).send(note) 
    }catch(error){
        res.status(400).send(error)
    }
    
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    // Validate request
    try{
        const notes = await noteModel.find()
        res.status(200).send(notes)
    }catch(error){
        res.status(400).send(error)
    }
    
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    // Validate request
    try{
        const foundNote = await noteModel.findById(req.params.noteId)
        res.status(200).send(foundNote)
    }catch(error){
        res.status(400).send(error)
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    try{
        const updatedNote = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        res.status(200).send(updatedNote)
    }catch(error){
        res.status(400).send(error)
    }
    
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    try{
        const deletedNote = await noteModel.findByIdAndRemove(req.params.noteId)
        res.status(200).send(deletedNote)
    }catch(error){
        res.status(400).send(error)
    }
    //TODO - Write your code here to delete the note using noteid
});
module.exports = routes;