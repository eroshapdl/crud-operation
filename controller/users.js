import { v4 as uuid } from 'uuid';



let users = [];


export const getUsers = (req, res) => {


    console.log(`users in database: ${users}`);
    res.send(users);

}


export const createUser = (req, res) => {   

    const user = req.body;
    users.push({...user, id: uuid()});
    
    console.log(`user [${user.username}] added to the database.`);

};



export const getUser = (req, res) => {
res.send(req.params.id)

};



export const deleteUser = (req, res) => { 


    console.log(`user's id ${req.params.id} is deleted`);
    
    
    users = users.filter((user) => user.id !== req.params.id);


};



export const updateUser =  (req,res) => {

    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;


console.log(`username is updated to ${req.body.username}.age is updated to ${req.body.age}`)


};