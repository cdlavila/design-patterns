/**
 * How to implement Factory Method?
 *
 * 1. Declare base product class/interface, this will be returned by
 *  factory class and their subclasses.
 *
 * Base product:
 *  - BaseCar
 *
 * 2. Implement concrete products subclasses that inherits/implements
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
 * 4. Implement concrete factories subclasses that inherits/implements
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
class BaseCar {
  showCost() {
    throw new Error('Method not implemented!'); // Imitate abstract method
  }
}

/** STEP 2
 * Concrete products
 */
class MastodonCar extends BaseCar {
  /** @override showCost() method */
  showCost() {
    console.log('[MASTODON] Car Cost: 300,000 MXN');
  }
}

class RhinoCar extends BaseCar {
  /** @override showCost() method */
  showCost() {
    console.log('[RHINO] Car Cost: 100,000 MXN');
  }
}

/** STEP 3
 * Base factory class
 */
class CarFactory {
  createCar() {
    throw new Error('Method not implemented!');
  }
}

/** STEP 4
 * Concrete factories
 */
class MastodonCarFactory extends CarFactory {
  /**
   * @override createCar() method
   * @returns MastodonCar
   */
  createCar() {
    return new MastodonCar();
  }
}

class RhinoCarFactory extends CarFactory {
  /**
   * @override createCar() method
   * @returns RhinoCar
   */
  createCar() {
    return new RhinoCar();
  }
}

/**
 * Main function
 * @param {CarFactory} factory Car factory
 */
function appFactory(factory) {
  if (!factory) throw new Error('Factory not provided!');

  const car = factory.createCar();
  car.showCost();
}


appFactory(new MastodonCarFactory());
appFactory(new RhinoCarFactory());

// /**
//  *
//  * @param {string} type - type of factory to create
//  * @returns {MastodonCarFactory | RhinoCarFactory} A car factory instance
//  */
// function createFactory(type) {
//   const factories = {
//     mastodon: MastodonCarFactory,
//     rhino: RhinoCarFactory,
//   };
//
//   const FactoryClass = factories[type];
//   return new FactoryClass();
// }
//
// /**
//  * Instead of using new() operator, we abstract the
//  * factories creation, and we just indicate the type
//  * as a parameter
//  */
// appFactory(createFactory('mastodon'));
// appFactory(createFactory('rhino'));