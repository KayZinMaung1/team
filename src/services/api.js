import axios from "axios";

export const host = "https://evening-dawn-38302.herokuapp.com";
export const call = async(method, path, data)=>{
    const response = await axios[method](`${host}/${path}`, data);
    return response;
}
