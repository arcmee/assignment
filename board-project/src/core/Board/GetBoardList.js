import http from "../../http-common";


export default class BoardRepository{
    constructor(){

    }
    getBoardList = async () => {
        const res = await http.get("/tutorials");
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        return result.data;
    }
    findByTitleContaining = async (title) => {
        const res = await http.get("/tutorials", {
            params: {
              title: title,
            },
        });
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        return result.data;
    }
}

