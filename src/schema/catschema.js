import z from 'zod';

const catSchema = z.object ({
  url : z.string().endsWith('.jpg'),
  id: z.string(),
  source_url: z.string()
});

export const validateCat = (obj) => {
  return catSchema.partial().safeParse(obj) //hace que todas las prop sean opcionales
  //si no esta no pasa nada, si esta entonces se valida como se debe validar

  /* devuelve algo como
  {
  "success": true,
  "data": {
    "url": "http://25.media.tumblr.com/tumblr_lyufg8UKQ51qgg1s9o1_500.jpg",
    "source_url": "http://thecatapi.com/?id=ajs"
  }
}
  */
};

export const validatePartialCat = (obj) => {
  return catSchema.partial().safeParse(obj) //hace que todas las prop sean opcionales
  //si no esta no pasa nada, si esta entonces se valida como se debe validar
}