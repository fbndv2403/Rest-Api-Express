import pkg from "express";
const { Request, Response } = pkg;

export const getUser = (req = Request, res= Response) => {
    try {
        res.status(200).json({ route: "get" })
    } catch (error) {
        res.status(505).json({ msg: "505 problem on the server"})
        console.error(error)
    }
}