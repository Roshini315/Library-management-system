export class Book {
  public readonly id: string;
  public readonly title: string;
  public copies: number;
  public image: string;

  constructor(id: string, title: string, copies: number, image: string) {
    this.id = id;
    this.title = title;
    this.copies = copies;
    this.image = image;
  }
}
