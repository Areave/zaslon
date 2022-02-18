# ZASLON

Фронтэнд

> ⚠ Перед началом работы должны быть установлены NodeJs/npm
>
## Порядок установки

1. Открыть проект в среде разработки и запустить из корневой папки:

```console
npm install
```


2. Запустить сборку в режиме development. Проект откроется в браузере по умолчанию по адресу http://localhost:8080

```console
npm start
```

Следующая команда собирает готовый бандл в папке /www

```console
npm run build
```



### Заглушки



**getSections.json**

```javascript
[
  {
    "id": 1,
    "name": "Административное управление"
  },
  {
    "id": 2,
    "name": "Раздел 2. Работа с проектной документацией и ГОСТами"
  },
  {
    "id": 3,
    "name": "Анализ бизнес-процессов"
  }
]
```
**getThreads.json**

```javascript
[
  {"sectionId" :  1,
    "threads": [
      {
        "id": 1,
        "threadNum":1,
        "name": "Тема 1. Как стать РЗЗ?",
        "messagesAmount": 24,
        "rating":5
      },
      {
        "id": 2,
        "threadNum": 2,
        "name": "Тема 2. Что такое МЭО, как его оформить?",
        "messagesAmount":  24,
        "rating": 5
      },
      {
        "id": 3,
        "threadNum": 3,
        "name": "Тема 3. Выделение лимитов на работу.",
        "messagesAmount":  24,
        "rating": 5
      },
      {
        "id": 4,
        "threadNum": 4,
        "name": "Тема 4. ГГ и СПГ, что лучше, и для кого.",
        "messagesAmount":  24,
        "rating": 5
      }
    ]
  },
  {"sectionId" :  2,
    "threads": [
      {
        "id": 5,
        "threadNum": 1,
        "name": "Тема 1. Как стать РЗЗ?",
        "messagesAmount":  24,
        "rating": 5
      },
      {
        "id": 6,
        "threadNum": 2,
        "name": "Тема 2. Что такое МЭО, как его оформить?",
        "messagesAmount":  24,
        "rating": 5
      },
      {
        "id": 7,
        "threadNum": 3,
        "name": "Тема 3. Выделение лимитов на работу.",
        "messagesAmount":  24,
        "rating": 5
      },
      {
        "id": 8,
        "threadNum": 4,
        "name": "Тема 4. ГГ и СПГ, что лучше, и для кого.",
        "messagesAmount":  24,
        "rating": 5
      }
    ]
  }
]
```

**getProfileInfo.json**

```javascript
{
  "id": 1,
  "threadNum": 1,
  "name": "пресс качат",
  "rating": 5,
  "messages": [
    {
      "messageId": 123,
      "date": "12.12.2022",
      "likes": 120,
      "unlikes": 3,
      "author": {
        "id": 678,
        "name": "Лев Толстой",
        "image": "https://thispersondoesnotexist.com/image",
        "role": "user",
        "messagesAmount": 333,
        "reputation": 9
      },
      "messageText": "Все гости совершали обряд приветствования никому не известной, никому не интересной и не нужной тетушки. Анна Павловна с грустным, торжественным участием следила за их приветствиями, молчаливо одобряя их. Ma tante каждому говорила в одних и тех же выражениях о его здоровье, о своем здоровье и о здоровье ее величества, которое нынче было, слава Богу, лучше. Все подходившие, из приличия не выказывая поспешности, с чувством облегчения исполненной тяжелой обязанности отходили от старушки, чтоб уж весь вечер ни разу не подойти к ней.",
      "answers": [
        {
          "answerId": 5,
          "answerAuthor": "Антон Чехов",
          "answerText": "Пахнет осенью. А я люблю российскую осень. Что-то необыкновенно грустное, приветливое и красивое. Взял бы и улетел куда-нибудь вместе с журавлями.",
          "date": "12/01/2023",
          "likes": 120,
          "unlikes": 3
        },
        {
          "answerId": 9,
          "answerAuthor": "Борис Пастернак",
          "answerText": "Человек рождается жить, а не готовиться к жизни\nПодробнее на livelib.ru:\nhttps://www.livelib.ru/author/1009/quotes-boris-pasternak",
          "date": "13/01/2023",
          "likes": 1,
          "unlikes": 58
        }
      ]
    },
    {
      "messageId": 127,
      "date": "13.12.2022",
      "author": {
        "id": 679,
        "name": "Александр Пушкин",
        "image": "https://thispersondoesnotexist.com/image",
        "role": "moderator",
        "messagesAmount": 3,
        "reputation": 899
      },
      "likes": 120,
      "unlikes": 3,
      "messageText": "Но дружбы нет и той меж нами Все предрассудки истребя Мы почитаем всех нулями А единицами - себя Мы все глядим в Наполеоны Двуногих тварей миллионы Для нас орудие одно Нам чувство дико и смешно",
      "answers": [
        {
          "answerId": 9,
          "answerAuthor": "Михаил Булгаков",
          "answerText": "Да, человек смертен, но это было бы ещё полбеды. Плохо то, что он иногда внезапно смертен, вот в чем фокус!",
          "date": "17/08/1968",
          "likes": 1,
          "unlikes": 0
        },
        {
          "answerId": 78,
          "answerAuthor": "Боб Дилан",
          "answerText": "Некоторые люди наслаждаются дождем, другие просто промокают.",
          "date": "1/01/1254",
          "likes": 126745,
          "unlikes": 1
        }
      ]
    }
  ]
}
```

**getThread1.json**

```javascript
{
  "id": 546,
  "name": "Николай Гоголь",
  "role": "moderator",
  "messagesAmount": 583,
  "image": "https://thispersondoesnotexist.com/image",
  "reputation": 78,
  "registrationDate": "12.01.2020",
  "about": "Человеку, который вышел из дому в светлой праздничной одежде, стоит только быть обрызнуту одним пятном грязи из-под колеса, и уже весь народ обступил его и указывает на него пальцем и толкует об его неряшестве, тогда как тот же народ не замечает множества пятен на других проходящих, одетых в будничные одежды. Ибо на будничных одеждах не замечаются пятна.",
  "scills": [
    "Java",
    "SQL",
    "Ruby",
    "Assembler"
  ],
  "describeAmount": 5,
  "themesAmount": 8,
  "answers": 23
}
```