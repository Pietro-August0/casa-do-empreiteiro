# Casa do Empreiteiro

Site institucional da Casa do Empreiteiro, loja de materiais para construção em Cotia-SP. A página apresenta a loja, as categorias de produtos e os serviços de NR e segurança do trabalho, com contato direto pelo WhatsApp.

![Prévia da página inicial da Casa do Empreiteiro](assets/preview-desktop.png)

## Funcionalidades

- layout responsivo para desktop, tablet e celular
- catálogo interativo com 11 categorias de produtos
- galerias de fotos da loja e dos treinamentos NR
- navegação por seções, menu mobile, FAQ e lightbox acessíveis por teclado
- integração com WhatsApp, Instagram e Google Maps
- suporte à preferência por movimento reduzido
- metadados, sitemap, robots.txt e dados estruturados para busca e compartilhamento

## Tecnologias

- HTML5 semântico
- CSS3 responsivo
- JavaScript sem frameworks
- Font Awesome para ícones
- Google Fonts e Google Maps

O projeto não possui etapa de build, backend ou banco de dados.

## Como executar

Não é necessário instalar dependências. É possível abrir o arquivo `index.html` diretamente no navegador.

Para executar por um servidor local, use a extensão Live Server do VS Code ou, com Node.js disponível:

```bash
npx --yes serve .
```

Depois, abra o endereço informado pelo comando no navegador.

## Estrutura

```text
/
├── index.html
├── robots.txt
├── sitemap.xml
├── css/
│   ├── style.css
│   └── products.css
├── js/
│   └── main.js
├── assets/
│   ├── README.md
│   ├── fotos-loja/
│   ├── fotos-produtos/
│   └── fotos-treinamentosNR/
└── README.md
```

O arquivo `assets/README.md` registra a organização das mídias. A pasta também preserva parte do acervo bruto recebido da loja; nem todos esses arquivos são carregados pela página.

## Status e publicação

O site está funcional e pronto para hospedagem estática. Os arquivos de SEO usam `https://casadoempreiteiroepis.com.br/` como domínio público. Se o domínio definitivo for outro, atualize esse endereço em `index.html`, `robots.txt` e `sitemap.xml`.

## Contato da loja

- WhatsApp: (11) 91440-8209
- E-mail: casadoempreiteiro26@gmail.com
- Instagram: [@casadoempreiteiro](https://instagram.com/casadoempreiteiro)
- Google Maps: [Casa do Empreiteiro](https://maps.app.goo.gl/1MghBiiATcDAtLvJ7)
- Endereço: Estrada da Roselândia, 1960 — Cotia, SP
