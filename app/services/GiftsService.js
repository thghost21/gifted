import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"

class GiftsService {
  async openGift(id) {
    const openedGift = AppState.gifts.find(gift => gift.id)

    openedGift.opened = true

    const response = await api.put(`api/gifts/${id}`, openedGift)
    const gift = new Gift(response.data)


    const gifts = AppState.gifts
    const giftIndex = AppState.gifts.findIndex(gift => gift.id == id)
    gifts.splice(giftIndex, 1, gift)


    console.log(response.data);
    AppState.emit('gifts')

  }


  async retrieveGifts() {
    const response = await api.get('api/gifts')
    console.log('got gifts', response.data);
    const giftsList = response.data.map(pojo => new Gift(pojo))
    AppState.gifts = giftsList

  }

}

export const giftService = new GiftsService()