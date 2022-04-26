import { Router } from 'express';
import { personajeService } from '../services/personajeService.js';

const router = Router();
const personajeService = new PersonajeService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);
  
  const personaje = await personajeService.getpersonaje();

  return res.status(200).json(personaje);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await personajeService.getpersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await personajeService.createpersonaje(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await personajeService.updatepersonajeById(req.body);

  return res.status(200).json(personaje);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await personajeService.deletepersonajeById(req.params.id);

  return res.status(200).json(personaje);
});

export default router;