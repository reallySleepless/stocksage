import flask
import io
from API import make_predictions
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['MAX_CONTENT_LENGTH'] = 100 * 1024 * 1024  # 16 MB limit

@app.route("/predict", methods=["POST"])
def predict():
    data = {"success": False}
    if flask.request.method == "POST":
        print("File method is POST", flask.request.files)
        if "file" in flask.request.files:
            print("File exists")
            uploaded_file = flask.request.files["file"]
            if uploaded_file.filename != '':
                print("File name is not empty")
                try:
                    csv_data = io.StringIO(uploaded_file.read().decode("utf-8"))
                    extended_predictions = make_predictions(csv_data)
                    data = {
                        "extended_predictions": extended_predictions.tolist(),
                        "success": True
                    }
                except Exception as e:
                    print(f"Error making predictions: {e}")
    return flask.jsonify(data)

if __name__ == "__main__":
    print("* Flask starting server...")
    print("Please wait until server has fully started")
    app.run()