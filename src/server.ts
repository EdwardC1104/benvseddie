// import connectDB from 'database/connectDB';
import { app } from './app';

// connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server up and running on port ${PORT}`);
});
