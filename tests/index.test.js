import request from "supertest";
import assert from "assert";
import app from "../src/models/app.js";

describe("Main Endpoints", () => {
  it("GET / should route: get", async () => {
    const res = await request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});
