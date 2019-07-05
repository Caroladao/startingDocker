# docker/Dockerfile
# Imagem que será utilizadacomo base
FROM node:10.5
# Diretório do container onde os comandos serão executados 
WORKDIR /usr/src/app
# Copia os arquivos da aplicação para o WORKDIR
COPY . .
# Variável de ambiente para que o node execute em modo de produção
ENV NODE_ENV production
# Expõe a porta utilizada pela aplicação
EXPOSE 8888
# Instala as dependências da aplicação no momento da criação da imagem 
RUN npm install --only=production
# Comando executado no momento em que o container se inicia
CMD [ "npm", "start" ]