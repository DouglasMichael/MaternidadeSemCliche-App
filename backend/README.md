# Maternidade sem Clichê - Back End

Consiste em desenvolver uma plataforma de backend para gerenciar informações e acessos ao aplicativo React Native, voltado ao apoio psicológico de mães em diferentes fases da maternidade.

## Equipe do projeto

Gabriel de Oliveira Batista

Michael Douglas Camilo Lopes

Gabriel Tejero Carazzatto

## Sumário

1. Requisitos
2. Tabelas do banco de dados
3. Configuração de acesso ao banco de dados (.env)
4. Estrutura do projeto
5. Instale os requisitos do projeto
6. Execute o projeto


---

🔧 **Requisitos**:
- Node.js 22+
- Express
- Banco de dados: SQLite

---

🗃️ **Tabelas do banco de dados**:

**Tabela `usuarios`**
- `user_id`: UUID ou int (chave primária)
- `nome`: text (não nulo)
- `data_nascimento`: text
- `email`: text
- `telefone`: text
- `senha`: text

**Tabela `consultas_psicologia`**
- `consulta_id`: UUID ou int (chave primária)
- `motivo_consulta`: text
- `data_consulta`: text
- `user_id`: chave estrangeira (referência à tabela `usuarios`)

---

🔐 **Configuração de acesso ao banco de dados (.env)**:
```env
ACCESS_TOKEN=seu_token_de_acesso
REFRESH_TOKEN=seu_token_de_refresh
IP=seu_endereco_ip_ou_localhost
GMAIL_USER=email_usado_para_comunicar_clientes
GMAIL_APP_PASSWORD=codigo_para_uso_do_email
```

---

📁 **Estrutura do projeto**:
```
maternidade-backend/
├── node_modules/
├── .env
├── .gitignore
├── AuthServer.js
├── connection.js
├── maternidadeSemCliche.db
├── package-lock.json
├── package.json
```

---

📦 **Instale os requisitos do projeto**:
```bash
npm install
```

---

🚀 **Execute o projeto**:
```bash
node AuthServer.js
```
