from flask import Flask, jsonify
from flask_cors import CORS

app  = Flask(__name__)
CORS(app)

@app.route("/api/home", methods=['GET'])
def return_home():
    response = jsonify({
        'message': "Hello World!"
    })
    response.headers.add('Content-Type', 'application/json')
    return response

if __name__ == "__main__":
    app.run(debug=True, port=8080)