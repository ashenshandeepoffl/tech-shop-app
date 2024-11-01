from database import setup_database
from flask import Flask, jsonify

app = Flask(__name__)

# Setup the database
setup_database()

@app.route('/')
def home():
    return jsonify(message="Welcome to the e-commerce API")

if __name__ == "__main__":
    app.run(debug=True)
