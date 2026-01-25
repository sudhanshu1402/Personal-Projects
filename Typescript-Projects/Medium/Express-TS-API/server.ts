// server.ts
import express, { Request, Response } from 'express';
const app = express();

interface User {
    id: number;
    name: string;
}

app.get('/user/:id', (req: Request, res: Response) => {
    const user: User = { id: parseInt(req.params.id), name: "John Doe" };
    res.json(user);
});

app.listen(3000, () => console.log('TS API running'));
