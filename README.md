# 🤱 Maternidade Sem Clichê

Aplicativo mobile desenvolvido em **React Native** para apoiar a psicóloga **Letícia Carazzatto**, criadora da página _Maternidade Sem Clichê_. O app oferece apoio emocional, informações relevantes e acesso facilitado à profissional para mães em diferentes fases da maternidade.

📲 Instagram de contato: [@maternidadesemcliche](https://www.instagram.com/maternidadesemcliche)

---
🔧 **Requisitos do Projeto (App Frontend - React Native)**

- **Node.js** 18+ (recomendado para compatibilidade com Expo)
- **Expo SDK** ~52.0.40
- **TypeScript** ^5.3.3
- **React Native** 0.76.7
- **React** 18.3.1

---

## ✨ Funcionalidades

- 📚 Conteúdos informativos sobre maternidade.
- 🗓️ Acesso à agenda da psicóloga para agendamento de consultas.
- 💡 Dicas práticas sobre saúde mental, autocuidado e apoio emocional.
- 🔔 Notificações personalizadas com mensagens de acolhimento.
- 📘 Acesso a e-books e outros materiais informativos.

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Axios](https://axios-http.com/) — para comunicação com APIs

---

📁 **Estrutura do Projeto**

```
maternidadesemcliche-app/
├── .expo/
├── node_modules/
├── build/
├── screenshots/
├── src/
│   ├── app/
│   │   ├── Article.tsx
│   │   ├── Booking.tsx
│   │   ├── Community.tsx
│   │   ├── E-book.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Profile.tsx
│   │   └── Register.tsx
│   ├── assets/
│   ├── Components/
│   │   ├── Avatar.tsx
│   │   ├── Button.tsx
│   │   ├── Divider.tsx
│   │   ├── Enterwith.tsx
│   │   ├── Header.tsx
│   │   ├── Input.tsx
│   │   ├── Navigator.tsx
│   │   ├── SocialMedia.tsx
│   │   └── Toast.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── lib/
│   │   └── utils.tsx
│   └── routes/
│       ├── AppStack.tsx
│       ├── AuthStack.tsx
│       ├── index.tsx
│       └── interface.ts
├── .gitignore
├── app.json
├── App.tsx
├── babel.config.js
├── eas.json
├── global.css
├── index.ts
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```
## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado (recomenda-se a versão LTS)
- npm ou yarn
- Expo CLI:
  ```bash
  npm install -g expo-cli
  ```

🔐 **Variáveis de Ambiente**

Este projeto utiliza variáveis de ambiente para configurar parâmetros de acesso. A variável **`BACK_END_URL`** é necessária para definir o URL do backend, que será utilizado pelo aplicativo React Native para se comunicar com o servidor.

Crie um arquivo `.env` na raiz do seu projeto com o seguinte conteúdo:

```env
BACK_END_URL=https://seu-backend-url-aqui.com
```

Substitua `https://seu-backend-url-aqui.com` pelo URL real do seu backend. Certifique-se de que este arquivo **não seja commitado** no repositório, pois ele pode conter informações sensíveis. Para garantir isso, adicione `.env` no arquivo `.gitignore`.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/DouglasMichael/MaternidadeSemCliche-App.git
   cd MaternidadeSemCliche-App
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o projeto com o Expo:**
   ```bash
   npm start
   # ou
   expo start
   ```

4. **Abra o app no seu dispositivo:**
   - Instale a build do app em seu celular no diretório **build/**.
   - Escaneie o QR Code exibido no terminal ou no navegador.

---
## 📷 Imagens da Aplicação e Fluxo de Uso

### 🔐 Tela de Login
Tela inicial onde o usuário insere suas credenciais para acessar o aplicativo.

[![Login](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/login.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/login.png)

---

### 📝 Tela de Cadastro
Permite que novos usuários criem uma conta informando nome, email, senha e telefone.

[![Cadastro](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/TelaDeCadastro.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/TelaDeCadastro.png)

---

### 🔒 Esqueci minha Senha - Etapas de Recuperação
Processo de redefinição de senha dividido em etapas:
1. Inserir email
2. Inserir código de verificação
3. Trocar senha

[![Esqueci Senha - Email](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/TelaEsqueceuSenhaEmailRecuperacao.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/TelaEsqueceuSenhaEmailRecuperacao.png)  
[![Esqueci Senha - Código](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaEsqueceuSenhaEsperandoVerificar.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaEsqueceuSenhaEsperandoVerificar.png)  
[![Esqueci Senha - Trocar Senha](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/TelaEsqueceuSenhaTrocarSenha.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/TelaEsqueceuSenhaTrocarSenha.png)

---

### 🏠 Tela Home
Tela principal após o login, com destaques e atalhos para os recursos do app.

[![Home](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/home.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/home.png)

---

### 📚 Tela de Conteúdo e Artigos
Lista de artigos e conteúdos informativos sobre maternidade, psicologia e bem-estar.

[![Artigos](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/TelaConteudoEArtigos.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/TelaConteudoEArtigos.png)

---

### 📘 Tela de E-books
Visualização e acesso a materiais em formato de e-book para leitura.

[![E-books](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaDeEbook.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaDeEbook.png)

---

### 👥 Tela de Grupos de Apoio
Exibe grupos disponíveis para troca de experiências e suporte entre mães.

[![Grupos](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaDeGruposDeApoio.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaDeGruposDeApoio.png)

---

### 📅 Tela de Agendar Consulta
Permite que a usuária agende consultas com profissionais disponíveis.

[![Agendar Consulta](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaAgendarConsulta.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaAgendarConsulta.png)

---

### 🙍 Tela de Usuário / Perfil
Informações pessoais do usuário, com opções de edição e visualização.

[![Usuário](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaDeUsuario.png)](https://github.com/DouglasMichael/MaternidadeSemCliche-App/blob/master/screenshots/telaDeUsuario.png)

---

## 💌 Contribuições

Sinta-se à vontade para abrir issues ou pull requests. Toda ajuda é bem-vinda para tornar o projeto ainda melhor!

---
