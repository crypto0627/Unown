import axios from "axios"
import { userInfo } from "src/models/model"

export default class UserInformation {
    private users: userInfo[]
    constructor() {
        this.users = []
    }
}