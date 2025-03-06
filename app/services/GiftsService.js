import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"

class GiftsService {


  async retrieveGifts() {
    const response = await api.get('api/gifts')
    console.log('got gifts', response.data);
    const giftsList = response.data.map(pojo => new Gift(pojo))
    AppState.gifts = giftsList

  }

}

export const giftService = new GiftsService()