import { Connect, SimpleSigner } from 'uport-connect'
import React, { Component } from 'react';


function uportLogin() {
    const uport = new Connect('Rom\'s new app', {
        clientId: '2owLkdyLCcCjdXjmG2bBTM5TKDxZdwfRHMu',
        network: 'rinkeby',
        signer: SimpleSigner('f6c811e809ae82961799ac1811ad8bb093fa5f1c5818678851d90cbe620a0a89')
    })

    // Request credentials to login
    uport.requestCredentials({
        requested: ['name', 'phone', 'country'],
        notifications: true // We want this if we want to recieve credentials
    })
    .then((credentials) => {
        // Do something
        console.log("you have logged in!!!!")
    })
}
export default uportLogin