window.RDCSiteData = Object.freeze({
  company: {
    name: "RDC-Analitics",
    shortName: "RDC",
    claim: "Analytics as a Service",
    email: "pawel.brzozowski@rdc-analitics.com",
    phone: "+48 735 496 692",
    phoneHref: "+48735496692",
  },
  home: {
    intro: {
      eyebrow: "Analytics as a Service",
      heading: "Wiesz, co dzieje się w firmie — bez przekopywania się przez pliki",
      text: "Łączymy dane z codziennej pracy w jeden czytelny panel. Pokazuje on sprzedaż, koszty, płatności i wynik, żeby łatwiej podejmować decyzje.",
    },
    panelAreas: {
      title: "Najważniejsze obszary firmy w jednym miejscu",
      items: [
        {
          icon: "sales",
          title: "Sprzedaż i zlecenia",
          text: "Widzisz, ile firma sprzedaje.",
        },
        {
          icon: "margin",
          title: "Koszty i marża",
          text: "Wiesz, na czym zarabiasz, a gdzie tracisz.",
        },
        {
          icon: "invoice",
          title: "Płatności i faktury",
          text: "Masz wszystko pod kontrolą w jednym miejscu.",
        },
        {
          icon: "result",
          title: "Wynik firmy",
          text: "Widzisz, ile naprawdę zostaje po kosztach.",
        },
      ],
    },
    journey: {
      eyebrow: "Z chaosu do porządku",
      heading: "Z chaosu do porządku",
      description:
        "Rozproszone dane zbieramy w jeden czytelny panel. Dzięki temu właściciel firmy szybciej widzi, co się dzieje, gdzie są problemy i jakie decyzje trzeba podjąć.",
      before: {
        label: "Przed",
        title: "Dużo miejsc, mało jasności",
        description: "Dane są porozrzucane po kilku systemach, plikach i raportach.",
        points: [
          {
            title: "5+ miejsc do sprawdzania",
            text: "Excel, faktury, sklep, marketplace, koszty, płatności.",
          },
          {
            title: "Ciągłe przełączanie się",
            text: "Każde źródło pokazuje tylko fragment sytuacji.",
          },
          {
            title: "Łatwo coś przeoczyć",
            text: "Sprzedaż jest w jednym miejscu, faktury w drugim, koszty jeszcze gdzie indziej.",
          },
          {
            title: "Ręczne składanie obrazu firmy",
            text: "Każdy dzień zaczyna się od szukania odpowiedzi i łączenia danych na własną rękę.",
          },
        ],
        summary:
          "Właściciel traci czas na sprawdzanie kilku miejsc, zamiast od razu widzieć, jak naprawdę idzie firma.",
      },
      after: {
        label: "Po",
        title: "Jeden panel, szybsza decyzja",
        description: "Najważniejsze informacje są zebrane w jednym miejscu.",
        points: [
          {
            title: "1 ekran do codziennego sprawdzenia",
            text: "Sprzedaż, koszty, płatności i wynik firmy w jednym widoku.",
          },
          {
            title: "Mniej klikania",
            text: "Nie trzeba szukać danych po kilku plikach i systemach.",
          },
          {
            title: "Szybciej widać problem albo trend",
            text: "Od razu wiadomo, czy coś wymaga reakcji.",
          },
          {
            title: "Lepsza kontrola nad firmą",
            text: "Jedno otwarcie panelu wystarczy, żeby zobaczyć, co się dzieje i czy trzeba działać już dziś.",
          },
        ],
        summary:
          "Zamiast codziennie składać obraz firmy z kilku miejsc, widzisz wszystko w jednym panelu.",
      },
    },
    ownerPanel: {
      eyebrow: "Panel właściciela",
      heading: "Cała firma na jednej stronie",
      description:
        "Jeden ekran do codziennego sprawdzenia firmy. Sprzedaż, koszty, płatności i wynik w jednym miejscu — bez szukania po plikach, narzędziach i wiadomościach.",
      items: [
        {
          title: "Sprzedaż rośnie",
          text: "Widać tempo miesiąca i to, co realnie wpada do firmy.",
        },
        {
          title: "Koszty pod kontrolą",
          text: "Łatwiej zauważyć, gdzie pojawia się problem.",
        },
        {
          title: "Płatności uporządkowane",
          text: "Wiadomo, co jest opłacone, a co wymaga sprawdzenia.",
        },
        {
          title: "Gotowe do użycia",
          text: "Panel pokazuje najważniejsze informacje w prosty i czytelny sposób.",
        },
      ],
    },
    audience: {
      eyebrow: "Dla kogo?",
      heading: "Dla kogo?",
      text: "Dla właściciela małej firmy, który chce rozumieć swoje liczby bez wchodzenia w techniczne szczegóły.",
    },
    contact: {
      eyebrow: "Kontakt",
      heading: "Chcesz zobaczyć, jak taki panel mógłby wyglądać w Twojej firmie?",
      text: "Umów krótką rozmowę. Pokażemy Ci, jakie dane warto połączyć i jak przełożyć je na prosty, czytelny panel właściciela.",
    },
  },
  demos: [
    {
      id: "project-install",
      order: 1,
      icon: "project",
      tone: "cyan",
      demoUrl: null,
      publicName: "Firmy projektowo-montażowe",
      shortTitle: "Czy projekty dowożą plan?",
      dlaJakiejFirmy:
        "Dla firm, które sprzedają projekt jako usługę: montaż, wykonanie, realizacja, podwykonawcy, zaliczki i rozliczenie końcowe.",
      problem:
        "Właściciel widzi przychód, ale nie widzi szybko, który projekt faktycznie dowozi marżę i gotówkę.",
      coPokazuje:
        "Plan projektu, marżę, odchylenia kosztowe, status gotówki i listę tematów wymagających reakcji.",
      coDajeWlascicielowi:
        "Jedno spojrzenie na to, gdzie projekt zaczyna zjadać wynik, zanim problem wyjdzie dopiero przy rozliczeniu.",
      pages: [
        "Czy projekty dowożą plan?",
        "Gdzie ucieka marża projektu?",
        "Co blokuje gotówkę przed końcem projektu?",
      ],
      tags: ["projekty", "montaż", "marża", "gotówka", "zaliczki"],
    },
    {
      id: "trade",
      order: 2,
      icon: "trade",
      tone: "blue",
      demoUrl: null,
      publicName: "Handel i dystrybucja",
      shortTitle: "Czy obrót daje marżę?",
      dlaJakiejFirmy:
        "Dla firm handlowych i dystrybucyjnych, które mają sprzedaż, magazyn, rabaty, oddziały albo przedstawicieli.",
      problem:
        "Obrót rośnie, ale trudno zobaczyć, które kategorie, oddziały albo rabaty realnie zabierają wynik.",
      coPokazuje:
        "Marże, rabaty, zapas, należności, kategorie i miejsca zamrożenia gotówki.",
      coDajeWlascicielowi:
        "Szybką odpowiedź, gdzie sprzedaż wygląda dobrze na obrocie, ale słabo na marży lub gotówce.",
      pages: [
        "Czy firma dowozi wynik?",
        "Gdzie obrót nie daje marży?",
        "Gdzie zamraża się gotówka?",
      ],
      tags: ["handel", "dystrybucja", "magazyn", "marża", "rabaty"],
    },
    {
      id: "automotive",
      order: 3,
      icon: "automotive",
      tone: "indigo",
      demoUrl: null,
      publicName: "Motoryzacja, części i serwis",
      shortTitle: "Na czym zarabia sprzedaż?",
      dlaJakiejFirmy:
        "Dla sklepów motoryzacyjnych, hurtowni części, serwisów i firm, które łączą sprzedaż z obsługą klienta.",
      problem:
        "Dużo indeksów, ruch na magazynie i zlecenia serwisowe utrudniają ocenę, co faktycznie zarabia.",
      coPokazuje:
        "Marże na kategoriach, rotację zapasu, zalegające pozycje oraz klientów lub zlecenia do reakcji.",
      coDajeWlascicielowi:
        "Lepszą kontrolę nad tym, co trzymać, co promować, a gdzie nie zamrażać pieniędzy.",
      pages: [
        "Na czym zarabia sprzedaż?",
        "Co leży za długo na magazynie?",
        "Który klient lub zlecenie wymaga reakcji?",
      ],
      tags: ["automotive", "części", "serwis", "magazyn", "rotacja"],
    },
    {
      id: "medical",
      order: 4,
      icon: "medical",
      tone: "ice",
      demoUrl: null,
      publicName: "Medyczne i specjalistyczne punkty sprzedaży",
      shortTitle: "Które grupy dają marżę?",
      dlaJakiejFirmy:
        "Dla punktów medycznych, sklepów specjalistycznych, placówek z oddziałami albo firm z refundacjami i dostępnością asortymentu.",
      problem:
        "Trudno jednocześnie pilnować dostępności, marży, kategorii i oddziałów bez prostego widoku zarządczego.",
      coPokazuje:
        "Kategorie, marże, dostępność, zapas zalegający oraz oddziały wymagające reakcji.",
      coDajeWlascicielowi:
        "Prosty obraz, gdzie brakuje towaru, gdzie towar zalega i które grupy realnie budują wynik.",
      pages: [
        "Które grupy dają marżę?",
        "Czego brakuje i co zalega?",
        "Który oddział wymaga reakcji?",
      ],
      tags: ["medical", "specjalistyczny handel", "dostępność", "oddziały", "marża"],
    },
    {
      id: "cnc",
      order: 5,
      icon: "cnc",
      tone: "navy",
      demoUrl: null,
      publicName: "CNC i produkcja jednostkowa",
      shortTitle: "Które zlecenia zarabiają?",
      dlaJakiejFirmy:
        "Dla firm CNC, obróbki metalu, warsztatów produkcyjnych i firm, które wyceniają zlecenia przed wykonaniem.",
      problem:
        "Wycena często wygląda dobrze, ale rzeczywiste godziny, poprawki i obciążenie maszyn zmieniają wynik.",
      coPokazuje:
        "Rentowność zleceń, wycenę kontra wykonanie, odchylenia godzin i wąskie gardła na maszynach.",
      coDajeWlascicielowi:
        "Szybką informację, które zlecenia trzeba inaczej wyceniać albo inaczej planować na produkcji.",
      pages: [
        "Które zlecenia zarabiają?",
        "Gdzie wycena rozmija się z wykonaniem?",
        "Które maszyny są wąskim gardłem?",
      ],
      tags: ["cnc", "produkcja", "wycena", "zlecenia", "maszyny"],
    },
    {
      id: "production",
      order: 6,
      icon: "production",
      tone: "teal",
      demoUrl: null,
      publicName: "Produkcja i serie",
      shortTitle: "Czy produkcja dowozi plan?",
      dlaJakiejFirmy:
        "Dla małych i średnich firm produkcyjnych, które potrzebują widzieć plan, marżę, jakość, odpady i opóźnienia.",
      problem:
        "Produkcja generuje wynik, ale rozjazdy planu, odpady i opóźnienia są widoczne za późno.",
      coPokazuje:
        "Plan produkcji, marże na zleceniach lub seriach, jakość, odpady i opóźnienia.",
      coDajeWlascicielowi:
        "Właściciel widzi, gdzie psuje się wynik operacyjny, zanim problem stanie się tylko kosztem księgowym.",
      pages: [
        "Czy produkcja dowozi plan?",
        "Na których zleceniach jest marża?",
        "Gdzie psuje się wynik?",
      ],
      tags: ["produkcja", "plan", "jakość", "odpady", "serie"],
    },
    {
      id: "fleet",
      order: 7,
      icon: "fleet",
      tone: "slate",
      demoUrl: null,
      publicName: "Flota, trasy i zasoby mobilne",
      shortTitle: "Czy flota dowozi wynik?",
      dlaJakiejFirmy:
        "Dla firm z flotą, trasami, pojazdami, serwisem terenowym albo zasobami mobilnymi.",
      problem:
        "Koszt paliwa, serwisu, czasu i wykorzystania pojazdów trudno połączyć z realną rentownością tras.",
      coPokazuje:
        "Wynik floty, rentowność tras, koszty paliwa i serwisu oraz wykorzystanie zasobów.",
      coDajeWlascicielowi:
        "Szybką odpowiedź, które trasy lub zasoby wyglądają aktywnie, ale niekoniecznie zarabiają.",
      pages: [
        "Czy flota dowozi wynik?",
        "Które trasy naprawdę zarabiają?",
        "Gdzie uciekają paliwo i czas?",
      ],
      tags: ["flota", "trasy", "paliwo", "serwis", "wykorzystanie"],
    },
    {
      id: "service-ops",
      order: 8,
      icon: "service",
      tone: "green",
      demoUrl: null,
      publicName: "Serwis, kontrakty i ekipy",
      shortTitle: "Czy kontrakty dowożą wynik?",
      dlaJakiejFirmy:
        "Dla firm serwisowych, instalacyjnych i utrzymaniowych, które pracują na ekipach, kontraktach, zgłoszeniach i SLA.",
      problem:
        "Kontrakty i ekipy mogą wyglądać na zajęte, ale bez danych trudno zobaczyć wykorzystanie, opóźnienia i ryzyko reklamacji.",
      coPokazuje:
        "Wynik kontraktów, wykorzystanie ekip, przepływ zadań, SLA i tematy grożące reklamacją.",
      coDajeWlascicielowi:
        "Jasny widok, które kontrakty są pod kontrolą, a gdzie trzeba reagować, zanim klient się odezwie.",
      pages: [
        "Czy kontrakty dowożą wynik?",
        "Które ekipy są dobrze wykorzystane?",
        "Co grozi opóźnieniem lub reklamacją?",
      ],
      tags: ["serwis", "kontrakty", "ekipy", "SLA", "zadania"],
    },
  ],
});
