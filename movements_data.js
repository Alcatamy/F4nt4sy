const CORRECTED_MOVEMENTS = [
    {
        "date": "05/12/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Gazzaniga",
        "fromTo": "GOLENCIERRO FC",
        "amount": 5500000,
        "id": "626d8f07"
    },
    {
        "date": "05/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Gazzaniga",
        "fromTo": "Alcatamy eSports By",
        "amount": 5500000,
        "id": "7932b2e4"
    },
    {
        "date": "03/12/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Bryan Gil",
        "fromTo": "LALIGA",
        "amount": 3378799,
        "id": "3a22f071"
    },
    {
        "date": "04/12/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Antony",
        "fromTo": "LALIGA",
        "amount": 109992312,
        "id": "243d963c"
    },
    {
        "date": "04/12/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Bartra",
        "fromTo": "Pablinistan FC",
        "amount": 30746750,
        "id": "5091b39d"
    },
    {
        "date": "04/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "F. Calero",
        "fromTo": "Pablinistan FC",
        "amount": 1112770,
        "id": "784299f3"
    },
    {
        "date": "04/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Courtois",
        "fromTo": "Vigar24",
        "amount": 50000000,
        "id": "78102e2b"
    },
    {
        "date": "04/12/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Courtois",
        "fromTo": "GOLENCIERRO FC",
        "amount": 50000000,
        "id": "2d72bdc4"
    },
    {
        "date": "04/12/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Muriqi",
        "fromTo": "Visite La Manga FC",
        "amount": 32924810,
        "id": "a6fc5d68"
    },
    {
        "date": "04/12/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Muriqi",
        "fromTo": "Pablinistan FC",
        "amount": 32924810,
        "id": "cee4782"
    },
    {
        "date": "04/12/2025",
        "team": "Pablinistan FC",
        "type": "blindaje",
        "player": "Amrabat",
        "fromTo": "-",
        "amount": 0,
        "id": "e83fa72d"
    },
    {
        "date": "04/12/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Trent",
        "fromTo": "LALIGA",
        "amount": 18591989,
        "id": "7fa3b789"
    },
    {
        "date": "04/12/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Febas",
        "fromTo": "LALIGA",
        "amount": 9609053,
        "id": "2d27ecb1"
    },
    {
        "date": "04/12/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Arda Güler",
        "fromTo": "LALIGA",
        "amount": 132893541,
        "id": "85b80461"
    },
    {
        "date": "04/12/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Aarón",
        "fromTo": "Alcatamy eSports By",
        "amount": 30239952,
        "id": "3bc0265d"
    },
    {
        "date": "04/12/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Aarón",
        "fromTo": "Vigar24",
        "amount": 30239952,
        "id": "65347a45"
    },
    {
        "date": "02/12/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Mbappé",
        "fromTo": "Visite La Manga FC",
        "amount": 264000000,
        "id": "ca7a7f3a"
    },
    {
        "date": "01/12/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "Ez Abde",
        "fromTo": "-",
        "amount": 0,
        "id": "79ec4477"
    },
    {
        "date": "01/12/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Chavarría",
        "fromTo": "GOLENCIERRO FC",
        "amount": 19056522,
        "id": "3d317f00"
    },
    {
        "date": "01/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Chavarría",
        "fromTo": "Vigar24",
        "amount": 19056522,
        "id": "8432d739"
    },
    {
        "date": "01/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "A. Liso",
        "fromTo": "LALIGA",
        "amount": 6624895,
        "id": "f20f3616"
    },
    {
        "date": "01/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Álvaro Nuñez",
        "fromTo": "Morenazos FC",
        "amount": 16742884,
        "id": "185f0030"
    },
    {
        "date": "01/12/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Álvaro Nuñez",
        "fromTo": "GOLENCIERRO FC",
        "amount": 16742884,
        "id": "366e6aa9"
    },
    {
        "date": "01/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "M. Aguado",
        "fromTo": "LALIGA",
        "amount": 1370698,
        "id": "e3cc4a7c"
    },
    {
        "date": "01/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Moi Gómez",
        "fromTo": "LALIGA",
        "amount": 2157923,
        "id": "2434aefc"
    },
    {
        "date": "01/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Rondón",
        "fromTo": "LALIGA",
        "amount": 610371,
        "id": "8c354e48"
    },
    {
        "date": "01/12/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Lejeune",
        "fromTo": "Vigar24",
        "amount": 31172679,
        "id": "b9711c6"
    },
    {
        "date": "01/12/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Lejeune",
        "fromTo": "Pablinistan FC",
        "amount": 31172679,
        "id": "faedc1b3"
    },
    {
        "date": "01/12/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Lamine Yamal",
        "fromTo": "GOLENCIERRO FC",
        "amount": 293944827,
        "id": "7a32d05f"
    },
    {
        "date": "01/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Lamine Yamal",
        "fromTo": "Vigar24",
        "amount": 293944827,
        "id": "33eb6418"
    },
    {
        "date": "01/12/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Bellingham",
        "fromTo": "Vigar24",
        "amount": 192126634,
        "id": "fb23f85d"
    },
    {
        "date": "01/12/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Bellingham",
        "fromTo": "Pablinistan FC",
        "amount": 192126634,
        "id": "fe96e9ca"
    },
    {
        "date": "01/12/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Ratiu",
        "fromTo": "Pablinistan FC",
        "amount": 29560224,
        "id": "3e4d7ce7"
    },
    {
        "date": "01/12/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Ratiu",
        "fromTo": "Visite La Manga FC",
        "amount": 29560224,
        "id": "10bebdd"
    },
    {
        "date": "01/12/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Vini Jr.",
        "fromTo": "Pablinistan FC",
        "amount": 234063387,
        "id": "7df37d00"
    },
    {
        "date": "01/12/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Vini Jr.",
        "fromTo": "Visite La Manga FC",
        "amount": 234063387,
        "id": "cd5580f6"
    },
    {
        "date": "01/12/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Mbappé",
        "fromTo": "Alcatamy eSports By",
        "amount": 264000000,
        "id": "d52fb16f"
    },
    {
        "date": "01/12/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "De Frutos",
        "fromTo": "LALIGA",
        "amount": 49984702,
        "id": "e4d9e972"
    },
    {
        "date": "01/12/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Héctor Fort",
        "fromTo": "LALIGA",
        "amount": 1031472,
        "id": "31b3ba6"
    },
    {
        "date": "01/12/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 14",
        "fromTo": "Premio",
        "amount": 6000000,
        "id": "51c464b7"
    },
    {
        "date": "01/12/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 14",
        "fromTo": "Premio",
        "amount": 6900000,
        "id": "31640561"
    },
    {
        "date": "01/12/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 14",
        "fromTo": "Premio",
        "amount": 8900000,
        "id": "92ef84ed"
    },
    {
        "date": "01/12/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 14",
        "fromTo": "Premio",
        "amount": 4000000,
        "id": "6fe31a74"
    },
    {
        "date": "01/12/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 14",
        "fromTo": "Premio",
        "amount": 8400000,
        "id": "3fdf42db"
    },
    {
        "date": "01/12/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 14",
        "fromTo": "Premio",
        "amount": 9400000,
        "id": "82fa1ece"
    },
    {
        "date": "01/12/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Huijsen",
        "fromTo": "LALIGA",
        "amount": 62632414,
        "id": "990f4271"
    },
    {
        "date": "01/12/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Budimir",
        "fromTo": "LALIGA",
        "amount": 16437993,
        "id": "ac29c04e"
    },
    {
        "date": "01/12/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Denis Suárez",
        "fromTo": "LALIGA",
        "amount": 631983,
        "id": "ee40a15b"
    },
    {
        "date": "30/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Rashford",
        "fromTo": "LALIGA",
        "amount": 96610862,
        "id": "79b22a9e"
    },
    {
        "date": "30/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Ounahi",
        "fromTo": "Visite La Manga FC",
        "amount": 14426357,
        "id": "b8925c4a"
    },
    {
        "date": "30/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Ounahi",
        "fromTo": "Pablinistan FC",
        "amount": 14426357,
        "id": "1e844664"
    },
    {
        "date": "30/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Aitor Fdez",
        "fromTo": "LALIGA",
        "amount": 589731,
        "id": "462b4dab"
    },
    {
        "date": "30/11/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "B. Iglesias",
        "fromTo": "LALIGA",
        "amount": 18684944,
        "id": "6ade91ce"
    },
    {
        "date": "30/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Cabrera",
        "fromTo": "LALIGA",
        "amount": 9451994,
        "id": "275a21b7"
    },
    {
        "date": "30/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Á. Valles",
        "fromTo": "LALIGA",
        "amount": 3859409,
        "id": "f2f4244c"
    },
    {
        "date": "29/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Rondón",
        "fromTo": "LALIGA",
        "amount": 631604,
        "id": "24fd86ee"
    },
    {
        "date": "28/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Cayetano",
        "fromTo": "LALIGA",
        "amount": 516423,
        "id": "dd49af1a"
    },
    {
        "date": "28/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Álex Baena",
        "fromTo": "Alcatamy eSports By",
        "amount": 80000000,
        "id": "d5fca097"
    },
    {
        "date": "28/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Trent",
        "fromTo": "LALIGA",
        "amount": 21040452,
        "id": "653cb52b"
    },
    {
        "date": "28/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Jon Martin",
        "fromTo": "LALIGA",
        "amount": 1200448,
        "id": "d054b825"
    },
    {
        "date": "28/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Dolan",
        "fromTo": "LALIGA",
        "amount": 5000110,
        "id": "f2ee856f"
    },
    {
        "date": "28/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Arambarri",
        "fromTo": "LALIGA",
        "amount": 16800004,
        "id": "44387c43"
    },
    {
        "date": "28/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Oyarzabal",
        "fromTo": "LALIGA",
        "amount": 66057048,
        "id": "8d5ee4ae"
    },
    {
        "date": "28/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "A. Liso",
        "fromTo": "LALIGA",
        "amount": 6766670,
        "id": "157f9c40"
    },
    {
        "date": "28/11/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Griezmann",
        "fromTo": "LALIGA",
        "amount": 25455081,
        "id": "cee3ffe4"
    },
    {
        "date": "28/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Koke",
        "fromTo": "LALIGA",
        "amount": 11848900,
        "id": "3a734128"
    },
    {
        "date": "28/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "David Soria",
        "fromTo": "LALIGA",
        "amount": 13561809,
        "id": "4a3c824b"
    },
    {
        "date": "28/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Huijsen",
        "fromTo": "LALIGA",
        "amount": 59122453,
        "id": "65af3346"
    },
    {
        "date": "28/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Renato Veiga",
        "fromTo": "LALIGA",
        "amount": 23375171,
        "id": "be117f7d"
    },
    {
        "date": "28/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "A. Moleiro",
        "fromTo": "Alcatamy eSports By",
        "amount": 82561476,
        "id": "6bd684a9"
    },
    {
        "date": "28/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "A. Moleiro",
        "fromTo": "Pablinistan FC",
        "amount": 82561476,
        "id": "ee41fae6"
    },
    {
        "date": "28/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Brais Méndez",
        "fromTo": "Visite La Manga FC",
        "amount": 24907972,
        "id": "bd3d5d8e"
    },
    {
        "date": "28/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Brais Méndez",
        "fromTo": "Pablinistan FC",
        "amount": 24907972,
        "id": "fbf9cc28"
    },
    {
        "date": "28/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Maffeo",
        "fromTo": "LALIGA",
        "amount": 2996202,
        "id": "3d0cdff8"
    },
    {
        "date": "28/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Iñaki Peña",
        "fromTo": "LALIGA",
        "amount": 1973601,
        "id": "17d151ab"
    },
    {
        "date": "28/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Akor",
        "fromTo": "LALIGA",
        "amount": 1131930,
        "id": "da0b4e35"
    },
    {
        "date": "28/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Dela",
        "fromTo": "LALIGA",
        "amount": 597516,
        "id": "fdd6ab87"
    },
    {
        "date": "28/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Álex Baena",
        "fromTo": "Pablinistan FC",
        "amount": 80000000,
        "id": "8dd69f94"
    },
    {
        "date": "28/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Barrenetxea",
        "fromTo": "LALIGA",
        "amount": 55550000,
        "id": "9ba02e88"
    },
    {
        "date": "27/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Suazo",
        "fromTo": "LALIGA",
        "amount": 6181156,
        "id": "984b00bb"
    },
    {
        "date": "27/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Witsel",
        "fromTo": "LALIGA",
        "amount": 4370970,
        "id": "ac2de302"
    },
    {
        "date": "27/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "David Carmo",
        "fromTo": "LALIGA",
        "amount": 1927451,
        "id": "35954be5"
    },
    {
        "date": "27/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Fermín",
        "fromTo": "LALIGA",
        "amount": 95223490,
        "id": "8f95a93a"
    },
    {
        "date": "27/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Raíllo",
        "fromTo": "LALIGA",
        "amount": 6509818,
        "id": "2ff0a82a"
    },
    {
        "date": "26/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Lunin",
        "fromTo": "LALIGA",
        "amount": 1000002,
        "id": "2c4b302e"
    },
    {
        "date": "25/11/2025",
        "team": "Pablinistan FC",
        "type": "blindaje",
        "player": "Vini Jr.",
        "fromTo": "-",
        "amount": 0,
        "id": "6e70f6c9"
    },
    {
        "date": "25/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Gazzaniga",
        "fromTo": "LALIGA",
        "amount": 5000001,
        "id": "3ad35ad8"
    },
    {
        "date": "25/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Danjuma",
        "fromTo": "LALIGA",
        "amount": 34000000,
        "id": "8cd694ab"
    },
    {
        "date": "25/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Á. Carreras",
        "fromTo": "LALIGA",
        "amount": 90103547,
        "id": "74d062a2"
    },
    {
        "date": "25/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Dmitrovic",
        "fromTo": "GOLENCIERRO FC",
        "amount": 19300491,
        "id": "e285142e"
    },
    {
        "date": "25/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Dmitrovic",
        "fromTo": "Visite La Manga FC",
        "amount": 19300491,
        "id": "af621d4a"
    },
    {
        "date": "25/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Óscar Valentín",
        "fromTo": "GOLENCIERRO FC",
        "amount": 1100000,
        "id": "4740f31b"
    },
    {
        "date": "25/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Óscar Valentín",
        "fromTo": "Visite La Manga FC",
        "amount": 1100000,
        "id": "ddfc0e37"
    },
    {
        "date": "25/11/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "L. Milla",
        "fromTo": "-",
        "amount": 0,
        "id": "f47db005"
    },
    {
        "date": "25/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Fornals",
        "fromTo": "LALIGA",
        "amount": 78873857,
        "id": "5bbad585"
    },
    {
        "date": "25/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "A. Pedraza",
        "fromTo": "Pablinistan FC",
        "amount": 1624797,
        "id": "e9fdec37"
    },
    {
        "date": "25/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "A. Pedraza",
        "fromTo": "Vigar24",
        "amount": 1624797,
        "id": "b3843f4a"
    },
    {
        "date": "25/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Rubén García",
        "fromTo": "LALIGA",
        "amount": 5691383,
        "id": "f43d1720"
    },
    {
        "date": "25/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "C. Alvarez",
        "fromTo": "LALIGA",
        "amount": 11951186,
        "id": "fd4a148e"
    },
    {
        "date": "25/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Gorrotxa",
        "fromTo": "GOLENCIERRO FC",
        "amount": 3000000,
        "id": "263d49c5"
    },
    {
        "date": "25/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Gorrotxa",
        "fromTo": "Pablinistan FC",
        "amount": 3000000,
        "id": "a61bdd39"
    },
    {
        "date": "25/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Raphinha",
        "fromTo": "Morenazos FC",
        "amount": 190031541,
        "id": "7083f0cd"
    },
    {
        "date": "25/11/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Raphinha",
        "fromTo": "Pablinistan FC",
        "amount": 190031541,
        "id": "585f461a"
    },
    {
        "date": "25/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Héctor Fort",
        "fromTo": "LALIGA",
        "amount": 971937,
        "id": "7891a368"
    },
    {
        "date": "25/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "André Silva",
        "fromTo": "LALIGA",
        "amount": 9233466,
        "id": "5b2cdcb0"
    },
    {
        "date": "25/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Gerard",
        "fromTo": "LALIGA",
        "amount": 35323221,
        "id": "96d96253"
    },
    {
        "date": "24/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Danjuma",
        "fromTo": "LALIGA",
        "amount": 32750912,
        "id": "8ff33b38"
    },
    {
        "date": "24/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "J. M. Giménez",
        "fromTo": "GOLENCIERRO FC",
        "amount": 26657111,
        "id": "fe5df24a"
    },
    {
        "date": "24/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "J. M. Giménez",
        "fromTo": "Vigar24",
        "amount": 26657111,
        "id": "b8168603"
    },
    {
        "date": "24/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Agirrezabala",
        "fromTo": "Visite La Manga FC",
        "amount": 18903850,
        "id": "ba1b36e5"
    },
    {
        "date": "24/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Agirrezabala",
        "fromTo": "Pablinistan FC",
        "amount": 18903850,
        "id": "f8d7a57f"
    },
    {
        "date": "24/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Júnior R.",
        "fromTo": "LALIGA",
        "amount": 30981920,
        "id": "6127b876"
    },
    {
        "date": "24/11/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 13",
        "fromTo": "Premio",
        "amount": 8800000,
        "id": "5373443"
    },
    {
        "date": "24/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "once_ideal",
        "player": "11 Ideal J13",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "3e70aee3"
    },
    {
        "date": "24/11/2025",
        "team": "Vigar24",
        "type": "once_ideal",
        "player": "11 Ideal J13",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "7e18f6c0"
    },
    {
        "date": "24/11/2025",
        "team": "Alcatamy eSports By",
        "type": "once_ideal",
        "player": "11 Ideal J13",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "e83ea78a"
    },
    {
        "date": "24/11/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 13",
        "fromTo": "Premio",
        "amount": 5500000,
        "id": "190d21cf"
    },
    {
        "date": "24/11/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 13",
        "fromTo": "Premio",
        "amount": 7100000,
        "id": "7fcaaf6e"
    },
    {
        "date": "24/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 13",
        "fromTo": "Premio",
        "amount": 8700000,
        "id": "b0b95db7"
    },
    {
        "date": "24/11/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 13",
        "fromTo": "Premio",
        "amount": 7300000,
        "id": "f784bad4"
    },
    {
        "date": "24/11/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 13",
        "fromTo": "Premio",
        "amount": 8600000,
        "id": "f98c8c0f"
    },
    {
        "date": "24/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Ayoze",
        "fromTo": "LALIGA",
        "amount": 18000000,
        "id": "b350ae3f"
    },
    {
        "date": "24/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Álvaro",
        "fromTo": "LALIGA",
        "amount": 2569941,
        "id": "5d07a37"
    },
    {
        "date": "24/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Lewandowski",
        "fromTo": "Pablinistan FC",
        "amount": 81516062,
        "id": "fc50160a"
    },
    {
        "date": "24/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Lewandowski",
        "fromTo": "Vigar24",
        "amount": 81516062,
        "id": "7d8df05d"
    },
    {
        "date": "23/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Isco",
        "fromTo": "Pablinistan FC",
        "amount": 81245098,
        "id": "2cd64768"
    },
    {
        "date": "23/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Isco",
        "fromTo": "Vigar24",
        "amount": 81245098,
        "id": "9ef71475"
    },
    {
        "date": "23/11/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "Bellingham",
        "fromTo": "-",
        "amount": 0,
        "id": "57b648f3"
    },
    {
        "date": "23/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Renato Veiga",
        "fromTo": "LALIGA",
        "amount": 21852400,
        "id": "55826a12"
    },
    {
        "date": "23/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Marcos Llorente",
        "fromTo": "LALIGA",
        "amount": 81572262,
        "id": "63883a24"
    },
    {
        "date": "22/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Lo Celso",
        "fromTo": "LALIGA",
        "amount": 57965083,
        "id": "26de35a3"
    },
    {
        "date": "22/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Giuliano",
        "fromTo": "LALIGA",
        "amount": 79473897,
        "id": "fa87a1ad"
    },
    {
        "date": "22/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "V. Chust",
        "fromTo": "LALIGA",
        "amount": 1000000,
        "id": "29825d7c"
    },
    {
        "date": "22/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Gayá",
        "fromTo": "LALIGA",
        "amount": 2753766,
        "id": "b7eff923"
    },
    {
        "date": "22/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "De Frutos",
        "fromTo": "LALIGA",
        "amount": 45920096,
        "id": "a834654e"
    },
    {
        "date": "20/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Giuliano",
        "fromTo": "LALIGA",
        "amount": 76000001,
        "id": "e34bbd57"
    },
    {
        "date": "19/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Comesaña",
        "fromTo": "Alcatamy eSports By",
        "amount": 13257566,
        "id": "fbc513d1"
    },
    {
        "date": "19/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Riedel",
        "fromTo": "LALIGA",
        "amount": 3258835,
        "id": "ac6a1c14"
    },
    {
        "date": "19/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Lo Celso",
        "fromTo": "LALIGA",
        "amount": 53450000,
        "id": "d95affdf"
    },
    {
        "date": "19/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Comesaña",
        "fromTo": "GOLENCIERRO FC",
        "amount": 13257566,
        "id": "e4ffeff4"
    },
    {
        "date": "19/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Montero",
        "fromTo": "LALIGA",
        "amount": 519048,
        "id": "9ee66182"
    },
    {
        "date": "18/11/2025",
        "team": "Pablinistan FC",
        "type": "blindaje",
        "player": "Isco",
        "fromTo": "-",
        "amount": 0,
        "id": "bbcba98b"
    },
    {
        "date": "18/11/2025",
        "team": "Alcatamy eSports By",
        "type": "blindaje",
        "player": "Julián Alvarez",
        "fromTo": "-",
        "amount": 0,
        "id": "9ba41a3a"
    },
    {
        "date": "18/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Fermín",
        "fromTo": "Alcatamy eSports By",
        "amount": 73548197,
        "id": "3f1ece2e"
    },
    {
        "date": "18/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Giuliano",
        "fromTo": "LALIGA",
        "amount": 75515680,
        "id": "cf2e7522"
    },
    {
        "date": "18/11/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Bartra",
        "fromTo": "LALIGA",
        "amount": 29200000,
        "id": "ab45c7da"
    },
    {
        "date": "18/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "E. Militão",
        "fromTo": "LALIGA",
        "amount": 68409423,
        "id": "d37c9de1"
    },
    {
        "date": "18/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Fermín",
        "fromTo": "Vigar24",
        "amount": 73548197,
        "id": "e75266aa"
    },
    {
        "date": "17/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Camavinga",
        "fromTo": "LALIGA",
        "amount": 11339379,
        "id": "9e273c10"
    },
    {
        "date": "16/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Aitor Fdez",
        "fromTo": "LALIGA",
        "amount": 534520,
        "id": "100b6db7"
    },
    {
        "date": "16/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Courtois",
        "fromTo": "LALIGA",
        "amount": 50000000,
        "id": "bc210e76"
    },
    {
        "date": "16/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "A. Moleiro",
        "fromTo": "Alcatamy eSports By",
        "amount": 42853073,
        "id": "51084ae8"
    },
    {
        "date": "16/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "A. Moleiro",
        "fromTo": "Visite La Manga FC",
        "amount": 42853073,
        "id": "53ce937d"
    },
    {
        "date": "16/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "E. Militão",
        "fromTo": "LALIGA",
        "amount": 68933201,
        "id": "788949b5"
    },
    {
        "date": "16/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Amrabat",
        "fromTo": "Alcatamy eSports By",
        "amount": 8208950,
        "id": "f6f15998"
    },
    {
        "date": "16/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Amrabat",
        "fromTo": "Pablinistan FC",
        "amount": 8208950,
        "id": "6d637655"
    },
    {
        "date": "16/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Muriqi",
        "fromTo": "Morenazos FC",
        "amount": 20924810,
        "id": "1ebcfbaf"
    },
    {
        "date": "16/11/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Muriqi",
        "fromTo": "Visite La Manga FC",
        "amount": 20924810,
        "id": "26832fda"
    },
    {
        "date": "16/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Ounahi",
        "fromTo": "Pablinistan FC",
        "amount": 14426357,
        "id": "2009df2"
    },
    {
        "date": "16/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Ounahi",
        "fromTo": "Visite La Manga FC",
        "amount": 14426357,
        "id": "97100dbc"
    },
    {
        "date": "16/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Brais Méndez",
        "fromTo": "GOLENCIERRO FC",
        "amount": 17770814,
        "id": "1c150651"
    },
    {
        "date": "16/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Brais Méndez",
        "fromTo": "Visite La Manga FC",
        "amount": 17770814,
        "id": "4a3c17b5"
    },
    {
        "date": "16/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "A. Moleiro",
        "fromTo": "Alcatamy eSports By",
        "amount": 44479882,
        "id": "1cd685c2"
    },
    {
        "date": "16/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Witsel",
        "fromTo": "LALIGA",
        "amount": 4366094,
        "id": "a4f50be6"
    },
    {
        "date": "16/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "F. Calero",
        "fromTo": "LALIGA",
        "amount": 1112770,
        "id": "426b7d01"
    },
    {
        "date": "16/11/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Brahim",
        "fromTo": "LALIGA",
        "amount": 6013622,
        "id": "1c6d9310"
    },
    {
        "date": "16/11/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Álvaro Nuñez",
        "fromTo": "GOLENCIERRO FC",
        "amount": 14024506,
        "id": "a4110cdf"
    },
    {
        "date": "16/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Álvaro Nuñez",
        "fromTo": "Morenazos FC",
        "amount": 14024506,
        "id": "acc09eca"
    },
    {
        "date": "16/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Vargas",
        "fromTo": "Alcatamy eSports By",
        "amount": 53315077,
        "id": "9b5b5031"
    },
    {
        "date": "16/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Vargas",
        "fromTo": "Visite La Manga FC",
        "amount": 53315077,
        "id": "c85f2b46"
    },
    {
        "date": "16/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "A. Moleiro",
        "fromTo": "Visite La Manga FC",
        "amount": 44479882,
        "id": "8d8e017"
    },
    {
        "date": "16/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Asencio",
        "fromTo": "LALIGA",
        "amount": 3582439,
        "id": "daea3ca7"
    },
    {
        "date": "16/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Oyarzabal",
        "fromTo": "LALIGA",
        "amount": 66432121,
        "id": "2b5db657"
    },
    {
        "date": "15/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Ratiu",
        "fromTo": "Visite La Manga FC",
        "amount": 20198213,
        "id": "17210525"
    },
    {
        "date": "15/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Ratiu",
        "fromTo": "Pablinistan FC",
        "amount": 20198213,
        "id": "e09c6fcb"
    },
    {
        "date": "15/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Maffeo",
        "fromTo": "Visite La Manga FC",
        "amount": 3050000,
        "id": "5b2f0592"
    },
    {
        "date": "15/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Maffeo",
        "fromTo": "Pablinistan FC",
        "amount": 3050000,
        "id": "24aa7038"
    },
    {
        "date": "14/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "C. Romero",
        "fromTo": "Morenazos FC",
        "amount": 20354311,
        "id": "be666a67"
    },
    {
        "date": "14/11/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "C. Romero",
        "fromTo": "Vigar24",
        "amount": 20354311,
        "id": "eabb9179"
    },
    {
        "date": "14/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Danjuma",
        "fromTo": "Visite La Manga FC",
        "amount": 27522836,
        "id": "f7c9f52a"
    },
    {
        "date": "14/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Danjuma",
        "fromTo": "Vigar24",
        "amount": 27522836,
        "id": "95f2cd55"
    },
    {
        "date": "14/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Fornals",
        "fromTo": "Pablinistan FC",
        "amount": 81000421,
        "id": "e115ea8"
    },
    {
        "date": "14/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Fornals",
        "fromTo": "Vigar24",
        "amount": 81000421,
        "id": "45275a7b"
    },
    {
        "date": "14/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Lejeune",
        "fromTo": "Pablinistan FC",
        "amount": 24300100,
        "id": "ff9127f7"
    },
    {
        "date": "14/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Lejeune",
        "fromTo": "Vigar24",
        "amount": 24300100,
        "id": "36a723ca"
    },
    {
        "date": "14/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Szczesny",
        "fromTo": "LALIGA",
        "amount": 5709351,
        "id": "3cf292ab"
    },
    {
        "date": "14/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Germán",
        "fromTo": "LALIGA",
        "amount": 542406,
        "id": "141d6c77"
    },
    {
        "date": "14/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Akor",
        "fromTo": "LALIGA",
        "amount": 1283181,
        "id": "786453dd"
    },
    {
        "date": "14/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Cayetano",
        "fromTo": "LALIGA",
        "amount": 496429,
        "id": "f31467bb"
    },
    {
        "date": "13/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Pere Milla",
        "fromTo": "LALIGA",
        "amount": 17825029,
        "id": "18175665"
    },
    {
        "date": "13/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Rafa Mir",
        "fromTo": "LALIGA",
        "amount": 16452722,
        "id": "36678edb"
    },
    {
        "date": "13/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Isi",
        "fromTo": "LALIGA",
        "amount": 20414219,
        "id": "98b8284a"
    },
    {
        "date": "13/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Júnior R.",
        "fromTo": "Vigar24",
        "amount": 29734312,
        "id": "4ca33f49"
    },
    {
        "date": "13/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Júnior R.",
        "fromTo": "Pablinistan FC",
        "amount": 29734312,
        "id": "c10da7f6"
    },
    {
        "date": "13/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "F. de Jong",
        "fromTo": "LALIGA",
        "amount": 62898311,
        "id": "86628089"
    },
    {
        "date": "13/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Vargas",
        "fromTo": "Alcatamy eSports By",
        "amount": 53315077,
        "id": "b7def8a3"
    },
    {
        "date": "13/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Mikautadze",
        "fromTo": "LALIGA",
        "amount": 26424472,
        "id": "b540854e"
    },
    {
        "date": "13/11/2025",
        "team": "Visite La Manga FC",
        "type": "blindaje",
        "player": "Mbappé",
        "fromTo": "-",
        "amount": 0,
        "id": "d9fbdd4a"
    },
    {
        "date": "13/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Á. Carreras",
        "fromTo": "Alcatamy eSports By",
        "amount": 74713885,
        "id": "bb61ccea"
    },
    {
        "date": "13/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Vivian",
        "fromTo": "LALIGA",
        "amount": 31797584,
        "id": "a903f148"
    },
    {
        "date": "13/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Pepe",
        "fromTo": "LALIGA",
        "amount": 82050000,
        "id": "5670af13"
    },
    {
        "date": "13/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Germán",
        "fromTo": "LALIGA",
        "amount": 510078,
        "id": "332c91b"
    },
    {
        "date": "13/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Vargas",
        "fromTo": "Visite La Manga FC",
        "amount": 53315077,
        "id": "546dc578"
    },
    {
        "date": "13/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Á. Carreras",
        "fromTo": "Vigar24",
        "amount": 74713885,
        "id": "6f4621ee"
    },
    {
        "date": "12/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "M. Casadó",
        "fromTo": "LALIGA",
        "amount": 4775091,
        "id": "cf467ba0"
    },
    {
        "date": "12/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Álex Balde",
        "fromTo": "LALIGA",
        "amount": 38347859,
        "id": "ad942276"
    },
    {
        "date": "11/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Lewandowski",
        "fromTo": "LALIGA",
        "amount": 76000852,
        "id": "a1a19708"
    },
    {
        "date": "11/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "David Carmo",
        "fromTo": "LALIGA",
        "amount": 1564438,
        "id": "127541a7"
    },
    {
        "date": "10/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Mouriño",
        "fromTo": "LALIGA",
        "amount": 27578819,
        "id": "d4a80d1e"
    },
    {
        "date": "10/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "André Silva",
        "fromTo": "LALIGA",
        "amount": 12794789,
        "id": "cb31e3d9"
    },
    {
        "date": "10/11/2025",
        "team": "Visite La Manga FC",
        "type": "once_ideal",
        "player": "11 Ideal J12",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "d716d492"
    },
    {
        "date": "10/11/2025",
        "team": "Alcatamy eSports By",
        "type": "once_ideal",
        "player": "11 Ideal J12",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "805d7aab"
    },
    {
        "date": "10/11/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 12",
        "fromTo": "Premio",
        "amount": 5600000,
        "id": "867d8b6d"
    },
    {
        "date": "10/11/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 12",
        "fromTo": "Premio",
        "amount": 6400000,
        "id": "bbbe8f09"
    },
    {
        "date": "10/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 12",
        "fromTo": "Premio",
        "amount": 6500000,
        "id": "af3ec6f6"
    },
    {
        "date": "10/11/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 12",
        "fromTo": "Premio",
        "amount": 6200000,
        "id": "2ca537f3"
    },
    {
        "date": "10/11/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 12",
        "fromTo": "Premio",
        "amount": 10500000,
        "id": "37b6225e"
    },
    {
        "date": "10/11/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 12",
        "fromTo": "Premio",
        "amount": 9000000,
        "id": "98323b8b"
    },
    {
        "date": "10/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Huijsen",
        "fromTo": "LALIGA",
        "amount": 72176377,
        "id": "611d2ba7"
    },
    {
        "date": "10/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "A. Pedraza",
        "fromTo": "GOLENCIERRO FC",
        "amount": 1000001,
        "id": "241c8e60"
    },
    {
        "date": "10/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "A. Pedraza",
        "fromTo": "Pablinistan FC",
        "amount": 1000001,
        "id": "26a414d4"
    },
    {
        "date": "10/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Sergio Gómez",
        "fromTo": "LALIGA",
        "amount": 10352649,
        "id": "9ee9855d"
    },
    {
        "date": "10/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "E. Militão",
        "fromTo": "LALIGA",
        "amount": 73257423,
        "id": "335b7983"
    },
    {
        "date": "09/11/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "Rashford",
        "fromTo": "-",
        "amount": 0,
        "id": "7530c23d"
    },
    {
        "date": "09/11/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Bryan Gil",
        "fromTo": "LALIGA",
        "amount": 3077548,
        "id": "a5c37ffb"
    },
    {
        "date": "09/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Mikautadze",
        "fromTo": "LALIGA",
        "amount": 30000000,
        "id": "bc47335c"
    },
    {
        "date": "09/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Becker",
        "fromTo": "LALIGA",
        "amount": 803667,
        "id": "43fdad90"
    },
    {
        "date": "09/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "R. Araujo",
        "fromTo": "LALIGA",
        "amount": 20000000,
        "id": "5358654a"
    },
    {
        "date": "09/11/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Carlos V.",
        "fromTo": "LALIGA",
        "amount": 24731754,
        "id": "7b324c3a"
    },
    {
        "date": "09/11/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Pathé I. Ciss",
        "fromTo": "LALIGA",
        "amount": 10748890,
        "id": "be608ca1"
    },
    {
        "date": "08/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Rubén García",
        "fromTo": "Visite La Manga FC",
        "amount": 4567395,
        "id": "4989114a"
    },
    {
        "date": "08/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Rubén García",
        "fromTo": "GOLENCIERRO FC",
        "amount": 4567395,
        "id": "61c913ca"
    },
    {
        "date": "08/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Szczesny",
        "fromTo": "Alcatamy eSports By",
        "amount": 6260601,
        "id": "7868965a"
    },
    {
        "date": "08/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Szczesny",
        "fromTo": "GOLENCIERRO FC",
        "amount": 6260601,
        "id": "4193fa97"
    },
    {
        "date": "08/11/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "André Silva",
        "fromTo": "-",
        "amount": 0,
        "id": "645479f9"
    },
    {
        "date": "08/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Rashford",
        "fromTo": "Alcatamy eSports By",
        "amount": 103557466,
        "id": "de9b6979"
    },
    {
        "date": "08/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Valverde",
        "fromTo": "LALIGA",
        "amount": 91055832,
        "id": "8752bd3d"
    },
    {
        "date": "08/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Carmona",
        "fromTo": "LALIGA",
        "amount": 14719049,
        "id": "1f21e91"
    },
    {
        "date": "08/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "C. Alvarez",
        "fromTo": "LALIGA",
        "amount": 11500000,
        "id": "d9ac1afd"
    },
    {
        "date": "08/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "El Hilali",
        "fromTo": "LALIGA",
        "amount": 3528955,
        "id": "bb14def1"
    },
    {
        "date": "08/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Rashford",
        "fromTo": "Vigar24",
        "amount": 103557466,
        "id": "aad92f7d"
    },
    {
        "date": "07/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Cucho",
        "fromTo": "GOLENCIERRO FC",
        "amount": 50285039,
        "id": "1a72c939"
    },
    {
        "date": "07/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Cucho",
        "fromTo": "Vigar24",
        "amount": 50285039,
        "id": "76d325f2"
    },
    {
        "date": "07/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Affengruber",
        "fromTo": "LALIGA",
        "amount": 31824627,
        "id": "1622ed8"
    },
    {
        "date": "07/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Leo Román",
        "fromTo": "LALIGA",
        "amount": 5814044,
        "id": "a7a41bb5"
    },
    {
        "date": "07/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Chavarría",
        "fromTo": "LALIGA",
        "amount": 7636822,
        "id": "82bd2ad7"
    },
    {
        "date": "07/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Samu Costa",
        "fromTo": "LALIGA",
        "amount": 3000001,
        "id": "ccaf0e20"
    },
    {
        "date": "07/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Giuliano",
        "fromTo": "LALIGA",
        "amount": 73670212,
        "id": "2a39e441"
    },
    {
        "date": "06/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Camavinga",
        "fromTo": "Alcatamy eSports By",
        "amount": 12000000,
        "id": "26e9bbc6"
    },
    {
        "date": "06/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Cabrera",
        "fromTo": "LALIGA",
        "amount": 11718099,
        "id": "f493d4ed"
    },
    {
        "date": "06/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Sow",
        "fromTo": "LALIGA",
        "amount": 916020,
        "id": "e45d79d6"
    },
    {
        "date": "06/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Catena",
        "fromTo": "LALIGA",
        "amount": 50816215,
        "id": "9add3089"
    },
    {
        "date": "06/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Jauregizar",
        "fromTo": "LALIGA",
        "amount": 29246606,
        "id": "c932a8a7"
    },
    {
        "date": "06/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Rafa Mir",
        "fromTo": "LALIGA",
        "amount": 17005000,
        "id": "2e5e17bf"
    },
    {
        "date": "06/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Isi",
        "fromTo": "LALIGA",
        "amount": 26000000,
        "id": "6b9724df"
    },
    {
        "date": "06/11/2025",
        "team": "Pablinistan FC",
        "type": "blindaje",
        "player": "Lejeune",
        "fromTo": "-",
        "amount": 0,
        "id": "68d9fccb"
    },
    {
        "date": "06/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Papa",
        "fromTo": "LALIGA",
        "amount": 484519,
        "id": "a8b3d217"
    },
    {
        "date": "06/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Natan",
        "fromTo": "LALIGA",
        "amount": 39874195,
        "id": "e8f833a7"
    },
    {
        "date": "06/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Camavinga",
        "fromTo": "GOLENCIERRO FC",
        "amount": 12000000,
        "id": "650a6403"
    },
    {
        "date": "05/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Renato Veiga",
        "fromTo": "LALIGA",
        "amount": 13582105,
        "id": "84225c35"
    },
    {
        "date": "05/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Fermin",
        "fromTo": "LALIGA",
        "amount": 57400001,
        "id": "92272ca9"
    },
    {
        "date": "05/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "M. Casadó",
        "fromTo": "LALIGA",
        "amount": 4400046,
        "id": "5871577d"
    },
    {
        "date": "05/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Álex Balde",
        "fromTo": "LALIGA",
        "amount": 37401440,
        "id": "1684849c"
    },
    {
        "date": "05/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Foyth",
        "fromTo": "LALIGA",
        "amount": 18952922,
        "id": "3f58bacb"
    },
    {
        "date": "04/11/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 11",
        "fromTo": "Premio",
        "amount": 5700000,
        "id": "6c02c8cc"
    },
    {
        "date": "04/11/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 11",
        "fromTo": "Premio",
        "amount": 11400000,
        "id": "767bfbab"
    },
    {
        "date": "04/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Kike Salas",
        "fromTo": "LALIGA",
        "amount": 2315148,
        "id": "49618381"
    },
    {
        "date": "04/11/2025",
        "team": "Visite La Manga FC",
        "type": "once_ideal",
        "player": "11 Ideal J11",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "6f35a7b3"
    },
    {
        "date": "04/11/2025",
        "team": "Vigar24",
        "type": "once_ideal",
        "player": "11 Ideal J11",
        "fromTo": "Premio",
        "amount": 200000,
        "id": "b00b75a1"
    },
    {
        "date": "04/11/2025",
        "team": "Pablinistan FC",
        "type": "once_ideal",
        "player": "11 Ideal J11",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "3cc8b58b"
    },
    {
        "date": "04/11/2025",
        "team": "Alcatamy eSports By",
        "type": "once_ideal",
        "player": "11 Ideal J11",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "187c4dcc"
    },
    {
        "date": "04/11/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 11",
        "fromTo": "Premio",
        "amount": 7100000,
        "id": "537d57d3"
    },
    {
        "date": "04/11/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 11",
        "fromTo": "Premio",
        "amount": 6600000,
        "id": "2ae3d146"
    },
    {
        "date": "04/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 11",
        "fromTo": "Premio",
        "amount": 7800000,
        "id": "54ff1d13"
    },
    {
        "date": "04/11/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 11",
        "fromTo": "Premio",
        "amount": 11400000,
        "id": "769e13e1"
    },
    {
        "date": "04/11/2025",
        "team": "Visite La Manga FC",
        "type": "blindaje",
        "player": "Danjuma",
        "fromTo": "-",
        "amount": 0,
        "id": "6cb8622b"
    },
    {
        "date": "04/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Huijsen",
        "fromTo": "LALIGA",
        "amount": 70115149,
        "id": "ecc057f1"
    },
    {
        "date": "03/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "A. Moleiro",
        "fromTo": "Alcatamy eSports By",
        "amount": 28494328,
        "id": "54ef4a0e"
    },
    {
        "date": "03/11/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Manuel Fernández",
        "fromTo": "LALIGA",
        "amount": 767707,
        "id": "8eb8f149"
    },
    {
        "date": "03/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "De Frutos",
        "fromTo": "Alcatamy eSports By",
        "amount": 51129893,
        "id": "629c4f89"
    },
    {
        "date": "03/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Maffeo",
        "fromTo": "LALIGA",
        "amount": 3050000,
        "id": "9f9deeea"
    },
    {
        "date": "03/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Isco",
        "fromTo": "LALIGA",
        "amount": 13281863,
        "id": "2112951a"
    },
    {
        "date": "03/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Areso",
        "fromTo": "LALIGA",
        "amount": 13570195,
        "id": "6101a779"
    },
    {
        "date": "03/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Álvaro Nuñez",
        "fromTo": "LALIGA",
        "amount": 12000000,
        "id": "389ac10d"
    },
    {
        "date": "03/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Brais Méndez",
        "fromTo": "LALIGA",
        "amount": 13000500,
        "id": "60133a79"
    },
    {
        "date": "03/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "A. Moleiro",
        "fromTo": "Pablinistan FC",
        "amount": 28494328,
        "id": "cc9490b"
    },
    {
        "date": "03/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "De Frutos",
        "fromTo": "Vigar24",
        "amount": 51129893,
        "id": "2eda158d"
    },
    {
        "date": "03/11/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Mouriño",
        "fromTo": "LALIGA",
        "amount": 21750231,
        "id": "90511e9a"
    },
    {
        "date": "02/11/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "L. Milla",
        "fromTo": "Alcatamy eSports By",
        "amount": 76082394,
        "id": "198f7625"
    },
    {
        "date": "02/11/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "L. Milla",
        "fromTo": "Vigar24",
        "amount": 76082394,
        "id": "31bfb93d"
    },
    {
        "date": "02/11/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Dmitrovic",
        "fromTo": "Visite La Manga FC",
        "amount": 14126944,
        "id": "1e8bbde2"
    },
    {
        "date": "02/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Dmitrovic",
        "fromTo": "GOLENCIERRO FC",
        "amount": 14126944,
        "id": "13ea6062"
    },
    {
        "date": "01/11/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Arnau Tenas",
        "fromTo": "Vigar24",
        "amount": 2000000,
        "id": "9683e9fe"
    },
    {
        "date": "01/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Arnau Tenas",
        "fromTo": "Pablinistan FC",
        "amount": 2000000,
        "id": "af6696f1"
    },
    {
        "date": "01/11/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Agirrezabala",
        "fromTo": "Vigar24",
        "amount": 18903850,
        "id": "e52b9a8d"
    },
    {
        "date": "01/11/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Agirrezabala",
        "fromTo": "Visite La Manga FC",
        "amount": 18903850,
        "id": "25067318"
    },
    {
        "date": "01/11/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Pathé I. Ciss",
        "fromTo": "LALIGA",
        "amount": 12705780,
        "id": "5027c9"
    },
    {
        "date": "31/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Júnior R.",
        "fromTo": "LALIGA",
        "amount": 16510525,
        "id": "fe0de4ca"
    },
    {
        "date": "31/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Álex Baena",
        "fromTo": "Alcatamy eSports By",
        "amount": 80000000,
        "id": "b978f825"
    },
    {
        "date": "31/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Álex Baena",
        "fromTo": "Pablinistan FC",
        "amount": 80000000,
        "id": "3be46e62"
    },
    {
        "date": "31/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Febas",
        "fromTo": "LALIGA",
        "amount": 8701463,
        "id": "52cfd084"
    },
    {
        "date": "31/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "O. Sancet",
        "fromTo": "LALIGA",
        "amount": 33789471,
        "id": "e1036a05"
    },
    {
        "date": "31/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Rodrygo",
        "fromTo": "LALIGA",
        "amount": 9411417,
        "id": "75a79a13"
    },
    {
        "date": "31/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "De Frutos",
        "fromTo": "LALIGA",
        "amount": 56348384,
        "id": "a394b642"
    },
    {
        "date": "31/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Marcao",
        "fromTo": "LALIGA",
        "amount": 689998,
        "id": "38655252"
    },
    {
        "date": "31/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Vivian",
        "fromTo": "LALIGA",
        "amount": 32678825,
        "id": "68283e03"
    },
    {
        "date": "30/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Álvaro García",
        "fromTo": "LALIGA",
        "amount": 34125329,
        "id": "8c51d27c"
    },
    {
        "date": "30/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Barrios",
        "fromTo": "LALIGA",
        "amount": 60685623,
        "id": "8f4d2bf1"
    },
    {
        "date": "30/10/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Muriqi",
        "fromTo": "LALIGA",
        "amount": 20924810,
        "id": "15c3c9e8"
    },
    {
        "date": "30/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Manuel Fernández",
        "fromTo": "Vigar24",
        "amount": 1000001,
        "id": "524f1e01"
    },
    {
        "date": "30/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Manuel Fernández",
        "fromTo": "Pablinistan FC",
        "amount": 1000001,
        "id": "96e190ee"
    },
    {
        "date": "30/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "E. Militão",
        "fromTo": "Alcatamy eSports By",
        "amount": 65909269,
        "id": "246f7346"
    },
    {
        "date": "30/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "E. Militão",
        "fromTo": "Pablinistan FC",
        "amount": 65909269,
        "id": "a6dae983"
    },
    {
        "date": "30/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Valverde",
        "fromTo": "LALIGA",
        "amount": 87532200,
        "id": "281261ad"
    },
    {
        "date": "29/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Aleñá",
        "fromTo": "LALIGA",
        "amount": 13301663,
        "id": "8a421523"
    },
    {
        "date": "29/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Pedri",
        "fromTo": "LALIGA",
        "amount": 139455015,
        "id": "9f42e07c"
    },
    {
        "date": "29/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Sergio Gómez",
        "fromTo": "GOLENCIERRO FC",
        "amount": 8800283,
        "id": "8cd3b82c"
    },
    {
        "date": "29/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Sergio Gómez",
        "fromTo": "Pablinistan FC",
        "amount": 8800283,
        "id": "b9371a0"
    },
    {
        "date": "29/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Laporte",
        "fromTo": "LALIGA",
        "amount": 28001761,
        "id": "9e6ad7d9"
    },
    {
        "date": "29/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Ez Abde",
        "fromTo": "GOLENCIERRO FC",
        "amount": 23901814,
        "id": "d143c1c4"
    },
    {
        "date": "29/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Ez Abde",
        "fromTo": "Vigar24",
        "amount": 23901814,
        "id": "96ffd43d"
    },
    {
        "date": "29/10/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "Juan Iglesias",
        "fromTo": "-",
        "amount": 0,
        "id": "9abfc591"
    },
    {
        "date": "29/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Marcos Llorente",
        "fromTo": "Pablinistan FC",
        "amount": 71497163,
        "id": "c43988d1"
    },
    {
        "date": "29/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Marcos Llorente",
        "fromTo": "Vigar24",
        "amount": 71497163,
        "id": "638c01a4"
    },
    {
        "date": "29/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Krapyvtsov",
        "fromTo": "LALIGA",
        "amount": 468188,
        "id": "dec3f63"
    },
    {
        "date": "29/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Mestre",
        "fromTo": "LALIGA",
        "amount": 486011,
        "id": "a3153185"
    },
    {
        "date": "28/10/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 10",
        "fromTo": "Premio",
        "amount": 8600000,
        "id": "74bc32ef"
    },
    {
        "date": "28/10/2025",
        "team": "Morenazos FC",
        "type": "once_ideal",
        "player": "11 Ideal J10",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "245585cd"
    },
    {
        "date": "28/10/2025",
        "team": "Pablinistan FC",
        "type": "once_ideal",
        "player": "11 Ideal J10",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "d4e788ac"
    },
    {
        "date": "28/10/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 10",
        "fromTo": "Premio",
        "amount": 3000000,
        "id": "e9eb232f"
    },
    {
        "date": "28/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 10",
        "fromTo": "Premio",
        "amount": 6200000,
        "id": "81975f17"
    },
    {
        "date": "28/10/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 10",
        "fromTo": "Premio",
        "amount": 6500000,
        "id": "94ea89a6"
    },
    {
        "date": "28/10/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 10",
        "fromTo": "Premio",
        "amount": 4700000,
        "id": "6adb2aa7"
    },
    {
        "date": "28/10/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 10",
        "fromTo": "Premio",
        "amount": 8100000,
        "id": "3c77fae7"
    },
    {
        "date": "28/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Á. Carreras",
        "fromTo": "LALIGA",
        "amount": 60814223,
        "id": "70dd82d1"
    },
    {
        "date": "28/10/2025",
        "team": "Pablinistan FC",
        "type": "blindaje",
        "player": "Ounahi",
        "fromTo": "-",
        "amount": 0,
        "id": "e292ca0f"
    },
    {
        "date": "28/10/2025",
        "team": "Alcatamy eSports By",
        "type": "blindaje",
        "player": "E. Militão",
        "fromTo": "-",
        "amount": 0,
        "id": "21363644"
    },
    {
        "date": "26/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Pere Milla",
        "fromTo": "Morenazos FC",
        "amount": 17611318,
        "id": "f81a1edb"
    },
    {
        "date": "26/10/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Pere Milla",
        "fromTo": "GOLENCIERRO FC",
        "amount": 17611318,
        "id": "d9c3d394"
    },
    {
        "date": "26/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Arambarri",
        "fromTo": "LALIGA",
        "amount": 15816552,
        "id": "56647e54"
    },
    {
        "date": "26/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "I. Romero",
        "fromTo": "LALIGA",
        "amount": 11350782,
        "id": "6dd65c1e"
    },
    {
        "date": "26/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "B. Iglesias",
        "fromTo": "LALIGA",
        "amount": 16799479,
        "id": "a8484399"
    },
    {
        "date": "26/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Barrenetxea",
        "fromTo": "LALIGA",
        "amount": 52811031,
        "id": "1580284d"
    },
    {
        "date": "26/10/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "M. Narváez",
        "fromTo": "LALIGA",
        "amount": 602077,
        "id": "814bc776"
    },
    {
        "date": "26/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "German V.",
        "fromTo": "LALIGA",
        "amount": 19758434,
        "id": "56738613"
    },
    {
        "date": "26/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Julián Alvarez",
        "fromTo": "LALIGA",
        "amount": 131745458,
        "id": "22a3eac1"
    },
    {
        "date": "25/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Júnior R.",
        "fromTo": "LALIGA",
        "amount": 17563342,
        "id": "fcc23e79"
    },
    {
        "date": "25/10/2025",
        "team": "Alcatamy eSports By",
        "type": "blindaje",
        "player": "Edu Expósito",
        "fromTo": "-",
        "amount": 0,
        "id": "4cb88245"
    },
    {
        "date": "25/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "B. Mayoral",
        "fromTo": "LALIGA",
        "amount": 6721329,
        "id": "bd3c67c2"
    },
    {
        "date": "25/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "F. de Jong",
        "fromTo": "Vigar24",
        "amount": 59710854,
        "id": "722025a4"
    },
    {
        "date": "25/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Fornals",
        "fromTo": "Alcatamy eSports By",
        "amount": 71227521,
        "id": "ef96c368"
    },
    {
        "date": "25/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Fornals",
        "fromTo": "Pablinistan FC",
        "amount": 71227521,
        "id": "47683e4b"
    },
    {
        "date": "25/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Rafa Marín",
        "fromTo": "LALIGA",
        "amount": 40255776,
        "id": "550c5cd"
    },
    {
        "date": "25/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Barrios",
        "fromTo": "LALIGA",
        "amount": 59000000,
        "id": "c39fb905"
    },
    {
        "date": "25/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Óscar Valentín",
        "fromTo": "LALIGA",
        "amount": 1100000,
        "id": "a0cce3e9"
    },
    {
        "date": "25/10/2025",
        "team": "Visite La Manga FC",
        "type": "blindaje",
        "player": "Dmitrovic",
        "fromTo": "-",
        "amount": 0,
        "id": "22e67f3a"
    },
    {
        "date": "25/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "F. de Jong",
        "fromTo": "Pablinistan FC",
        "amount": 59710854,
        "id": "8b02d297"
    },
    {
        "date": "25/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Amrabat",
        "fromTo": "LALIGA",
        "amount": 8039027,
        "id": "f632f80c"
    },
    {
        "date": "24/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "A. Pedraza",
        "fromTo": "LALIGA",
        "amount": 1000001,
        "id": "a1979386"
    },
    {
        "date": "24/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "O. Sancet",
        "fromTo": "LALIGA",
        "amount": 34306837,
        "id": "8997b6e5"
    },
    {
        "date": "24/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Álvaro García",
        "fromTo": "Morenazos FC",
        "amount": 26806713,
        "id": "bb95ab42"
    },
    {
        "date": "24/10/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Álvaro García",
        "fromTo": "Vigar24",
        "amount": 26806713,
        "id": "dbfcf954"
    },
    {
        "date": "24/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Bellingham",
        "fromTo": "Pablinistan FC",
        "amount": 91043167,
        "id": "49affbaf"
    },
    {
        "date": "24/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Bellingham",
        "fromTo": "Vigar24",
        "amount": 91043167,
        "id": "b0f40afc"
    },
    {
        "date": "24/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Eric",
        "fromTo": "LALIGA",
        "amount": 44280826,
        "id": "12a52dcc"
    },
    {
        "date": "24/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Ristic",
        "fromTo": "LALIGA",
        "amount": 461405,
        "id": "9c2ab94f"
    },
    {
        "date": "24/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Sow",
        "fromTo": "LALIGA",
        "amount": 2500011,
        "id": "bca22e99"
    },
    {
        "date": "24/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "A. Rahim",
        "fromTo": "LALIGA",
        "amount": 721477,
        "id": "8b2e1c80"
    },
    {
        "date": "24/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Rashford",
        "fromTo": "Alcatamy eSports By",
        "amount": 97000000,
        "id": "8c1cd8c8"
    },
    {
        "date": "24/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Rashford",
        "fromTo": "Vigar24",
        "amount": 97000000,
        "id": "a44d1be0"
    },
    {
        "date": "24/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Natan",
        "fromTo": "LALIGA",
        "amount": 33947829,
        "id": "909b305a"
    },
    {
        "date": "23/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Etta Eyong",
        "fromTo": "LALIGA",
        "amount": 102256908,
        "id": "61c98b5a"
    },
    {
        "date": "23/10/2025",
        "team": "Pablinistan FC",
        "type": "blindaje",
        "player": "A. Moleiro",
        "fromTo": "-",
        "amount": 0,
        "id": "79bcd"
    },
    {
        "date": "23/10/2025",
        "team": "Pablinistan FC",
        "type": "blindaje",
        "player": "Rafa Marín",
        "fromTo": "-",
        "amount": 0,
        "id": "11561f5e"
    },
    {
        "date": "22/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "German V.",
        "fromTo": "Vigar24",
        "amount": 16909285,
        "id": "35d7fc34"
    },
    {
        "date": "22/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "German V.",
        "fromTo": "Pablinistan FC",
        "amount": 16909285,
        "id": "aa4264e1"
    },
    {
        "date": "21/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Ratiu",
        "fromTo": "Pablinistan FC",
        "amount": 19910000,
        "id": "dcf9353b"
    },
    {
        "date": "21/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Ratiu",
        "fromTo": "Visite La Manga FC",
        "amount": 19910000,
        "id": "9fb7a431"
    },
    {
        "date": "21/10/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Bellerín",
        "fromTo": "LALIGA",
        "amount": 23602827,
        "id": "ddff0753"
    },
    {
        "date": "21/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Rodrygo",
        "fromTo": "Visite La Manga FC",
        "amount": 12648275,
        "id": "adf1a515"
    },
    {
        "date": "21/10/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Rodrygo",
        "fromTo": "Pablinistan FC",
        "amount": 12648275,
        "id": "63cfe3b"
    },
    {
        "date": "20/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Juan Carlos",
        "fromTo": "LALIGA",
        "amount": 569939,
        "id": "2102bf85"
    },
    {
        "date": "20/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Arriaga",
        "fromTo": "LALIGA",
        "amount": 1200000,
        "id": "11cd4408"
    },
    {
        "date": "20/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "De Frutos",
        "fromTo": "LALIGA",
        "amount": 35876699,
        "id": "b9c5a5a2"
    },
    {
        "date": "20/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Yuri",
        "fromTo": "LALIGA",
        "amount": 14853917,
        "id": "f5eca7c2"
    },
    {
        "date": "20/10/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "F. De Jong",
        "fromTo": "-",
        "amount": 0,
        "id": "da1cb523"
    },
    {
        "date": "20/10/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "Pedri",
        "fromTo": "-",
        "amount": 0,
        "id": "a0d21230"
    },
    {
        "date": "20/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Yuri",
        "fromTo": "LALIGA",
        "amount": 16443351,
        "id": "aa111485"
    },
    {
        "date": "20/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "blindaje",
        "player": "Lamine Yamal",
        "fromTo": "-",
        "amount": 0,
        "id": "ba47773"
    },
    {
        "date": "20/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Alexis Sánchez",
        "fromTo": "LALIGA",
        "amount": 8028088,
        "id": "c0ce6184"
    },
    {
        "date": "20/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Gorrotxa",
        "fromTo": "LALIGA",
        "amount": 3000000,
        "id": "b4e3606b"
    },
    {
        "date": "20/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Rubén García",
        "fromTo": "LALIGA",
        "amount": 3770765,
        "id": "8249b288"
    },
    {
        "date": "20/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "blindaje",
        "player": "Leo Román",
        "fromTo": "-",
        "amount": 0,
        "id": "98713ec0"
    },
    {
        "date": "20/10/2025",
        "team": "Visite La Manga FC",
        "type": "blindaje",
        "player": "Tárrega",
        "fromTo": "-",
        "amount": 0,
        "id": "81f1416d"
    },
    {
        "date": "20/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Pepe",
        "fromTo": "LALIGA",
        "amount": 84765731,
        "id": "4403ce08"
    },
    {
        "date": "20/10/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 9",
        "fromTo": "Premio",
        "amount": 8700000,
        "id": "48c6dfdc"
    },
    {
        "date": "20/10/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 9",
        "fromTo": "Premio",
        "amount": 8200000,
        "id": "df5c3426"
    },
    {
        "date": "20/10/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 9",
        "fromTo": "Premio",
        "amount": 9900000,
        "id": "8b4b0976"
    },
    {
        "date": "20/10/2025",
        "team": "Vigar24",
        "type": "once_ideal",
        "player": "11 Ideal J9",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "2b4cb5db"
    },
    {
        "date": "20/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 9",
        "fromTo": "Premio",
        "amount": 4900000,
        "id": "5f5c2308"
    },
    {
        "date": "20/10/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 9",
        "fromTo": "Premio",
        "amount": 5400000,
        "id": "7b8c34f5"
    },
    {
        "date": "20/10/2025",
        "team": "Pablinistan FC",
        "type": "once_ideal",
        "player": "11 Ideal J9",
        "fromTo": "Premio",
        "amount": 200000,
        "id": "2115c0d1"
    },
    {
        "date": "20/10/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 9",
        "fromTo": "Premio",
        "amount": 8100000,
        "id": "df318cfa"
    },
    {
        "date": "20/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Danjuma",
        "fromTo": "Pablinistan FC",
        "amount": 24889516,
        "id": "88c4efbf"
    },
    {
        "date": "20/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Danjuma",
        "fromTo": "Visite La Manga FC",
        "amount": 24889516,
        "id": "95a37935"
    },
    {
        "date": "20/10/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Moncayola",
        "fromTo": "LALIGA",
        "amount": 6617703,
        "id": "3537d6cf"
    },
    {
        "date": "20/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "F. Calero",
        "fromTo": "LALIGA",
        "amount": 1859469,
        "id": "3e534976"
    },
    {
        "date": "20/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "C. Alvarez",
        "fromTo": "LALIGA",
        "amount": 10441480,
        "id": "f3cfc01f"
    },
    {
        "date": "20/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Camavinga",
        "fromTo": "LALIGA",
        "amount": 12000000,
        "id": "a1dd3a78"
    },
    {
        "date": "20/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Lejeune",
        "fromTo": "LALIGA",
        "amount": 19900100,
        "id": "f049b61c"
    },
    {
        "date": "20/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Renato Veiga",
        "fromTo": "LALIGA",
        "amount": 13752321,
        "id": "258c7b5e"
    },
    {
        "date": "19/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Hassan",
        "fromTo": "GOLENCIERRO FC",
        "amount": 9705843,
        "id": "d9483ae"
    },
    {
        "date": "19/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Hassan",
        "fromTo": "Visite La Manga FC",
        "amount": 9705843,
        "id": "5aba7aca"
    },
    {
        "date": "19/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Arambarri",
        "fromTo": "Visite La Manga FC",
        "amount": 16752642,
        "id": "4bfefd2"
    },
    {
        "date": "19/10/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Arambarri",
        "fromTo": "GOLENCIERRO FC",
        "amount": 16752642,
        "id": "fa1e9252"
    },
    {
        "date": "19/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Pathé I. Ciss",
        "fromTo": "GOLENCIERRO FC",
        "amount": 14518023,
        "id": "4ecf35f"
    },
    {
        "date": "19/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Pathé I. Ciss",
        "fromTo": "Visite La Manga FC",
        "amount": 14518023,
        "id": "9ba80e7b"
    },
    {
        "date": "18/10/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Blanco",
        "fromTo": "Visite La Manga FC",
        "amount": 7389292,
        "id": "abf1e98c"
    },
    {
        "date": "18/10/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Blanco",
        "fromTo": "Morenazos FC",
        "amount": 7389292,
        "id": "20c46433"
    },
    {
        "date": "18/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Iñaki Peña",
        "fromTo": "GOLENCIERRO FC",
        "amount": 7585002,
        "id": "c965bb21"
    },
    {
        "date": "18/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Iñaki Peña",
        "fromTo": "Pablinistan FC",
        "amount": 7585002,
        "id": "cbed4195"
    },
    {
        "date": "18/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Carmona",
        "fromTo": "LALIGA",
        "amount": 10664400,
        "id": "f7b46825"
    },
    {
        "date": "17/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Marcos Llorente",
        "fromTo": "Vigar24",
        "amount": 51688096,
        "id": "e917e3d3"
    },
    {
        "date": "17/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Marcos Llorente",
        "fromTo": "Pablinistan FC",
        "amount": 51688096,
        "id": "2daa56c0"
    },
    {
        "date": "17/10/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "Catena",
        "fromTo": "-",
        "amount": 0,
        "id": "7a0041c0"
    },
    {
        "date": "17/10/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "C. Alvarez",
        "fromTo": "Alcatamy eSports By",
        "amount": 8089164,
        "id": "8754503b"
    },
    {
        "date": "17/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Raúl",
        "fromTo": "LALIGA",
        "amount": 932709,
        "id": "5df59e57"
    },
    {
        "date": "17/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "P. Martínez",
        "fromTo": "LALIGA",
        "amount": 1308020,
        "id": "71e9942a"
    },
    {
        "date": "17/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Ferrer",
        "fromTo": "LALIGA",
        "amount": 472188,
        "id": "5f0113e2"
    },
    {
        "date": "17/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "J. M. Giménez",
        "fromTo": "LALIGA",
        "amount": 1759951,
        "id": "e97f8353"
    },
    {
        "date": "17/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Cabrera",
        "fromTo": "LALIGA",
        "amount": 8200011,
        "id": "16b0da8d"
    },
    {
        "date": "17/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "C. Alvarez",
        "fromTo": "Morenazos FC",
        "amount": 8089164,
        "id": "e021299f"
    },
    {
        "date": "16/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Valjent",
        "fromTo": "LALIGA",
        "amount": 6281369,
        "id": "cbc94c3b"
    },
    {
        "date": "16/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Juanlu",
        "fromTo": "LALIGA",
        "amount": 2252718,
        "id": "59083924"
    },
    {
        "date": "15/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Witsel",
        "fromTo": "LALIGA",
        "amount": 3826846,
        "id": "7f8c2379"
    },
    {
        "date": "15/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Dani Olmo",
        "fromTo": "LALIGA",
        "amount": 46222282,
        "id": "dd5dbeb7"
    },
    {
        "date": "15/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Juan Carlos",
        "fromTo": "LALIGA",
        "amount": 600010,
        "id": "9d525069"
    },
    {
        "date": "15/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Febas",
        "fromTo": "Visite La Manga FC",
        "amount": 5971877,
        "id": "a72a1dbb"
    },
    {
        "date": "15/10/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Febas",
        "fromTo": "Pablinistan FC",
        "amount": 5971877,
        "id": "94e3c655"
    },
    {
        "date": "14/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Pepe",
        "fromTo": "Alcatamy eSports By",
        "amount": 84022101,
        "id": "e69e895d"
    },
    {
        "date": "14/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Pepe",
        "fromTo": "Vigar24",
        "amount": 84022101,
        "id": "84dc1875"
    },
    {
        "date": "14/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Dela",
        "fromTo": "Morenazos FC",
        "amount": 1178381,
        "id": "781d649d"
    },
    {
        "date": "14/10/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Dela",
        "fromTo": "Pablinistan FC",
        "amount": 1178381,
        "id": "6741f7aa"
    },
    {
        "date": "14/10/2025",
        "team": "Visite La Manga FC",
        "type": "blindaje",
        "player": "Vargas",
        "fromTo": "-",
        "amount": 0,
        "id": "687b385f"
    },
    {
        "date": "13/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Sergio Gómez",
        "fromTo": "LALIGA",
        "amount": 6200001,
        "id": "2398791a"
    },
    {
        "date": "12/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "De Frutos",
        "fromTo": "LALIGA",
        "amount": 36232096,
        "id": "2b35df59"
    },
    {
        "date": "12/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Laporte",
        "fromTo": "Pablinistan FC",
        "amount": 27202250,
        "id": "37ba805e"
    },
    {
        "date": "12/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Laporte",
        "fromTo": "Vigar24",
        "amount": 27202250,
        "id": "6ed07c31"
    },
    {
        "date": "12/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Jauregizar",
        "fromTo": "LALIGA",
        "amount": 21467087,
        "id": "903653f"
    },
    {
        "date": "12/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Witsel",
        "fromTo": "LALIGA",
        "amount": 3808838,
        "id": "784384ca"
    },
    {
        "date": "12/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "P. Martínez",
        "fromTo": "LALIGA",
        "amount": 1539896,
        "id": "58fa76bf"
    },
    {
        "date": "12/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "I. Romero",
        "fromTo": "LALIGA",
        "amount": 11500000,
        "id": "ebecfb48"
    },
    {
        "date": "12/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Arnau Tenas",
        "fromTo": "LALIGA",
        "amount": 2000000,
        "id": "4bc38323"
    },
    {
        "date": "11/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Ez Abde",
        "fromTo": "Alcatamy eSports By",
        "amount": 16721064,
        "id": "d94b3caa"
    },
    {
        "date": "11/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Ez Abde",
        "fromTo": "GOLENCIERRO FC",
        "amount": 16721064,
        "id": "a276a0e7"
    },
    {
        "date": "10/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Etta Eyong",
        "fromTo": "Pablinistan FC",
        "amount": 84358365,
        "id": "4c260c91"
    },
    {
        "date": "10/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Etta Eyong",
        "fromTo": "Vigar24",
        "amount": 84358365,
        "id": "b36a1bde"
    },
    {
        "date": "10/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Lewandowski",
        "fromTo": "LALIGA",
        "amount": 68028446,
        "id": "a71f94f3"
    },
    {
        "date": "10/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Rondón",
        "fromTo": "LALIGA",
        "amount": 826027,
        "id": "179bea4f"
    },
    {
        "date": "10/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Bellingham",
        "fromTo": "Vigar24",
        "amount": 83285315,
        "id": "99feab12"
    },
    {
        "date": "10/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Bellingham",
        "fromTo": "Pablinistan FC",
        "amount": 83285315,
        "id": "b2e15805"
    },
    {
        "date": "10/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Álex Baena",
        "fromTo": "LALIGA",
        "amount": 60000000,
        "id": "be1445d6"
    },
    {
        "date": "09/10/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Álvaro García",
        "fromTo": "LALIGA",
        "amount": 25321241,
        "id": "2ab6f3e7"
    },
    {
        "date": "09/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Raíllo",
        "fromTo": "LALIGA",
        "amount": 10927407,
        "id": "812083cc"
    },
    {
        "date": "09/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Griezmann",
        "fromTo": "LALIGA",
        "amount": 21663361,
        "id": "aa6abdb"
    },
    {
        "date": "09/10/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Kounde",
        "fromTo": "LALIGA",
        "amount": 54463424,
        "id": "bbc42afd"
    },
    {
        "date": "08/10/2025",
        "team": "Alcatamy eSports By",
        "type": "blindaje",
        "player": "Arda Güler",
        "fromTo": "-",
        "amount": 0,
        "id": "bdbbe426"
    },
    {
        "date": "08/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Ferran",
        "fromTo": "LALIGA",
        "amount": 73855622,
        "id": "fdb09da5"
    },
    {
        "date": "08/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Barrenetxea",
        "fromTo": "LALIGA",
        "amount": 39125321,
        "id": "987b6a2c"
    },
    {
        "date": "07/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Rafa Marín",
        "fromTo": "Vigar24",
        "amount": 36638995,
        "id": "c509ec58"
    },
    {
        "date": "07/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Rafa Marín",
        "fromTo": "Pablinistan FC",
        "amount": 36638995,
        "id": "ddec994b"
    },
    {
        "date": "07/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Álvaro Nuñez",
        "fromTo": "LALIGA",
        "amount": 9369371,
        "id": "f32da4cc"
    },
    {
        "date": "06/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 8",
        "fromTo": "Premio",
        "amount": 5700000,
        "id": "fc943e0a"
    },
    {
        "date": "06/10/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 8",
        "fromTo": "Premio",
        "amount": 6100000,
        "id": "4aad23ba"
    },
    {
        "date": "06/10/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Pablinistan FC ha ganado 200.000€ por tener jugadores en",
        "fromTo": "Premio",
        "amount": 200000,
        "id": "5ff1fc9a"
    },
    {
        "date": "06/10/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 8",
        "fromTo": "Premio",
        "amount": 4200000,
        "id": "aef7d975"
    },
    {
        "date": "06/10/2025",
        "team": "Vigar24",
        "type": "once_ideal",
        "player": "11 Ideal J8",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "c36b88fc"
    },
    {
        "date": "06/10/2025",
        "team": "Visite La Manga FC",
        "type": "once_ideal",
        "player": "11 Ideal J8",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "9817e42b"
    },
    {
        "date": "06/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Lewandowski",
        "fromTo": "LALIGA",
        "amount": 81288800,
        "id": "f79536be"
    },
    {
        "date": "06/10/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Kounde",
        "fromTo": "LALIGA",
        "amount": 52004308,
        "id": "3a10cf6b"
    },
    {
        "date": "06/10/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Ilaix Moriba",
        "fromTo": "LALIGA",
        "amount": 8100000,
        "id": "6ad3dd5d"
    },
    {
        "date": "06/10/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 8",
        "fromTo": "Premio",
        "amount": 6600000,
        "id": "490121ba"
    },
    {
        "date": "06/10/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 8",
        "fromTo": "Premio",
        "amount": 9700000,
        "id": "8a106cf4"
    },
    {
        "date": "06/10/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 8",
        "fromTo": "Premio",
        "amount": 6400000,
        "id": "e4b4ffe1"
    },
    {
        "date": "06/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Riedel",
        "fromTo": "LALIGA",
        "amount": 1962198,
        "id": "32172d36"
    },
    {
        "date": "05/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Alexis Sánchez",
        "fromTo": "Alcatamy eSports By",
        "amount": 4805015,
        "id": "bd8f822f"
    },
    {
        "date": "05/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Alexis Sánchez",
        "fromTo": "GOLENCIERRO FC",
        "amount": 4805015,
        "id": "447c04ac"
    },
    {
        "date": "05/10/2025",
        "team": "Morenazos FC",
        "type": "once_ideal",
        "player": "11 Ideal J8",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "6fbd1612"
    },
    {
        "date": "04/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Víctor Muñoz",
        "fromTo": "Pablinistan FC",
        "amount": 9387902,
        "id": "c75c52c3"
    },
    {
        "date": "04/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Víctor Muñoz",
        "fromTo": "GOLENCIERRO FC",
        "amount": 9387902,
        "id": "307f64eb"
    },
    {
        "date": "04/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Unai Lopez",
        "fromTo": "LALIGA",
        "amount": 2581630,
        "id": "3ea4ba23"
    },
    {
        "date": "04/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Cayetano",
        "fromTo": "LALIGA",
        "amount": 363836,
        "id": "5e55b869"
    },
    {
        "date": "04/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Bellerín",
        "fromTo": "LALIGA",
        "amount": 15854906,
        "id": "d9601007"
    },
    {
        "date": "04/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "German V.",
        "fromTo": "LALIGA",
        "amount": 12219601,
        "id": "11e1769b"
    },
    {
        "date": "04/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Cardona",
        "fromTo": "LALIGA",
        "amount": 35984503,
        "id": "a7c99b34"
    },
    {
        "date": "04/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Victor Muñoz",
        "fromTo": "Pablinistan FC",
        "amount": 9387902,
        "id": "bb81eb3f"
    },
    {
        "date": "04/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Victor Muñoz",
        "fromTo": "GOLENCIERRO FC",
        "amount": 9387902,
        "id": "24a4fd67"
    },
    {
        "date": "03/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Dendoncker",
        "fromTo": "LALIGA",
        "amount": 5513228,
        "id": "b4727cb1"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "blindaje",
        "player": "Rafa Mir",
        "fromTo": "-",
        "amount": 0,
        "id": "3859bab4"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Antony",
        "fromTo": "LALIGA",
        "amount": 92653016,
        "id": "b5801a28"
    },
    {
        "date": "02/10/2025",
        "team": "Pablinistan FC",
        "type": "blindaje",
        "player": "Júnior R.",
        "fromTo": "-",
        "amount": 0,
        "id": "55687061"
    },
    {
        "date": "02/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "blindaje",
        "player": "Cucho",
        "fromTo": "-",
        "amount": 0,
        "id": "221f3625"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "R. Mendoza",
        "fromTo": "LALIGA",
        "amount": 5037089,
        "id": "76541bdf"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "F. De Jong",
        "fromTo": "LALIGA",
        "amount": 54710854,
        "id": "eca4daa4"
    },
    {
        "date": "02/10/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "C. Romero",
        "fromTo": "LALIGA",
        "amount": 14000000,
        "id": "5fd3f88f"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Juan Iglesias",
        "fromTo": "LALIGA",
        "amount": 3200000,
        "id": "fcd08f29"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "B. Mayoral",
        "fromTo": "LALIGA",
        "amount": 5200000,
        "id": "c6cd0809"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "André Silva",
        "fromTo": "Pablinistan FC",
        "amount": 7963155,
        "id": "80d68732"
    },
    {
        "date": "02/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "André Silva",
        "fromTo": "Vigar24",
        "amount": 7963155,
        "id": "e81a967f"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Lo Celso",
        "fromTo": "LALIGA",
        "amount": 79363877,
        "id": "562f2758"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Catena",
        "fromTo": "Morenazos FC",
        "amount": 27818676,
        "id": "ec951662"
    },
    {
        "date": "02/10/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Catena",
        "fromTo": "Vigar24",
        "amount": 27818676,
        "id": "cc6d9890"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Marcos Llorente",
        "fromTo": "Visite La Manga FC",
        "amount": 39962224,
        "id": "d4426160"
    },
    {
        "date": "02/10/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Marcos Llorente",
        "fromTo": "Vigar24",
        "amount": 39962224,
        "id": "6f91de8b"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Javi Guerra",
        "fromTo": "LALIGA",
        "amount": 23998312,
        "id": "cf9d279e"
    },
    {
        "date": "02/10/2025",
        "team": "Morenazos FC",
        "type": "blindaje",
        "player": "Sergio Herrera",
        "fromTo": "-",
        "amount": 0,
        "id": "c9041698"
    },
    {
        "date": "02/10/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "C. Alvarez",
        "fromTo": "Alcatamy eSports By",
        "amount": 7006164,
        "id": "60c37f07"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "C. Alvarez",
        "fromTo": "Morenazos FC",
        "amount": 7006164,
        "id": "137ef4ab"
    },
    {
        "date": "02/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Azpilicueta",
        "fromTo": "LALIGA",
        "amount": 5309642,
        "id": "b9590592"
    },
    {
        "date": "02/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Rodrygo",
        "fromTo": "LALIGA",
        "amount": 12648275,
        "id": "924b986d"
    },
    {
        "date": "02/10/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "Ferran",
        "fromTo": "-",
        "amount": 0,
        "id": "82847daa"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Mouriño",
        "fromTo": "LALIGA",
        "amount": 31340701,
        "id": "fb8c37d6"
    },
    {
        "date": "02/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Moncayola",
        "fromTo": "Morenazos FC",
        "amount": 6177938,
        "id": "22c8dcac"
    },
    {
        "date": "02/10/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Moncayola",
        "fromTo": "Visite La Manga FC",
        "amount": 6177938,
        "id": "51d2b217"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "L. Milla",
        "fromTo": "LALIGA",
        "amount": 51235021,
        "id": "1f7399a3"
    },
    {
        "date": "02/10/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Fornals",
        "fromTo": "Alcatamy eSports By",
        "amount": 41299905,
        "id": "a98f55a8"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Rafa Mir",
        "fromTo": "LALIGA",
        "amount": 20919179,
        "id": "8fa05471"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Boyomo",
        "fromTo": "LALIGA",
        "amount": 23449730,
        "id": "d44e5db8"
    },
    {
        "date": "02/10/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Danjuma",
        "fromTo": "LALIGA",
        "amount": 15300050,
        "id": "6872ea00"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Rashford",
        "fromTo": "LALIGA",
        "amount": 57265321,
        "id": "cb59cdb7"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Szczesny",
        "fromTo": "LALIGA",
        "amount": 6195323,
        "id": "35d04f61"
    },
    {
        "date": "02/10/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Fornals",
        "fromTo": "Pablinistan FC",
        "amount": 41299905,
        "id": "5ecffcb"
    },
    {
        "date": "01/10/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "De Frutos",
        "fromTo": "Alcatamy eSports By",
        "amount": 30477321,
        "id": "6c685a07"
    },
    {
        "date": "01/10/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "De Frutos",
        "fromTo": "GOLENCIERRO FC",
        "amount": 30477321,
        "id": "984ba304"
    },
    {
        "date": "01/10/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Vargas",
        "fromTo": "Vigar24",
        "amount": 27987227,
        "id": "41f15e7e"
    },
    {
        "date": "01/10/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Vargas",
        "fromTo": "Visite La Manga FC",
        "amount": 27987227,
        "id": "52d03b49"
    },
    {
        "date": "30/09/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 7",
        "fromTo": "Premio",
        "amount": 5600000,
        "id": "566d0831"
    },
    {
        "date": "30/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "once_ideal",
        "player": "11 Ideal J7",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "cd19939a"
    },
    {
        "date": "30/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Pathé I. Ciss",
        "fromTo": "Morenazos FC",
        "amount": 8158533,
        "id": "366ded64"
    },
    {
        "date": "30/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Pathé I. Ciss",
        "fromTo": "GOLENCIERRO FC",
        "amount": 8158533,
        "id": "547d57dd"
    },
    {
        "date": "30/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Hassan",
        "fromTo": "Visite La Manga FC",
        "amount": 3987843,
        "id": "1a0314fa"
    },
    {
        "date": "30/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Hassan",
        "fromTo": "GOLENCIERRO FC",
        "amount": 3987843,
        "id": "5916f77a"
    },
    {
        "date": "30/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Dendoncker",
        "fromTo": "Morenazos FC",
        "amount": 6377160,
        "id": "6138e09b"
    },
    {
        "date": "30/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Dendoncker",
        "fromTo": "GOLENCIERRO FC",
        "amount": 6377160,
        "id": "cb9930c2"
    },
    {
        "date": "30/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Budimir",
        "fromTo": "LALIGA",
        "amount": 39112956,
        "id": "b0e66cb8"
    },
    {
        "date": "30/09/2025",
        "team": "Vigar24",
        "type": "blindaje",
        "player": "Agirrezabala",
        "fromTo": "-",
        "amount": 0,
        "id": "4954649b"
    },
    {
        "date": "30/09/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 7",
        "fromTo": "Premio",
        "amount": 5100000,
        "id": "81827978"
    },
    {
        "date": "30/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 7",
        "fromTo": "Premio",
        "amount": 7400000,
        "id": "ccfdbbae"
    },
    {
        "date": "30/09/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 7",
        "fromTo": "Premio",
        "amount": 9100000,
        "id": "ea04b8c6"
    },
    {
        "date": "30/09/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 7",
        "fromTo": "Premio",
        "amount": 8500000,
        "id": "bd7c1174"
    },
    {
        "date": "30/09/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 7",
        "fromTo": "Premio",
        "amount": 6300000,
        "id": "af9e28dc"
    },
    {
        "date": "29/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Altimira",
        "fromTo": "LALIGA",
        "amount": 16001843,
        "id": "4b64eefe"
    },
    {
        "date": "29/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Tchouaméni",
        "fromTo": "LALIGA",
        "amount": 58254359,
        "id": "c137acc7"
    },
    {
        "date": "29/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Alex Moreno",
        "fromTo": "LALIGA",
        "amount": 5000000,
        "id": "7e6b0833"
    },
    {
        "date": "29/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Febas",
        "fromTo": "GOLENCIERRO FC",
        "amount": 3062130,
        "id": "e5d6d75e"
    },
    {
        "date": "29/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Febas",
        "fromTo": "Visite La Manga FC",
        "amount": 3062130,
        "id": "b6c78cc2"
    },
    {
        "date": "29/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Arambarri",
        "fromTo": "GOLENCIERRO FC",
        "amount": 15406158,
        "id": "82a5ec3d"
    },
    {
        "date": "29/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Arambarri",
        "fromTo": "Visite La Manga FC",
        "amount": 15406158,
        "id": "4f82f559"
    },
    {
        "date": "29/09/2025",
        "team": "Alcatamy eSports By",
        "type": "blindaje",
        "player": "Aarón",
        "fromTo": "-",
        "amount": 0,
        "id": "56f8e61"
    },
    {
        "date": "29/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Bryan Gil",
        "fromTo": "LALIGA",
        "amount": 8711629,
        "id": "db5f9f6b"
    },
    {
        "date": "29/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Ruggeri",
        "fromTo": "LALIGA",
        "amount": 9715641,
        "id": "2885917"
    },
    {
        "date": "29/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "E. Militão",
        "fromTo": "LALIGA",
        "amount": 51909269,
        "id": "bd5300d2"
    },
    {
        "date": "28/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "F. Garcés",
        "fromTo": "LALIGA",
        "amount": 6438843,
        "id": "f10c2b59"
    },
    {
        "date": "28/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Berenguer",
        "fromTo": "LALIGA",
        "amount": 34444800,
        "id": "de1197a"
    },
    {
        "date": "28/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Griezmann",
        "fromTo": "LALIGA",
        "amount": 24000001,
        "id": "19b9d276"
    },
    {
        "date": "28/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Budimir",
        "fromTo": "LALIGA",
        "amount": 39000001,
        "id": "bde9f4a3"
    },
    {
        "date": "28/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Valjent",
        "fromTo": "LALIGA",
        "amount": 8000001,
        "id": "533d23a1"
    },
    {
        "date": "28/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Tárrega",
        "fromTo": "GOLENCIERRO FC",
        "amount": 17981045,
        "id": "cb336a5f"
    },
    {
        "date": "28/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Tárrega",
        "fromTo": "Visite La Manga FC",
        "amount": 17981045,
        "id": "66b80a7b"
    },
    {
        "date": "28/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Carvajal",
        "fromTo": "LALIGA",
        "amount": 32721801,
        "id": "7dbd676a"
    },
    {
        "date": "28/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Antony",
        "fromTo": "LALIGA",
        "amount": 88892996,
        "id": "1ab4a8a5"
    },
    {
        "date": "27/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Tchouaméni",
        "fromTo": "LALIGA",
        "amount": 59319300,
        "id": "c1c58ae8"
    },
    {
        "date": "27/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "El Hilali",
        "fromTo": "LALIGA",
        "amount": 5500000,
        "id": "24c16110"
    },
    {
        "date": "27/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Nico González",
        "fromTo": "LALIGA",
        "amount": 28193185,
        "id": "d3642d93"
    },
    {
        "date": "27/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "A. J. Morales",
        "fromTo": "LALIGA",
        "amount": 3231557,
        "id": "3c2bf220"
    },
    {
        "date": "27/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Laporte",
        "fromTo": "LALIGA",
        "amount": 27202250,
        "id": "7d97ff63"
    },
    {
        "date": "27/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Iñigo Perez",
        "fromTo": "LALIGA",
        "amount": 1042282,
        "id": "98efb730"
    },
    {
        "date": "27/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Bryan",
        "fromTo": "LALIGA",
        "amount": 11993467,
        "id": "d09aec5f"
    },
    {
        "date": "26/09/2025",
        "team": "Morenazos FC",
        "type": "once_ideal",
        "player": "11 Ideal J6",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "9ffabc54"
    },
    {
        "date": "26/09/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 6",
        "fromTo": "Premio",
        "amount": 4400000,
        "id": "b3421bf8"
    },
    {
        "date": "26/09/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 6",
        "fromTo": "Premio",
        "amount": 8100000,
        "id": "22643ff7"
    },
    {
        "date": "26/09/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 6",
        "fromTo": "Premio",
        "amount": 6000000,
        "id": "206f6d19"
    },
    {
        "date": "26/09/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 6",
        "fromTo": "Premio",
        "amount": 7900000,
        "id": "f99a983b"
    },
    {
        "date": "26/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 6",
        "fromTo": "Premio",
        "amount": 5300000,
        "id": "cd37fd8c"
    },
    {
        "date": "26/09/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 6",
        "fromTo": "Premio",
        "amount": 7300000,
        "id": "26d685d5"
    },
    {
        "date": "26/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "once_ideal",
        "player": "11 Ideal J6",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "653866bb"
    },
    {
        "date": "26/09/2025",
        "team": "Pablinistan FC",
        "type": "once_ideal",
        "player": "11 Ideal J6",
        "fromTo": "Premio",
        "amount": 300000,
        "id": "eb2712d3"
    },
    {
        "date": "26/09/2025",
        "team": "Alcatamy eSports By",
        "type": "once_ideal",
        "player": "11 Ideal J6",
        "fromTo": "Premio",
        "amount": 200000,
        "id": "b6ba15d3"
    },
    {
        "date": "26/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Buchanan",
        "fromTo": "LALIGA",
        "amount": 35262101,
        "id": "1698c6eb"
    },
    {
        "date": "26/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "José Bordalás",
        "fromTo": "LALIGA",
        "amount": 809938,
        "id": "68cfad76"
    },
    {
        "date": "26/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "German V.",
        "fromTo": "LALIGA",
        "amount": 10909682,
        "id": "fafa2e23"
    },
    {
        "date": "26/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "lago Aspas",
        "fromTo": "LALIGA",
        "amount": 16921691,
        "id": "18958c44"
    },
    {
        "date": "26/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "A. Batalla",
        "fromTo": "LALIGA",
        "amount": 12103526,
        "id": "6d34fec2"
    },
    {
        "date": "26/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Unai Lopez",
        "fromTo": "LALIGA",
        "amount": 3000000,
        "id": "b1ad388d"
    },
    {
        "date": "26/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Dani Calvo",
        "fromTo": "LALIGA",
        "amount": 1551485,
        "id": "2058f19a"
    },
    {
        "date": "26/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "A. Fortuño",
        "fromTo": "LALIGA",
        "amount": 498917,
        "id": "18a41375"
    },
    {
        "date": "26/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "I. Romero",
        "fromTo": "LALIGA",
        "amount": 4664737,
        "id": "609d4f60"
    },
    {
        "date": "26/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Pere Milla",
        "fromTo": "LALIGA",
        "amount": 9785241,
        "id": "bd1db2bc"
    },
    {
        "date": "26/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Bellingham",
        "fromTo": "LALIGA",
        "amount": 80000001,
        "id": "acaed3ed"
    },
    {
        "date": "26/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Raíllo",
        "fromTo": "LALIGA",
        "amount": 10791168,
        "id": "a254c85"
    },
    {
        "date": "26/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Pepe",
        "fromTo": "LALIGA",
        "amount": 73860899,
        "id": "70e684ab"
    },
    {
        "date": "25/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Blanco",
        "fromTo": "LALIGA",
        "amount": 7389292,
        "id": "9bb7e2e5"
    },
    {
        "date": "25/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Álvaro Nuñez",
        "fromTo": "Vigar24",
        "amount": 6236377,
        "id": "dea91102"
    },
    {
        "date": "25/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Álvaro Nuñez",
        "fromTo": "Pablinistan FC",
        "amount": 6236377,
        "id": "e21c026f"
    },
    {
        "date": "25/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Eric",
        "fromTo": "Alcatamy eSports By",
        "amount": 28086288,
        "id": "e6f7f239"
    },
    {
        "date": "25/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Dani Calvo",
        "fromTo": "Morenazos FC",
        "amount": 1411596,
        "id": "995f3d8a"
    },
    {
        "date": "25/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Dani Calvo",
        "fromTo": "Pablinistan FC",
        "amount": 1411596,
        "id": "813a92d7"
    },
    {
        "date": "25/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Gudelj",
        "fromTo": "LALIGA",
        "amount": 3340101,
        "id": "e2da8bad"
    },
    {
        "date": "25/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Eric",
        "fromTo": "Pablinistan FC",
        "amount": 28086288,
        "id": "8e0832f6"
    },
    {
        "date": "24/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Lamine Yamal",
        "fromTo": "Alcatamy eSports By",
        "amount": 200024667,
        "id": "a1a72091"
    },
    {
        "date": "24/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Lamine Yamal",
        "fromTo": "GOLENCIERRO FC",
        "amount": 200024667,
        "id": "2893a30e"
    },
    {
        "date": "24/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Comesaña",
        "fromTo": "LALIGA",
        "amount": 5559993,
        "id": "94fb4b41"
    },
    {
        "date": "24/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Raphinha",
        "fromTo": "GOLENCIERRO FC",
        "amount": 190031541,
        "id": "6726c94c"
    },
    {
        "date": "24/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Raphinha",
        "fromTo": "Morenazos FC",
        "amount": 190031541,
        "id": "730b7741"
    },
    {
        "date": "24/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Mbappé",
        "fromTo": "Morenazos FC",
        "amount": 220000000,
        "id": "ee20ab21"
    },
    {
        "date": "24/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Mbappé",
        "fromTo": "Visite La Manga FC",
        "amount": 220000000,
        "id": "df20fc56"
    },
    {
        "date": "24/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Gueye",
        "fromTo": "LALIGA",
        "amount": 33795754,
        "id": "756c5a1a"
    },
    {
        "date": "24/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Tenaglia",
        "fromTo": "LALIGA",
        "amount": 17378916,
        "id": "7153a96d"
    },
    {
        "date": "24/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "E. Militão",
        "fromTo": "LALIGA",
        "amount": 52745980,
        "id": "303d784"
    },
    {
        "date": "24/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Dani Olmo",
        "fromTo": "LALIGA",
        "amount": 52646460,
        "id": "f38ae780"
    },
    {
        "date": "24/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Cayetano",
        "fromTo": "LALIGA",
        "amount": 376077,
        "id": "7fe75e0a"
    },
    {
        "date": "24/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Pedri",
        "fromTo": "LALIGA",
        "amount": 117691298,
        "id": "80632bb1"
    },
    {
        "date": "24/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Swiderski",
        "fromTo": "LALIGA",
        "amount": 339115,
        "id": "70f1cf39"
    },
    {
        "date": "24/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "L. Milla",
        "fromTo": "LALIGA",
        "amount": 43165440,
        "id": "f07cc62e"
    },
    {
        "date": "24/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Laporte",
        "fromTo": "LALIGA",
        "amount": 26455770,
        "id": "a434d5e8"
    },
    {
        "date": "24/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Bartra",
        "fromTo": "LALIGA",
        "amount": 41436205,
        "id": "d6a0dee"
    },
    {
        "date": "23/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Pepe",
        "fromTo": "LALIGA",
        "amount": 79551594,
        "id": "df09b1d5"
    },
    {
        "date": "23/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Lewandowski",
        "fromTo": "LALIGA",
        "amount": 67371576,
        "id": "3f2b8e8f"
    },
    {
        "date": "23/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Arda Güler",
        "fromTo": "LALIGA",
        "amount": 109563212,
        "id": "a76b359a"
    },
    {
        "date": "22/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Antony",
        "fromTo": "LALIGA",
        "amount": 103426601,
        "id": "7fafb8af"
    },
    {
        "date": "22/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Domenech",
        "fromTo": "LALIGA",
        "amount": 428963,
        "id": "6e4dc4e9"
    },
    {
        "date": "22/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Rafa Marín",
        "fromTo": "LALIGA",
        "amount": 31500000,
        "id": "6fe77839"
    },
    {
        "date": "22/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "M. Narváez",
        "fromTo": "LALIGA",
        "amount": 700173,
        "id": "78c46722"
    },
    {
        "date": "22/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Tenaglia",
        "fromTo": "LALIGA",
        "amount": 17876922,
        "id": "6f9fa7f3"
    },
    {
        "date": "22/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "A. J. Morales",
        "fromTo": "Morenazos FC",
        "amount": 5234140,
        "id": "924daba3"
    },
    {
        "date": "22/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "A. J. Morales",
        "fromTo": "Visite La Manga FC",
        "amount": 5234140,
        "id": "d448d38e"
    },
    {
        "date": "22/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Pepe",
        "fromTo": "Vigar24",
        "amount": 71317282,
        "id": "fe615a6f"
    },
    {
        "date": "22/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Pepe",
        "fromTo": "Visite La Manga FC",
        "amount": 71317282,
        "id": "3656edfa"
    },
    {
        "date": "22/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "A. Batalla",
        "fromTo": "Vigar24",
        "amount": 13000000,
        "id": "37aed1cc"
    },
    {
        "date": "22/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "A. Batalla",
        "fromTo": "Visite La Manga FC",
        "amount": 13000000,
        "id": "d0ec5117"
    },
    {
        "date": "22/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Foulquier",
        "fromTo": "Visite La Manga FC",
        "amount": 7716890,
        "id": "59e120c9"
    },
    {
        "date": "22/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Foulquier",
        "fromTo": "Morenazos FC",
        "amount": 7716890,
        "id": "139050c2"
    },
    {
        "date": "22/09/2025",
        "team": "Alcatamy eSports By",
        "type": "once_ideal",
        "player": "11 Ideal J5",
        "fromTo": "Premio",
        "amount": 200000,
        "id": "4ed8e8f4"
    },
    {
        "date": "22/09/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 5",
        "fromTo": "Premio",
        "amount": 9300000,
        "id": "2ffc39b8"
    },
    {
        "date": "22/09/2025",
        "team": "Visite La Manga FC",
        "type": "once_ideal",
        "player": "11 Ideal J5",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "60745d8e"
    },
    {
        "date": "22/09/2025",
        "team": "Vigar24",
        "type": "once_ideal",
        "player": "11 Ideal J5",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "8bc8025f"
    },
    {
        "date": "22/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "once_ideal",
        "player": "11 Ideal J5",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "fd5739dc"
    },
    {
        "date": "22/09/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 5",
        "fromTo": "Premio",
        "amount": 5900000,
        "id": "3302b40c"
    },
    {
        "date": "22/09/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 5",
        "fromTo": "Premio",
        "amount": 8300000,
        "id": "8fff50c1"
    },
    {
        "date": "22/09/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 5",
        "fromTo": "Premio",
        "amount": 8600000,
        "id": "96a80c11"
    },
    {
        "date": "22/09/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 5",
        "fromTo": "Premio",
        "amount": 6400000,
        "id": "88ca2379"
    },
    {
        "date": "22/09/2025",
        "team": "Pablinistan FC",
        "type": "once_ideal",
        "player": "11 Ideal J5",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "7fdc34b6"
    },
    {
        "date": "22/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 5",
        "fromTo": "Premio",
        "amount": 8300000,
        "id": "d7a6404e"
    },
    {
        "date": "21/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Marcos Alonso",
        "fromTo": "LALIGA",
        "amount": 9515205,
        "id": "c18151d3"
    },
    {
        "date": "21/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Mikautadze",
        "fromTo": "LALIGA",
        "amount": 31509878,
        "id": "db6394b1"
    },
    {
        "date": "21/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "F. Calero",
        "fromTo": "Morenazos FC",
        "amount": 2005016,
        "id": "2f734c2a"
    },
    {
        "date": "21/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "F. Calero",
        "fromTo": "Pablinistan FC",
        "amount": 2005016,
        "id": "561993d"
    },
    {
        "date": "21/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "C. Soler",
        "fromTo": "LALIGA",
        "amount": 18078828,
        "id": "f29ec522"
    },
    {
        "date": "21/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Ratiu",
        "fromTo": "LALIGA",
        "amount": 15688000,
        "id": "c0391c81"
    },
    {
        "date": "21/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Javi Guerra",
        "fromTo": "LALIGA",
        "amount": 21272086,
        "id": "49006b2f"
    },
    {
        "date": "21/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "B. Iglesias",
        "fromTo": "LALIGA",
        "amount": 8729511,
        "id": "6d281aa8"
    },
    {
        "date": "21/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Bartra",
        "fromTo": "LALIGA",
        "amount": 46796595,
        "id": "a76af3a2"
    },
    {
        "date": "20/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Fornals",
        "fromTo": "Visite La Manga FC",
        "amount": 27980278,
        "id": "31d986b8"
    },
    {
        "date": "20/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Fornals",
        "fromTo": "Pablinistan FC",
        "amount": 27980278,
        "id": "8a24dfde"
    },
    {
        "date": "20/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "V. Rosier",
        "fromTo": "LALIGA",
        "amount": 19891402,
        "id": "9ecea9e8"
    },
    {
        "date": "20/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "L. Milla",
        "fromTo": "Visite La Manga FC",
        "amount": 39147942,
        "id": "900eac66"
    },
    {
        "date": "20/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "L. Milla",
        "fromTo": "Pablinistan FC",
        "amount": 39147942,
        "id": "412e7800"
    },
    {
        "date": "20/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Gueye",
        "fromTo": "Pablinistan FC",
        "amount": 34193668,
        "id": "1b0813f7"
    },
    {
        "date": "20/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Gueye",
        "fromTo": "Visite La Manga FC",
        "amount": 34193668,
        "id": "ddc682ed"
    },
    {
        "date": "20/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Juanlu",
        "fromTo": "LALIGA",
        "amount": 3338116,
        "id": "c4f91dc"
    },
    {
        "date": "20/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Etta Eyong",
        "fromTo": "Alcatamy eSports By",
        "amount": 48046785,
        "id": "c5cd321a"
    },
    {
        "date": "20/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Etta Eyong",
        "fromTo": "Pablinistan FC",
        "amount": 48046785,
        "id": "4838a857"
    },
    {
        "date": "20/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Moncayola",
        "fromTo": "LALIGA",
        "amount": 5300000,
        "id": "41728154"
    },
    {
        "date": "20/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Mikautadze",
        "fromTo": "LALIGA",
        "amount": 28972463,
        "id": "b729b2e9"
    },
    {
        "date": "20/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Boyomo",
        "fromTo": "Alcatamy eSports By",
        "amount": 21027506,
        "id": "cb9cf9d6"
    },
    {
        "date": "20/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "llaix Moriba",
        "fromTo": "LALIGA",
        "amount": 5646357,
        "id": "71b97679"
    },
    {
        "date": "20/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Léo Pétrot",
        "fromTo": "LALIGA",
        "amount": 659353,
        "id": "13bd2d79"
    },
    {
        "date": "20/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Alexis Sánchez",
        "fromTo": "LALIGA",
        "amount": 4375212,
        "id": "63815f25"
    },
    {
        "date": "20/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Ez Abde",
        "fromTo": "LALIGA",
        "amount": 3489303,
        "id": "a52ba9fc"
    },
    {
        "date": "20/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Boyomo",
        "fromTo": "Pablinistan FC",
        "amount": 21027506,
        "id": "ef9fff53"
    },
    {
        "date": "19/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Ounahi",
        "fromTo": "LALIGA",
        "amount": 866657,
        "id": "150ab2aa"
    },
    {
        "date": "19/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "lago Aspas",
        "fromTo": "LALIGA",
        "amount": 20155555,
        "id": "1912fbf9"
    },
    {
        "date": "19/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Altimira",
        "fromTo": "LALIGA",
        "amount": 24000000,
        "id": "3f3dbe83"
    },
    {
        "date": "18/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Víctor Muñoz",
        "fromTo": "Visite La Manga FC",
        "amount": 2551415,
        "id": "4d7efe34"
    },
    {
        "date": "18/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Víctor Muñoz",
        "fromTo": "Pablinistan FC",
        "amount": 2551415,
        "id": "708d545a"
    },
    {
        "date": "18/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Berenguer",
        "fromTo": "Pablinistan FC",
        "amount": 31474933,
        "id": "ea4c310d"
    },
    {
        "date": "18/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Berenguer",
        "fromTo": "GOLENCIERRO FC",
        "amount": 31474933,
        "id": "f1ddad35"
    },
    {
        "date": "18/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "C. Soler",
        "fromTo": "LALIGA",
        "amount": 17952500,
        "id": "971e15c1"
    },
    {
        "date": "18/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "André Silva",
        "fromTo": "LALIGA",
        "amount": 4280996,
        "id": "210d405b"
    },
    {
        "date": "18/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Buchanan",
        "fromTo": "GOLENCIERRO FC",
        "amount": 30313932,
        "id": "9e36e537"
    },
    {
        "date": "18/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Buchanan",
        "fromTo": "Vigar24",
        "amount": 30313932,
        "id": "8ffd21de"
    },
    {
        "date": "18/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Foyth",
        "fromTo": "LALIGA",
        "amount": 27384173,
        "id": "84c552f6"
    },
    {
        "date": "18/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Gayá",
        "fromTo": "LALIGA",
        "amount": 6402203,
        "id": "366d2b41"
    },
    {
        "date": "18/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Pol Lozano",
        "fromTo": "LALIGA",
        "amount": 1220194,
        "id": "e1590b75"
    },
    {
        "date": "17/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Rioja",
        "fromTo": "LALIGA",
        "amount": 18022309,
        "id": "2c4b1b45"
    },
    {
        "date": "17/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Suazo",
        "fromTo": "LALIGA",
        "amount": 6150212,
        "id": "1313c7cc"
    },
    {
        "date": "17/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Laporte",
        "fromTo": "LALIGA",
        "amount": 26653212,
        "id": "9d6236f9"
    },
    {
        "date": "16/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Febas",
        "fromTo": "Morenazos FC",
        "amount": 2019738,
        "id": "70debb31"
    },
    {
        "date": "16/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Febas",
        "fromTo": "GOLENCIERRO FC",
        "amount": 2019738,
        "id": "ee38aeaa"
    },
    {
        "date": "16/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Cucho",
        "fromTo": "Alcatamy eSports By",
        "amount": 10296859,
        "id": "d02fc44e"
    },
    {
        "date": "16/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Cucho",
        "fromTo": "GOLENCIERRO FC",
        "amount": 10296859,
        "id": "a47113cb"
    },
    {
        "date": "16/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "German V.",
        "fromTo": "Vigar24",
        "amount": 10791271,
        "id": "72ff1d04"
    },
    {
        "date": "16/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "German V.",
        "fromTo": "GOLENCIERRO FC",
        "amount": 10791271,
        "id": "69ee808b"
    },
    {
        "date": "16/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Johnny",
        "fromTo": "LALIGA",
        "amount": 20850485,
        "id": "77477156"
    },
    {
        "date": "16/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Aimar",
        "fromTo": "LALIGA",
        "amount": 12969229,
        "id": "729e83b0"
    },
    {
        "date": "16/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "R. Mendoza",
        "fromTo": "LALIGA",
        "amount": 4172591,
        "id": "8a74a9d0"
    },
    {
        "date": "16/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Dendoncker",
        "fromTo": "LALIGA",
        "amount": 6377160,
        "id": "da60b3f4"
    },
    {
        "date": "16/09/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 4",
        "fromTo": "Premio",
        "amount": 6200000,
        "id": "9039929f"
    },
    {
        "date": "16/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 4",
        "fromTo": "Premio",
        "amount": 6600000,
        "id": "deb3e4a8"
    },
    {
        "date": "16/09/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 4",
        "fromTo": "Premio",
        "amount": 7800000,
        "id": "303f5235"
    },
    {
        "date": "16/09/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 4",
        "fromTo": "Premio",
        "amount": 6200000,
        "id": "fb504055"
    },
    {
        "date": "16/09/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 4",
        "fromTo": "Premio",
        "amount": 4400000,
        "id": "2b60fece"
    },
    {
        "date": "16/09/2025",
        "team": "Morenazos FC",
        "type": "once_ideal",
        "player": "11 Ideal J4",
        "fromTo": "Premio",
        "amount": 200000,
        "id": "d1ed3b35"
    },
    {
        "date": "16/09/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 4",
        "fromTo": "Premio",
        "amount": 7500000,
        "id": "1b75911"
    },
    {
        "date": "16/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "once_ideal",
        "player": "11 Ideal J4",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "95760cfd"
    },
    {
        "date": "16/09/2025",
        "team": "Visite La Manga FC",
        "type": "once_ideal",
        "player": "11 Ideal J4",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "f89330af"
    },
    {
        "date": "16/09/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Alcatamy eSports By ha ganado 100.000€ por tener",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "6dc99ceb"
    },
    {
        "date": "16/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Rioja",
        "fromTo": "Morenazos FC",
        "amount": 17879067,
        "id": "2f5dfb1d"
    },
    {
        "date": "16/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Rioja",
        "fromTo": "Vigar24",
        "amount": 17879067,
        "id": "b2757b2f"
    },
    {
        "date": "16/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Rafa Mir",
        "fromTo": "LALIGA",
        "amount": 17362312,
        "id": "52e1d5fe"
    },
    {
        "date": "15/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Arambarri",
        "fromTo": "Alcatamy eSports By",
        "amount": 14792420,
        "id": "9b2bcf92"
    },
    {
        "date": "15/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Arambarri",
        "fromTo": "GOLENCIERRO FC",
        "amount": 14792420,
        "id": "c70f188f"
    },
    {
        "date": "15/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "I. Romero",
        "fromTo": "Vigar24",
        "amount": 2581582,
        "id": "bf5fae46"
    },
    {
        "date": "15/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "I. Romero",
        "fromTo": "GOLENCIERRO FC",
        "amount": 2581582,
        "id": "74c23ddf"
    },
    {
        "date": "15/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Bryan",
        "fromTo": "LALIGA",
        "amount": 16348287,
        "id": "d898b1a0"
    },
    {
        "date": "15/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Manuel Fernández",
        "fromTo": "LALIGA",
        "amount": 1000001,
        "id": "610a73fc"
    },
    {
        "date": "15/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Aimar",
        "fromTo": "LALIGA",
        "amount": 14374072,
        "id": "cb0c58e2"
    },
    {
        "date": "15/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Riquelme",
        "fromTo": "LALIGA",
        "amount": 33099317,
        "id": "9266d866"
    },
    {
        "date": "15/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Pathé I. Ciss",
        "fromTo": "Visite La Manga FC",
        "amount": 6707070,
        "id": "d8235073"
    },
    {
        "date": "15/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Pathé I. Ciss",
        "fromTo": "Morenazos FC",
        "amount": 6707070,
        "id": "c657dbec"
    },
    {
        "date": "15/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Catena",
        "fromTo": "GOLENCIERRO FC",
        "amount": 19788685,
        "id": "bc474847"
    },
    {
        "date": "15/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Catena",
        "fromTo": "Morenazos FC",
        "amount": 19788685,
        "id": "1cd96672"
    },
    {
        "date": "14/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Hancko",
        "fromTo": "LALIGA",
        "amount": 24883684,
        "id": "e644fe86"
    },
    {
        "date": "14/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Bellingham",
        "fromTo": "LALIGA",
        "amount": 40585838,
        "id": "af4f2ac2"
    },
    {
        "date": "14/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "F. Mastantuono",
        "fromTo": "LALIGA",
        "amount": 46907364,
        "id": "877668ff"
    },
    {
        "date": "14/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Neyou",
        "fromTo": "LALIGA",
        "amount": 3973618,
        "id": "a74f3ec1"
    },
    {
        "date": "14/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "V. Rosier",
        "fromTo": "Visite La Manga FC",
        "amount": 16431853,
        "id": "73e796f5"
    },
    {
        "date": "14/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "V. Rosier",
        "fromTo": "Pablinistan FC",
        "amount": 16431853,
        "id": "e6c13e9b"
    },
    {
        "date": "14/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "E. Militão",
        "fromTo": "Pablinistan FC",
        "amount": 46854910,
        "id": "7c7f31f"
    },
    {
        "date": "14/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "E. Militão",
        "fromTo": "Visite La Manga FC",
        "amount": 46854910,
        "id": "a4a66de9"
    },
    {
        "date": "14/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Kumbulla",
        "fromTo": "LALIGA",
        "amount": 1854989,
        "id": "7b6fc28c"
    },
    {
        "date": "14/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Nico González",
        "fromTo": "LALIGA",
        "amount": 19391865,
        "id": "cafd080c"
    },
    {
        "date": "13/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Carvajal",
        "fromTo": "LALIGA",
        "amount": 24577933,
        "id": "724cdfbc"
    },
    {
        "date": "13/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "De Frutos",
        "fromTo": "LALIGA",
        "amount": 25864255,
        "id": "d6f76976"
    },
    {
        "date": "12/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Jauregizar",
        "fromTo": "LALIGA",
        "amount": 12499205,
        "id": "f2b751dc"
    },
    {
        "date": "12/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Aimar",
        "fromTo": "LALIGA",
        "amount": 15772581,
        "id": "df27912"
    },
    {
        "date": "12/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Isi",
        "fromTo": "LALIGA",
        "amount": 45736998,
        "id": "18eb5e17"
    },
    {
        "date": "12/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Johnny",
        "fromTo": "LALIGA",
        "amount": 23976030,
        "id": "395023de"
    },
    {
        "date": "12/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Pol Lozano",
        "fromTo": "LALIGA",
        "amount": 1357857,
        "id": "5e2ef1b0"
    },
    {
        "date": "12/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Lewandowski",
        "fromTo": "LALIGA",
        "amount": 58453935,
        "id": "fa1e32e1"
    },
    {
        "date": "11/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Mariano",
        "fromTo": "LALIGA",
        "amount": 2871274,
        "id": "cf8e08f3"
    },
    {
        "date": "11/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Raúl",
        "fromTo": "LALIGA",
        "amount": 1202143,
        "id": "5415f490"
    },
    {
        "date": "11/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Almada",
        "fromTo": "LALIGA",
        "amount": 33570130,
        "id": "cabe305"
    },
    {
        "date": "11/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Gudelj",
        "fromTo": "Alcatamy eSports By",
        "amount": 3337651,
        "id": "dba25dd7"
    },
    {
        "date": "11/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Gudelj",
        "fromTo": "Pablinistan FC",
        "amount": 3337651,
        "id": "3a4b357a"
    },
    {
        "date": "11/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Álvaro Nuñez",
        "fromTo": "Pablinistan FC",
        "amount": 3121940,
        "id": "30e4cae1"
    },
    {
        "date": "11/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Álvaro Nuñez",
        "fromTo": "Vigar24",
        "amount": 3121940,
        "id": "b222a534"
    },
    {
        "date": "11/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Eric",
        "fromTo": "Vigar24",
        "amount": 18355309,
        "id": "734b312d"
    },
    {
        "date": "11/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Eric",
        "fromTo": "Pablinistan FC",
        "amount": 18355309,
        "id": "63235060"
    },
    {
        "date": "11/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Foyth",
        "fromTo": "LALIGA",
        "amount": 27895321,
        "id": "70d87864"
    },
    {
        "date": "10/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Bartra",
        "fromTo": "LALIGA",
        "amount": 37781233,
        "id": "12e60fc6"
    },
    {
        "date": "10/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Mbappé",
        "fromTo": "Visite La Manga FC",
        "amount": 167000000,
        "id": "557f874a"
    },
    {
        "date": "10/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Mbappé",
        "fromTo": "Morenazos FC",
        "amount": 167000000,
        "id": "df9df431"
    },
    {
        "date": "10/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "R. Araujo",
        "fromTo": "LALIGA",
        "amount": 22859209,
        "id": "35768552"
    },
    {
        "date": "10/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Á. Carreras",
        "fromTo": "LALIGA",
        "amount": 65809247,
        "id": "8a103fa4"
    },
    {
        "date": "10/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Bellingham",
        "fromTo": "LALIGA",
        "amount": 37000001,
        "id": "943a98ce"
    },
    {
        "date": "09/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Tenaglia",
        "fromTo": "LALIGA",
        "amount": 13080184,
        "id": "e3060bfd"
    },
    {
        "date": "09/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Gayá",
        "fromTo": "LALIGA",
        "amount": 7922564,
        "id": "1054c8cf"
    },
    {
        "date": "09/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Juanlu",
        "fromTo": "LALIGA",
        "amount": 2544148,
        "id": "d3b1f5ef"
    },
    {
        "date": "09/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Vargas",
        "fromTo": "LALIGA",
        "amount": 10481237,
        "id": "87274f9f"
    },
    {
        "date": "08/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Lamine Yamal",
        "fromTo": "Alcatamy eSports By",
        "amount": 150024667,
        "id": "b8a67692"
    },
    {
        "date": "08/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Rafa Romero",
        "fromTo": "LALIGA",
        "amount": 333387,
        "id": "2a34686a"
    },
    {
        "date": "08/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Neyou",
        "fromTo": "LALIGA",
        "amount": 4107545,
        "id": "bd6e78a6"
    },
    {
        "date": "08/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Swiderski",
        "fromTo": "LALIGA",
        "amount": 322667,
        "id": "7fa81fb3"
    },
    {
        "date": "08/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Lamine Yamal",
        "fromTo": "Morenazos FC",
        "amount": 150024667,
        "id": "c2dffdf6"
    },
    {
        "date": "07/09/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Fran González",
        "fromTo": "LALIGA",
        "amount": 408743,
        "id": "c1710fd9"
    },
    {
        "date": "07/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Pablo Durán",
        "fromTo": "LALIGA",
        "amount": 604587,
        "id": "7295676f"
    },
    {
        "date": "07/09/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "A. Fortuño",
        "fromTo": "LALIGA",
        "amount": 673237,
        "id": "11b3e1db"
    },
    {
        "date": "07/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Bryan",
        "fromTo": "LALIGA",
        "amount": 16718905,
        "id": "c2be3e74"
    },
    {
        "date": "06/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Barrenetxea",
        "fromTo": "LALIGA",
        "amount": 10500733,
        "id": "aff01746"
    },
    {
        "date": "06/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Raphinha",
        "fromTo": "Alcatamy eSports By",
        "amount": 140031541,
        "id": "e6991598"
    },
    {
        "date": "06/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Raphinha",
        "fromTo": "GOLENCIERRO FC",
        "amount": 140031541,
        "id": "127c5e95"
    },
    {
        "date": "06/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "De Frutos",
        "fromTo": "LALIGA",
        "amount": 21943521,
        "id": "c6d61455"
    },
    {
        "date": "06/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Javi Guerra",
        "fromTo": "LALIGA",
        "amount": 23021409,
        "id": "3b288297"
    },
    {
        "date": "06/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Areso",
        "fromTo": "Alcatamy eSports By",
        "amount": 14132115,
        "id": "87afb1b2"
    },
    {
        "date": "06/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Areso",
        "fromTo": "GOLENCIERRO FC",
        "amount": 14132115,
        "id": "5bf1012f"
    },
    {
        "date": "06/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Tenaglia",
        "fromTo": "LALIGA",
        "amount": 11382382,
        "id": "d076048"
    },
    {
        "date": "06/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Odriozola",
        "fromTo": "LALIGA",
        "amount": 1061678,
        "id": "fd196b49"
    },
    {
        "date": "06/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Oskarsson",
        "fromTo": "LALIGA",
        "amount": 4479408,
        "id": "a3e54c50"
    },
    {
        "date": "06/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Almada",
        "fromTo": "Alcatamy eSports By",
        "amount": 30134138,
        "id": "41b19b5c"
    },
    {
        "date": "06/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Ruben",
        "fromTo": "LALIGA",
        "amount": 350771,
        "id": "3062d67d"
    },
    {
        "date": "06/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "F. Garcés",
        "fromTo": "Pablinistan FC",
        "amount": 3065405,
        "id": "15d7d410"
    },
    {
        "date": "06/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "F. Garcés",
        "fromTo": "GOLENCIERRO FC",
        "amount": 3065405,
        "id": "59232e8"
    },
    {
        "date": "06/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Tárrega",
        "fromTo": "Alcatamy eSports By",
        "amount": 12577638,
        "id": "6621bc0f"
    },
    {
        "date": "06/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Tárrega",
        "fromTo": "GOLENCIERRO FC",
        "amount": 12577638,
        "id": "2f4d204c"
    },
    {
        "date": "06/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Isi",
        "fromTo": "Alcatamy eSports By",
        "amount": 40646043,
        "id": "6c0f5b5c"
    },
    {
        "date": "06/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Coba",
        "fromTo": "LALIGA",
        "amount": 395535,
        "id": "25b97433"
    },
    {
        "date": "06/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Barrenetxea",
        "fromTo": "Alcatamy eSports By",
        "amount": 9514007,
        "id": "c1f719e1"
    },
    {
        "date": "06/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Barrenetxea",
        "fromTo": "Pablinistan FC",
        "amount": 9514007,
        "id": "4462901e"
    },
    {
        "date": "06/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Rafa Marín",
        "fromTo": "LALIGA",
        "amount": 22431940,
        "id": "a2a69a70"
    },
    {
        "date": "06/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Almada",
        "fromTo": "Morenazos FC",
        "amount": 30134138,
        "id": "f2fddc78"
    },
    {
        "date": "06/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Isi",
        "fromTo": "GOLENCIERRO FC",
        "amount": 40646043,
        "id": "d8ee3559"
    },
    {
        "date": "05/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Á. Carreras",
        "fromTo": "LALIGA",
        "amount": 62505001,
        "id": "d57dc492"
    },
    {
        "date": "05/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Hancko",
        "fromTo": "LALIGA",
        "amount": 25356496,
        "id": "1baa7f3"
    },
    {
        "date": "05/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Eder Sarabia",
        "fromTo": "LALIGA",
        "amount": 932159,
        "id": "d257bf2"
    },
    {
        "date": "05/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "llaix Moriba",
        "fromTo": "LALIGA",
        "amount": 5256859,
        "id": "57483353"
    },
    {
        "date": "04/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Almeida",
        "fromTo": "LALIGA",
        "amount": 3624628,
        "id": "c8f70079"
    },
    {
        "date": "04/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Rafa Marín",
        "fromTo": "GOLENCIERRO FC",
        "amount": 19839388,
        "id": "97645358"
    },
    {
        "date": "04/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Rafa Marín",
        "fromTo": "Pablinistan FC",
        "amount": 19839388,
        "id": "e5cd9b64"
    },
    {
        "date": "04/09/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Boyomo",
        "fromTo": "Alcatamy eSports By",
        "amount": 14671700,
        "id": "2e71a3c9"
    },
    {
        "date": "04/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Boyomo",
        "fromTo": "Pablinistan FC",
        "amount": 14671700,
        "id": "a4e3c086"
    },
    {
        "date": "04/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Pepe",
        "fromTo": "Pablinistan FC",
        "amount": 35176521,
        "id": "161c1325"
    },
    {
        "date": "04/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Pepe",
        "fromTo": "Vigar24",
        "amount": 35176521,
        "id": "883ce032"
    },
    {
        "date": "04/09/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Huijsen",
        "fromTo": "LALIGA",
        "amount": 103246322,
        "id": "da54af8a"
    },
    {
        "date": "04/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Tchouaméni",
        "fromTo": "LALIGA",
        "amount": 56105809,
        "id": "5ac3c74a"
    },
    {
        "date": "04/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Buchanan",
        "fromTo": "LALIGA",
        "amount": 20000000,
        "id": "ed16b76a"
    },
    {
        "date": "04/09/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Antony",
        "fromTo": "LALIGA",
        "amount": 78500011,
        "id": "1c104f92"
    },
    {
        "date": "04/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Maroan",
        "fromTo": "LALIGA",
        "amount": 6387634,
        "id": "3d4d6a22"
    },
    {
        "date": "04/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Etta Eyong",
        "fromTo": "LALIGA",
        "amount": 20256321,
        "id": "26ae5ec0"
    },
    {
        "date": "04/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Mouriño",
        "fromTo": "LALIGA",
        "amount": 18123021,
        "id": "90558bc1"
    },
    {
        "date": "02/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Brahim",
        "fromTo": "LALIGA",
        "amount": 21568481,
        "id": "277cff71"
    },
    {
        "date": "02/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Darder",
        "fromTo": "LALIGA",
        "amount": 15694649,
        "id": "58ffba57"
    },
    {
        "date": "02/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Nacho Vidal",
        "fromTo": "LALIGA",
        "amount": 2324533,
        "id": "92fa5912"
    },
    {
        "date": "02/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Febas",
        "fromTo": "LALIGA",
        "amount": 1260742,
        "id": "41a487c"
    },
    {
        "date": "02/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Dani Calvo",
        "fromTo": "LALIGA",
        "amount": 1296487,
        "id": "8d0b62cf"
    },
    {
        "date": "02/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "F. Calero",
        "fromTo": "LALIGA",
        "amount": 1517486,
        "id": "fa94f7c1"
    },
    {
        "date": "02/09/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Diego López",
        "fromTo": "LALIGA",
        "amount": 18648781,
        "id": "5e2d0658"
    },
    {
        "date": "01/09/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "A. J. Morales",
        "fromTo": "LALIGA",
        "amount": 5234140,
        "id": "b7c52b1c"
    },
    {
        "date": "01/09/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Dani Olmo",
        "fromTo": "LALIGA",
        "amount": 44961309,
        "id": "6f190862"
    },
    {
        "date": "01/09/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Juan Iglesias",
        "fromTo": "LALIGA",
        "amount": 2620532,
        "id": "75576897"
    },
    {
        "date": "01/09/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 3",
        "fromTo": "Premio",
        "amount": 5300000,
        "id": "3cc250"
    },
    {
        "date": "01/09/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 3",
        "fromTo": "Premio",
        "amount": 4800000,
        "id": "77c6e8c"
    },
    {
        "date": "01/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 3",
        "fromTo": "Premio",
        "amount": 6100000,
        "id": "41e73a8c"
    },
    {
        "date": "01/09/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 3",
        "fromTo": "Premio",
        "amount": 7800000,
        "id": "3ca2a40c"
    },
    {
        "date": "01/09/2025",
        "team": "GOLENCIERRO FC",
        "type": "once_ideal",
        "player": "11 Ideal J3",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "2d94e01e"
    },
    {
        "date": "01/09/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 3",
        "fromTo": "Premio",
        "amount": 6500000,
        "id": "61f61e16"
    },
    {
        "date": "01/09/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 3",
        "fromTo": "Premio",
        "amount": 6200000,
        "id": "fbf5239e"
    },
    {
        "date": "01/09/2025",
        "team": "Morenazos FC",
        "type": "once_ideal",
        "player": "11 Ideal J3",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "685735b7"
    },
    {
        "date": "01/09/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Aarón",
        "fromTo": "LALIGA",
        "amount": 7257212,
        "id": "b03c913e"
    },
    {
        "date": "31/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "David López",
        "fromTo": "LALIGA",
        "amount": 5396348,
        "id": "1d40bf0d"
    },
    {
        "date": "31/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Turrientes",
        "fromTo": "LALIGA",
        "amount": 2609659,
        "id": "d5147828"
    },
    {
        "date": "31/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "De Galarreta",
        "fromTo": "LALIGA",
        "amount": 9806122,
        "id": "c3e3d719"
    },
    {
        "date": "31/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Víctor Muñoz",
        "fromTo": "LALIGA",
        "amount": 2551415,
        "id": "c27f858c"
    },
    {
        "date": "31/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Rioja",
        "fromTo": "LALIGA",
        "amount": 17600000,
        "id": "4b01f984"
    },
    {
        "date": "31/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Jauregizar",
        "fromTo": "LALIGA",
        "amount": 10028596,
        "id": "6530c3e1"
    },
    {
        "date": "31/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Mario Martín",
        "fromTo": "LALIGA",
        "amount": 1753827,
        "id": "9af93f75"
    },
    {
        "date": "31/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Edu Expósito",
        "fromTo": "LALIGA",
        "amount": 7370104,
        "id": "87b66bbe"
    },
    {
        "date": "30/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "D. Cárdenas",
        "fromTo": "LALIGA",
        "amount": 551841,
        "id": "ac8fd80b"
    },
    {
        "date": "30/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Raba",
        "fromTo": "LALIGA",
        "amount": 17820680,
        "id": "6e9b85a0"
    },
    {
        "date": "30/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Dani Olmo",
        "fromTo": "LALIGA",
        "amount": 43527745,
        "id": "7a459be5"
    },
    {
        "date": "30/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "German V.",
        "fromTo": "LALIGA",
        "amount": 3400000,
        "id": "235a7632"
    },
    {
        "date": "30/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Ruggeri",
        "fromTo": "LALIGA",
        "amount": 18821898,
        "id": "714ed1ef"
    },
    {
        "date": "30/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Pau López",
        "fromTo": "LALIGA",
        "amount": 7783735,
        "id": "cce427a9"
    },
    {
        "date": "29/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Iñaki Peña",
        "fromTo": "LALIGA",
        "amount": 1491243,
        "id": "7d2d226"
    },
    {
        "date": "29/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Aleñá",
        "fromTo": "LALIGA",
        "amount": 6499357,
        "id": "2e31cd40"
    },
    {
        "date": "29/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Zubeldia",
        "fromTo": "Alcatamy eSports By",
        "amount": 17900000,
        "id": "2a3832bb"
    },
    {
        "date": "29/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Zubeldia",
        "fromTo": "Visite La Manga FC",
        "amount": 17900000,
        "id": "25b19c90"
    },
    {
        "date": "29/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Brais Méndez",
        "fromTo": "LALIGA",
        "amount": 16796481,
        "id": "faf9b110"
    },
    {
        "date": "29/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "C. Dominguez",
        "fromTo": "LALIGA",
        "amount": 573179,
        "id": "d8308d8b"
    },
    {
        "date": "29/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Riquelme",
        "fromTo": "Alcatamy eSports By",
        "amount": 25000000,
        "id": "227d7c72"
    },
    {
        "date": "29/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Riquelme",
        "fromTo": "Vigar24",
        "amount": 25000000,
        "id": "3aadbf8a"
    },
    {
        "date": "29/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Danjuma",
        "fromTo": "LALIGA",
        "amount": 6983253,
        "id": "812cebc8"
    },
    {
        "date": "28/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Turrientes",
        "fromTo": "LALIGA",
        "amount": 2600264,
        "id": "5003d099"
    },
    {
        "date": "27/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Conor Gallagher",
        "fromTo": "LALIGA",
        "amount": 11127069,
        "id": "8fad0984"
    },
    {
        "date": "27/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Nyland",
        "fromTo": "LALIGA",
        "amount": 5876562,
        "id": "1fd31b75"
    },
    {
        "date": "27/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Leo Román",
        "fromTo": "LALIGA",
        "amount": 7000000,
        "id": "cde2c6d0"
    },
    {
        "date": "27/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Pathé I. Ciss",
        "fromTo": "LALIGA",
        "amount": 4100000,
        "id": "3e9f174c"
    },
    {
        "date": "27/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Brais Méndez",
        "fromTo": "LALIGA",
        "amount": 18100000,
        "id": "465b6b26"
    },
    {
        "date": "27/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Cucho",
        "fromTo": "LALIGA",
        "amount": 10296859,
        "id": "87ed6b59"
    },
    {
        "date": "27/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "F. Mastantuono",
        "fromTo": "LALIGA",
        "amount": 26352610,
        "id": "6bed7e07"
    },
    {
        "date": "26/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Iñaki Williams",
        "fromTo": "LALIGA",
        "amount": 49075586,
        "id": "529918a1"
    },
    {
        "date": "26/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Maroan",
        "fromTo": "LALIGA",
        "amount": 6000001,
        "id": "61c39b4c"
    },
    {
        "date": "26/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Eric",
        "fromTo": "LALIGA",
        "amount": 14256620,
        "id": "3c9c8446"
    },
    {
        "date": "26/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Ruben",
        "fromTo": "LALIGA",
        "amount": 318816,
        "id": "cc8b0aaf"
    },
    {
        "date": "26/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Mario Martín",
        "fromTo": "LALIGA",
        "amount": 1900000,
        "id": "8d5b99d2"
    },
    {
        "date": "26/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Ferran",
        "fromTo": "GOLENCIERRO FC",
        "amount": 33282428,
        "id": "6b268d8b"
    },
    {
        "date": "26/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Ferran",
        "fromTo": "Vigar24",
        "amount": 33282428,
        "id": "9ad1c7f2"
    },
    {
        "date": "26/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Aleñá",
        "fromTo": "Visite La Manga FC",
        "amount": 5403700,
        "id": "a7908c50"
    },
    {
        "date": "26/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Aleñá",
        "fromTo": "Vigar24",
        "amount": 5403700,
        "id": "f6ab9c05"
    },
    {
        "date": "26/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Blanco",
        "fromTo": "LALIGA",
        "amount": 6635098,
        "id": "f0b46452"
    },
    {
        "date": "26/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "L. Milla",
        "fromTo": "Vigar24",
        "amount": 21576406,
        "id": "2edd3e8a"
    },
    {
        "date": "26/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "L. Milla",
        "fromTo": "Visite La Manga FC",
        "amount": 21576406,
        "id": "83781495"
    },
    {
        "date": "26/08/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 2",
        "fromTo": "Premio",
        "amount": 6700000,
        "id": "7038efb8"
    },
    {
        "date": "26/08/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 2",
        "fromTo": "Premio",
        "amount": 10700000,
        "id": "20e47db9"
    },
    {
        "date": "26/08/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 2",
        "fromTo": "Premio",
        "amount": 8200000,
        "id": "325f9bba"
    },
    {
        "date": "26/08/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 2",
        "fromTo": "Premio",
        "amount": 8900000,
        "id": "def948eb"
    },
    {
        "date": "26/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 2",
        "fromTo": "Premio",
        "amount": 7700000,
        "id": "ecc61a86"
    },
    {
        "date": "26/08/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 2",
        "fromTo": "Premio",
        "amount": 3700000,
        "id": "8ff3f49"
    },
    {
        "date": "26/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "once_ideal",
        "player": "11 Ideal J2",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "c5b3b33f"
    },
    {
        "date": "26/08/2025",
        "team": "Vigar24",
        "type": "once_ideal",
        "player": "11 Ideal J2",
        "fromTo": "Premio",
        "amount": 200000,
        "id": "55d95461"
    },
    {
        "date": "26/08/2025",
        "team": "Visite La Manga FC",
        "type": "once_ideal",
        "player": "11 Ideal J2",
        "fromTo": "Premio",
        "amount": 200000,
        "id": "2a85af90"
    },
    {
        "date": "26/08/2025",
        "team": "Pablinistan FC",
        "type": "once_ideal",
        "player": "11 Ideal J2",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "4838ae19"
    },
    {
        "date": "26/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Rubén García",
        "fromTo": "LALIGA",
        "amount": 11357417,
        "id": "f312c501"
    },
    {
        "date": "26/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Aramburu",
        "fromTo": "LALIGA",
        "amount": 7343725,
        "id": "752196ff"
    },
    {
        "date": "26/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Simeone",
        "fromTo": "LALIGA",
        "amount": 6735256,
        "id": "1fd9bca3"
    },
    {
        "date": "25/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Raba",
        "fromTo": "Visite La Manga FC",
        "amount": 19500000,
        "id": "c26dc5d3"
    },
    {
        "date": "25/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Raba",
        "fromTo": "GOLENCIERRO FC",
        "amount": 19500000,
        "id": "38139353"
    },
    {
        "date": "25/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Álvaro Nuñez",
        "fromTo": "GOLENCIERRO FC",
        "amount": 1672043,
        "id": "dd33cc1d"
    },
    {
        "date": "25/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Álvaro Nuñez",
        "fromTo": "Pablinistan FC",
        "amount": 1672043,
        "id": "5bf38591"
    },
    {
        "date": "25/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Brais Méndez",
        "fromTo": "LALIGA",
        "amount": 18313510,
        "id": "b42b1b3b"
    },
    {
        "date": "25/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Ugrinic",
        "fromTo": "LALIGA",
        "amount": 5620753,
        "id": "9193f4de"
    },
    {
        "date": "25/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Tsygankov",
        "fromTo": "LALIGA",
        "amount": 16777345,
        "id": "f3f4aeb"
    },
    {
        "date": "25/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Tchouaméni",
        "fromTo": "Pablinistan FC",
        "amount": 45913530,
        "id": "680d3428"
    },
    {
        "date": "25/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Tchouaméni",
        "fromTo": "Vigar24",
        "amount": 45913530,
        "id": "cf514375"
    },
    {
        "date": "25/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Lamine Yamal",
        "fromTo": "LALIGA",
        "amount": 143000000,
        "id": "7b687de3"
    },
    {
        "date": "25/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "T. Martinez",
        "fromTo": "LALIGA",
        "amount": 2178677,
        "id": "b0f37c4a"
    },
    {
        "date": "25/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Raíllo",
        "fromTo": "LALIGA",
        "amount": 19819938,
        "id": "3f51a68c"
    },
    {
        "date": "25/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "R. Terrats",
        "fromTo": "LALIGA",
        "amount": 4235363,
        "id": "6e2f21e4"
    },
    {
        "date": "25/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Gudelj",
        "fromTo": "LALIGA",
        "amount": 2923496,
        "id": "f30e7583"
    },
    {
        "date": "25/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Pau López",
        "fromTo": "LALIGA",
        "amount": 7062746,
        "id": "83a66dc1"
    },
    {
        "date": "24/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Blanco",
        "fromTo": "LALIGA",
        "amount": 6141811,
        "id": "632c0af7"
    },
    {
        "date": "24/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Agirrezabala",
        "fromTo": "LALIGA",
        "amount": 10000000,
        "id": "674a276b"
    },
    {
        "date": "24/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "J. Mojica",
        "fromTo": "LALIGA",
        "amount": 14254186,
        "id": "bc43b940"
    },
    {
        "date": "23/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Kike Barja",
        "fromTo": "LALIGA",
        "amount": 1191007,
        "id": "e1ee6b4a"
    },
    {
        "date": "23/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Brahim",
        "fromTo": "LALIGA",
        "amount": 17119939,
        "id": "cf6b9da"
    },
    {
        "date": "23/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Lemar",
        "fromTo": "LALIGA",
        "amount": 4493526,
        "id": "f03adb1"
    },
    {
        "date": "23/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Almada",
        "fromTo": "GOLENCIERRO FC",
        "amount": 28778086,
        "id": "7aba22a5"
    },
    {
        "date": "23/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Almada",
        "fromTo": "Morenazos FC",
        "amount": 28778086,
        "id": "db4c40d0"
    },
    {
        "date": "23/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Arda Güler",
        "fromTo": "LALIGA",
        "amount": 84152709,
        "id": "dec22293"
    },
    {
        "date": "23/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Areso",
        "fromTo": "LALIGA",
        "amount": 8229828,
        "id": "47b44c68"
    },
    {
        "date": "22/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "R. Terrats",
        "fromTo": "LALIGA",
        "amount": 4200000,
        "id": "b51e4f14"
    },
    {
        "date": "22/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Ernesto Valverde",
        "fromTo": "LALIGA",
        "amount": 5787602,
        "id": "ea471292"
    },
    {
        "date": "22/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Kike Barja",
        "fromTo": "LALIGA",
        "amount": 1196970,
        "id": "290c994e"
    },
    {
        "date": "22/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "I. Romero",
        "fromTo": "LALIGA",
        "amount": 655242,
        "id": "27f6b2bc"
    },
    {
        "date": "21/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Simeone",
        "fromTo": "LALIGA",
        "amount": 7372392,
        "id": "ecaa11a5"
    },
    {
        "date": "21/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Riquelme",
        "fromTo": "Alcatamy eSports By",
        "amount": 21000000,
        "id": "40aacc15"
    },
    {
        "date": "21/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "A. Batalla",
        "fromTo": "Alcatamy eSports By",
        "amount": 13000000,
        "id": "6d493d49"
    },
    {
        "date": "21/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "A. Batalla",
        "fromTo": "Vigar24",
        "amount": 13000000,
        "id": "3a751a61"
    },
    {
        "date": "21/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Pepe",
        "fromTo": "Vigar24",
        "amount": 21184896,
        "id": "3c109b41"
    },
    {
        "date": "21/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Pepe",
        "fromTo": "Pablinistan FC",
        "amount": 21184896,
        "id": "2be8ba74"
    },
    {
        "date": "21/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Dmitrovic",
        "fromTo": "Vigar24",
        "amount": 11325763,
        "id": "3b71b9eb"
    },
    {
        "date": "21/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Dmitrovic",
        "fromTo": "Visite La Manga FC",
        "amount": 11325763,
        "id": "7a31a540"
    },
    {
        "date": "21/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Diakhaby",
        "fromTo": "LALIGA",
        "amount": 3309205,
        "id": "e3c788ef"
    },
    {
        "date": "21/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Krapyvtsov",
        "fromTo": "Alcatamy eSports By",
        "amount": 1000000,
        "id": "44b79f73"
    },
    {
        "date": "21/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "D. Cárdenas",
        "fromTo": "LALIGA",
        "amount": 800000,
        "id": "2c5ad831"
    },
    {
        "date": "21/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Iñaki Williams",
        "fromTo": "LALIGA",
        "amount": 65000000,
        "id": "e5a767c4"
    },
    {
        "date": "21/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Rafa Marín",
        "fromTo": "LALIGA",
        "amount": 11000000,
        "id": "1442e9d5"
    },
    {
        "date": "21/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Riquelme",
        "fromTo": "GOLENCIERRO FC",
        "amount": 21000000,
        "id": "29e5a838"
    },
    {
        "date": "21/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Krapyvtsov",
        "fromTo": "Morenazos FC",
        "amount": 1000000,
        "id": "9d8478d7"
    },
    {
        "date": "21/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Boyomo",
        "fromTo": "LALIGA",
        "amount": 11459953,
        "id": "8ebd73cd"
    },
    {
        "date": "20/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Arambarri",
        "fromTo": "Alcatamy eSports By",
        "amount": 11292420,
        "id": "5e5132db"
    },
    {
        "date": "20/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Vini Jr.",
        "fromTo": "Morenazos FC",
        "amount": 108300000,
        "id": "54c28a86"
    },
    {
        "date": "20/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Vini Jr.",
        "fromTo": "Pablinistan FC",
        "amount": 108300000,
        "id": "3c9ddfd3"
    },
    {
        "date": "20/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Gonzalo",
        "fromTo": "LALIGA",
        "amount": 13286187,
        "id": "92c1f4d4"
    },
    {
        "date": "20/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Carmona",
        "fromTo": "LALIGA",
        "amount": 2229164,
        "id": "ca986069"
    },
    {
        "date": "20/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Trent",
        "fromTo": "LALIGA",
        "amount": 66400501,
        "id": "7284702c"
    },
    {
        "date": "20/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Sergio Francisco",
        "fromTo": "LALIGA",
        "amount": 6715735,
        "id": "c1fc3bfc"
    },
    {
        "date": "20/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Arda Güler",
        "fromTo": "LALIGA",
        "amount": 81320000,
        "id": "dfaac4af"
    },
    {
        "date": "20/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Parejo",
        "fromTo": "LALIGA",
        "amount": 12920300,
        "id": "a6a57d0a"
    },
    {
        "date": "20/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "jornada",
        "player": "Jornada 1",
        "fromTo": "Premio",
        "amount": 10600000,
        "id": "e05e2d04"
    },
    {
        "date": "20/08/2025",
        "team": "Pablinistan FC",
        "type": "jornada",
        "player": "Jornada 1",
        "fromTo": "Premio",
        "amount": 6100000,
        "id": "d3419e70"
    },
    {
        "date": "20/08/2025",
        "team": "Vigar24",
        "type": "jornada",
        "player": "Jornada 1",
        "fromTo": "Premio",
        "amount": 6900000,
        "id": "4a74dfab"
    },
    {
        "date": "20/08/2025",
        "team": "Alcatamy eSports By",
        "type": "jornada",
        "player": "Jornada 1",
        "fromTo": "Premio",
        "amount": 6700000,
        "id": "dbf480b7"
    },
    {
        "date": "20/08/2025",
        "team": "Visite La Manga FC",
        "type": "jornada",
        "player": "Jornada 1",
        "fromTo": "Premio",
        "amount": 7700000,
        "id": "71bd2c93"
    },
    {
        "date": "20/08/2025",
        "team": "Morenazos FC",
        "type": "jornada",
        "player": "Jornada 1",
        "fromTo": "Premio",
        "amount": 4500000,
        "id": "a6375a4b"
    },
    {
        "date": "20/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "once_ideal",
        "player": "11 Ideal J1",
        "fromTo": "Premio",
        "amount": 200000,
        "id": "5f875eff"
    },
    {
        "date": "20/08/2025",
        "team": "Visite La Manga FC",
        "type": "once_ideal",
        "player": "11 Ideal J1",
        "fromTo": "Premio",
        "amount": 100000,
        "id": "c0efaa12"
    },
    {
        "date": "20/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Arambarri",
        "fromTo": "Morenazos FC",
        "amount": 11292420,
        "id": "b71e0c3f"
    },
    {
        "date": "20/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Barrenetxea",
        "fromTo": "LALIGA",
        "amount": 4892148,
        "id": "9363fa70"
    },
    {
        "date": "19/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Valverde",
        "fromTo": "LALIGA",
        "amount": 95114065,
        "id": "efe0ce4a"
    },
    {
        "date": "19/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Paredes",
        "fromTo": "LALIGA",
        "amount": 9934947,
        "id": "c5262b68"
    },
    {
        "date": "19/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Carlos V.",
        "fromTo": "LALIGA",
        "amount": 18796911,
        "id": "65087671"
    },
    {
        "date": "19/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Pepelu",
        "fromTo": "LALIGA",
        "amount": 13070803,
        "id": "5a69c8b7"
    },
    {
        "date": "19/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Fran Gonzalez",
        "fromTo": "LALIGA",
        "amount": 485078,
        "id": "a1792591"
    },
    {
        "date": "19/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Affengruber",
        "fromTo": "LALIGA",
        "amount": 3000000,
        "id": "a792c3a8"
    },
    {
        "date": "18/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Diego Conde",
        "fromTo": "LALIGA",
        "amount": 5639868,
        "id": "3784db84"
    },
    {
        "date": "18/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "F. De Jong",
        "fromTo": "LALIGA",
        "amount": 56809844,
        "id": "b66be4aa"
    },
    {
        "date": "18/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Le Normand",
        "fromTo": "LALIGA",
        "amount": 43606337,
        "id": "bdbc07dd"
    },
    {
        "date": "18/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Ugrinic",
        "fromTo": "LALIGA",
        "amount": 6836228,
        "id": "56033a2d"
    },
    {
        "date": "17/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Paredes",
        "fromTo": "LALIGA",
        "amount": 9340840,
        "id": "d2042f1d"
    },
    {
        "date": "17/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Conor Gallagher",
        "fromTo": "LALIGA",
        "amount": 13435955,
        "id": "c1762ffe"
    },
    {
        "date": "17/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Danjuma",
        "fromTo": "LALIGA",
        "amount": 6707122,
        "id": "60d0a36d"
    },
    {
        "date": "17/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Hassan",
        "fromTo": "LALIGA",
        "amount": 3987843,
        "id": "d40a762c"
    },
    {
        "date": "17/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Natan",
        "fromTo": "LALIGA",
        "amount": 17294901,
        "id": "a5489b9c"
    },
    {
        "date": "17/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Rioja",
        "fromTo": "LALIGA",
        "amount": 17594791,
        "id": "53cdc8ed"
    },
    {
        "date": "17/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Darder",
        "fromTo": "LALIGA",
        "amount": 16687246,
        "id": "c3d63909"
    },
    {
        "date": "17/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Pablo Torre",
        "fromTo": "LALIGA",
        "amount": 10003807,
        "id": "75634a64"
    },
    {
        "date": "17/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Raphinha",
        "fromTo": "LALIGA",
        "amount": 118645283,
        "id": "23a18480"
    },
    {
        "date": "16/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Sivera",
        "fromTo": "LALIGA",
        "amount": 9420365,
        "id": "97e826d7"
    },
    {
        "date": "16/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Júnior R.",
        "fromTo": "LA",
        "amount": 9968000,
        "id": "853cbfc8"
    },
    {
        "date": "16/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Tsygankov",
        "fromTo": "LALIGA",
        "amount": 14792570,
        "id": "b454489c"
    },
    {
        "date": "16/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Comesaña",
        "fromTo": "LALIGA",
        "amount": 8000000,
        "id": "39a2955c"
    },
    {
        "date": "16/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Gueye",
        "fromTo": "LALIGA",
        "amount": 7899966,
        "id": "2d18ec7"
    },
    {
        "date": "16/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Hugo Duro",
        "fromTo": "LALIGA",
        "amount": 20422279,
        "id": "35bad2fc"
    },
    {
        "date": "16/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "C. Alvarez",
        "fromTo": "LALIGA",
        "amount": 1264969,
        "id": "7120e546"
    },
    {
        "date": "15/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Gazzaniga",
        "fromTo": "LALIGA",
        "amount": 21608219,
        "id": "917bc360"
    },
    {
        "date": "15/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Luengo",
        "fromTo": "LALIGA",
        "amount": 994292,
        "id": "5212db01"
    },
    {
        "date": "15/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Coba",
        "fromTo": "LALIGA",
        "amount": 402172,
        "id": "6e09d32f"
    },
    {
        "date": "15/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Sergio Herrera",
        "fromTo": "LALIGA",
        "amount": 23500000,
        "id": "928b5dfd"
    },
    {
        "date": "15/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Le Normand",
        "fromTo": "Alcatamy eSports By",
        "amount": 39749512,
        "id": "318bc5b5"
    },
    {
        "date": "15/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Le Normand",
        "fromTo": "Vigar24",
        "amount": 39749512,
        "id": "feb7a2cd"
    },
    {
        "date": "15/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Moi Gómez",
        "fromTo": "LALIGA",
        "amount": 5184358,
        "id": "52e1c2fa"
    },
    {
        "date": "15/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Giuliano",
        "fromTo": "LALIGA",
        "amount": 28644277,
        "id": "9bea4dc7"
    },
    {
        "date": "14/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Foulquier",
        "fromTo": "LALIGA",
        "amount": 5575472,
        "id": "9c72de77"
    },
    {
        "date": "14/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Lo Celso",
        "fromTo": "LALIGA",
        "amount": 55500000,
        "id": "4495d97b"
    },
    {
        "date": "14/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Carlos Corberán",
        "fromTo": "LALIGA",
        "amount": 938967,
        "id": "2f61b075"
    },
    {
        "date": "14/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Hansi Flick",
        "fromTo": "LALIGA",
        "amount": 16000000,
        "id": "54e274fe"
    },
    {
        "date": "14/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Asano",
        "fromTo": "Pablinistan FC",
        "amount": 4200000,
        "id": "62bd8476"
    },
    {
        "date": "14/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Asano",
        "fromTo": "Visite La Manga FC",
        "amount": 4200000,
        "id": "bb9a5ec0"
    },
    {
        "date": "14/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Puado",
        "fromTo": "LALIGA",
        "amount": 39762476,
        "id": "6df4be76"
    },
    {
        "date": "14/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Gavi",
        "fromTo": "LALIGA",
        "amount": 19280451,
        "id": "3fa23398"
    },
    {
        "date": "14/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Fran García",
        "fromTo": "LALIGA",
        "amount": 10980858,
        "id": "9b77b5da"
    },
    {
        "date": "14/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Hugo Duro",
        "fromTo": "LALIGA",
        "amount": 19850231,
        "id": "48385bb1"
    },
    {
        "date": "14/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "A. Roca",
        "fromTo": "LALIGA",
        "amount": 331419,
        "id": "83f68622"
    },
    {
        "date": "14/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Tárrega",
        "fromTo": "LALIGA",
        "amount": 11750231,
        "id": "f375d5b1"
    },
    {
        "date": "13/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Kike García",
        "fromTo": "LALIGA",
        "amount": 8440798,
        "id": "b651b7fd"
    },
    {
        "date": "13/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Gonzalo",
        "fromTo": "LALIGA",
        "amount": 12054400,
        "id": "690e668a"
    },
    {
        "date": "13/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Pablo Durán",
        "fromTo": "LALIGA",
        "amount": 956502,
        "id": "f452f20"
    },
    {
        "date": "12/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Marcos Llorente",
        "fromTo": "LALIGA",
        "amount": 39962224,
        "id": "2dc426bd"
    },
    {
        "date": "12/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Juan Iglesias",
        "fromTo": "LALIGA",
        "amount": 1334986,
        "id": "31274827"
    },
    {
        "date": "12/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "José Bordalás",
        "fromTo": "LALIGA",
        "amount": 2604720,
        "id": "69d09ba2"
    },
    {
        "date": "12/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "T. Martinez",
        "fromTo": "LALIGA",
        "amount": 2069876,
        "id": "92ad5f98"
    },
    {
        "date": "12/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Odriozola",
        "fromTo": "LALIGA",
        "amount": 1965954,
        "id": "2df933eb"
    },
    {
        "date": "12/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Asano",
        "fromTo": "LALIGA",
        "amount": 3566689,
        "id": "7b6aa631"
    },
    {
        "date": "12/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Christensen",
        "fromTo": "LALIGA",
        "amount": 10287690,
        "id": "77e62607"
    },
    {
        "date": "12/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Lunin",
        "fromTo": "LALIGA",
        "amount": 5059871,
        "id": "56fdfe9c"
    },
    {
        "date": "11/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Álvaro García",
        "fromTo": "LALIGA",
        "amount": 12492045,
        "id": "337daac1"
    },
    {
        "date": "11/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Isco",
        "fromTo": "LALIGA",
        "amount": 95293958,
        "id": "b9cf95ad"
    },
    {
        "date": "11/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Kike Salas",
        "fromTo": "LALIGA",
        "amount": 5500111,
        "id": "32894e50"
    },
    {
        "date": "11/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Tchouaméni",
        "fromTo": "LALIGA",
        "amount": 42980400,
        "id": "147c2c8c"
    },
    {
        "date": "11/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Asencio",
        "fromTo": "LALIGA",
        "amount": 13438677,
        "id": "e5ad6f93"
    },
    {
        "date": "11/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Ratiu",
        "fromTo": "LALIGA",
        "amount": 13834707,
        "id": "b837022d"
    },
    {
        "date": "11/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Rodrygo",
        "fromTo": "LALIGA",
        "amount": 22906271,
        "id": "72898fee"
    },
    {
        "date": "11/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Morey",
        "fromTo": "LALIGA",
        "amount": 3374417,
        "id": "db8f36aa"
    },
    {
        "date": "11/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Trent",
        "fromTo": "LALIGA",
        "amount": 57232021,
        "id": "1fc74198"
    },
    {
        "date": "10/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Ayoze",
        "fromTo": "LALIGA",
        "amount": 58814834,
        "id": "67b98667"
    },
    {
        "date": "10/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Paredes",
        "fromTo": "LALIGA",
        "amount": 10792679,
        "id": "cb94767a"
    },
    {
        "date": "10/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Carmona",
        "fromTo": "LALIGA",
        "amount": 3500000,
        "id": "25ff293d"
    },
    {
        "date": "10/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Ferran",
        "fromTo": "LALIGA",
        "amount": 25000000,
        "id": "ba63fad5"
    },
    {
        "date": "10/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Valverde",
        "fromTo": "LALIGA",
        "amount": 88783959,
        "id": "fb7a9bcc"
    },
    {
        "date": "10/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Marcelino",
        "fromTo": "LALIGA",
        "amount": 6242640,
        "id": "12c01c8a"
    },
    {
        "date": "10/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "F.",
        "fromTo": "Jong de LALIGA",
        "amount": 51029442,
        "id": "649c94b4"
    },
    {
        "date": "10/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Guruzeta",
        "fromTo": "LALIGA",
        "amount": 14439315,
        "id": "49c5c70d"
    },
    {
        "date": "10/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Le Normand",
        "fromTo": "LALIGA",
        "amount": 39595321,
        "id": "4d84bf66"
    },
    {
        "date": "09/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "Camavinga",
        "fromTo": "LALIGA",
        "amount": 21920398,
        "id": "4eb05538"
    },
    {
        "date": "09/08/2025",
        "team": "Morenazos FC",
        "type": "venta",
        "player": "J. M. Giménez",
        "fromTo": "LALIGA",
        "amount": 11667622,
        "id": "ae73159e"
    },
    {
        "date": "09/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Isaac",
        "fromTo": "LALIGA",
        "amount": 7838425,
        "id": "7de05e68"
    },
    {
        "date": "09/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Mbappé",
        "fromTo": "LALIGA",
        "amount": 147000000,
        "id": "9bea34a5"
    },
    {
        "date": "09/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Aleñá",
        "fromTo": "LALIGA",
        "amount": 3474134,
        "id": "576b0b52"
    },
    {
        "date": "09/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Gazzaniga",
        "fromTo": "LALIGA",
        "amount": 21638466,
        "id": "a06d952f"
    },
    {
        "date": "09/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Iván Martín",
        "fromTo": "LALIGA",
        "amount": 12781944,
        "id": "e6f4588f"
    },
    {
        "date": "09/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Sergio Gómez",
        "fromTo": "LALIGA",
        "amount": 12458239,
        "id": "5969a0af"
    },
    {
        "date": "09/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Huijsen",
        "fromTo": "LALIGA",
        "amount": 70135202,
        "id": "ecdc8a31"
    },
    {
        "date": "09/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Morey",
        "fromTo": "LALIGA",
        "amount": 3371512,
        "id": "56815bfb"
    },
    {
        "date": "08/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Ez Abde",
        "fromTo": "LALIGA",
        "amount": 6966490,
        "id": "c03a755e"
    },
    {
        "date": "08/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "V. Rosier",
        "fromTo": "LALIGA",
        "amount": 5600000,
        "id": "af8d2dcb"
    },
    {
        "date": "08/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Isco",
        "fromTo": "LALIGA",
        "amount": 107158500,
        "id": "fb96a146"
    },
    {
        "date": "08/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Ayoze",
        "fromTo": "LALIGA",
        "amount": 64690971,
        "id": "f1d9ab7c"
    },
    {
        "date": "08/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Xabi Alonso",
        "fromTo": "LALIGA",
        "amount": 19494000,
        "id": "ffe85d87"
    },
    {
        "date": "08/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Riquelme",
        "fromTo": "Visite La Manga FC",
        "amount": 21000001,
        "id": "ad3af24"
    },
    {
        "date": "08/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Riquelme",
        "fromTo": "GOLENCIERRO FC",
        "amount": 21000001,
        "id": "75d6bca4"
    },
    {
        "date": "08/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Buchanan",
        "fromTo": "LALIGA",
        "amount": 6731372,
        "id": "9440800b"
    },
    {
        "date": "08/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Gayá",
        "fromTo": "LALIGA",
        "amount": 15432075,
        "id": "a894551b"
    },
    {
        "date": "08/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Becker",
        "fromTo": "LALIGA",
        "amount": 8723704,
        "id": "cca70095"
    },
    {
        "date": "08/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Endrick",
        "fromTo": "LALIGA",
        "amount": 7563782,
        "id": "c346f659"
    },
    {
        "date": "08/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Tsygankov",
        "fromTo": "LALIGA",
        "amount": 17405882,
        "id": "cb3295a8"
    },
    {
        "date": "07/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Koke",
        "fromTo": "LALIGA",
        "amount": 11059036,
        "id": "7e146cf8"
    },
    {
        "date": "07/08/2025",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "E. Militão",
        "fromTo": "LALIGA",
        "amount": 33448500,
        "id": "7aaf2f31"
    },
    {
        "date": "07/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Simeone",
        "fromTo": "LALIGA",
        "amount": 15000001,
        "id": "a5d57527"
    },
    {
        "date": "07/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Krapyvtsov",
        "fromTo": "LALIGA",
        "amount": 375545,
        "id": "6156e9d1"
    },
    {
        "date": "07/08/2025",
        "team": "Visite La Manga FC",
        "type": "compra",
        "player": "Diakhaby",
        "fromTo": "LALIGA",
        "amount": 4654373,
        "id": "aa1f1c81"
    },
    {
        "date": "07/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "Raillo",
        "fromTo": "Pablinistan FC",
        "amount": 24000000,
        "id": "ac7a0fd6"
    },
    {
        "date": "07/08/2025",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "F. Mendy",
        "fromTo": "LALIGA",
        "amount": 11293252,
        "id": "203f9a6"
    },
    {
        "date": "07/08/2025",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Dani Rodríguez",
        "fromTo": "LALIGA",
        "amount": 7405108,
        "id": "2f5eae73"
    },
    {
        "date": "07/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "compra",
        "player": "Almada",
        "fromTo": "Vigar24",
        "amount": 16170742,
        "id": "20e04f12"
    },
    {
        "date": "07/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Almada",
        "fromTo": "GOLENCIERRO FC",
        "amount": 16170742,
        "id": "b8a3f0eb"
    },
    {
        "date": "07/08/2025",
        "team": "Vigar24",
        "type": "compra",
        "player": "L. Milla",
        "fromTo": "GOLENCIERRO FC",
        "amount": 10174688,
        "id": "6e8aba69"
    },
    {
        "date": "07/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "L. Milla",
        "fromTo": "Vigar24",
        "amount": 10174688,
        "id": "6050f710"
    },
    {
        "date": "07/08/2025",
        "team": "GOLENCIERRO FC",
        "type": "venta",
        "player": "Yuri",
        "fromTo": "LALIGA",
        "amount": 10677623,
        "id": "93ca6fd"
    },
    {
        "date": "07/08/2025",
        "team": "Vigar24",
        "type": "venta",
        "player": "Sucic",
        "fromTo": "LALIGA",
        "amount": 10268041,
        "id": "901a869e"
    },
    {
        "date": "07/08/2025",
        "team": "Alcatamy eSports By",
        "type": "compra",
        "player": "Puado",
        "fromTo": "LALIGA",
        "amount": 38522121,
        "id": "18e8bf9e"
    },
    {
        "date": "06/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Ferran",
        "fromTo": "LALIGA",
        "amount": 19394486,
        "id": "cf23675e"
    },
    {
        "date": "06/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Comesaña",
        "fromTo": "LALIGA",
        "amount": 7263616,
        "id": "d2214ea7"
    },
    {
        "date": "06/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Gorosabel",
        "fromTo": "LALIGA",
        "amount": 6872724,
        "id": "80ac4578"
    },
    {
        "date": "06/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Eric",
        "fromTo": "LALIGA",
        "amount": 13483559,
        "id": "5a63f003"
    },
    {
        "date": "06/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Conor Gallagher",
        "fromTo": "LALIGA",
        "amount": 17777192,
        "id": "cf1965f9"
    },
    {
        "date": "06/08/2025",
        "team": "Visite La Manga FC",
        "type": "venta",
        "player": "Gerard",
        "fromTo": "LALIGA",
        "amount": 21269858,
        "id": "bd56d224"
    },
    {
        "date": "06/08/2025",
        "team": "Morenazos FC",
        "type": "compra",
        "player": "Vini Jr.",
        "fromTo": "LALIGA",
        "amount": 108300000,
        "id": "4b656305"
    },
    {
        "date": "",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "Bartra",
        "fromTo": "Morenazos FC",
        "amount": 30746750,
        "id": "ff5d3dca"
    },
    {
        "date": "",
        "team": "Pablinistan FC",
        "type": "compra",
        "player": "F. Calero",
        "fromTo": "GOLENCIERRO FC",
        "amount": 1112770,
        "id": "fc4ebee7"
    },
    {
        "date": "",
        "team": "Pablinistan FC",
        "type": "venta",
        "player": "Ounahi",
        "fromTo": "LALIGA",
        "amount": 7144160,
        "id": "55ed5dd5"
    },
    {
        "date": "",
        "team": "Alcatamy eSports By",
        "type": "blindaje",
        "player": "Comesaña",
        "fromTo": "-",
        "amount": 0,
        "id": "3d84f756"
    },
    {
        "date": "",
        "team": "Alcatamy eSports By",
        "type": "venta",
        "player": "Asencio",
        "fromTo": "LALIGA",
        "amount": 5393057,
        "id": "b54ce4d1"
    }
];