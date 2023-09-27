/**
 * How to implement Factory Method?
 *
 * 1. Declare base product class/interface, this will be returned by
 *  factory class and their subclasses.
 *
 * Base product:
 *  - BaseCar
 *
 * 2. Implement concrete products subclass that inherits/implements
 *  the base product class/interface.
 *
 * Concrete products:
 *  - MastodonCar
 *  - RhinoCar
 *
 * 3. Declare base factory class/interface that returns objects that match
 *  the base product, not the concrete ones.
 *
 * Base factory:
 *  - CarFactory
 *
 * 4. Implement concrete factories subclasses that inherit/implement
 *  the base factory class/interface. These classes will return concrete
 *  products in their factory method.
 *
 * Concrete factories:
 *  - MastodonCarFactory
 *  - RhinoCarFactory
 *
 */

/** STEP 1
 * Base product class
 */
class Product {
  operation() {
    throw new Error('Method not implemented!'); // Imitate abstract method
  }
}

/** STEP 2
 * Concrete products
 */
class ConcreteProduct1 extends Product {
  /** @override showCost() method */
  operation() {
    console.log('[ConcreteProduct1] operation...');
  }
}

class ConcreteProduct2 extends Product {
  /** @override showCost() method */
  operation() {
    console.log('[ConcreteProduct2] Operation...');
  }
}

/** STEP 3
 * Base factory class
 */
class ProductFactory {
  createProduct() {
    throw new Error('Method not implemented!');
  }
}

/** STEP 4
 * Concrete factories
 */
class ConcreteProduct1Factory extends ProductFactory {
  /**
   * @override createCar() method
   * @returns ConcreteProduct1
   */
  createProduct() {
    return new ConcreteProduct1();
  }
}

class ConcreteProduct2Factory extends ProductFactory {
  /**
   * @override createCar() method
   * @returns ConcreteProduct2
   */
  createProduct() {
    return new ConcreteProduct2();
  }
}

/**
 * Main function
 * @param {ProductFactory} factory Car factory
 */
function appFactory(factory) {
  if (!factory) throw new Error('Factory not provided!');

  const product = factory.createProduct();
  product.operation();
}


appFactory(new ConcreteProduct1Factory());
appFactory(new ConcreteProduct2Factory());
