# Popis projektu
> Projekt vznikol podla zadania od Zamestnavatela

**Spustenie**
- nainstalujte potrebne kniznice pomocou prikazu npm install 
- projekt spustite pomocou prikazu node server.js 
- projekt bezi na url http://localhost:3000/home
- pri restartovani aplikacie sa v subore model.js zavolaju funkcie ktore nanovo vytvoria user-ov a organizacie 


**Popis**
- data udrzujem pomocou firebase realtime databazy 
- pri getnuti domovskej stranky sa na strane servera vygeneruje randomne IDcko a zobrazi sa content pre usera s danym ID
- ak toto spravanie chcete zmenit v controler.js na riadku 9 napiste ID usera ktore chcete zobrazit
- Content renderujem na strane servera pomocou Handlebars 
- Na vymazavanie elementov v browseri som napisal script handlers.js ktory zabezpecuje interakciu s userom 

*Matus Makay*
