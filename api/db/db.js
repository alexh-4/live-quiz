const mongoose = require("mongoose");
const connectToDatabase = async() => {
    const mongoDbUrl = process.env.MONGODB_URL;
    if (!mongoDbUrl) {
        console.error("No mongodb url provided, make sure there's a MONGODB_URL environment variable set.");
        throw new Error("No connection string provided.")
    };
    await mongoose.connect(mongoDbUrl);
    if (process.env.NODE_ENV !== "test") {
        console.log("Successfully connected to mongoDB");
    }
};
module.exports = {connectToDatabase};