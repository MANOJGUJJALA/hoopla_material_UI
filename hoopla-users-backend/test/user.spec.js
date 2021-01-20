const { expect } = require('chai'); //to import expect function from chai
const request = require("supertest");
const app = require("../src/app");


describe("testing-login-method", () => {
    // to run setup db before each test case
    beforeEach((done) => {
        request(app).get("/user/setupdb").then(() => {
            done();
        })
    });



 

    it("testing for negative respose, wrong email", async () => {
        let data = await request(app).post("/user/login").send(
            {
                "email": "johnabc@gmail.com",
                "password": "John123"
            }
        );
        expect(data.body).to.deep.equal({ message: 'You are not registered.Please register to login' });
    })
    

    //******************************************************************************************** */
   

})





