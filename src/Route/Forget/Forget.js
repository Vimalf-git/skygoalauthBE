import express from 'express'
import forget from '../../Controller/Forget/Forget.js'
const router =express();
router.post('/',forget.forgetPassword)
router.get('/getres/:id/:token',forget.getForgetres)
router.post('/updatepassword',forget.updatePassword)

export default router;