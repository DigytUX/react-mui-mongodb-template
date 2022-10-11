import {
    homeRoute, 
    addNewGuest, 
    getGuests,
    getGuestById
} from '../controllers/controllers'

const routes = (app) => {
    app.route('/')
        .get(homeRoute)

    app.route('/guests')
        .get(getGuests)
        .post(addNewGuest)
        
    app.route('/guest/:id')
        .get(getGuestById)
}

export default routes