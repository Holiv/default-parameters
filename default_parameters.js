//------ whitout using default parameters

//WDP aka Without Default Parameters
const bookingsWDP = []

const createBookingWDP = (flightNumber, numPassenger, price) => {

    const booking = {
        flightNumber,
        numPassenger,
        price,
    }
    console.log(booking);
}

createBookingWDP('LA3654', 3, 199);
createBookingWDP('LZ8765', 2, 250);
createBookingWDP('AP9254', undefined, 135);
console.log(bookings)
/*
	will print to the console:
		{ flightNumber: 'LA3654', numPassenger: 3, price: 199 }
		{ flightNumber: 'AP9254', numPassenger: undefined, price: 135 }
*/


 //----- using default parameters
const bookings = [];

const createBooking = (flightNumber = '000000', numPassenger = 1, price = 199 * numPassenger) => {

    //default values can be set directly in the Parameters just by using the assignment operator (=) and placing a value for each parameter. In case the function is called whitout all the arguments passed to attend the paramenters, the respective parameter would be set to 'undefined', but using the default parameter, always a function is called and not enough arguments is passed to attend the paramenters, the Default Values take place.

    //Default Parameter accpets any expression to be assigned. Also accepets other Parameters since it is declared before the current paramenter. In this example we have used the 'numPassenger' as part of the default parameter of 'price'

    const booking = {
        flightNumber,
        numPassenger,
        price,
        //to create this object Enhance Object Literal Syntax was used, where wasn't needed to create and set the initial values of the properties just by setting each property the same name of the name of the Function Parameters in its parent function.
        //JavaScript will read it then assign the values received as arguments to it.
    }
    bookings.push(booking)
    console.log(booking)
}
createBooking('LZ8765', 2, 250);
createBooking('AP9254', undefined, 135);
console.log(bookings)

/*
	will print to the console:
		[
		  { flightNumber: 'LZ8765', numPassenger: 2, price: 250 },
		  { flightNumber: 'AP9254', numPassenger: 1, price: 135 }
		]
*/

//note that even with a 'undefined' value used to skip the Number of Passenger in the second call, the object was returned with a number 1, that is the default value for it.