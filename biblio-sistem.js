class Livro {
    constructor(titulo, autor, anoPublicacao) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.status = 'disponível';
    }
  
    emprestar() {
      if (this.status === 'disponível') {
        this.status = 'emprestado';
        return true;
      }
      return false;
    }
  
    devolver() {
      this.status = 'disponível';
    }
  }
  
  class Usuario {
    constructor(nome, id) {
      this.nome = nome;
      this.id = id;
      this.livrosEmprestados = [];
    }
  
    adicionarLivro(livro) {
      this.livrosEmprestados.push(livro);
    }
  
    removerLivro(livro) {
      this.livrosEmprestados = this.livrosEmprestados.filter(l => l !== livro);
    }
  }
  
  class Biblioteca {
    constructor() {
      this.livros = [];
      this.usuarios = [];
    }
  
    adicionarLivro(livro) {
      this.livros.push(livro);
    }
  
    registrarUsuario(usuario) {
      this.usuarios.push(usuario);
    }
  
    emprestarLivro(livro, usuario) {
      if (livro.emprestar()) {
        usuario.adicionarLivro(livro);
        console.log(`Livro "${livro.titulo}" emprestado para ${usuario.nome}.`);
      } else {
        console.log(`O livro "${livro.titulo}" não está disponível.`);
      }
    }
  
    devolverLivro(livro, usuario) {
      if (usuario instanceof Usuario && typeof usuario.removerLivro === 'function') {
        livro.devolver();
        usuario.removerLivro(livro);
        console.log(`Livro "${livro.titulo}" devolvido por ${usuario.nome}.`);
      } else {
        console.log('Erro: Usuário inválido ou método removerLivro não encontrado.');
      }
    }
  
    listarLivrosDisponiveis() {
      return this.livros.filter(livro => livro.status === 'disponível');
    }
  
    listarUsuarios() {
      return this.usuarios;
    }
  }
  
  const biblioteca = new Biblioteca();
  
  const livro1 = new Livro('1984', 'George Orwell', 1949);
  const livro2 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954);
  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);
  
  const usuario1 = new Usuario('Alice', 1);
  const usuario2 = new Usuario('Bob', 2);
  biblioteca.registrarUsuario(usuario1);
  biblioteca.registrarUsuario(usuario2);
  
  biblioteca.emprestarLivro(livro1, usuario1); // Deve emprestar o livro "1984" para Alice
  biblioteca.emprestarLivro(livro1, usuario2); // Deve informar que o livro não está disponível
  
  console.log('Livros disponíveis:', biblioteca.listarLivrosDisponiveis());
  
  biblioteca.devolverLivro(livro1, usuario1); // Deve devolver o livro "1984" para a biblioteca
  
  console.log('Livros disponíveis:', biblioteca.listarLivrosDisponiveis());
  