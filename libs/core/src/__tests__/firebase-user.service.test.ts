import { FirebaseUserService } from "../services/firebase-user.service";
import { auth } from "../config/firebase";

jest.mock("../config/firebase", () => ({
    auth: {
        createUser: jest.fn(),
        getUserByEmail: jest.fn(),
    },
}));

describe("FirebaseUserService", () => {
    let userService: FirebaseUserService;

    beforeEach(() => {
        userService = new FirebaseUserService();
        jest.clearAllMocks();
    });

    test("register should create a new user", async () => {
        const mockUser = {
            uid: "123",
            email: "test@example.com",
            displayName: "Test User",
        };
        (auth.createUser as jest.Mock).mockResolvedValue(mockUser);

        const result = await userService.register("test@example.com", "password123", "Test User");

        expect(result).toEqual(mockUser);
        expect(auth.createUser).toHaveBeenCalledWith({
            email: "test@example.com",
            password: "password123",
            displayName: "Test User",
        });
    });

    test("login should retrieve a user by email", async () => {
        const mockUser = {
            uid: "123",
            email: "test@example.com",
            displayName: "Test User",
        };
        (auth.getUserByEmail as jest.Mock).mockResolvedValue(mockUser);

        const result = await userService.login("test@example.com", "password123");

        expect(result).toEqual(mockUser);
        expect(auth.getUserByEmail).toHaveBeenCalledWith("test@example.com");
    });
});
