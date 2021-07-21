import mongoose from "mongoose";

const DATABASE_URI = process.env.DATABASE_URI;

if (!DATABASE_URI) {
  throw new Error(
    "Please define the DATABASE_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage. Note we declare mongoose globally in the utils/types/index file
 * so TypeScript will not issue warnings.
 */
// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  global.mongoose = { conn: null, promise: null };
  cached = { conn: null, promise: null };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // setting poolSize to limit the number of sockets to MongoDb (https://mongoosejs.com/docs/connections.html#options)
    const opts = {
      poolSize: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true
    };

    // for some reason TypeScript has a problem with simply using connect(DATABASE_URI, opts)
    // wrapping `${DATABASE_URI}` helps TypeScript understand that this should be a string value
    cached.promise = mongoose
      .connect(`${DATABASE_URI}`, opts)
      .then(mongoose => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;
