const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            currentUser: null,
            email: '',
            password: '',
            biography: '',
            linkedin: '',
            github: '',
            profile: null,
            error: null,
        },
        actions: {
            handleChange: e => {
                const { id, value } = e.target;
                setStore({
                    [id]: value
                })
            },
            handleChangeProfile: e => {
                const { id, value } = e.target;
                const { profile } = getStore();
                profile[id] = value;
                setStore({
                    profile: profile
                })

            },
            checkUser: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
                    })
                }
            },
            login: (dataUser, navigate) => {
                console.log(dataUser);
                fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
                    method: 'POST',
                    body: JSON.stringify(dataUser),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)

                        if (data.access_token) {
                            setStore({
                                currentUser: data,
                                email: '',
                                password: '',
                                error: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            navigate('/')
                        } else {
                            setStore({
                                currentUser: null,
                                error: data
                            })
                            if (sessionStorage.getItem('currentUser')) sessionStorage.removeItem('currentUser')
                        }

                    })
                    .catch(error => console.log(error))
            },
            register: (dataUser, navigate) => {
                console.log(dataUser);
                fetch(`${process.env.REACT_APP_API_URL}/api/register`, {
                    method: 'POST',
                    body: JSON.stringify(dataUser),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)

                        if (data.access_token) {
                            setStore({
                                currentUser: data,
                                email: '',
                                password: '',
                                biography: '',
                                linkedin: '',
                                github: '',
                                error: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            navigate('/')
                        } else {
                            setStore({
                                currentUser: null,
                                error: data
                            })
                            if (sessionStorage.getItem('currentUser')) sessionStorage.removeItem('currentUser')
                        }

                    })
                    .catch(error => console.log(error))

            },
            logout: () => {
                setStore({
                    currentUser: null
                })
                sessionStorage.removeItem('currentUser');
            },
            getProfile: () => {
                const { currentUser } = getStore();

                fetch(`${process.env.REACT_APP_API_URL}/api/profile`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentUser?.access_token}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                    setStore({
                        profile: data
                    })
                })
            },
            updateProfile: (profile, navigate) => { 
                const { currentUser } = getStore();

                fetch(`${process.env.REACT_APP_API_URL}/api/profile`, {
                    method: 'PUT',
                    body: JSON.stringify(profile),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentUser?.access_token}`
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)

                        if (!data.message) {
                            setStore({
                                profile: data
                            })
                            navigate('/profile')
                        } else {
                            setStore({
                                error: data
                            })
                        }

                    })
                    .catch(error => console.log(error))

            }
        }
    }
}

export default getState;