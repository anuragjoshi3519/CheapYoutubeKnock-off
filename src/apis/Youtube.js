import axios from 'axios'
const KEY='AIzaSyCurTa_ZglyB8vYLo7Gaj5CSCml31s3QvQ'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:
    {
        part:'snippet',
        maxResults:10,
        key:KEY
    }
}
)