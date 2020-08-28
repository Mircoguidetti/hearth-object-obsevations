import axios from 'axios'

export default (date) => {
    const body = {date}
    return axios.post('api/asteroids',body, null).then(res => {
        const data = res.data.map(as => {
            return {
                x: Number(as.close_approach_data[0].relative_velocity.kilometers_per_second), 
                y:  Number(as.close_approach_data[0].miss_distance.astronomical), 
                z: as.estimated_diameter.kilometers.estimated_diameter_max,
                name:as.name,
                magnitude:as.absolute_magnitude_h
            }
                
                    
                   
                    
            
        })
        return data
    } ).catch(e => {
        return e
    })
}