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
  });
});

describe("Put Endpoint", () => {
  it("PUT /api/put route: put 201 created", async () => {
    await request(app)
      .put("/api/put")
      .expect(201)
      .expect("Content-Type", /json/);
  });
});

describe("Delete Endpoint", () => {
  it("DELETE /api/delete route: delete 202 acepted", async () => {
    await request(app)
      .delete("/api/delete")
      .expect(202)
      .expect("Content-Type", /json/);
  });
});
