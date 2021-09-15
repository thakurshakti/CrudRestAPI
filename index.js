import  express  from "express";
import bodyParser from "body-parser";


import usersRoutes from "./Route/users.js";

const app= express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get('/', (request,response)=>response.send('hello '));

app.listen(PORT,()=>console.log(`Server running on port: http://localhost:${PORT}`));