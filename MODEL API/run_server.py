import flask
import io
from API import make_predictions

app = flask.Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    data = {"success": False}
    if flask.request.method == "POST":
        if "file" in flask.request.files:
            uploaded_file = flask.request.files["file"]
            if uploaded_file.filename != '':
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