# Site PrimeFit Academia

Site institucional estático, leve e responsivo. Não exige dependências nem processo de build.

## Executar localmente

Abra `index.html` diretamente no navegador ou sirva a pasta com qualquer servidor estático. Exemplos:

```bash
npx serve .
# ou
python -m http.server 8080
```

Depois acesse `http://localhost:3000` ou a porta informada pelo servidor.

## Configurar antes de publicar

Edite `config.js` para inserir o número de WhatsApp (somente números, com DDI). O link de WhatsApp será gerado automaticamente em todos os CTAs.

No `index.html`, substitua todos os textos entre colchetes e as imagens de ambientação. Os dados ainda pendentes são:

- WhatsApp, endereço e horários;
- ano de fundação;
- diferenciais confirmados;
- serviços/modalidades e benefícios dos planos;
- nomes, condições e preços dos planos;
- depoimentos reais;
- fotos, logo oficial e imagem Open Graph final;
- domínio final em `sitemap.xml`.

## Publicar

Envie a pasta inteira para Netlify, Vercel, Cloudflare Pages ou qualquer hospedagem estática. Não há comando de build: o diretório publicado é a raiz do projeto. Em uma hospedagem tradicional, envie os arquivos por FTP para a pasta pública (`public_html`).

## Organização

- `index.html`: conteúdo e estrutura semântica;
- `styles.css`: tokens visuais e responsividade;
- `config.js`: dados de contato centralizados e links de WhatsApp;
- `public/images/`: destino para as imagens oficiais;
- `robots.txt` e `sitemap.xml`: base de SEO.
