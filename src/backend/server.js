const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4001;


//const mainRoute = require("./routes/apiroute");

const date = new Date();

let tasks = [
  {
    "active": 1,
    "id": 1,
    "img": null,
    "level": 1,
    "task": "Тримаючи з рук долоню дівчини і ніжно дивлячись у вічі, чоловік розповідає, що йому здається найбільш привабливим у ній, що тягне і манить. Що особливе та незвичайне він відчуває, дивлячись на неї, в чому виражається її індивідуальність та сексуальна привабливість, що змушує мріяти про неї та викликає бажання. Після цього він ніжно цілує дівчину в губи."
  },
  {
    "id": 203,
    "name": "Jeremy",
    "number": "022 343 56 78",
    "editNum": false
  },
  {
    "id": 204,
    "name": "Agnes",
    "number": "021 324 44 54",
    "editNum": false
  },
  {
    "id": 205,
    "name": "Sarah",
    "number": "024 535 33 22",
    "editNum": false
  },
];

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
};

app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.get("/", (request, response) => {
  response.send("<h1>Hello from server !</h1>")
});

app.get("/info", (request, response) => {
  console.log("Access to info !")
  response.send(`<h4>Number of contacts : ${tasks.length}\
    people</h4> ${date}`).status(200).end();
});

app.get("/api/tasks", (request, response) => {
  response.json(tasks).status(200).end();
});

app.get("/api", (request, response) => {
  console.log("[-] 404 ERROR")
  response.status(404).end();
});

app.get('/api/tasks/:id', (request, response) => {
  const id = Number(request.params.id);
  console.log(id)
  const task = tasks.find(task => task.id === id);
  console.log("GET by ID", task);
  if (task) {
    response.json(task)
  } else {
    response.status(404).end();
  }
});

app.post('/api/tasks', (request, response) => {
  const task = request.body;
  console.log("Successfull added Task!");
  console.log(task);
  response.json(task).status(201).end();
});

app.put('/api/tasks/:id', (request, response) => {
  const id = Number(request.params.id);
  const task = tasks.find(task => task.id === id);
  console.log("Successfull PUT", task)
  response.json(task).status(200).end();;
});

app.delete('/api/tasks/:id', (request, response) => {
  const id = Number(request.params.id);
  const task = tasks.filter(task => task.id !== id);
  console.log("Successfull deleted !");
  console.log(task);
  response.json(task).status(204).end();
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
};

app.use(unknownEndpoint);

//For handling data with express routing :
//app.use("/", mainRoute);

app.listen(PORT, () => {
  console.log(`[+] Server is running on port : ${PORT}`)
});
