import request from "supertest";
import assert from "assert";
import app from "../src/models/app.js";

describe("Main Endpoints", () => {
  it("GET /api/get should route: get", async () => {
    const res = await request(app)
      .get("/api/get")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});

describe("Post Endpoint", () => {
  it("POST /api/post route: post 201 created", async () => {
    await request(app)
    .post("/api/post")
    .expect(201)
    .expect("Content-Type", /json/);
  })
})
