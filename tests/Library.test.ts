import { describe, it, expect } from "vitest";
import { Library } from "../src/domain/Library";

describe("Library", () => {
  it("should return empty list when no books exist", () => {
    const library = new Library();
    expect(library.getBooks()).toEqual([]);
  });
});
