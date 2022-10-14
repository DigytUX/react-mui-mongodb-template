import {
    homeRoute, 
    addNewGuest, 
    getGuests,
    getGuestById,
    deleteGuestById,
    updateGuestById
} from '../controllers/controllers'

const routes = (app) => {
    app.route('/')
        .get(homeRoute)

    app.route('/guests')
        .get(getGuests)
        .post(addNewGuest)
        
    app.route('/guest/:id')
        .get(getGuestById)
        .delete(deleteGuestById)
        .put(updateGuestById)
}

export default routes