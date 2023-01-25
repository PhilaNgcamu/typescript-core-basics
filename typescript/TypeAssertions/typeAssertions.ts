//Sometimes, Typescript doesn't know what the dom(an element) will return "some" type. You have to tell it that you know it will return the relevant type.

const area = document.getElementById("area") as HTMLAreaElement;

const canvas = document.getElementById("canvas") as HTMLCanvasElement