import crypto from 'node:crypto';
import { validateCat, validatePartialCat } from '../schema/catschema.js'
import * as url from 'url';
import path from 'node:path';
import { readFile } from 'node:fs';
//import data from '../data/cat.json' assert {type: 'json'};

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const data = readFile(path.join(__dirname, '..', 'data', 'cat.json'));

export const getAllCats = (req, res) => {
  res.json(data);
};

export const createCat = (req, res) => {
  
  const catProperties = validateCat(req.body);

  if (catProperties.error) {
    return res.status(400).json( {error: JSON.parse(catProperties.error.message)} )
  }

  const newCat = {
    id: crypto.randomUUID(), //crea id de uuid v4
    ...catProperties.data //copia todas las props the catProperties.data 
  };

  data.push(newCat);
  res.send(data);

}

export const updateCat = (req, res) => {

  const properties = validatePartialCat(req.body);
  const { id } = req.params;

  if (!properties.success) {
    return res.status(400).json({ 
      error: JSON.parse(result.error.message)
     })
  }

  const foundCat = data.find(cat => cat.id === id);

  res.json(foundCat);

}