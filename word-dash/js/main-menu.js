"use strict"

import { Return, Save, Start } from "./main-menu/buttons.js";
import { Gamemode, ValidadeInput } from "./main-menu/validations.js"

const selectors = {
    title: document.querySelector("h1"),
    menuCard: document.querySelector("#menu-card"),
    gamemodes: document.querySelector("#gamemodes"),
    optSingleplayer: document.querySelector("#opt-singleplayer"),
    optMultiplayer: document.querySelector("#opt-multiplayer"),
    singleplayerBtn: document.querySelector("#singleplayer-btn"),
    multiplayerBtn: document.querySelector("#multiplayer-btn"),
    singleplayerInp: document.querySelector("#singleplayer-inp"),
    multiplayerInp: document.querySelector("#multiplayer-inp"),
    quantityPlayers: document.querySelector("#quantity-players"),
    totalplayers: document.querySelector("#total-players"),
    playersname: document.querySelector("#playersname"),
    playerNumber: document.querySelector("#player-number"),
    alertMsg: document.querySelector("#alert-msg"),
    returnBtn: document.querySelector("#return-btn"),
    saveBtn: document.querySelector("#save-btn"),
    startBtn: document.querySelector("#start-btn")
}
const gameControl = {
    singleplayer: false,
    multiplayer: false,
    totalplayers: 0,
    clickCount: 0,
    players: {
        playerSolo: null, player1: null, player2: null, player3: null, player4: null
    }
}

// Ouvintes que executarão determinadas funções escutadas no HTML
selectors.singleplayerBtn.addEventListener("click", () => {
    Gamemode("singleplayer", gameControl, selectors)
})

selectors.multiplayerBtn.addEventListener("click", () => {
    Gamemode("multiplayer", gameControl, selectors)
})

selectors.singleplayerInp.addEventListener("input", () => {
    ValidadeInput(selectors.singleplayerInp, gameControl, selectors)
})

selectors.multiplayerInp.addEventListener("input", () => {
    ValidadeInput(selectors.multiplayerInp, gameControl, selectors)
})

selectors.returnBtn.addEventListener("click", () => {
    Return(gameControl, selectors)
})

selectors.saveBtn.addEventListener("click", () => {
    Save(gameControl, selectors)
})

selectors.startBtn.addEventListener("click", () => {
    if(gameControl.singleplayer) Start(gameControl, selectors)
    if(gameControl.multiplayer) Start(gameControl, selectors)
})