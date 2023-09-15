class Singleton:
    _instance = None

    """
    How to implement Singleton?

    1. Make the constructor private
    2. Create a static method that calls the private constructor
       and saves the instance in a static variable
    """

    """
    Private constructor
    The Singleton's constructor should always be private to prevent direct
    construction calls.
    """
    def __init__(self):
        if Singleton._instance is not None:
            raise Exception("Singleton instance already exists. Use getInstance() method.")

    """
    Static method that returns a unique created instance or creates it
    @returns Singleton: unique Singleton instance
    """
    @staticmethod
    def get_instance():
        if Singleton._instance is None:
            Singleton._instance = Singleton()
        return Singleton._instance

# Main function
def app_singleton():
    s1 = Singleton.get_instance()
    s2 = Singleton.get_instance()

    if s1 is s2:  # Check if the variables contain the same instance (same reference in memory)
        print('Singleton works, both variables contain the same instance.')
    else:
        print('Singleton failed, variables contain different instances.')

    try:
        s3 = Singleton()
        print(s3)
    except Exception as e:
        print(e)

app_singleton()

