## 🎬 Filmômetro

### Descrição

O Filmômetro é uma API REST para gerenciamento de filmes, avaliações e status de visualização.

A plataforma permite que usuários realizem cadastro e autenticação, avaliem filmes, atribuam notas e marquem filmes como assistidos ou para assistir.

O sistema também possui autenticação com JWT, proteção de rotas privadas e isolamento de dados, garantindo que usuários autenticados possam alterar apenas seus próprios registros.

---

### Funcionalidades

- Cadastro e autenticação de usuários
- CRUD de filmes
- CRUD de avaliações
- Controle de status de filmes
- Paginação nas listagens
- Proteção de rotas privadas

---

### Regras de Negócio

- Usuário não pode avaliar o mesmo filme mais de uma vez
- Apenas filmes marcados como "Assistido" podem receber avaliações
- Filmes ainda não lançados não podem receber avaliações
- Notas devem estar entre 0 e 10

---

### Segurança

- JWT para autenticação
- Senhas protegidas com bcrypt
- Middleware de autenticação
- Variáveis sensíveis armazenadas em `.env`

---

### Tecnologias

- Node.js
- Express
- TypeScript
- TypeORM
- PostgreSQL
- JWT
- bcryptjs

---

### Utilizar o .env

DB_TYPE=postgres  
DB_HOST=localhost 
DB_PORT=5432 
DB_USERNAME=postgres 
DB_PASSWORD=aluno 
DB_DATABASE=filmometro 
PORT=3000 

JWT_SECRET=filmometro_secret

