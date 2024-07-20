
window.alert("Invocou Javascript")

const StartCam = ()=>{
    window.alert("Start Camera")
    let VideoOut=document.getElementById("vid");

    if (navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true})
        .then((stream)=>{
            VideoOut.srcObject = stream;
        })
        .catch(function(error){
            window.alert("falha ao iniciar")
        });
    }
}
const StopCam = () =>{
    let VideoOut=document.getElementById("vid");

    let stream = VideoOut.srcObject;
    let tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    VideoOut.srcObject=null;
        
    };
