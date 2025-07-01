# Website Brunelly Baiocco

Este projeto utiliza Next.js com Pages Router e SCSS para estilização, seguindo uma arquitetura específica para organização do código.

## Estrutura do Projeto

```
website_brunelly_baiocco/
├── app/
│   └── components/           # Componentes reutilizáveis
│       ├── Header/
│       │   ├── Header.tsx
│       │   ├── Header.module.scss
│       │   └── index.ts
│       └── Footer/
│           ├── Footer.tsx
│           ├── Footer.module.scss
│           └── index.ts
├── pages/                   # Páginas da aplicação (Pages Router)
│   ├── _app.tsx            # Configuração global da aplicação
│   ├── index.tsx           # Página inicial (/)
│   └── sobre/
│       └── index.tsx       # Página sobre (/sobre)
├── styles/                 # Arquivos SCSS
│   ├── globals.scss        # Estilos globais
│   ├── pages/              # Estilos específicos das páginas
│   │   ├── index.module.scss
│   │   └── sobre.module.scss
│   └── components/         # Estilos específicos dos componentes
└── public/                 # Arquivos estáticos
```

## Convenções de Desenvolvimento

### 1. Páginas

**Localização:** Todas as páginas ficam em `pages/nomeDaPagina/index.tsx`

**Roteamento automático:**
- `pages/index.tsx` → `/`
- `pages/sobre/index.tsx` → `/sobre`
- `pages/contato/index.tsx` → `/contato`

### 2. Componentes

**Localização:** Todos os componentes ficam em `app/components/NomeDoComponente/`

**Estrutura de um componente:**
```
app/components/MeuComponente/
├── MeuComponente.tsx        # Lógica do componente
├── MeuComponente.module.scss # Estilos do componente
└── index.ts                 # Barrel export
```

### 3. Estilos SCSS

**Organização:**
- `styles/globals.scss` - Reset CSS e estilos globais
- `styles/pages/` - Estilos específicos de cada página
- `styles/components/` - Estilos específicos de componentes (caso necessário)
- Cada componente tem seu próprio `.module.scss`


## Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento (porta 7000)
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start

# Executar linter
npm run lint
```

## Dependências

- **Next.js 15.3.4** - Framework React
- **React 19** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Sass** - Pré-processador CSS
