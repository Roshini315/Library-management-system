export class Book {
  public readonly id: string;
  public readonly title: string;
  public copies: number;

  constructor(id: string, title: string, copies: number) {
    this.id = id;
    this.title = title;
    this.copies = copies;
  }
}
