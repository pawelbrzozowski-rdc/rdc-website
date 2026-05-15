# RDC GitHub Pages Site

Gotowa statyczna strona firmowa RDC przygotowana pod publikację przez GitHub Pages.

## Co tu jest

- `index.html` - główna strona RDC
- `assets/styles.css` - warstwa wizualna i responsywność
- `assets/app.js` - drobny skrypt pomocniczy
- `assets/rdc-analitics-logo-lockup.png` - pełne logo
- `assets/rdc-analitics-logo-mark.png` - sygnet

## Jak uruchomić lokalnie

1. Otwórz `index.html` w przeglądarce.
2. Albo uruchom prosty serwer statyczny, np.:

```powershell
python -m http.server 8765
```

## Jak opublikować przez GitHub Pages

1. Utwórz nowe repozytorium na GitHub, np. `rdc-website`.
2. Wgraj całą zawartość folderu `rdc-github-pages-site` do repozytorium.
3. Wejdź w `Settings > Pages`.
4. Wybierz:
   - `Source: Deploy from a branch`
   - `Branch: main`
   - `Folder: / (root)`
5. Zapisz ustawienia i poczekaj na publikację.

Po publikacji strona będzie dostępna pod adresem w stylu:

`https://twoj-login.github.io/rdc-website/`

## Własna domena

Jeśli później będziesz chciał podpiąć domenę firmową:

1. dodaj w `Settings > Pages` własną domenę,
2. ustaw rekordy DNS u operatora domeny,
3. opcjonalnie dodaj plik `CNAME`.

## Założenie projektu

To jest publiczna, klasyczna wersja strony RDC:

- bez sekcji `AI Office`,
- bardziej firmowa i uniwersalna,
- gotowa do szybkiego hostingu,
- łatwa do dalszej rozbudowy o case studies i podstrony.
