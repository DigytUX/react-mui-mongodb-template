import {addNewEmployee} from '../controllers/controllers'

const routes = (app) => {
    app.route('/employees')
        .post(addNewEmployee)
}

export default routes