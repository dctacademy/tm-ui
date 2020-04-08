import axios from '../config/axios'

export const startRegisterUser = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/users/register', formData)
            .then((response) => {
                if(response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    alert('you have registered successfully')
                    redirect()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}