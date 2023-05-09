const { create, getLogins, getLoginsById, updateLogins, deleteLoginsById } = require("./login.services");
const { genSaltSync, hashSync} = require("bcrypt");
const { get } = require("express/lib/response");
var nodemailer = require('nodemailer');

module.exports = {
    createLogin:(req,res) => {
        const body = req.body;
        create(body, (err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    data:err
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    data:results
                });
            }
        });
     },
     getLoginByID:(req,res) => {
        const id = req.params.id;
        getLoginsById(id, (err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    data:err
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    data:results
                });
            }
        });
     },
     getLogin:(req,res) => {        
        getLogins((err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    data:err
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    data:results
                });
            }
        });
     },
     updateLoginByID:(req,res) => {
        const body = req.body;
        const id = req.params.id;
        updateLogins(body, id, (err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    message:err
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    message:results
                });
            }
        });
     },
     deleteLoginByID:(req,res) => {
        const id = req.params.id;
        deleteLoginsById(id, (err, results) => {
            if(err){
                return res.status(500).json({
                    success:0,
                    message:err
                });
            }else{
                return res.status(200).json({
                    sucsess:1,
                    message:results
                });
            }
        });
     }
};

