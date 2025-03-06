export class Gift {
  constructor(data) {
    this.url = data.url
    this.creatorId = data.creatorId
  }

  get giftLayout() {
    return `
      <img src="${this.url}"alt="gift">
    `

  }
}