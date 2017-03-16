import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  
  private users = [{
    "_id": "58cad40d5bb0056bf967eee9",
    "index": 0,
    "guid": "67ed1b3e-eb4b-42ae-8be7-391803b8445a",
    "isActive": false,
    "balance": "$3,294.66",
    "picture": "http://lorempixel.com/400/200/",
    "age": 35,
    "eyeColor": "blue",
    "name": {
      "first": "Jordan",
      "last": "Shannon"
    },
    "company": "RECOGNIA",
    "email": "jordan.shannon@recognia.tv",
    "phone": "+1 (982) 490-3873",
    "address": "780 Cedar Street, Wanship, California, 4683",
    "about": "Nulla aliquip magna sint nulla pariatur ullamco qui sunt incididunt et Lorem eiusmod excepteur eu. Consectetur qui laborum magna proident consectetur magna sint do pariatur voluptate non magna enim. Aliquip laboris dolor aute id esse laborum ut quis culpa ex ipsum proident sunt amet. Consectetur velit aliqua aliqua velit aute adipisicing cillum ullamco ad ea laborum nostrud id ullamco. Sint ex nisi ad cillum. Qui adipisicing laboris amet et ut nisi pariatur enim.",
    "registered": "Thursday, January 22, 2015 2:52 PM",
    "latitude": "-17.705781",
    "longitude": "-174.704709",
    "tags": [
      "Lorem",
      "exercitation",
      "mollit",
      "dolore",
      "sunt"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Cochran Deleon"
      },
      {
        "id": 1,
        "name": "Small Vang"
      },
      {
        "id": 2,
        "name": "Jaclyn Swanson"
      }
    ],
    "greeting": "Hello, Jordan! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "58cad40db028ceadd2e09ea9",
    "index": 1,
    "guid": "8eb99606-fcd7-437f-a922-4b31ac212f62",
    "isActive": true,
    "balance": "$3,540.80",
    "picture": "http://lorempixel.com/400/200/",
    "age": 20,
    "eyeColor": "brown",
    "name": {
      "first": "Myers",
      "last": "Fischer"
    },
    "company": "OPTYK",
    "email": "myers.fischer@optyk.biz",
    "phone": "+1 (845) 421-2064",
    "address": "768 Chester Avenue, Defiance, Nevada, 3536",
    "about": "Amet velit elit velit reprehenderit aliquip veniam magna eiusmod ipsum. Dolor quis est veniam nisi quis elit enim duis. Nulla deserunt quis elit id exercitation nulla adipisicing esse dolore culpa elit.",
    "registered": "Tuesday, September 20, 2016 4:08 AM",
    "latitude": "-35.544658",
    "longitude": "-108.634627",
    "tags": [
      "duis",
      "cupidatat",
      "fugiat",
      "laboris",
      "ullamco"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Dodson Coffey"
      },
      {
        "id": 1,
        "name": "Munoz Gillespie"
      },
      {
        "id": 2,
        "name": "Rich Clemons"
      }
    ],
    "greeting": "Hello, Myers! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "58cad40d001af7a3d0261f7a",
    "index": 2,
    "guid": "b6d44dc3-6fc0-4b37-ac16-127fd54c23b8",
    "isActive": false,
    "balance": "$3,050.65",
    "picture": "http://lorempixel.com/400/200/",
    "age": 30,
    "eyeColor": "green",
    "name": {
      "first": "Cooper",
      "last": "Mccormick"
    },
    "company": "XPLOR",
    "email": "cooper.mccormick@xplor.com",
    "phone": "+1 (839) 495-3164",
    "address": "232 Nostrand Avenue, Bradenville, Indiana, 7002",
    "about": "Sunt fugiat reprehenderit veniam ipsum pariatur ullamco eiusmod ad irure esse laborum in ut. Veniam cupidatat dolore magna non quis officia dolore officia et consequat ut. Do ut ea do commodo mollit. Id ex qui qui do ullamco irure laboris adipisicing duis ipsum. Consequat aliquip elit sit nulla sit veniam occaecat mollit.",
    "registered": "Thursday, October 20, 2016 3:21 AM",
    "latitude": "87.210821",
    "longitude": "165.104448",
    "tags": [
      "aute",
      "esse",
      "quis",
      "sunt",
      "proident"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Bettie Chambers"
      },
      {
        "id": 1,
        "name": "Snow Chen"
      },
      {
        "id": 2,
        "name": "Owens Petty"
      }
    ],
    "greeting": "Hello, Cooper! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "58cad40d7f0b2d5c6956ef8a",
    "index": 3,
    "guid": "11db8f26-cc45-45c8-af34-3675c38ff1bd",
    "isActive": true,
    "balance": "$1,659.41",
    "picture": "http://lorempixel.com/400/200/",
    "age": 32,
    "eyeColor": "green",
    "name": {
      "first": "Krystal",
      "last": "Wilder"
    },
    "company": "XIXAN",
    "email": "krystal.wilder@xixan.co.uk",
    "phone": "+1 (856) 514-3023",
    "address": "946 Lacon Court, Tedrow, Delaware, 9792",
    "about": "Sit eiusmod aliqua amet pariatur exercitation. Proident nostrud Lorem fugiat duis aliqua irure. Nisi duis ex dolor culpa dolore elit consectetur fugiat ut ad laboris est.",
    "registered": "Wednesday, June 25, 2014 9:01 AM",
    "latitude": "-32.213106",
    "longitude": "-101.952915",
    "tags": [
      "Lorem",
      "fugiat",
      "do",
      "anim",
      "enim"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Palmer Riddle"
      },
      {
        "id": 1,
        "name": "Jenkins Bowman"
      },
      {
        "id": 2,
        "name": "Knowles Snyder"
      }
    ],
    "greeting": "Hello, Krystal! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "58cad40d820fcc8d0952d018",
    "index": 4,
    "guid": "12e2e3cc-6ab4-4b3f-90e9-a7d1a99e272b",
    "isActive": false,
    "balance": "$3,850.57",
    "picture": "http://lorempixel.com/400/200/",
    "age": 35,
    "eyeColor": "green",
    "name": {
      "first": "Whitehead",
      "last": "Wright"
    },
    "company": "TETRATREX",
    "email": "whitehead.wright@tetratrex.name",
    "phone": "+1 (887) 518-2350",
    "address": "891 Will Place, Dana, Oregon, 1850",
    "about": "Consequat dolore nostrud nisi excepteur sint fugiat occaecat laborum exercitation. Magna laborum nulla quis reprehenderit pariatur cillum. Esse excepteur qui nostrud est ullamco aliquip cillum nostrud irure incididunt. Dolore exercitation aute ullamco proident incididunt adipisicing. Exercitation dolor nulla tempor cupidatat sint esse velit id laboris exercitation consectetur deserunt reprehenderit nisi. Culpa excepteur reprehenderit sunt tempor esse enim fugiat eu culpa cupidatat id occaecat. Nostrud voluptate tempor id culpa eu aute non ea veniam ad occaecat.",
    "registered": "Wednesday, March 9, 2016 12:04 AM",
    "latitude": "-41.139821",
    "longitude": "-112.476442",
    "tags": [
      "est",
      "voluptate",
      "deserunt",
      "ea",
      "officia"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Amalia Hart"
      },
      {
        "id": 1,
        "name": "Maura Kane"
      },
      {
        "id": 2,
        "name": "Katheryn Wise"
      }
    ],
    "greeting": "Hello, Whitehead! You have 5 unread messages.",
    "favoriteFruit": "banana"
  }];

  getUsers() {
      return this.users;
  }
}