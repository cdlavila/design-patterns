"""
How to implement Factory Method?

1. Declare base product class/interface, this will be returned by
   factory class and their subclasses.

Base product:
- BaseCar

2. Implement concrete products subclasses that inherits/implements
   the base product class/interface.

Concrete products:
- MastodonCar
- RhinoCar

3. Declare base factory class/interface that returns objects that match
   the base product, not the concrete ones.

Base factory:
- CarFactory

4. Implement concrete factories subclasses that inherits/implements
   the base factory class/interface. These classes will return concrete
   products in their factory method.

Concrete factories:
- MastodonCarFactory
- RhinoCarFactory
"""

from abc import ABC, abstractmethod

# STEP 1: Base product class
class BaseCar(ABC):
    @abstractmethod
    def show_cost(self) -> None:
        pass

# STEP 2: Concrete products
class MastodonCar(BaseCar):
    def show_cost(self) -> None:
        print("[MASTODON] Car Cost: 300,000 MXN")

class RhinoCar(BaseCar):
    def show_cost(self) -> None:
        print("[RHINO] Car Cost: 500,000 MXN")

# STEP 3: Base factory class
class CarFactory(ABC):
    @abstractmethod
    def create_car(self) -> BaseCar:
        pass

# STEP 4: Concrete factories
class MastodonCarFactory(CarFactory):
    def create_car(self):
        return MastodonCar()

class RhinoCarFactory(CarFactory):
    def create_car(self) -> BaseCar:
        return RhinoCar()

# Main function
def app_factory(factory):
    car: BaseCar = factory.create_car()
    car.show_cost()

app_factory(MastodonCarFactory())
app_factory(RhinoCarFactory())
