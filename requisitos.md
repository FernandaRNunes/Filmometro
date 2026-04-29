## 2. Requisitos Funcionais (RF)

- RF01 - O sistema deve permitir o cadastro de usuários
- RF02 - O sistema deve permitir autenticação de usuários (login)
- RF03 - O sistema deve permitir o cadastro de filmes
- RF04 - O sistema deve listar todos os filmes cadastrados
- RF05 - O sistema deve permitir que usuários marquem filmes como "Assistido"
- RF06 - O sistema deve permitir que usuários marquem filmes como "Aguardando lançamento"
- RF07 - O sistema deve permitir que usuários autenticados criem avaliações de filmes
- RF08 - O sistema deve permitir que usuários editem suas próprias avaliações
- RF09 - O sistema deve permitir que usuários excluam suas próprias avaliações
- RF10 - O sistema deve listar avaliações de um determinado filme
- RF11 - O sistema deve listar apenas as avaliações do usuário logado
- RF12 - O sistema deve permitir atribuir uma nota ao filme
- RF13 - O sistema deve exibir a média de avaliações de cada filme

## 3. Requisitos Não Funcionais (RNF)

- RNF01 - A API deve ser desenvolvida em Node.js com TypeScript
- RNF02 - O projeto deve utilizar TypeORM para acesso ao banco de dados
- RNF03 - O banco de dados deve ser relacional (ex: PostgreSQL)
- RNF04 - As senhas dos usuários devem ser armazenadas de forma criptografada
- RNF05 - A API deve seguir o padrão REST
- RNF06 - Rotas protegidas devem exigir autenticação
- RNF07 - A API deve retornar dados no formato JSON
- RNF08 - O sistema deve tratar erros de forma padronizada

## 4. Regras de Negócio (RN)

- RN01 - Um usuário só pode avaliar um filme se ele estiver marcado como "Assistido"
- RN02 - Um usuário só pode avaliar um mesmo filme uma única vez
- RN03 - Filmes marcados como "Aguardando lançamento" não podem receber avaliações
- RN04 - A nota atribuída ao filme deve estar dentro de um intervalo válido (ex: 0 a 10)
- RN05 - Apenas usuários autenticados podem criar, editar ou excluir avaliações
- RN06 - O e-mail do usuário deve ser único no sistema
- RN07 - Um usuário só pode alterar ou excluir suas próprias avaliações
- RN08 - A média de avaliações de um filme deve ser atualizada automaticamente
