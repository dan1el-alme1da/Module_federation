# Module_federation

# 📦 Projeto Webpack

## 📜 Descrição
Este projeto utiliza o **Webpack** para empacotamento e otimização de recursos front-end. Ele foi configurado para:
- Compilar **JavaScript moderno**;
- Processar arquivos **CSS e SASS**;
- Otimizar **imagens e recursos estáticos**;
- Melhorar o **desempenho** da aplicação.

## 🚀 Tecnologias Utilizadas
- 🛠 **Webpack**
- 📜 **JavaScript (ES6+)**
- 🎨 **CSS / SASS**
- 🔄 **Babel**
- 🎛 **PostCSS**

## 📂 Estrutura do Projeto
```
/projeto-webpack
│-- /src
│   │-- index.js
│   │-- styles.css
│-- /dist
│-- webpack.config.js
│-- package.json
│-- .babelrc
│-- .gitignore
```

## 🛠 Instalação
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto-webpack.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd projeto-webpack
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## ▶️ Uso
### 🔧 Desenvolvimento
Para iniciar o modo de desenvolvimento com recarregamento automático:
```sh
npm run dev
```

### 📦 Produção
Para gerar a versão otimizada para produção:
```sh
npm run build
```

## ⚙️ Configuração
### 🔩 Webpack
O arquivo `webpack.config.js` está configurado para:
- **Entrada**: `src/index.js`
- **Saída**: `dist/main.js`
- **Transpilação** via Babel
- **Processamento** de CSS e imagens

## 🤝 Contribuição
Sinta-se à vontade para abrir **issues** e enviar **pull requests** para melhorias.

## 📜 Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
