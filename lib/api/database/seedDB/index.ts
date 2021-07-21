// Since this is being utilized by "jest.json", paths must be relative

import mongoose from "mongoose";
import { logErrorMessage, logInfoMessage } from "logger";
import dbConnect from "lib/api/database";
import User from "lib/api/models/user";
import Tag from "lib/api/models/tag";
import userSeeds from "lib/api/database/seedDB/userSeeds";
import tagSeeds from "lib/api/database/seedDB/tagSeeds";

const { DATABASE_URI, EXIT, SEED } = process.env;

/**
 * Function to seed the testing Mongo database.
 *
 * @function
 * @returns {string} - displays a:  PASS  utils/userSeeds.js message to console.
 * @throws {error} - displays a:  FAIL  utils/userSeeds.js message to console with the error.
 */
const seedUsers = async (): Promise<any> => {
  try {
    await dbConnect();
    const databaseExists = User.findOne({
      email: "thefifthelement@example.com"
    });
    if (await databaseExists) await mongoose.connection.dropDatabase();

    await User.insertMany(userSeeds);

    logInfoMessage(
      `\x1b[2mutils/\x1b[0m\x1b[1muserSeeds.js\x1b[0m (${DATABASE_URI})\n`
    );

    mongoose.connection.close();

    if (EXIT) process.exit(0);

    return null;
  } catch (err) {
    logErrorMessage(`userSeeds.js\x1b[0m\x1b[31m\n${err.toString()}\x1b[0m\n`);

    mongoose.connection.close();

    if (EXIT) process.exit(0);
  }
};

/**
 * Function to seed the testing Mongo database.
 *
 * @function
 * @returns {string} - displays a:  PASS  utils/tagSeeds.js message to console.
 * @throws {error} - displays a:  FAIL  utils/tagSeeds.js message to console with the error.
 */
const seedTags = async (): Promise<any> => {
  try {
    await dbConnect();
    const databaseExists = Tag.findOne({
      tagName: "PHP"
    });
    if (await databaseExists) await mongoose.connection.dropDatabase();

    await Tag.insertMany(tagSeeds);

    logInfoMessage(
      `\x1b[2mutils/\x1b[0m\x1b[1mtagSeeds.js\x1b[0m (${DATABASE_URI})\n`
    );

    mongoose.connection.close();

    if (EXIT) process.exit(0);

    return null;
  } catch (err) {
    logErrorMessage(`tagSeeds.js\x1b[0m\x1b[31m\n${err.toString()}\x1b[0m\n`);

    mongoose.connection.close();

    if (EXIT) process.exit(0);
  }
};

if (SEED) seedTags();
if (SEED) seedUsers();

export default [seedTags, seedUsers];
