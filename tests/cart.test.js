const cartFunction = require('../cart.js');

let cart;

beforeEach(() => {
    cart = ['milk', 'banana', 'cherry', 'chicken']
});

describe("checking addItem function", function() {
    test("Should add an item to the cart, and return that the item has been added.", function() {
      expect(cartFunction.addItem(cart, 'eggs', 1)).toBe('eggs has been added.');
      expect(cart).toContain('eggs');     // ← check for eggs, not remove banana
    });
  });
  

describe("checking removeItem function", () => {
    test("Should remove the item and return string that it was removed.", () => {
        expect(cartFunction.removeItem(cart, 'banana')).toBe('Item was removed.');
        expect(cartFunction.removeItem(cart, 'chocobar')).toBe('Item was not found, last item was removed.');
    });
});

describe("checking getTotalItems function", () => {
    test("Should return number(total items in the cart).", () => {
        expect(cartFunction.getTotalItems(cart)).toBe(4);
    });
});