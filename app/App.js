import { AuthController } from "./Auth/AuthController.js"
import { GiftsController } from "./controllers/GiftsController.js"
import { SandboxController } from "./controllers/SandboxController.js"

class App {
  authController = new AuthController()
  giftsController = new GiftsController()
  sandboxController = new SandboxController()

}

window['app'] = new App()


