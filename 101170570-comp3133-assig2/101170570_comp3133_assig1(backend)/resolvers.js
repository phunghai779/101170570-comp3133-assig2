const hotel = require('./models/hotel');
const booking = require('./models/booking')
const user = require('./models/user')

exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return await hotel.find({});
        },
        getHotelByName: async (parent, args) => {
            return await hotel.find({"hotel_name" : args.hotel_name});
        },
        getHotelByCity: async (parent, args) => {
            return await hotel.find({"city" : args.city});
        },
        getBooking: async (parent, args) => {
            return await booking.find({});
        },
        getUser: async (parent, args) => {
            return await user.find({});
        }
    },
    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
            
            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newHotel = new hotel({
                hotel_id: args.hotel_id,  
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                user_id: args.user_id
            });
            return await newHotel.save();
      },
        addUser: async (parent, args) => {
            console.log(args)
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
            
            if(!isValidEmail){
                throw new Error("email not in proper format")
            }

            let newUser = new user({
                user_id: args.user_id,  
                user_name: args.user_name,
                password: args.password,
                email: args.email,
            });
            return await newUser.save();
        },
        addBooking: async(parent, args) => {
            console.log(args)

            let newBooking = new booking({
                hotel_id: args.hotel_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id,
            });
            return await newBooking.save();
        },
    }
  }