import axios from 'axios'

export default (dateStart, dateEnd) => {
    const body = {dateStart, dateEnd}
    return axios.post('api/magnitude',body, null).then(res => {
        
        return res.data
    } ).catch(e => {
        return e
    })
}