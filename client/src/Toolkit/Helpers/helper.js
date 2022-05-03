import axios from "axios";
import 'regenerator-runtime/runtime'


async function reposFetcher(code) {
    try{
        const theData = await axios.post('/login', {code})
        return theData
    }catch{error=>{console.log(error)}}
      
}

export default reposFetcher



