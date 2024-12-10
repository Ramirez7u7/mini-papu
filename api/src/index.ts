import mongoose from "mongoose";
import app from "./app";


async function main() {
    try {
        await mongoose.connect("mongodb://localhost:27017/mayates");
        console.log("Aplicacion conectada a la base de datos");
        app.listen(4000, ()=>{
            console.log("Si jalo la base")
        })
    } catch (error) {
        console.log("no jalo la base")
    }
}
main()