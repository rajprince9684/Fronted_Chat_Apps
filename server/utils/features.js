import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const cookieOptions = {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
}

const connectDB = (uri) => {
    mongoose
        .connect(uri, { dbName: "chattu" })
        .then((data) => {
            console.log(`connected to db ${data.connection.host}`);
        })
        .catch((err) => {
            throw err;
        });
};


const sendToken = (user, code, res, message) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,);

    return res.status(code).cookie("chattu_token", token, {
        ...cookieOptions
    })
        .json({
            success: true,
            message,
            
        });

};
export { connectDB, sendToken };  