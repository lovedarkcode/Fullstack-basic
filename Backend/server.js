import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

//get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"A joke",
            content:"this a joke"
        },
        {
            id:2,
            title:"this is another joke",
            content:"joke has finished"
        },
        {
            id:3,
            title:"this is the third joke",
            content:"joke has finished"
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("Serve at http://localhost:${port}");
});