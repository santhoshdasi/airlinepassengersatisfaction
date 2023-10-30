import numpy as np
from flask import Flask, request, render_template
import pickle

# Create flask app
app = Flask(__name__)
model = pickle.load(open("C:/Users/Dasi Rajesh/OneDrive/Desktop/Flask/templates/Airline Passengers pkl", "rb"))

@app.route("/")
def index():
    return render_template("index.html")
if __name__ == "__main__":
    app.run(debug=True)
