from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/get_mails', methods=["GET"])
def GetMails():
    if request.method == "GET":
        data = {"message":"Getting mails from Flask Server."}
        return data

if __name__ == "__main__":
    app.run(debug=True)