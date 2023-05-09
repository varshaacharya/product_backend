const res = require("express/lib/response");
//const { callbackPromise } = require("nodemailer/lib/shared");
const pool = require("../../config/dbconfig");

module.exports = {
    create:(data,callBack)=> {
        pool.query(`INSERT INTO login(email,password) VALUES (?,?)`,
            [
                data.email,
                data.password               
            ],
            (err,results) =>{
                if(err){
                   return callBack(err);   
                }
                else{
                    return callBack(null, results);
                }
            }
        );       
    },
    getLoginsById:(id, callBack) =>{
        pool.query(`select * from login where id = ?`,
            [id],
            (err,results) => {
                if(err){
                    return callBack(err);
                }else if(results == ""){                    
                    return callBack("Data not found");
                }else{  
                    return callBack(null, results);
                }
            }
        );
    },
    getLogins:(callBack) =>{
        pool.query(`SELECT * FROM login`,        
            (err,results) => {
                if(err){
                    return callBack(err);
                }else if(results == ""){                    
                    return callBack("Data not found");
                }else{  
                    return callBack(null, results);
                }
            }
        );
        
    },
    updateLogins:(data,id,callBack)=>{
        pool.query(`update login set email=?,password=? where id=?`,
        [
            data.email,
            data.password,
            id
        ],
        (error, results, fields) => {
            if(error){
               return callBack(error);
            }else{
                message = "Data updated successfully";
                return callBack(null, message);
            }                
        }
        );
    },
    deleteLoginsById:(id,callBack) =>{
        pool.query(`delete from login where id=?`,
            [ 
                id
            ],        
            (err,results) => {
                if(err){
                    return callBack(err);
                }else if(results == ""){                    
                    return callBack("Data not found");
                }else{  
                    message = "Data deleted successfully";
                    return callBack(null, message);
                }
            }
    );
},

};