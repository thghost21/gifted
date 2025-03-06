export class Gift {
  constructor(data) {
    this.url = data.url
    this.id = data.id
    this.opened = data.opened
    this.tag = data.tag

  }

  get giftLayout() {
    return `
    <div class="col-4 mb-3">
      <div class="card"> 

      <img class="img-fluid card-img card-img-top" type="button" onclick="app.giftsController.openGift('${this.id}')" src="${this.url}"alt="gift">
      <div class="card-body d-flex justify-content-between align-items-center">
      <span>${this.tag}</span>
      <div>
      <button onclick="app.sandboxController.saveThisGift()" class="btn btn-success">Save</button>
      </div>
      </div>
      </div>
      </div>
    `

  }
}