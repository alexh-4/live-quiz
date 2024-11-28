require("../mongodb_helper");
const User = require("../../models/user");

describe("user model", () => {
    beforeEach(async() => {
        await User.deleteMany({});
    });
    it("formats correctly as a schema", () => {
        const user = newUser({
            username: "test_username",
            email: "test_email@gmail.com",
            password: "test_pass_123!",
        });
        expect(user.username).toEqual("test_username");
        expect(user.email).toEqual("test_email@gmail.com");
        expect(user.password).toEqual("test_pass_123!");
    });
    it("can save a user", async() => {
        const user = newUser({
            username: "test_username",
            email: "test_email@gmail.com",
            password: "test_pass_123!",
        });
        await user.save();
        const users = await User.find();
        expect(users[0].username).toEqual("test_username");
        expect(users[0].email).toEqual("test_email@gmail.com");
        expect(users[0].password).toEqual("test_pass_123!");
    })});