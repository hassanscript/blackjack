import io from "socket.io-client";
const url = process.env != "production" ? "http://localhost:3003/" : "/";
export const socket = io(url);
