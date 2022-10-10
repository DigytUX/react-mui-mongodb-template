import {addNewGuest, getGuests} from '../controllers/controllers'

const routes = (app) => {
    app.route('/guests')
        .get(getGuests)
        .post(addNewGuest)
}

export default routes