/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.on('/').renderInertia('home').as('home')

router
  .group(() => {
    router.get('/login', '#controllers/auth_controller.showLogin').as('auth.login')
    router.post('/login', '#controllers/auth_controller.login')
    router.get('/register', '#controllers/auth_controller.showRegister').as('auth.register')
    router.post('/register', '#controllers/auth_controller.register')
  })
  .use(middleware.guest())

router
  .post('/logout', '#controllers/auth_controller.logout')
  .as('auth.logout')
  .use(middleware.auth())
