import Vue from 'vue'
import axios from 'axios';

export default {
    // getUsers(succes, error) {
    //     Vue.http.get('user').then(
    //         (response) => {
    //             succes(response.data)
    //         },
    //         (response) => {
    //             error(response)
    //         }
    //     )
    // },

    getData(data){
        axios.get("http://api.icndb.com/jokes/random/10")
        .then((response)  =>  {
            this.loading = false;
            this.data = response.data.value;
        }, (error)  =>  {
            this.loading = false;
        })
    }
    
}