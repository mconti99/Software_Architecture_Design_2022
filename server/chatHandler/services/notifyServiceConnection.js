import fetch from 'node-fetch';

import { notifyServiceIp, notifyServicePort } from '../config.js';

const msgServerIp = notifyServiceIp;
const msgServerPort = notifyServicePort; 

export default class msgSerivceConnection{
    async insert(id, notifyToken){
        var resp = await fetch(`http://${msgServerIp}:${msgServerPort}/insert`, 
            {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                notifyToken: notifyToken
            })
        })
        try{
        resp = await resp.json()
        } catch (e){
            console.log("Errore: ", e)
        }
        return resp;
    }

    async delete(id){
        var resp = await fetch(`http://${msgServerIp}:${msgServerPort}/delete`, 
            {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:id
            })
        })
        try{
        resp = await resp.json()
        } catch (e){
            console.log("Errore: ", e)
        }
        return resp;
    }

    async notify(id){
        var resp = await fetch(`http://${msgServerIp}:${msgServerPort}/notify`, 
            {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:id
            })
        })
        try{
        resp = await resp.json()
        } catch (e){
            console.log("Errore: ", e)
        }
        return resp;
    }
}

