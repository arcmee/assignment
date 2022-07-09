import http from "../../http-common";


export default class BoardRepository{
    constructor(){
        this.size = 5;
    }
    getBoardList = async (page = 0) => {
        const res = await http.get(`/tutorials?page=${page}&size=${this.size}`);
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data.content,
            totalPages : res.data.totalPages,
        };
        return result;
    }
    findByTitleContaining = async (title, page = 0) => {
        const res = await http.get(`/tutorials?page=${page}&size=${this.size}`, {
            params: {
              title: title,
            },
        });
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data.content,
            totalPages : res.data.totalPages,
        };
        return result;
    }
}

