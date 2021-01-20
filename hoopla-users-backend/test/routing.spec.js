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

    it("testing for positive respose, successfull login", async () => {
        let data = await request(app).post("/user/login").send(
            {
                "email": "john@gmail.com",
                "password": "John@111"
            }
        );
        let email = data.body.data[0].uCredentials.uEmail
        expect(email).to.deep.equal("john@gmail.com");
    })

    it("testing for negative respose, wrong password", async () => {
        let data = await request(app).post("/user/login").send(
            {
                "email": "john@gmail.com",
                "password": "John123"
            }
        );
        expect(data.body).to.deep.equal({ message: 'The password entered is incorrect!!' });
    })

    it("testing for negative respose, wrong email", async () => {
        let data = await request(app).post("/user/login").send(
            {
                "email": "johnabc@gmail.com",
                "password": "John123"
            }
        );
        expect(data.body).to.deep.equal({ message: 'You are not registered.Please register to login' });
    })
    it("testing for positive respose, fetching user details", async () => {
        let email="john@gmail.com";
        let data = await request(app).get(`/user/userDetail/${email}`)
    
        expect(data.statusCode).to.equal(201);
    })
    it("testing for negative respose, fetching user details", async () => {
        let email="john123@gmail.com";
        let data = await request(app).get(`/user/userDetail/${email}`)
    
        expect(data.statusCode).to.equal(404);
    })

    //******************************************************************************************** */
    it("testing for Positive respose,for shoes details", async () => {
        let email="Shoes";
        let data = await request(app).get(`/user/getAllCategeoryProducts/${email}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Furniture details", async () => {
        let email="Furniture";
        let data = await request(app).get(`/user/getAllCategeoryProducts/${email}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Clothing details", async () => {
        let email="Clothing";
        let data = await request(app).get(`/user/getAllCategeoryProducts/${email}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Electronics details", async () => {
        let email="Electronics";
        let data = await request(app).get(`/user/getAllCategeoryProducts/${email}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Searched item details", async () => {
        let email="Electronics";
        let data = await request(app).get(`/user/searchedItems/${email}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Searched item details", async () => {
        let email="Furnitur";
        let data = await request(app).get(`/user/searchedItems/${email}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Searched item details", async () => {
        let email="sofa";
        let data = await request(app).get(`/user/searchedItems/${email}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Searched item details", async () => {
        let email="adidas";
        let data = await request(app).get(`/user/searchedItems/${email}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Searched item details", async () => {
        let id=1002;
        let data = await request(app).get(`/user/showProductid/${id}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Searched item details", async () => {
        let id=-1002;
        let data = await request(app).get(`/user/showProductid/${id}`)
    
        expect(data.statusCode).to.equal(200);
    })

    it("testing for Positive respose,for Searched item details", async () => {
        let id=1;
        let data = await request(app).get(`/user/showProductid/${id}`)
    
        expect(data.statusCode).to.equal(200);
    })


    

   
})



describe("testing-register-method", () => {
    // to run setup db before each test case
    beforeEach((done) => {
        request(app).get("/user/setupdb").then(() => {
            done();
        })
    });

    it("testing for positive respose, successfull register", async () => {
        let data = await request(app).post("/user/register").send(
            {
                "name": "ABC DEF",
                "email": "abc@gmail.com",
                "password": "Abc@123",
                "dob": "1998-01-31",
                "phone": 1234567890
            }
        );
        // console.log(data.body);
        expect(data.body).to.deep.equal({ message: 'Registration successfull with email id abc@gmail.com' });
    })

    it("testing for negative respose, duplicate email", async () => {
        let data = await request(app.routing).post("/user/register").send(
            {
                "name": "ABC DEF",
                "email": "john@gmail.com",
                "password": "Abc@123",
                "dob": "1998-01-31",
                "phone": 1234567890
            }
        );
        // console.log(data.body);
        expect(data.body).to.deep.equal({ message: 'User with email id john@gmail.com already exists' });
    })
})

