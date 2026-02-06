# 🚴 Bikcraft - Portfólio de Estudos em HTML Semântico

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Um projeto focado em demonstrar as melhores práticas de HTML semântico, acessibilidade e estruturação de código**

[📖 Sobre](#-sobre-o-projeto) • [✨ Tecnologias](#-tecnologias) • [🎯 Objetivos](#-objetivos-de-aprendizado) • [📁 Estrutura](#-estrutura-do-projeto) • [🚀 Como Usar](#-como-usar)

</div>

---

## 📖 Sobre o Projeto

**Bikcraft** é um site institucional de uma empresa fictícia de bicicletas elétricas, desenvolvido como projeto de portfólio com foco principal em **HTML semântico** e **boas práticas de desenvolvimento web**.

Este projeto foi criado para demonstrar:
- Uso correto de elementos HTML semânticos
- Acessibilidade web (WCAG)
- Design responsivo
- Organização e modularização de CSS
- Performance e otimização
- SEO básico

---

## ✨ Tecnologias

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização modular e responsiva
- **JavaScript (Vanilla)** - Interatividade e animações
- **Simple Anime** - Biblioteca de animações

---

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido com foco em:

### HTML Semântico
- Uso adequado de elementos semânticos (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Hierarquia correta de títulos (`<h1>` a `<h6>`)
- Elementos de conteúdo semântico (`<blockquote>`, `<picture>`, `<time>`)
- Meta tags e SEO básico

### Acessibilidade
- Atributos `aria-label` para navegação
- Textos alternativos descritivos em imagens
- Estrutura navegável por leitores de tela
- Contraste adequado de cores

### CSS Modular
- Organização por componentes e páginas
- Uso de variáveis CSS
- Metodologia BEM (Block Element Modifier)
- Responsividade mobile-first

### Performance
- CSS minificado (`style.min.css`)
- Preload de recursos críticos
- Otimização de imagens
- Lazy loading de animações

---

## 📁 Estrutura do Projeto

```
bikecraft/
│
├── 📄 index.html              # Página inicial
├── 📄 bicicletas.html         # Lista de bicicletas
├── 📄 seguros.html            # Planos de seguro
├── 📄 contato.html            # Página de contato
├── 📄 orcamento.html          # Formulário de orçamento
├── 📄 termos.html             # Termos e condições
│
├── 📂 bicicletas/             # Páginas individuais de produtos
│   ├── magic.html
│   ├── nimbus.html
│   └── nebula.html
│
├── 📂 css/                    # Estilos organizados por módulos
│   ├── global/                # Estilos globais
│   ├── home/                  # Componentes da home
│   ├── bicicletas/            # Páginas de bicicletas
│   ├── seguros/               # Páginas de seguros
│   ├── contato/               # Páginas de contato
│   ├── utilidades/            # Utilitários e componentes
│   └── style.min.css          # CSS minificado
│
├── 📂 js/                     # Scripts JavaScript
│   ├── script.js              # Script principal
│   ├── fomulario.js           # Validação de formulários
│   └── plugins/               # Plugins externos
│
└── 📂 img/                    # Imagens e assets
    ├── bicicletas/
    ├── icones/
    ├── parceiros/
    └── ...
```

---

## 🚀 Como Usar

### Pré-requisitos
Nenhum! Este projeto utiliza apenas tecnologias nativas do navegador.

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/bikecraft.git
   ```

2. **Navegue até a pasta do projeto**
   ```bash
   cd bikecraft
   ```

3. **Abra o arquivo `index.html` no navegador**
   - Você pode usar um servidor local como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code
   - Ou simplesmente abrir o arquivo diretamente no navegador

### Executando com Live Server (VS Code)

1. Instale a extensão "Live Server" no VS Code
2. Clique com o botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## Destaques Técnicos

### HTML Semântico em Ação

```html
<!-- Estrutura semântica clara -->
<header class="header-bg">
  <nav aria-label="primaria">
    <!-- Navegação principal -->
  </nav>
</header>

<main class="introducao-bg">
  <!-- Conteúdo principal -->
</main>

<article class="bicicletas-lista">
  <!-- Artigo independente -->
</article>

<section aria-label="Nossos Parceiros">
  <!-- Seção temática -->
</section>

<footer class="footer-bg">
  <!-- Rodapé -->
</footer>
```

### Acessibilidade

- Navegação por teclado funcional
- Atributos ARIA onde necessário
- Textos alternativos descritivos
- Contraste de cores adequado
- Estrutura lógica e hierárquica

### Responsividade

- Mobile-first approach
- Breakpoints bem definidos
- Uso de `<picture>` para imagens responsivas
- Layout flexível e adaptável

---

## 📸 Páginas do Projeto

- **Home** - Página inicial com introdução e destaques
- **Bicicletas** - Catálogo de produtos
- **Seguros** - Planos de seguro disponíveis
- **Contato** - Formulário e informações de contato
- **Orçamento** - Formulário de solicitação de orçamento
- **Termos** - Termos e condições de uso

---

## 🎓 Conceitos Aplicados

- **Semântica HTML5** - Elementos com significado claro
- **SEO Básico** - Meta tags, títulos hierárquicos
- **Acessibilidade Web** - WCAG guidelines
- **CSS Modular** - Organização por componentes
- **Performance** - Otimização de recursos
- **Responsive Design** - Mobile-first
- **Clean Code** - Código limpo e organizado

---

## 📝 Notas do Desenvolvedor

Este projeto foi desenvolvido como parte do meu aprendizado em desenvolvimento web front-end, com foco especial em:

- Compreensão profunda de HTML semântico
- Boas práticas de acessibilidade
- Organização e manutenibilidade de código CSS
- Estruturação de projetos web

---

## 🤝 Contribuições

Este é um projeto de portfólio/estudo, mas sugestões e feedback são sempre bem-vindos! 

Se você tiver alguma sugestão de melhoria ou encontrar algum problema, sinta-se à vontade para abrir uma issue.

---

## 📄 Licença

Este projeto é de código aberto e está disponível para fins educacionais.

---