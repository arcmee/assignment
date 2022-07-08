import http from "../../http-common";

export default class BoardViewRepository {
    constructor(){

    }
    getBoardView = async (id) => {
        const res = await http.get(`/tutorials/${id}`);
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        return result.data;
    }
    deleteBoard = async (id) => {
        const res = await http.delete(`/tutorials/${id}`);
        return res;
    }
}