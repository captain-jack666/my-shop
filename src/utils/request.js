import axios from 'axios'

// const instance = axios.create({
//     baseURL:
// })

const request = {
    // api(url) {
    //     let instance1 = axios.create({
    //         baseURL: url,
    //         timeout: 5000
    //     })
    //     console.log(instance1)
    //     instance1.interceptors.request.use(res => {
    //         console.log(123)
    //         console.log(res)
    //         return res
    //     },
    //         err => {
    //             return err
    //         })
    //     instance1.interceptors.response.use(res => {
    //         console.log(res)
    //         console.log(234)

    //         // return res
    //     }, err => {
    //         return err
    //     })
    //     console.log(111)
    // },

    getRequest(url) {
        return this.requestAll(url, {}, 'GET')
    },

    requestAll(url, data, method) {
        const instance = axios.create({
            baseURL: url,
            timeout: 5000,
            method,
            data
        })
        instance.interceptors.request.use(res => {
            console.log(res)
            return res
        }, err => {
            console.log(err)
            return err
        })
        instance.interceptors.response.use(res => {
            console.log(res)
            return res
        }, err => {
            console.log(err)
            return err
        })
        return new Promise((resolve, reject) => {
            // instance.
            instance({
                url,
                method
            }).then(res => {
                // console.log(res)
                resolve(res)
            }).catch(err => reject(err))
        })

    }
}
export default request
