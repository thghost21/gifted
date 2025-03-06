export class Gift {
  constructor(data) {
    this.url = data.url
    this.id = data.id
    this.opened = data.opened

  }

  get giftLayout() {
    return `
    <div class="col-2">
      <img  type="button" onclick="app.giftsController.openGift('${this.id}')" src="${this.url}"alt="gift"></div>
    `

  }
}