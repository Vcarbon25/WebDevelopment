import js
from pyodide.ffi import create_proxy

camera_button = js.document.querySelector("#start-camera")
video = js.document.querySelector("#video")
click_button = js.document.querySelector("#click-photo")
canvas = js.document.querySelector("#canvas")

async def camera_click(e):
    media = js.Object.new()
    media.audio = False
    media.video = True
    stream = await js.navigator.mediaDevices.getUserMedia(media)
    video.srcObject = stream

def click_button_click(e):
    canvas.getContext('2d').drawImage(video,0,0,canvas.width, canvas.height )
    image_data_url = canvas.toDataURL('image/jpeg')
    js.console.log(image_data_url)

def download_picture(e=None):
  link = js.document.createElement('a');
  link.download = 'gotchya.png';
  link.href = document.getElementById('canvas').toDataURL()
  link.click()

    

camera_button.addEventListener('click', create_proxy(camera_click))

click_button.addEventListener('click', create_proxy(click_button_click) )