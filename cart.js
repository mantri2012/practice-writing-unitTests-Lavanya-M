function addItem(cart, item, quantity) {
    for (let i = 0; i < quantity; i++) {
        cart.push(item);
    }
    return `${item} has been added.`
}

function removeItem(cart, item) {
    if (cart.includes(item)) {
        cart.splice(cart.indexOf(item), 1);
        return 'Item was removed.'
    } else {
        cart.pop();
        return `Item was not found, last item was removed.`
    }
}

function getTotalItems(cart) {
    if (cart.length > 0) {
        return cart.length
    } else {
        return 0;
    }
}

module.exports = { addItem, removeItem, getTotalItems };