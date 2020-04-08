import axios from '../config/axios'

export const startRegisterUser = (formData) => {
    return (dispatch) => {
        axios.post('/users/register', formData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}