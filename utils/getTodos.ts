import connectMongo from "@/utils/db";
import Todo from "@/utils/models/Todo.js";
import { disconnectMongo } from "@/utils/db";
const getTodos = async () => {
    await connectMongo();
	const data = await Todo.find();
    return data
    disconnectMongo()
}

export default getTodos;