# Contexto do projeto — CleanSpace 15

## Visão geral

O **CleanSpace 15** é um aplicativo web de organização doméstica que ajuda a cuidar da casa em tarefas pequenas, em vez de depender de um único dia de faxina pesada. A proposta original é usar blocos de 15 minutos, listas simples e armazenamento local, sem API.

O app tem dois modos complementares:

1. **Só 15 minutinhos** — para quem quer escolher uma tarefa pequena e cuidar de uma coisa de cada vez.
2. **Tenho mais tempo** — para quem prefere planejar tarefas por cômodo, dia da semana e frequência.

O modo de 15 minutos é a entrada principal. O planejamento semanal é uma opção, não uma etapa obrigatória nem uma expectativa para todos.

## Problema e intenção

Uma casa pode parecer limpa na superfície, mas ainda ter pequenos cuidados acumulados: limpar os botões e as laterais do fogão além da superfície, cuidar de partes diferentes da pia, limpar maçanetas, trilhos, ventiladores, gavetas ou espaços sob os móveis.

O app torna essas tarefas visíveis e menores para que possam ser distribuídas ao longo do tempo. A intenção é reduzir a sensação de que é preciso fazer uma faxina completa de uma só vez — não impor um padrão de casa perfeita.

## Público e tom

O CleanSpace 15 deve ser acolhedor para pessoas com pouco tempo ou energia, inclusive quem convive com depressão ou dificuldade de iniciar tarefas. O app não diagnostica, trata nem substitui apoio profissional. Seu papel é oferecer uma ferramenta prática e sem julgamento.

Princípios de linguagem e experiência:

- Uma tarefa concluída já é uma contribuição; não é necessário completar a lista.
- Descansar, pausar ou deixar uma tarefa para depois são opções válidas.
- Tarefas devem ser sugestões editáveis, não obrigações universais.
- Evitar culpa, urgência artificial, sequências punitivas, mensagens negativas e comparações.
- A cama arrumada ou qualquer outra tarefa pessoal não deve ser apresentada como requisito.
- Não usar uma expressão facial triste para indicar tarefas pendentes.
- Dar preferência a verbos e instruções concretas, com escopo pequeno: por exemplo, “limpar os botões do fogão”, em vez de apenas “limpar a cozinha”.

## Modos de uso

### 1. Só 15 minutinhos

Uma lista simples, independente do calendário semanal, permite adicionar, filtrar, concluir e remover tarefas. O cronômetro começa em 15 minutos e pode ser pausado ou reiniciado. Concluir uma tarefa não significa que todas as outras precisem ser feitas.

As tarefas concluídas nessa lista são registradas para a data atual e voltam a aparecer como pendentes em outro dia. A lista é salva no `localStorage` do navegador.

### 2. Tenho mais tempo

O planejador mostra os sete dias da semana, permite navegar entre semanas e filtrar tarefas por cômodo. Cada tarefa pode ser configurada como diária, semanal ou mensal, com dia da semana e, para tarefas mensais, semana do mês.

As sugestões são removíveis e podem ser complementadas por tarefas personalizadas. O calendário deve continuar flexível: dias livres são aceitáveis e não precisam ser preenchidos.

## Organização das tarefas

As sugestões atuais são inspiradas no arquivo `Limpeza diária_.pdf`, que contém:

- cuidados diários, como lavar ou guardar louça, limpar a superfície do fogão, colocar roupa suja no cesto e guardar itens usados;
- uma distribuição semanal por cômodo, incluindo quarto, cozinha, banheiro, sala, roupas e áreas externas;
- tarefas de manutenção e faxina mais profunda, como limpar laterais e botões do fogão, cuidar de uma prateleira da despensa, tirar pó do ventilador, limpar trilhos ou maçanetas e organizar uma gaveta.

O documento de limpeza descreve uma rotina específica, não uma regra para todas as casas. Por isso, o aplicativo apresenta as sugestões como exemplos: nem todo lar tem varanda, quintal, ventilador, despensa ou os mesmos cômodos e objetos. A pessoa deve poder remover o que não se aplica e escolher o que deseja manter.

Uma tarefa mensal pode ser colocada em uma semana específica, evitando concentrar toda a manutenção em um só dia. No calendário, as tarefas semanais aparecem no dia escolhido e as mensais aparecem apenas na semana do mês selecionada.

## Identidade visual

O visual desejado combina:

- verde candy e tons suaves, preservando o layout arredondado e amigável da experiência inicial;
- referências chinesas e ao Feng Shui de forma discreta, sem substituir a identidade funcional do app;
- os cinco elementos associados à tradição chinesa: madeira (木), fogo (火), terra (土), metal (金) e água (水);
- o caractere 和 como referência visual à harmonia.

As referências são decorativas e não devem virar afirmações de que o app aplica ou garante os princípios do Feng Shui.

## Tecnologia e estrutura atual

O projeto é uma aplicação estática, sem dependências de framework e sem backend:

- `index.html` — estrutura semântica, textos, formulários, abas e painéis;
- `styles.css` — identidade visual, componentes e adaptações para telas menores;
- `app.js` — abas, tarefas, filtros, calendário, recorrências, cronômetro e persistência local.

O estado é guardado no `localStorage` do navegador. Não há conta, sincronização entre dispositivos, notificações ou API. Os dados permanecem naquele navegador/dispositivo, e a limpeza dos dados do navegador pode apagá-los.

## Cuidados de segurança

As sugestões devem evitar instruções para misturar produtos de limpeza. O app informa que se deve usar um produto por vez, seguir o rótulo, ventilar o ambiente e manter animais afastados até as superfícies secarem. Produtos perigosos ou procedimentos que dependam de conhecimento especializado não devem ser apresentados como tarefas rotineiras genéricas.

## Direção para futuras mudanças

Ao ampliar o aplicativo:

1. preservar o modo de 15 minutos e o cronômetro como caminho principal;
2. manter o planejador semanal como alternativa para quem deseja mais estrutura;
3. permitir personalização de cômodos, dias, frequência e escopo das tarefas;
4. dividir tarefas grandes em etapas claras e pequenas;
5. manter os dados locais e explicar suas limitações;
6. validar o uso por teclado, leitores de tela e telas pequenas;
7. proteger a experiência acolhedora: nenhuma pendência deve ser tratada como falha pessoal.
