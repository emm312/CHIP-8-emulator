import Renderer from "./renderer.js";
import Keyboard from "./keyboard.js";
import Speaker from './speakers.js';
import CPU from "./cpu.js";

const renderer = new Renderer(10);
const keyboard = new Keyboard();
const speaker = new Speaker();
const cpu = new CPU(renderer, keyboard, speaker);

// set the canvas to invisibl
let loop;
let fps = 60, fpsInterval, startTime, now, then, elapsed;

function init() {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;


    cpu.loadSpritesIntoMemory();
    cpu.loadRom('sinvaders');


    loop = requestAnimationFrame(step);
}

function step() {
    now = Date.now();
    elapsed = now-then;
    if (elapsed > fpsInterval) {
        cpu.cycle();
    }
    loop = requestAnimationFrame(step);
}

init();