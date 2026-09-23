import { Router } from 'express'

const router = Router()

/** Autenticación y registro de usuarios */
router.post('/auth/register', (req, res) => {
    console.log(req.body);

})

export default router