import mongoose from "mongoose";
import dbConnect from "lib/api/database";
import app from "lib/api/testServer";

describe("Get All Tags Route", () => {
  beforeAll(async () => {
    await dbConnect();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("routes requests to the getTags controller", async done => {
    await app()
      .get("/api/tags/all")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              __v: expect.any(Number),
              _id: expect.anything(),
              tagName: expect.any(String),
              category: expect.any(String)
            })
          ])
        );
        done();
      });
  });
});
