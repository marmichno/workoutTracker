import axios from 'axios';
import { getSessionCookie } from '../cookies/cookies';

const baseURL = "http://localhost:4000";

let isRefreshing = false;
let requests: any[] = [];

const session = getSessionCookie();

const axiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${getSessionCookie().token}`
    }
});

const updateToken = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = {
        "token": `${getSessionCookie().refreshToken}`,
    }

    try {
        const response = await axios.post(`${baseURL}/authorization/refreshToken`, JSON.stringify(body), config);
        document.cookie = "workoutTrackerAppSession="
        document.cookie = `workoutTrackerAppSession=${JSON.stringify(response.data)}`
        return response.data;
    } catch (error) {
        localStorage.removeItem("token");
    }
}

axiosInstance.interceptors.request.use(async req => {
    req.headers!.Authorization = `Bearer ${getSessionCookie().token}`;
    return req;
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.request.status === 401) {
            const config = error.config
            if (!isRefreshing) {
                isRefreshing = true;
                return updateToken().then(newTokens => {
                    config.headers['Authorization'] = getSessionCookie().token;
                    // when token is fetched call all queued requests
                    requests.forEach(cb => cb());
                    requests = [];
                    return axiosInstance(config)
                }).catch(() => {

                }).finally(() => {
                    isRefreshing = false
                })
            } else {
                // add requests to queue
                return new Promise((resolve) => {
                    requests.push(() => {
                        const newCookie = getSessionCookie();
                        config.headers['Authorization'] = newCookie ? newCookie.token : ''
                        resolve(axiosInstance(config))
                    })
                })
            }
        } else {
            return Promise.reject(error)
        }
    })

export default axiosInstance;