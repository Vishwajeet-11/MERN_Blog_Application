import mongoose from "mongoose";

const dbConnection = async() => {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "BLOG_APP_MERN",
    }).then(()=> {
        console.log("connected to database")
    }).catch((error) => {
        console.log(error);
    })
}

export default dbConnection;