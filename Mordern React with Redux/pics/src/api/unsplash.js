import axios from "axios";

export default axios.create({
    baseUrl:'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID 2Y25nMCl6vFnf0h-QT3tn5u93KIF19YJ2eLkuylA4mQ'
      }
});


