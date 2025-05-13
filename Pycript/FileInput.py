from js import document, window
from pyodide.ffi.wrappers import add_event_listener

print("Invocou pyscript")

async def read_file(arq):
    Buffer = await arq.arrayBuffer()
    return Buffer.to_bytes()

async def open_file(fl):

    files = fl.target.files
    FstFile = files.item(0)
    dados :bytes =await read_file(FstFile)
    print(f"file data: {dados}")
    SaidaDados = document.getElementById("out")
    SaidaDados.innerText = dados

add_event_listener(document.getElementById("file_in"),"change",open_file)