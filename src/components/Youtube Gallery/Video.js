import React, {useEffect,useState} from 'react'
const KEY = "AIzaSyA1h6RxKQyjl3d8SLVKKI6o0MqozZEDG7A";
const channelId = "UCmZrFfvHFDi3CU8gnDttsZw";

var fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=200`
function Video() {
    const [allvideos, showAllvideos] = useState([])
    useEffect(() => {
        fetch(fetchUrl).then( (response) => response.json()).then((resJson) => {
            const result = resJson.items.map( doc => ({
                ...doc,
                VideoLink: "https://www.youtube.com/embed/"+doc.id.videoId
            }));
            console.log(result);
            showAllvideos(result)
        })
    }, [])
    console.log("allvideos=>",allvideos)
  return (
      <>
  {allvideos.map((item) =>{
            return <>
                <div class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                    <iframe width="467" height="297"  src={item.VideoLink}  title={item.snippet.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>                
           
            </>
              
        })}
 </>
       
  )
}

export default Video