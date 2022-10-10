import {addNewGuest} from '../controllers/controllers'

const routes = (app) => {
    app.route('/guests')
        .post(addNewGuest)
}

export default routes