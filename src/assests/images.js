import LogoBreaking from './img/breaking-bad.svg';
import LogoBetter from './img/better-call-saul.png';

import IcoFigma from './img/figma.svg';
import IcoGitHub from './img/github.svg';
import IcoApi from './img/api.svg';
import IcoLinkedin from './img/linkedin.svg';

const images = [
    {
        name: "Breaking Bad",
        url: LogoBreaking,
        title: "Breaking Bad"
    },
    {
        name: "Better Call Saul",
        url: LogoBetter,
        title: "Better Call Saul"
    },
    {
        name: "Figma",
        url: IcoFigma,
        title: "Figma prototype"
    },
    {
        name: "GitHub",
        url: IcoGitHub,
        title: "GitHub"
    },
    {
        name: "Api",
        url: IcoApi,
        title: "The Breaking Bad API"
    },
    {
        name: "Linkedin",
        url: IcoLinkedin,
        title: "LinkedIn Profile"
    }
];

export default images;


/*
export default [
    {
        name: "Breaking Bad",
        url: LogoBreaking,
        title: "Breaking Bad"
    },
    {
        name: "Better Call Saul",
        url: LogoBetter,
        title: "Better Call Saul"
    }
];


/*

// export default [
//     {
//         "LogoBreaking": LogoBreaking,
//         "title": "Breaking Bad"
//     },
//     {
//         "LogoBetter": LogoBetter,
//         "title": "Better Call Saul"
//     }
// ]

//https://www.youtube.com/watch?v=ZwSwp8iRk2E&t=301s

export default {
    "LogoBreaking": LogoBreaking,
    "LogoBetter": LogoBetter
}
*/



/*
============================================================

const persona = {
    nombre: "Cesar",
    img: "ruta_imagen",
    titulo_img: "titulo"
}

const personas = [{
    nombre: "Cesar",
    img: "ruta_imagen",
    titulo_img: "titulo"
}, {
    nombre: "Cesar",
    img: "ruta_imagen",
    titulo_img: "titulo"
}];

personas.foreach(persona => {
   console.log(persona.nombre);
});


find

const personaRequerida = personas.find(persona => persona.nombre === "Cesar");

filter, le crea un nuevo arreglo con los elementos que cumplan la condición

const personaRequerida = personas.find(persona => persona.nombre === "Cesar" && persona.cedula === 123);

============================================================
*/