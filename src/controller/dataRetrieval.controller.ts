import { Request, Response } from "express";
import axios from 'axios';
const API_BASE_URL = 'https://api.publicapis.org/entries';
const dataRetrievalController = (req: Request, res: Response): void => {
    const { category } = req.query;
    const apiUrl = `${API_BASE_URL}?category=${category || ''}`;  
    axios.get(apiUrl)
        .then(response => {
            const data = response.data;
            res.json(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}
export default dataRetrievalController;
