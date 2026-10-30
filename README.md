# 🐾 Inglês Veterinário

Plataforma gratuita, em HTML/CSS/JavaScript puro, para praticar **inglês de medicina veterinária** no estilo Duolingo: trilha com níveis, lições curtas, XP, ofensiva diária, flashcards com repetição espaçada, dicionário pessoal e casos clínicos simples de cães, gatos, cavalos e bovinos.

## Como usar

- **Online:** ative o GitHub Pages (Settings → Pages → Deploy from branch → `main` / root) e acesse a URL gerada.
- **Local:** basta abrir o `index.html` no navegador. Não tem instalação nem build.

### Salvar e levar o progresso para outro navegador

O progresso fica salvo no próprio navegador (`localStorage`). Clique em **Salvar dados** no menu (ou no 💾 da barra do celular, ou em **Ajustes → Seus dados**) e escolha uma opção:

- **Arquivo JSON:** baixe o arquivo `.json` e, no outro navegador, use **Carregar arquivo**. É a melhor opção para guardar backup (Drive, e-mail).
- **Link de transferência:** copie o link e abra-o no outro navegador ou celular. Os dados vão compactados dentro do próprio link e nada é enviado para servidor.
- **Copiar/colar código:** a mesma ideia do link, só que em texto. O campo de colar também aceita o JSON ou o link.

Na hora de carregar, se o navegador já tiver progresso, dá para **Mesclar** (fica com o melhor dos dois: XP, lições, flashcards, meu dicionário e anotações) ou **Substituir**. A tela inicial lembra de fazer backup quando passam 7 dias sem um.

## Funcionalidades

| Área | O que tem |
|---|---|
| **Aprender** | Trilha com 4 seções (A1 → B2) e 22 unidades. Cada unidade tem Lição 1, Lição 2, Lição 3, Leitura e Desafio final (é preciso 70% para passar). As unidades vão sendo desbloqueadas em sequência, ou todas de uma vez no *modo livre*. |
| **Exercícios** | Tradução EN↔PT, ouvir e escolher, definição → termo, completar lacunas, montar frases, combinar pares, escrever, ditado e pronúncia com microfone. Quem erra revê o exercício no fim da lição. |
| **Praticar** | Revisão inteligente (repetição espaçada), treino misto, meus erros, meu dicionário, contra o relógio (60 s), ditado, pronúncia, prefixos e abreviações veterinárias. |
| **Flashcards** | Cartões que viram, em EN→PT ou PT→EN. Você avalia com Errei / Difícil / Bom / Fácil e o app agenda a próxima revisão (caixas de Leitner). |
| **Dicionário** | 352 termos com tradução, pronúncia aproximada, definição em inglês simples, frase de exemplo, áudio e links para YouGlish, Cambridge e Merriam-Webster. |
| **⭐ Meu dicionário** | Salve as palavras difíceis com ★ (no dicionário, nas lições e nos flashcards), crie palavras próprias e faça anotações. As palavras que você erra aparecem como sugestão. Dá para exportar para Anki ou CSV e imprimir. |
| **Casos clínicos** | 8 casos curtos em inglês simples (parvovirose, atropelamento, doença renal felina, cólica equina, otite, intoxicação por chocolate, mastite e cardiomiopatia felina), com glossário clicável, áudio e perguntas de compreensão. |
| **Progresso** | Nível (de Calouro a Lenda da Veterinária), XP, ofensiva, precisão, gráfico de XP dos últimos 14 dias com a meta e 20 conquistas com o andamento de cada uma. |
| **Ajustes** | Nome, meta diária, sotaque US/UK, velocidade do áudio, efeitos, exercícios de fala, modo livre, tema e backup. |

O áudio usa a síntese de voz do próprio navegador. O exercício de pronúncia precisa de reconhecimento de voz (Chrome ou Edge).

## Conteúdo

São **22 unidades** e **352 termos** de inglês veterinário, com pequenos e grandes animais: clínica e equipe, espécies e categorias (canine, feline, equine, bovine…), anatomia externa (paw, hoof, withers, udder), esqueleto, comportamento e manejo, sinais clínicos, anamnese com o tutor, exame físico, prefixos e sufixos, radiografia e ultrassom, sistemas cardiovascular, respiratório, digestivo (incluindo ruminantes e cólica equina) e urinário, pele/orelhas/olhos, vacinas, parasitas e zoonoses (One Health), medicamentos, cirurgia e anestesia, emergência e intoxicações, exames laboratoriais, abreviações veterinárias (SOAP, BAR, PU/PD, SID, OHE) e falsos cognatos (como *put to sleep*, que é eutanásia, não anestesia).

O conteúdo foi escrito com base em fontes de referência como o MSD Veterinary Manual, a WOAH, o CDC (One Health), as diretrizes da WSAVA e da AAHA, a RECOVER Initiative e o ASPCA Animal Poison Control.

## Estrutura

```
index.html      # casca da aplicação
css/style.css   # estilos (responsivo, tema claro/escuro)
js/data.js      # todo o conteúdo: unidades, palavras, leituras, casos, recursos
js/charts.js    # gráfico de barras do Progresso (SVG, sem dependências)
js/app.js       # lógica: trilha, exercícios, SRS, dicionário, progresso, ajustes
```

### Design

O visual é no estilo Duolingo:

- **Trilha:** nós redondos em 3D num caminho em zigue-zague, cinco por unidade (três lições, a leitura e o desafio). Ao tocar num nó, abre um balão com a etapa e o botão de começar.
- **Unidades:** cada uma tem uma faixa colorida com o botão "Guia", e as cores mudam por seção (verde, azul, roxo e laranja).
- **Bento, o mascote:** um cãozinho de jaleco e estetoscópio que acompanha a trilha, dá as boas-vindas e comemora o fim das lições.
- **Coluna lateral:** mostra a ofensiva, a meta diária, as **missões do dia** (bônus de +20 XP ao completar as quatro), a palavra do dia e o meu dicionário. No celular, ela vira uma barra compacta no topo.
- **Lições:** contador de acertos seguidos, botões 3D, fonte Nunito e retorno verde ou vermelho no rodapé.
- **Temas:** claro e escuro.

### Adicionar conteúdo

Edite `js/data.js`. Cada palavra segue o formato:

```js
W("Inglês", "Português", "pronúncia aproximada", "Definição simples em inglês.", "Frase de exemplo que contém o termo.")
```

A frase de exemplo precisa conter o termo em inglês, porque é dela que saem os exercícios de lacuna e de montar frase. Para criar uma unidade nova, adicione um objeto em `UNITS` com `id`, `section`, `icon`, `title`, `en`, `words` e `reading`.

> Conteúdo educacional para prática de idioma. Não substitui fontes clínicas nem orientação médico-veterinária.
