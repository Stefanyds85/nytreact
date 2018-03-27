const Article = require("../models").Article;

module.exports = {
    findAll: function(){
        //this function will find all of the boxes from my database.
        Article.find().exec(function(data){
            console.log("show article")
        })
    },

    findOne: function(){
        //this function will find one box by ID(id is created by mongo automatically).
        
        Article.findOne().exec(function(data){
            console.log("show box info")
        })

    },

    findByStYr: function(){
        //this function will find all of the boxes by category from my database.
        
        Box.findByStYr().exec(function(data){
            console.log("show box info")
        })
    },

    findByEdYr: function(){
        //this function will find all of the boxes by size from my database.

        Box.findByEdYr().exec(function(data){
            console.log("show box info")
        })
    }

};