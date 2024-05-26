import { FirebaseTaskService } from "../services/firebase-task.service";
import { db } from "../config/firebase";

jest.mock("../config/firebase", () => ({
    db: {
        collection: jest.fn().mockReturnValue({
            doc: jest.fn().mockReturnValue({
                set: jest.fn(),
                update: jest.fn(),
                delete: jest.fn(),
            }),
            get: jest.fn(),
        }),
    },
}));

describe("FirebaseTaskService", () => {
    let taskService: FirebaseTaskService;

    beforeEach(() => {
        taskService = new FirebaseTaskService();
        jest.clearAllMocks();
    });

    test("createTask should add a new task", async () => {
        const mockTask = {
            id: "1",
            title: "Test Task",
            description: "Test Description",
        };

        await taskService.createTask(mockTask);

        expect(db.collection).toHaveBeenCalledWith("tasks");
        expect(db.collection("tasks").doc).toHaveBeenCalledWith(mockTask.id);
        expect(db.collection("tasks").doc(mockTask.id).set).toHaveBeenCalledWith(
            expect.objectContaining(mockTask)
        );
    });

    test("getTasks should retrieve all tasks", async () => {
        const mockTasks = [
            { id: "1", title: "Task 1", description: "Description 1" },
            { id: "2", title: "Task 2", description: "Description 2" },
        ];
        (db.collection("tasks").get as jest.Mock).mockResolvedValue({
            docs: mockTasks.map((task) => ({ data: () => task })),
        });

        const result = await taskService.getTasks();

        expect(result).toEqual(mockTasks);
    });

    test("updateTask should update an existing task", async () => {
        const mockTask = { id: "1", title: "Updated Task", description: "Updated Description" };

        await taskService.updateTask(mockTask);

        expect(db.collection).toHaveBeenCalledWith("tasks");
        expect(db.collection("tasks").doc).toHaveBeenCalledWith(mockTask.id);
        expect(db.collection("tasks").doc(mockTask.id).update).toHaveBeenCalledWith(
            expect.objectContaining(mockTask)
        );
    });

    test("deleteTask should delete a task by id", async () => {
        await taskService.deleteTask("1");

        expect(db.collection).toHaveBeenCalledWith("tasks");
        expect(db.collection("tasks").doc).toHaveBeenCalledWith("1");
        expect(db.collection("tasks").doc("1").delete).toHaveBeenCalled();
    });
});
