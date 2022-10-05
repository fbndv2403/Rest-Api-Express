import request from "supertest";
import { describe, it } from "vitest";
import app from "../src/models/app.js";

describe("Main Endpoints", () => {
  it("GET / should show all users", async () => {
    const res = await request(app).get("/");
    console.log(res);
    expect(res.status).toEqual(200);
  });
});
