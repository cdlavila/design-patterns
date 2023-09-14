/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */
class Singleton {
  static instance = undefined;

  /**
   * Private constructor
   * @throws {Error} if the instance already exists
   */
  constructor() {
    if (Singleton.instance)
      throw new Error("Singleton instance already exists. Use getInstance() method.");
  }

  /**
   * Static method that returns unique created instance or create it
   * @returns {Singleton} unique Singleton instance
   */
  static getInstance() {
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

  try {
    const s3 = new Singleton(); // try to create a new instance
    console.log('Singleton failed, a new instance was created.');
  } catch (e) {
    console.log(e.message)
  }
}

appSingleton();
