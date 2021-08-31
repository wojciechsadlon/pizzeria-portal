# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - przycisk do zalogowania (link do dashboardu)

# Widok dostepnosci stolikow

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna będzie jednym stolikiem
    - każdy wiersz będzie blokiem 30 min
    - ma przpominać widok tygodnia w kalendarzu googla, kolumny to stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - musi umożliwiać edycję i zapisanie zmian
- `/tables/booking/:new`
  - jak wyżej, bez początkowych informacji
- `/tables/events/:id`
  - jak wyżej dla eventu
- `/tables/events/:new`
  - jak wyżej, bez początkowych informacji


# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach różne informacje (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- `/waiter/order/:id`
  - jak powyższa

# Widok kuchni

- `/kitchen`
 - wyświetlać listę zamówień w kolejności ich złożenia
 - lista musi zawierać
  - numer stolika (lub zamowienia zdalnego)
  - pelne informacje dot zamowionych dań
 - na liście musi być możliwość oznaczenia jako zrealizowane

