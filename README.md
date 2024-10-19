# projeto-visualizacao-notas

## Este projeto visa:

- Receber dados sobre as notas de uma turma de alunos.
- Cada nota deve ser representada no gráfico de barras.
- O gráfico de barras deve mostrar as notas no eixo y e os nomes dos alunos no eixo x.
- O usuário deve ser capaz de visualizar o gráfico e analisar o desempenho dos alunos.

- Site do projeto publicado no [netlify](https://visualizacao-de-notas.netlify.app/)

![Tela com as notas](./img/tela-das-notas.png)

## Perguntas Teóricas

Diferença entre null e undefined em JavaScript:

> null é um valor atribuído explicitamente a uma variável para indicar que ela não tem valor. É intencional e representa a ausência de um objeto.
> undefined significa que a variável foi declarada, mas ainda não recebeu um valor atribuído. É o valor padrão para variáveis não inicializadas ou propriedades de objetos que não existem.

Diferença entre classes e IDs em CSS:

> Classes (.): São utilizadas para aplicar estilos a vários elementos. Você pode atribuir a mesma classe a diferentes elementos na página. Em CSS é representada por um ponto (.).
> IDs (#): São usados para identificar elementos únicos na página. Cada ID deve ser único e aplicado apenas a um único elemento. Em CSS é representado por uma cerquilha (#).

Como são atribuídas as propriedades dos objetos em JavaScript:

> As propriedades podem ser atribuídas diretamente ao criar um objeto usando notação literal:

```
  let pessoa = { nome: 'João', idade: 25 };
```

> Ou podem ser adicionadas/modificadas depois que o objeto já foi criado:

```
  pessoa.altura = 1.75;
```

> Também pode-se usar colchetes para definir propriedades dinamicamente:

```
  pessoa['cidade'] = 'São Paulo';
```

O que são objetos de Tela (Canvas) em JavaScript:

> Objetos de tela (Canvas) são usados para desenhar gráficos via JavaScript em uma página HTML. O elemento <canvas> cria uma área de desenho, onde você pode usar JavaScript para desenhar formas, gráficos, imagens, etc. Usando o contexto de desenho (2d ou webgl), você manipula as formas e gráficos.
> html:

```
  <canvas id="meuCanvas" width="200" height="100"></canvas>
```

javascript

```
  let canvas = document.getElementById('meuCanvas');
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 150, 75);
```

O que é DOM em JavaScript? Como usar DOM e eventos?:

> DOM (Document Object Model) é uma interface de programação para documentos HTML e XML. Ele representa a estrutura de uma página como uma árvore de nós, onde cada elemento HTML é um nó.
> Você pode manipular o DOM para alterar o conteúdo, estilo e estrutura de uma página usando JavaScript:

```
  document.getElementById('elementoId').textContent = 'Novo texto';
```

> Eventos são ações que ocorrem na página (como cliques ou teclas pressionadas) e podem ser capturados e manipulados:

```
  document.getElementById('botao').addEventListener('click', function() {
    alert('Botão clicado!');
  });
```

Funcionamento dos temporizadores em JavaScript:

> JavaScript oferece duas principais funções para trabalhar com temporizadores:

- setTimeout: Executa uma função uma única vez após um determinado intervalo de tempo.

  ```
    setTimeout(function() { alert('Executado após 2 segundos'); }, 2000);
  ```

- setInterval: Executa uma função repetidamente após um intervalo de tempo especificado.

  ```
    setInterval(function() { console.log('Executado a cada 3 segundos'); }, 3000);
  ```

- Ambos podem ser cancelados com clearTimeout e clearInterval, respectivamente.

Diferença entre ViewState e SessionState:

> ViewState: Em ASP.NET, é um mecanismo de persistência que armazena dados da interface do usuário (UI) entre requisições no lado do cliente (no próprio formulário HTML). É útil para reter o estado da página em postbacks (envia dados de volta ao servidor para processamento), mas não pode ser compartilhado entre páginas.

> SessionState: Armazena dados no servidor durante a sessão do usuário. Esses dados podem ser acessados em diferentes páginas da aplicação. O SessionState é mais adequado para dados globais que precisam estar disponíveis entre diferentes requisições e páginas, mas consome mais recursos do servidor.
