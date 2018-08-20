let store = {drivers: [], passengers: [], trips:[]};

let driverId = 0;
let driverTrips = [];
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId == this.id
    })
  }

  passengers(){
      return this.trips().map(trip =>{
        return trip.passenger()
      })
    }
    // return this.trips()

}

let passengerId = 0;

class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId == this.id
    })
  }

  drivers(){
    return this.trips().map(trip=>{
      return trip.driver()
    })
  }
}

let tripId = 0;

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driver = function(){
      return driver;
    }
    this.passenger = function(){
      return passenger;
    }
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
}
