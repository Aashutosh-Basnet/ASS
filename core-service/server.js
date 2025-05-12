import express from 'express';
import dbConnection from "./dbConnection/dbConnection";
import cors from "cors";
import cookieParser from "cookie-parser";

dbConnection();

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: [process.env.CLIENT_URL],
        credentials: true,
    })
)


const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, ()=>{
    console.log("server has started!(PORT: 5000)");
})