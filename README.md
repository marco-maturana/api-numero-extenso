# api-numero-extenso

Esta API tem como propósito converter números inteiros entre [-99999, 99999] para o valor por extenso. Por exemplo:

-31937 = "menos trinta e um mil novecentos e trinta e sete"

0 = "zero"

10 = "dez"

1009 = "mil e nove"

A API conta com dois endpoints que retornam o mesmo resultando, porem, um utiliza o algoritmo fornecido pela biblioteca [extenso.js](https://extenso.js.org) e outro utiliza um algoritmo próprio.

**Endpoint utilizando a biblioteca [extenso.js](https://extenso.js.org)**

``http://localhost:3000/:valor``

**Endpoint utilizando o próprio algoritmo**

``http://localhost:3000/v2/:valor``

Por padrão o servidor será executado na porta *3000*, porem, se desejar, basta criar um arquivo *.env* com base no arquivo *.env.example* e definir o valor de *APP_PORT* com a porta desejada.

### Executando a aplicação

* Instale o [node.js](https://nodejs.org/en/). É aconselhado que se utilize a versão 10.15.

* Apos instalar o [node.js](https://nodejs.org/en/), instale a biblioteca *yarn* de forma global. Como administrador (root) digite o seguinte comando:

``npm -g i yarn``

* Acesse a pasta do projeto

#### Executando a aplicação em produção**

* Compile a aplicação:

``yarn build``

* Inicie a aplicação:

``yarn start``

#### Executando a aplicação em desenvolvimento**

``yarn dev``

#### Executando os testes da aplicação**

``yarn test``

#### Executando a aplicação em um container docker**

* Efetue o download da imagem:

``docker pull marcomaturana/api-numero-extenso``

* A aplicação será executada por padrão na porta 3000, então será necessário efetuar o redirecionamento da porta.

``docker run --name api-numero-extenso -p 8080:3000 -d marcomaturana/api-numero-extenso``
