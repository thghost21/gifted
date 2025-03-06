import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
  constructor() {
    AppState.on('identity', this.getGifts)
    AppState.on('gifts', this.drawGiftsList)

  }

  async getGifts() {
    try {
      console.log('Getting Gifts');
      giftService.retrieveGifts()

    } catch (error) {
      Pop.error('could not get gifts', error)
    }
  }

  drawGiftsList() {
    const gifts = AppState.gifts
    let content = ''
    gifts.forEach(gift => content += gift.giftLayout);
    const giftElem = document.getElementById('giftList')
    giftElem.innerHTML = content
  }
} 