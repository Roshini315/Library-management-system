import { describe, it, expect } from "vitest";
import { User } from "../src/domain/User";
import { Book } from "../src/domain/Book";

describe("User borrowing", () => {
  it("should allow borrowing up to 2 books", () => {
    const user = new User();

    user.borrow(new Book("1", "A", 1));
    user.borrow(new Book("2", "B", 1));

    expect(() =>
      user.borrow(new Book("3", "C", 1))
    ).toThrow();
  });
});
