from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    input_parameter = data.get('input_parameter')

    if not input_parameter:
        return jsonify({"error": "input_parameter is required"}), 400

    response = f"{input_parameter} is now registered"
    return jsonify({"message": response}), 200

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
