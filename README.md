# HitssBlog

Exemplo usando NuxtJS de um workflow de gerenciamento de conteúdo.

## Características
Esse projeto é apenas uma demonstração. Não usa nenhuma integração com banco de dados, no entanto possui uma pequena API para exemplificar o usu dos recursos SSR do Nuxt3.  
### Destaques

 * Nuxt 3: O projeto usa Nuxt3
 * Nuxt Layers: Este projeto usa Nuxt Layers, utilizando uma biblioteca de componentes para facilitar a criação de layouts. [NUXT LAYOUT COMPOSITIONS](https://github.com/pisandelli/nuxt-layout-compositions). Esta biblioteca é altamente inspirada no conceito de "Intrinsic Layouts" e seus componentes inspirados nas ideias de [EVERY LAYOUT](https://every-layout.dev/)
 * CSS Preprocessor: Este projeto utiliza [Stylus](https://stylus-lang.com/) como pré-processador, o qual sou entusiasta e sponsor. A sintaxe é pythonica e é praticamente a mesma do SASS.
 * Template engine: Este projeto utiliza [PUG](https://pugjs.org) por facilitar a escrita de HTML.

## Workflow
### Login
  É necessário fazer login para acessar o sistema. Você pode utilizar qualquer um desses usuários.  
  * Jane Doe
    * usuário: jane@example.com
    * senha: 123
  * John Doe
    * usuário: john@example.com
    * senha: 000
  * Bob Smith
    * usuário: bob@example.com
    * senha: abc  
  
  Estes usuários estão registrados no arquivo `/Data/users.ts`

### Pagina inicial
  A página inicial mostrará uma lista de posts pré-definidos. O link para cada post não foi implementado por não agregar ao desafio. Para administrar os posts, clique no botão _Admin_ na barra azul superior.  

### Admin
  A Página de Admin mostrará a lista de posts mas com os botões de ação necessários para gerenciar os posts.

  * Nova Postagem: Levara a página de adicionar post. Nela você encontrará o formulário para adicionar um post. Alguns campos, como a imagem do post foram omitidos por não agregarem valor ao desafio.
  * Excluir: Este botão exclui imediatamente o post. Não foi implementada nenhuma confirmação.
  * Editar: Este botão levará à página de edição do post levando em consideração seu ID.

Os dados estão sendo persistidos no Pinia e em sessionStorage.  

### Logout
  Para sair do sistema, clique no botão _Logout_ na barra azul superior.


## Instalação

Depois de clonar o repositório rode os seguintes comandos.

```
pnpm install && pnpm dev
```

Para testar em um celular na rede digite
```
pnpm dev --host
```
E siga a URL local criada.

É possivel rodar o projeto usando `npm` ou `yarn`. Para usar o `pnpm` não esqueça de adicionar no seu arquivo `.npmrc` a entrada:
```
shamefully-hoist=true
```

## Requisitos
 * Node v18 ou superior

Algumas extensões recomendadas seguem na pasta `.vscode` caso use este editor.