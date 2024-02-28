import express from 'express'; // 

const app = express();
app.use(express.static('dist'));

app.get( '/', ( req, res ) => {
    res.send('Server is ready');
})

const port = process.env.PORT || 3000;

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title: 'Joke 1',
            content : 'This is joke number one'
        },
        {
            id:2,
            title: 'Joke 2',
            content : 'This is joke number two'
        },
        {
            id:3,
            title: 'Joke 3',
            content : 'This is joke number three'
        },
        {
            id:4,
            title: 'Joke 4',
            content : 'This is joke number four'
        },
        {
            id:5,
            title: 'Joke 5',
            content : 'This is joke number five'
        }
    ]

    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`server at localhost :${port}`)
})

