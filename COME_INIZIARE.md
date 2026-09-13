# App Subito + Vinted — come farla partire la prima volta

Segui questi passaggi nell'ordine. Se qualcosa non funziona, fermati e
chiedi — non serve andare avanti "a tentativi".

## 1. Installa Node.js (solo la prima volta, se non l'hai già)

Vai su https://nodejs.org, scarica la versione "LTS" e installala come
un programma qualsiasi.

## 2. Apri il Terminale nella cartella del progetto

Su Mac: cerca "Terminale" con Spotlight (Cmd+Spazio).
Trascina la cartella `subito-vinted-app` dentro la finestra del
Terminale dopo aver scritto `cd ` (con lo spazio), poi premi Invio.
Dovresti vedere qualcosa tipo `cd /Users/tuonome/Downloads/subito-vinted-app`.

## 3. Entra nella cartella dell'app vera e propria

```
cd apps/web
```

## 4. Installa i pacchetti del progetto (una volta sola)

```
npm install
```

Ci vuole un minuto o due. È normale vedere molte righe scorrere.

## 5. Controlla che il file .env.local sia al posto giusto

Deve trovarsi dentro `apps/web/.env.local` (stessa cartella in cui sei
ora nel Terminale). Se l'hai scaricato separatamente, spostalo lì.

## 6. Crea le tabelle vere nel database Supabase (una volta sola)

```
npm run db:generate
npm run db:push
```

Il secondo comando crea davvero le tabelle (prodotti, foto, annunci...)
nel tuo database Supabase. Puoi verificarlo aprendo Supabase → Table
Editor: dovresti vedere le tabelle apparire.

## 7. Avvia l'app

```
npm run dev
```

Nel Terminale apparirà scritto qualcosa come:
`Local: http://localhost:3000`

## 8. Aprila nel browser

Apri quell'indirizzo (http://localhost:3000) su Safari del Mac.

## 9. (Opzionale) Aprila anche dall'iPhone

Il Mac e l'iPhone devono essere sulla stessa rete Wi-Fi. Nel Terminale,
insieme a "Local", dovrebbe comparire anche un indirizzo "Network" tipo
`http://192.168.1.23:3000` — apri quello da Safari sull'iPhone.

## Quando hai finito di provare

Torna nel Terminale e premi Ctrl+C per spegnere l'app.

## Se qualcosa va storto

Copia il messaggio di errore che vedi nel Terminale (o nel browser) e
incollamelo in chat: lo leggo e ti dico cosa fare.
