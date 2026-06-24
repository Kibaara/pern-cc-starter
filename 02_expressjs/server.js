import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello from Cars API!');
});

app.get('/api/v1/cars', (req, res) =>{
    res.send('All Cars')
});

app.post('/api/v1/cars', (req, res) =>{
    res.send('New car');
});

app.post('/api/v1/cars/:id', (req, res) => {
res.send('Update car');
});

app.delete('api/v1/cars/:id', (red, res)=>{
    res.send('Delete car');
});

app.get('/api/v1/cars/:id', (req, res) =>{
    res.send('Get car');
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));