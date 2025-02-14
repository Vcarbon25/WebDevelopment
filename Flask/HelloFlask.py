"""
requirements 
    pip install flask
"""
from flask import Flask

app= Flask(__name__)

@app.route('/')
def index():
    #return "Hello Flask!"
    return"""<h1>Hello Flask!!</h1>
            <p>text body</P>"""#the aplication can contain html , only the contents of body rag

if __name__=='__main__':
    #during developing debug must be kept True, but in go live must be false
    app.run(host="127.0.0.1", port =5555, debug=True )
    #app.run(host="ServerIP") #when running on a server we can infform the desired ip
    #app.run(host='0.0.0.0') #this is both server and localhost
