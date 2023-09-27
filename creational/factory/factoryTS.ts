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
interface BaseCar {
  showCost(): void;
}

/** STEP 2
 * Concrete products
 */
class MastodonCar implements BaseCar {
    /** @implements */
    showCost(): void {
        console.log('[MASTODON] Car Cost: 300,000 MXN');
    }
}

class RhinoCar implements BaseCar {
    /** @implements */
    showCost(): void {
        console.log('[RHINO] Car Cost: 500,000 MXN');
    }
}

/** STEP 3
 * Base factory class
 */
interface CarFactory {
    createCar(): BaseCar;
}

/** STEP 4
 * Concrete factories
 */
class MastodonCarFactory implements CarFactory {
    /** @implements */
    createCar(): BaseCar {
        return new MastodonCar();
    }
}

class RhinoCarFactory implements CarFactory {
    /** @implements */
    createCar(): BaseCar {
        return new RhinoCar();
    }
}

/**
 * Main function
 */
function appFactory(factory: CarFactory): void {
    const car: BaseCar = factory.createCar();
    car.showCost();
}

appFactory(new MastodonCarFactory());
appFactory(new RhinoCarFactory());