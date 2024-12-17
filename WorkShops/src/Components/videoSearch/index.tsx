
import { VideoList } from './VideoList'

export const Video = () => {
    return (
        <div>
            <h1 className=" font-bold ml-6">5 Videos</h1>
            <VideoList
                title="React: The Documentary"
                imgScr="https://react.dev/images/home/videos/documentary.webp"
                url="https://www.youtube.com/watch?v=8pDqJVdNa44"
                description="The origin story of React."
            />
            <VideoList
                title="Rethinking Best Practices"
                imgScr="https://react.dev/images/home/videos/rethinking.jpg"
                url="https://www.youtube.com/watch?v=KVZ-P-ZI6W4"
                description="Pete Hunt (2013)"
            />
            <VideoList
                title="Introducing React Native"
                imgScr="https://react.dev/images/home/videos/rn.jpg"
                url="https://www.youtube.com/watch?v=ZCuYPiUIONs"
                description="Tom Occhino (2015)"
            />
            <VideoList
                title="Introducing React Hooks"
                imgScr="https://react.dev/images/home/videos/hooks.jpg"
                url="https://www.youtube.com/watch?v=dpw9EHDh2bM"
                description="Sophie Alpert and Dan Abramov (2018)"
            />
            <VideoList
                title="Introducing Server Components"
                imgScr="https://react.dev/images/home/videos/rsc.jpg"
                url="https://www.youtube.com/watch?v=TQQPAU21ZUw"
                description="Dan Abramov and Lauren Tan (2020)"
            />
        </div>
    )
}

/*
<div>
        <h1 className=" font-bold ml-6">5 Videos</h1>
        <VideoList
          title="React: The Documentary"
          imgScr="https://react.dev/images/home/videos/documentary.webp"
          url="https://www.youtube.com/watch?v=8pDqJVdNa44"
          description="The origin story of React."
        />
        <VideoList
          title="Rethinking Best Practices"
          imgScr="https://react.dev/images/home/videos/rethinking.jpg"
          url="https://www.youtube.com/watch?v=KVZ-P-ZI6W4"
          description="Pete Hunt (2013)"
        />
        <VideoList
          title="Introducing React Native"
          imgScr="https://react.dev/images/home/videos/rn.jpg"
          url="https://www.youtube.com/watch?v=ZCuYPiUIONs"
          description="Tom Occhino (2015)"
        />
        <VideoList
          title="Introducing React Hooks"
          imgScr="https://react.dev/images/home/videos/hooks.jpg"
          url="https://www.youtube.com/watch?v=dpw9EHDh2bM"
          description="Sophie Alpert and Dan Abramov (2018)"
        />
        <VideoList
          title="Introducing Server Components"
          imgScr="https://react.dev/images/home/videos/rsc.jpg"
          url="https://www.youtube.com/watch?v=TQQPAU21ZUw"
          description="Dan Abramov and Lauren Tan (2020)"
        />
      </div>
 */