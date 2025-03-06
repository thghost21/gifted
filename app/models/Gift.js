export class Gift {
  constructor(data) {
    this.url = data.url
    this.id = data.id
    this.opened = data.opened

  }

  get giftLayout() {
    return `
      <img type="button" onclick="app.giftsController.openGift('${this.id}')" src="${this.url}"alt="gift">
    `

  }
}