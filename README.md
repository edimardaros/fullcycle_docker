# fullcycle_docker

# Estudos de Docker da FullCycle.

Arquivos utilizados no curso de docker da Full Cycle.

## docker compose

Foi criado o arquivo `docker-compose.yalm`. Neles estão as configurações para inicialização do node(chamado de *app*) e do mysql(chamado de *db*).

Os dois estão em uma mesma *network* chamada de **node-network**.

Para o *node* foi direcionada a porta 3000 do host para o container. O MySQL possui acesso somente via node, sem acesso externo.

A implementação do `dockerize` foi feita para garantir que o MySQL tenha iniciado e esteja disponível para que então o *node* inicie.

Dentro do arquivo `Dockerfile` do node está configurada a instalação do `dockerize` para quando o container for iniciado.

## Inicializar MySQL e Aplicação Node

Para criar os containers, utilizar o seguinte comando:

```
docker compose up -d --build
```

Ele irá gerar a build das imagens e iniciar os containers.

### Para verificar status e mensagens

Para verificar se eles foram iniciados corretamente, é possível ver o log de cada container com os comandos:

```
docker logs app

docker logs db
```

# Criar tabelas no MySQL

Entrar no bash do container do mysql:

```
docker exec -it db bash
```

Conectar no banco de dados via linha de comando:
```
mysql -u root -proot
```

Para versões mais novas do MySQL, é necessário executar esse comando para liberar conexões da forma como foi organizado no node:

```
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';

FLUSH PRIVILEGES;
```

Acessar o banco de dados `nodedb` e criar a tabela usada no teste:

```
use nodedb;

create table people (id int not null auto_increment, name varchar(255), primary key(id));
``` 


# Pastas **nginx** e **laravel** 
As pastas nginx e laravel foram utilizadas em testes anteriores.

Eles possuem arquivos `Dockerfile` para iniciar seus containers, com seus respectivos serviços.