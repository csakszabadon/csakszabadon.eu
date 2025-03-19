# Magyar Naturizmus Weboldal

![Magyar Naturizmus](https://picsum.photos/seed/naturizmus/800/200)

Ez a GitHub repository a Magyar Naturizmus weboldal forrását tartalmazza, amely egy közösségi, nyílt forráskódú projekt. Az oldal célja a naturizmusról, a magyar naturista helyszínekről és közösségekről való információk megosztása.

Az oldal [Jekyll](https://jekyllrb.com/) alapú statikus weboldal, amely egyszerű karbantartást, tartalom hozzáadást és fejlesztést tesz lehetővé.

## Tartalomjegyzék

- [Telepítés](#telepítés)
- [Futtatás lokálisan](#futtatás-lokálisan)
- [Projekt struktúra](#projekt-struktúra)
- [Tartalom kezelése](#tartalom-kezelése)
  - [Blog bejegyzések hozzáadása](#blog-bejegyzések-hozzáadása)
  - [Helyszínek hozzáadása](#helyszínek-hozzáadása)
  - [GYIK bejegyzések](#gyik-bejegyzések)
  - [Alapelvek szerkesztése](#alapelvek-szerkesztése)
- [Fejlesztés](#fejlesztés)
  - [Frontend módosítása](#frontend-módosítása)
  - [Új oldalak hozzáadása](#új-oldalak-hozzáadása)
- [Közreműködés](#közreműködés)
- [Licenc](#licenc)
- [Kapcsolat](#kapcsolat)

## Telepítés

Az oldal lokális futtatásához és fejlesztéséhez az alábbiakra lesz szükséged:

### Előfeltételek

1. [Ruby](https://www.ruby-lang.org/en/downloads/) (2.7.0 vagy újabb)
2. [RubyGems](https://rubygems.org/pages/download)
3. [GCC](https://gcc.gnu.org/install/) és [Make](https://www.gnu.org/software/make/) (néhány függőséghez)

### Jekyll és függőségek telepítése

```bash
# Bundler telepítése
gem install bundler

# A repository klónozása
git clone https://github.com/csakszabadon/csakszabadon.eu.git
cd csakszabadon.eu

# Függőségek telepítése
bundle install
```

## Futtatás lokálisan

A weboldal lokális teszteléséhez futtasd az alábbi parancsot:

```bash
bundle exec jekyll serve
```

Ezután nyisd meg a böngészőben a http://localhost:4000 címet.

Live-reload mód (automatikus frissítés a fájlok módosításakor):

```bash
bundle exec jekyll serve --livereload
```

Statikus oldalak generálása deployment-hez:

```bash
bundle exec jekyll build
```

A generált oldalak a `_site` mappában lesznek megtalálhatók.

## Projekt struktúra

```
magyarnaturizmus/
├── _alapelvek/         # Naturizmus alapelvei (collection)
├── _blog/              # Blog bejegyzések (collection)
├── _faq/               # GYIK kérdések és válaszok (collection)
├── _helyszin/          # Naturista helyszínek (collection)
├── _includes/          # Újrafelhasználható komponensek
│   ├── footer.html
│   ├── header.html
│   ├── sidebar.html
│   └── ...
├── _layouts/           # Oldal layoutok
│   ├── default.html    # Alap layout
│   ├── home.html       # Főoldal layout
│   ├── page.html       # Általános oldal layout
│   ├── post.html       # Blog bejegyzés layout
│   └── location.html   # Helyszín oldal layout
├── _pages/             # Statikus oldalak
│   ├── blog.md
│   ├── helyszinek.md
│   ├── kapcsolat.md
│   └── naturizmusrol.md
├── assets/             # Statikus eszközök
│   ├── css/            # Stíluslapok
│   ├── images/         # Képek
│   └── js/             # JavaScript fájlok
├── _config.yml         # Jekyll konfiguráció
├── Gemfile             # Ruby függőségek
├── index.md            # Főoldal
└── README.md           # Projekt dokumentáció
```

## Tartalom kezelése

### Blog bejegyzések hozzáadása

Blog bejegyzés hozzáadásához hozz létre egy új `.md` fájlt a `_blog` mappában, a következő névkonvencióval:

```
YYYY-MM-DD-bejegyzes-cime.md
```

A bejegyzés fájl elején egy frontmatter részt kell elhelyezni YAML formátumban:

```yaml
---
layout: post
title: "A bejegyzés címe"
date: 2025-05-20
author: "Szerző Neve"
author_image: "/assets/images/authors/szerzo-neve.jpg"
author_bio: "Rövid bemutatkozás a szerzőről."
categories: ["Kategória 1", "Kategória 2"]
tags: ["címke1", "címke2", "címke3"]
image: "/assets/images/blog/bejegyzes-kep.jpg"
excerpt: "Rövid leírás a bejegyzésről, ami a listákban fog megjelenni."
reading_time: 5
permalink: /blog/bejegyzes-cime/
---

A bejegyzés tartalma Markdown formátumban...
```

### Helyszínek hozzáadása

Új helyszín hozzáadásához hozz létre egy új `.md` fájlt a `_helyszin` mappában, a következő névkonvencióval:

```
NN-helyszin-neve.md
```

Ahol `NN` egy kétjegyű sorszám a helyszínek sorrendjéhez.

A helyszín fájl frontmatter része:

```yaml
---
layout: location
title: "Helyszín neve"
slug: helyszin-neve
type: strand  # strand, kemping, szauna, egyeb
beginner_friendly: true  # true vagy false
location: "Helyszín településnév, megye"
distance: "Budapest XX km"
price: "Belépő: XXXX Ft-tól"
rating: 4.5  # 1-5 közötti értékelés, lehet tizedes
description: "Rövid leírás a helyszínről, ami a listákban fog megjelenni."
features: 
  - parking
  - buffet
  - toilets
  - showers
  - sports
  # további funkciók: umbrellas, wifi, restaurant, store
image: "/assets/images/locations/helyszin-neve.jpg"
coords:
  lat: 47.1234  # földrajzi szélesség
  lng: 19.5678  # földrajzi hosszúság
order: 1  # a helyszínek listázási sorrendje
---

A helyszín részletes leírása Markdown formátumban...
```

### GYIK bejegyzések

GYIK (Gyakran Ismétlődő Kérdések) hozzáadásához hozz létre egy új `.md` fájlt a `_faq` mappában:

```
NN-kerdes-rovid-neve.md
```

A GYIK fájl frontmatter része:

```yaml
---
category: "kategória"  # altalanos, helyszinek, stb.
question: "A tényleges kérdés szövege?"
order: 1  # a sorrendhez
---

A válasz szövege Markdown formátumban...
```

### Alapelvek szerkesztése

Alapelvek szerkesztéséhez módosítsd a megfelelő `.md` fájlt a `_alapelvek` mappában:

```yaml
---
title: "Alapelv címe"
icon: "fa-icon-neve"  # Font Awesome ikon neve (fa- prefix nélkül)
order: 1  # a megjelenítés sorrendje
---

Az alapelv leírása Markdown formátumban...
```

## Fejlesztés

### Frontend módosítása

#### CSS módosítása

A stílusok az `assets/css/styles.css` fájlban találhatók. A fájl moduláris felépítésű, a következő szakaszokkal:

1. Változók és alapbeállítások
2. Globális stílusok
3. Navigáció és fejléc
4. Főoldal specifikus stílusok
5. Helyszínek oldal specifikus stílusok
6. Blog oldal specifikus stílusok
7. Blog bejegyzés specifikus stílusok
8. A Naturizmusról oldal specifikus stílusok
9. Kapcsolat oldal specifikus stílusok
10. Közös komponensek stílusai
11. Segédosztályok és effektek
12. Reszponzív stílusok

Új stílusok hozzáadásakor kövesse ezt a strukturált megközelítést.

#### JavaScript módosítása

A JavaScript kód az `assets/js/main.js` fájlban található. Ez tartalmazza a főbb interaktív funkciókat az oldalhoz.

### Új oldalak hozzáadása

Új oldal hozzáadásához hozz létre egy `.md` fájlt a `_pages` mappában:

```yaml
---
layout: page
title: "Oldal címe"
subtitle: "Opcionális alcím"
permalink: /oldal-url-slug/
---

Az oldal tartalma Markdown formátumban...
```

## Közreműködés

Szívesen fogadjuk a hozzájárulásokat! Ha szeretnél közreműködni a projektben, kérjük, kövesd az alábbi lépéseket:

1. Fork-old ezt a repository-t
2. Hozz létre egy új branch-et a fejlesztéshez `feature/funkció-neve` vagy `fix/hiba-leírása` névvel
3. Végezd el a módosításaidat
4. Végezz megfelelő tesztelést
5. Küldj egy Pull Request a fő repository-ba

### Irányelvek a közreműködőknek

- Kövesd a meglévő kódolási és elnevezési konvenciókat
- Minden változtatáshoz tartozzon megfelelő dokumentáció
- A commit üzeneteknek legyenek informatívak és pontosan írják le a változtatásokat
- Pull Request-ek előtt ellenőrizd, hogy a kódod átment-e a teszteken

## Kapcsolat

Ha kérdésed vagy javaslatod van, vagy részt szeretnél venni a projektben, keress minket:

- GitHub Issues: [Problémák/Javaslatok jelentése](https://github.com/csakszabadon/csakszabadon.eu/issues)
- E-mail: info@csakszabadon.eu

---

Készítette és karbantartja egy magyar naturista.
