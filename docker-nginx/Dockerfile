# Dockerfile er en tekstbasert fil som inneholder instruksjoner for hvordan Docker skal bygge et image.

FROM nginx:1.31.7-alpine
# Velger Nginx som base image.
# 1.31.7 er versjonen, og alpine viser at imaget er basert på Alpine Linux.

COPY html/ /usr/share/nginx/html/
# Kopierer HTML-, CSS- og JavaScript-filene inn i mappen
# der Nginx leter etter nettsidefilene.

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# Kopierer min egen Nginx-konfigurasjon inn i containerens
# konfigurasjonsmappe, slik at Nginx bruker innstillingene mine.

EXPOSE 80
# Dokumenterer at Nginx er ment å lytte på port 80
# inne i containeren.

# Hva hjelper et Docker image med?
# Et Docker image pakker sammen applikasjonen, nettsidefilene
# og det som trengs for å kjøre tjenesten.
# Det gjør det enklere å starte nettsiden på ulike maskiner
# med samme oppsett, uten å installere og konfigurere Nginx manuelt
# hver gang. Fra imaget kan jeg opprette en eller flere containere.
