import { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


class ApiServices {
    constructor() {
        this.state = {
            baseUrl: 'http://10.0.2.2:21379'
        }
    }

    get = async (url) => {
        const access = await AsyncStorage.getItem('@dpApiAccess');
        const accessToken = JSON.parse(access).accessToken;

        try {
            let response = await fetch(this.state.baseUrl + url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.status === 200) {
                let data = await response.json();
                return data;
            }
            if (response.status === 401)
                return JSON.stringify({ 'message': 'Unauthorized' });

            if (response.status === 400)
                return JSON.stringify({ 'message': 'Bad Request' });

            if (response.status === 404)
                return JSON.stringify({ 'message': 'Not Found' });
        }
        catch (error) {
            console.error(error);
        }
    }

    post = async (url, body) => {
        const access = await AsyncStorage.getItem('@dpApiAccess');
        const accessToken = JSON.parse(access).accessToken;
        try {
            const access = await AsyncStorage.getItem('@dpApiAccess');
            const accessToken = JSON.parse(access).accessToken;
                let response = null;
                if (access) {
                    alert(JSON.stringify(body))
                     response = await fetch(this.state.baseUrl + url, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${accessToken}`,
                        }, body: JSON.stringify(body),
                    });
                }
                else {
                    alert('Usuario sem token')
                    return null;
                     //Erro Usuario não logado
                }

                if (response.status === 200) {
                    let data = await response.json();
                    return data;
                }
                if (response.status === 401)
                    return JSON.stringify({ 'message': 'Unauthorized' });

                if (response.status === 400)
                    return JSON.stringify({ 'message': 'Bad Request' });

                if (response.status === 404)
                    return JSON.stringify({ 'message': 'Not Found' });

        }
        catch (error) {
            console.error(error);
        }
    }


    put = async (url, body) => {
        const access = await AsyncStorage.getItem('@dpApiAccess');
        const accessToken = JSON.parse(access).accessToken;

        try {
            const access = await AsyncStorage.getItem('@dpApiAccess');
            const accessToken = JSON.parse(access).accessToken;

            try {
                if (access) {
                    let response = await fetch(this.state.baseUrl + url, {
                        method: 'PUT',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${accessToken}`,
                        }, body: JSON.stringify(body),
                    });
                }
                else {
                    return null;
                    // Erro Usuario não logado
                }

                if (response.status === 200) {
                    let data = await response.json();
                    return data;
                }
                if (response.status === 401)
                    return JSON.stringify({ 'message': 'Unauthorized' });

                if (response.status === 400)
                    return JSON.stringify({ 'message': 'Bad Request' });

                if (response.status === 404)
                    return JSON.stringify({ 'message': 'Not Found' });
            }
            catch (error) {
                console.error(error);
            }

        }
        catch (error) {
            console.error(error);
        }
    }

    delete = async (url, body) => {
        const access = await AsyncStorage.getItem('@dpApiAccess');
        const accessToken = JSON.parse(access).accessToken;

        try {
            const access = await AsyncStorage.getItem('@dpApiAccess');
            const accessToken = JSON.parse(access).accessToken;

            try {
                if (access) {
                    let response = await fetch(this.state.baseUrl + url, {
                        method: 'DELETE',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${accessToken}`,
                        }, body: JSON.stringify(body),
                    });
                }
                else {
                    return null;
                    //Erro Usuario Não logado
                }

                if (response.status === 200) {
                    let data = await response.json();
                    return data;
                }
                if (response.status === 401)
                    return JSON.stringify({ 'message': 'Unauthorized' });

                if (response.status === 400)
                    return JSON.stringify({ 'message': 'Bad Request' });

                if (response.status === 404)
                    return JSON.stringify({ 'message': 'Not Found' });
            }
            catch (error) {
                console.error(error);
            }

        }
        catch (error) {
            console.error(error);
        }
    }
};

export default ApiServices;