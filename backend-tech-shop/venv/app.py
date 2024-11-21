<<<<<<< Updated upstream
=======
import os
>>>>>>> Stashed changes
from flask import Flask, jsonify
from flask_session import Session
from flask_cors import CORS
from datetime import timedelta
from user import user_blueprint
from database import setup_database

app = Flask(__name__)

<<<<<<< Updated upstream
=======
# Generate a secure secret key
app.secret_key = os.urandom(24)

# Flask-Session configuration
app.config['SESSION_TYPE'] = 'filesystem'  # Store session data in files
app.config['SESSION_PERMANENT'] = True  # Persistent session
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=30)  # Set session lifetime to 30 days
Session(app)

# Enable CORS
CORS(app, supports_credentials=True)

# Setup the database
setup_database()

# Register the user blueprint
app.register_blueprint(user_blueprint)

>>>>>>> Stashed changes
@app.route('/')
def home():
    return jsonify(message="Welcome to the e-commerce API")

if __name__ == "__main__":
    app.run(debug=True)
