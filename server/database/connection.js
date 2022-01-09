const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongod connection string

        const con = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTropology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })
        console.log(`mongo DB connected : ${con.connection.host}`);

    }

    catch (err) {
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB