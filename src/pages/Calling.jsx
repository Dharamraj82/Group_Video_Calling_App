import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Calling = () => {
    let {id} =useParams()
    let myMeeting = async (element) => {
        const appID = 2068658939;
        const serverSecret = "d2c952f0386b0519c0faca15093db9af";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id,  Date.now().toString(),  "Enter Your Name");

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'copy link',
              url:`https://group-video-calling-app.vercel.app/calling/${id}` ,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
          },
        });
    
  
    }
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col pt-20 gap-20 p-5">
    <div className="relative flex w-full justify-center">
        <h1 className="text-zinc-950 font-bold text-2xl md:text-3xl">
            Dharamraj Video Calling App
        </h1>
        <a className="absolutetext-white bg-blue-600 top-0 border-blue-700 hover:bg-blue-700 font-semibold px-2 py-1 md:px-4 md:py-2 right-0 md:right-8 rounded"
            href="https://group-video-calling-app.vercel.app"
        >
            Back
        </a>
    </div>
    <div ref={myMeeting} className="w-[80%] h-[80%]" />
</div>

)}

export default Calling
