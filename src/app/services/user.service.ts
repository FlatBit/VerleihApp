import { Injectable } from '@angular/core';
import axios from 'axios';
import { SERVER_URL } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })

export class UserService {

    async register (userIn: User) {
        const res = await axios.post(SERVER_URL + '/api/newUser', {
            user: userIn
        });
        return res;
    }

    async login (emailIn: string, passwordIn: string) {
        const res = await axios.post(SERVER_URL + '/api/signin', {
            email: emailIn,
            password: passwordIn
        });
        return res;
    }

    async getUser (id: string) {
        const res = await axios.get(SERVER_URL + '/api/getUser/' + id );
        return res;
    }
}