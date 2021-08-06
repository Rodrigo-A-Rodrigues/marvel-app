import axios from 'axios';
import md5 from 'md5';


const privateKey = '43dfd21581c7929d9b82751ec2db548eee422fe1';
const publicKey = '001d3551f39b2429b39c1c370fecec4e';

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`, 
  params: {
    ts: time,
    apikey: publicKey,
    hash
  }
})

// Option for url characters?ts=${time}&apikey=${publicKey}&hash=${hash}