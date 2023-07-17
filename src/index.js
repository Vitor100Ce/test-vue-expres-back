const express = require('express')
const app = express ();
const cors = require('cors');
const PORT = 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api', (req, res)=>{
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    // Faça o processamento necessário com os dados recebidos
    console.log(nome)
  
    res.json({ message: 'Dados do formulário recebidos com sucesso!' });
})

app.get('/api', (req, res)=>{
 
    const empresa = 'Nova Empresa'
    res.json({ empresa });
    
})




app.listen(PORT, ()=>{
    console.log(`Servidor iniciou na porta ${PORT}`)
})