import supertest from "supertest";
import server from "../utils/createServer";

describe("recipes", () => {
  describe("Generate recipes", () => {
    describe("When given correct user inputs and external function runs and return correct output", () => {
      it("should return a 200 and return an string about recipes", async () => {
        const res = await supertest(server)
          .get("/api/v1/generateRecipes")
          .send({
            ingredients: "bread, milk, egg",
            restrictions:
              "I am cutting down on weight. m allergic to cooking oil.",
          });
        expect(res.status).toBe(200);
        expect(res.body.data).toBe("Some Recipes");
      });
    });

    describe("When given correct user inputs and external function fails(throws an error)", () => {
      it("should return a 500", async () => {
        const res = await supertest(server)
          .get("/api/v1/generateRecipes")
          .send({
            ingredients: "bread, milk, egg",
            restrictions:
              "I am cutting down on weight. m allergic to cooking oil.",
          });
        expect(res.status).toBe(500);
      });
    });

    describe("When given user does not provide required inputs and external function runs and return correct output", () => {
      it("should return a 404", async () => {
        const res = await supertest(server).get("/api/v1/generateRecipes");
        expect(res.status).toBe(404);
      });
    });

    describe("When given user provides required inputs but not correct data type and external function runs and return correct output", () => {
      it("should return a 404", async () => {
        const res = await supertest(server)
          .get("/api/v1/generateRecipes")
          .send({
            ingredients: null,
            restrictions: true,
          });
        expect(res.status).toBe(404);
      });
    });

    describe("When given user provides required inputs, correct data type(i.e., string) but empty strings and external function runs and return correct output", () => {
      it("should return a 404", async () => {
        const res = await supertest(server)
          .get("/api/v1/generateRecipes")
          .send({
            ingredients: "",
            restrictions: "",
          });
        expect(res.status).toBe(404);
      });
    });
  });
});
