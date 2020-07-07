<h3 align="center">
  <img src="https://img.icons8.com/color/96/000000/docker-container.png"/><br/>
  <b>Docker container</b>
  <br/>
  <img src="https://img.shields.io/badge/with-Docker-blue?style=for-the-badge&logo=docker">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Ryannnkl/Docker-Nodejs?logo=github&logoColor=white&style=for-the-badge">
</h3>

### Porque usar Docker em um projeto?

> Aqui tem [Neste site](https://stack.desenvolvedor.expert/appendix/docker/porque.html) a varios "por ques" de utilizar docker para ambiente de desenvolvimento

### Do que precisa?

- [Docker](https://www.docker.com/)
- [Nodejs](https://nodejs.org/)

### Como rodar?

```bash
git clone https://github.com/Ryannnkl/Docker-Nodejs.git

cd Docker-Nodejs

npm install

docker build -t ryann/dockernode .

docker-composer up
```

---

rode `docker ps` para receber informações do docker rodandona sua maquina

rode `docker stop "container_id"` para para um servidor que estja rodando indevidamente

rode `docker rm "container_id"` para remover um docker

---

### Docs

- `Dockerfile`

  - Dockerfile é o arquivo de configrações pra o docker nele fica as ferramentas que VM vai utilizar como o Node

- `.dockerignore`

  - Pacotes/arquivos que o docker deve iguinorar ao ser executado

- `docker-compose.yml`
  - Arquivo de configurações de serviços do docker como mongodb,postgres,redis etc...
