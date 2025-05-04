const request = require("supertest");
const app = require("../src/server"); 

describe("Auth API Tests", () => {
  it("should register a user successfully", async () => {
    const res = await request(app).post("/api/auth/register").send({
      email: "test@example.com",
      password: "password123",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  it("should not register with missing fields", async () => {
    const res = await request(app).post("/api/auth/register").send({});

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message");
  });
});