class Product {
    private readonly _id: number;
    private readonly _name: string;
    private readonly _cost: number;

    /**
     * It creates a new instance of Product.
     * @param {number} id The product id.
     * @param {string} name The product name.
     * @param {number} cost The product cost.
     */
    constructor(id: number, name: string, cost: number) {
        this._id = id;
        this._name = name;
        this._cost = cost;
    }

    /**
     * It gets the product id.
     * @returns {number} The product id.
     */
    public getId(): number {
        return this._id;
    }

    /**
     * It gets the product name.
     * @returns {string} The product name.
     */
    public getName(): string {
        return this._name;
    }

    /**
     * It gets the product cost.
     * @returns {number} The product cost.
     */
    public getCost(): number {
        return this._cost;
    }
}

class ShoppingCart {
    private static instance: ShoppingCart;
    private _products: Product[] = [];

    /**
     * It creates a new instance of ShoppingCart.
     * @private
     */
    private constructor() {}

    /**
     * Static method that returns unique created instance or create it.
     * @returns {ShoppingCart} unique ShoppingCart instance.
     */
    static getInstance(): ShoppingCart {
        if (!ShoppingCart.instance) {
            ShoppingCart.instance = new ShoppingCart();
        }

        return ShoppingCart.instance;
    }

    /**
     * It gets the shopping cart products.
     * @returns {Product[]} The shopping cart products.
     */
    public getCart(): Product[] {
        return this._products;
    }


    /**
     * It adds a new product to the shopping cart.
     * @param {Product} product The product to add.
     * @returns {void}
     */
    public addProduct(product: Product): void {
        this._products.push(product);
    }

    /**
     * It deletes a product from the shopping cart by its id.
     * @param {number} id The product id.
     * @returns {void}
     */
    public deleteProductById(id: number): void {
        this._products = this._products.filter((product: Product): boolean => product.getId() !== id);
    }
}

((): void => {
  const cart: ShoppingCart = ShoppingCart.getInstance();
  const cart2: ShoppingCart = ShoppingCart.getInstance();
  const prod1: Product = new Product(1, "iPhone 14", 3000);
  const prod2: Product = new Product(2, "Mac M2 pro", 2900);
  const prod3: Product = new Product(3, "AirPods pro", 2400);

  // Add products to car
  cart.addProduct(prod1);
  cart.addProduct(prod2);
  cart2.addProduct(prod3);

  // Show products of both carts after add
  console.log("Products of the cart 1: ", cart.getCart());
  console.log("Products of the cart 2: ", cart2.getCart());

  // Delete product by id
  cart2.deleteProductById(2);

  // Show products of both carts after delete
  console.log("Products of the cart 1: ", cart.getCart());
  console.log("Products of the cart 2: ", cart2.getCart());

  // Show if both carts are the same
  console.log("Are both carts the same?", cart === cart2);
})();