const express = require('express');
const app = express();
app.use(express.json());

const posts = [
    {"id": 1, "name": "Hello", "content": "I am making a rest api"}, 
    {"id": 2, "name": "H1", "content": "I am creating a web application"}
];

app.get('/', (req, res) => {
    res.send("<h2>Welcome to the HomePage</h2>");
});

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/posts/:id', (req, res) => {

    const id = parseInt(req.params.id); 
    
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    res.send(post);
});

app.post('/posts', (req, res)=>{
    const postData = req.body;
    if (!postData.name || !postData.content) {
        return res.status(400).send({ message: "Name and content are required" });
    }

    const newPost = {
        id: posts.length +1,
        name: postData.name,
        content: postData.content
    }
    posts.push(newPost);
    for(post of posts)
    {
        console.log(post);
    }
    
    res.status(201).send(newPost);
});

app.listen(5000, 'localhost', () => {
    console.log('server listening on port 5000');
});