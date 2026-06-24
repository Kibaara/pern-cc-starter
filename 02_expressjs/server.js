import express from 'express';

const app = express();
const port = 3000;

const router = express.Router();

let cars = [
    {id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 28000},
    {id: 2, make: 'Tesla', model: 'Model S', year: 2023, price: 25000},
    {id: 3, make: 'Ford', model: 'F-150', year: 2021, price: 35000},
]

router.get('/', (req, res) =>{
    res.send('Hello from Cars API!');
});

router.get('/', (req, res) =>{
    res.send('All Cars')
});

router.post('/', (req, res) =>{
    res.send('New car');
});

router.post('/:id', (req, res) => {
res.send('Update car');
});

router.delete('/:id', (red, res)=>{
    res.send('Delete car');
});

router.get('/:id', (req, res) =>{
    res.send('Get car');
})

app.use('appi/v1', router)

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));