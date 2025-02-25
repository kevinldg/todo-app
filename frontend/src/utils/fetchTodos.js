import axios from "axios";

export const fetchTodos = () => axios.get("/api/todo").then(response => response.data).catch(error => { return error; });