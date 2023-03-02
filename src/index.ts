import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';

const app = express();

dotenv.config();

app.use(router)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
     console.log(`Server is listening to ${PORT}`);
});
