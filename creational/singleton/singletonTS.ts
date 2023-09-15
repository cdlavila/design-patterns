/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */
class Singleton {
  static instance: Singleton;

  /**
   * Private constructor
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * Static method that returns unique created instance or create it
   * @returns {Singleton} unique Singleton instance
   */
  static getInstance(): Singleton {
    if (!Singleton.instance)
      Singleton.instance = new Singleton();

    return Singleton.instance;
  }
}

/**
 * Main function
 */
function appSingleton() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) { // check if the variables contain the same instance (same reference in memory)
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }

  // const s3 = new Singleton(); // The TypeScript Compiler will show an error: 'constructor' is private ...
}

appSingleton();
