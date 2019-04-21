import { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


class ApiServices {
    constructor() {
        this.state = {
            baseUrl: 'http://10.0.2.2:21379'
        }
    }

    get = async (url, id) => {
        const access = await AsyncStorage.getItem('@dpApiAccess');
        const accessToken = JSON.parse(access).accessToken;

        fetch(this.state.baseUrl + url +  id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        }).then((response) => {
            if (response.status === 200)
                alert(JSON.stringify(response));
                //return JSON.stringify(response.json());
            if (response.status === 401)
                alert('Unauthorized ')

            if (response.status === 400)
                alert('Bad Request')

                if (response.status === 404)
                alert('Not Found')
        })
            .then(responseJson => {
                //alert(response)
                return JSON.stringify(responseJson);
            })
            .then(response => {
                console.debug(response);
            })
            .catch(error => {
                console.error(error);
            });
    }

};

export default ApiServices;