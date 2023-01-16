const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            currentUser: null,
            email: '',
            password: '',
            profile: null,
        },
        actions: {
            login: () => { },
            register: () => { },
            getProfile: () => { },
            updateProfile: () => { }
        }
    }
}

export default getState;