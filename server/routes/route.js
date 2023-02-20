import express from 'express'
import {adduser, deleteUser, editUser, loadUser, users} from '../controller/user-controller.js'

const router=express.Router();

router.post('/adduser',adduser);
router.get('/users',users);
router.get('/:id',loadUser);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

export default router;