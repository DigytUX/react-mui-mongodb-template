import {addNewEmployee} from '../controllers/controllers'

const routes = (app) => {
    app.route('/players')
        .post(addNewEmployee)
}

export default routes