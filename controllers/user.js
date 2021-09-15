import { v4 as uuid } from "uuid";

let users = [];


export const getUsers=(req, res) => {
    console.log(users);
    res.send(users);
  };



export const createUsers=(req, res) => {
    const user = req.body;
  
    const userId = uuid();
  
    const userWithId = { ...user, id: userId };
  
    users.push(userWithId);
  
    res.send(`user with name ${user.name}`);
  };

export const getUser=(req, res) => {
    const { id } = req.params;
  
    const foundUser = users.find((user) => user.id === id);
  
    res.send(foundUser);
  };


  export const deleteUser=(req, res) => {
    const { id } = req.params;
  
    users = users.filter((user) => user.id !== id);
    res.send(`user with id ${id} is deleted from the DB.`);
  };

  export const updateUser= (req, res) => {
    const { id } = req.params;
  
    const { name, lastName, age } = req.body;
  
    const user = users.find((user) => user.id === id);
    if (name) {
      user.name = name;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (age) {
      user.age = age;
    }
  
    res.send(`user with id ${id} has been updated`);
  };

