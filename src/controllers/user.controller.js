import pkg from "express";
import { pool } from "../db/connection.js";
const { Request, Response } = pkg;

export const getUser = async (req = Request, res = Response) => {
  try {
    const [rows] = await pool.query("SELECT * FROM clients");
    res.json(rows)
  } catch (error) {
    res.status(505).json({ msg: "505 problem on the server" });
    console.error(error);
  }
};

export const postUser = (req = Request, res = Response) => {
  try {
    res.status(201).json({ route: "post 201 created" });
  } catch (error) {
    res.status(505).json({ msg: "505 problem on the server" });
    console.error(error);
  }
};

export const putUser = (req = Request, res = Response) => {
  try {
    res.status(201).json({ route: "put 201 created" });
  } catch (error) {
    res.status(505).json({ msg: "505 problem on the server" });
    console.error(error);
  }
};

export const deleteUser = (req = Request, res = Response) => {
  try {
    res.status(202).json({ route: "delete 202 acepted" });
  } catch (error) {
    res.status(505).json({ msg: "505 problem on the server" });
    console.error(error);
  }
};
