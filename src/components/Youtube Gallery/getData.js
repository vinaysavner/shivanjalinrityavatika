import axios from "axios";
const KEY = "AIzaSyAbgAIr0s_fj-5-ospgpGjsX9foOazDWY0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});