export class Gift {
  constructor(data) {
    this.url = data.url
    this.id = data.id
    this.opened = data.opened
    this.tag = data.tag

  }

  get giftLayout() {
    return `
    <div class="col-6 mb-3">
      <div class="card"> 
      <img class="img-fluid" type="button" onclick="app.giftsController.openGift('${this.id}')" src="${this.url}"alt="gift">
      <div class="card-body">${this.tag}</div>
      </div>
      </div>
    `

  }
}