import express from "express";
import statusRoute from "./routes/status.router";
import usersRouter from "./routes/users.route";

const app = express();

// conf. da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Conf. Rotas
app.use(statusRoute);
app.use(usersRouter);

//Inicialização do servidor
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});
