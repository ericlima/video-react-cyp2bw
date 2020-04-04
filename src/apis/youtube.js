import axios from 'axios';

const KEY = 'AIzaSyDngUCbs_YPIfdo5CeOUnGzb-LqtrFf-ZM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});