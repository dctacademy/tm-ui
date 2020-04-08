import axios from '../config/axios'

export const startLoginUser = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then((response) => {
                if(response.data.hasOwnProperty('error')) {
                    alert(response.data.error)
                } else {
                    alert('successfully logged in')
                    localStorage.setItem('authToken', response.data.token)
                    redirect()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

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