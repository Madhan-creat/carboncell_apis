import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import userController from "../controller/user.controller";
import dataRetrievalController from "../controller/dataRetrieval.controller";
import authJWT from "../midddleware/auth";
const jsonParser = bodyParser.json();

const userRoutes = express.Router();
//user register api

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register a new user
 *     description: Registers a new user with the provided information.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The username of the user.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 description: The password for the user account.
 *                 minLength: 6
 *     responses:
 *       '201':
 *         description: User registered successfully.
 *       '400':
 *         description: Invalid request body or user already exists.
 *       '500':
 *         description: Internal server error.
 */

userRoutes.post(
  "/user/register",
  jsonParser,
  userController.userRegisterController
);

//user login api
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login user
 *     description: Logs in a user with provided credentials.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email of the user.
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 minLength: 6
 *     responses:
 *       '200':
 *         description: User logged in successfully.
 *       '400':
 *         description: Invalid request body or credentials.
 *       '401':
 *         description: Unauthorized - Invalid credentials.
 *       '500':
 *         description: Internal server error.
 */
userRoutes.post("/user/login", jsonParser, userController.userLoginController);

//update user details api
/**
 * @swagger
 * /user/update/{userId}:
 *   put:
 *     summary: Update user details
 *     description: Updates the details of a user with the specified ID.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the user.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The updated email of the user.
 *               password:
 *                 type: string
 *                 description: The updated password of the user.
 *                 minLength: 6
 *     responses:
 *       '200':
 *         description: User details updated successfully.
 *       '400':
 *         description: Invalid request body or parameters.
 *       '401':
 *         description: Unauthorized - User not authenticated.
 *       '404':
 *         description: User not found.
 *       '500':
 *         description: Internal server error.
 */
userRoutes.put("/user/update/:userId", jsonParser, userController.userRegisterController);

/**
 * @swagger
 * /data/retrieval:
 *   get:
 *     summary: Retrieve data from external API
 *     description: Retrieve data from an external API based on specified category.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: The category of data to retrieve (optional)
 *       - in: header
 *         name: x-authoriztion
 *         schema:
 *           type: string
 *         description: Custom header for additional information
 *     responses:
 *       '200':
 *         description: Successful response with retrieved data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       '401':
 *         description: Unauthorized. User token is missing or invalid.
 *       '500':
 *         description: Internal Server Error. Something went wrong on the server side.
 *     security:
 *       - BearerAuth: []
 */

userRoutes.get(
  "/data/retrieval", 
  jsonParser,
  authJWT.verifyToken, dataRetrievalController
);
export default userRoutes;
