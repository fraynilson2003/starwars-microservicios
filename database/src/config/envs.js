import dotenv from 'dotenv';
dotenv.config();


export default class EnvironmentEnv {
    static getString(key) {
        return String(`${process.env[key]}`)
    }

    static getNumber(key) {
        return Number(`${process.env[key]}`)
    }
}
