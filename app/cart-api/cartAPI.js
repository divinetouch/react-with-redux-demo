
const CartAPI = { 

    getAllItems(allItems) { 
        if(allItems.length === 0) { 
            return this.init();
        } else { 
            return allItems;
        }
    },

    findItemInCart(cartItems, item) { 
        return cartItems.findIndex(cartItem => cartItem.id === item.id);
    },

    addToCart(cartItems, item, quantity) { 
        let index = this.findItemInCart(cartItems, item);
        if(index === -1) { 
            return [...cartItems, {...item, quantity: quantity} ];
        } else { 
            return [...cartItems.slice(0, index),
                Object.assign({}, {...cartItems[index], quantity: quantity }),
                ...cartItems.slice(index+1)];
        } 
    },

    removeFromCart(cartItems, item) { 
        let index = this.findItemInCart(cartItems, item);
        return [...cartItems.slice(0, index), ...cartItems.slice(index+1)];
    },

    getTotal(cartItems, total=0) { 
        cartItems.forEach(item => { 
           total += item.quantity * item.cost; 
        });

        return total;
    },

    init() { 
        let allItems = [];
        for(let i = 1; i< 20; i++) { 
            allItems = [
                ...allItems, 
                { 
                    'id': `Item ${i}`,
                    'name': `Item name ${i}`,
                    'description': `This is item number ${i}`,
                    'cost': i
                }
            ];
        }
        return allItems;
    }
    
};

export default CartAPI;
