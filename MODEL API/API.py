from keras.models import model_from_json
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler

def make_predictions(csv_data):
    with open('model_architecture.json', 'r') as json_file:
        model_json = json_file.read()
    regression = model_from_json(model_json)
    regression.load_weights('multicomps_v6.h5')

    import warnings
    warnings.filterwarnings("ignore")

    df = pd.read_csv(csv_data, index_col="timestamp", parse_dates=["timestamp"])
    df = df["close"]

    # Take the latest 60 prices
    testing_df = df.head(121)
    training_df = df.drop(testing_df.index)

    scaler = MinMaxScaler()
    scaler.fit(df.values.reshape(-1, 1))
    train_set = scaler.transform(training_df.values.reshape(-1, 1))
    test_set = scaler.transform(testing_df.values.reshape(-1, 1))

    def create_series(data_array):
        LEN_DATA = len(data_array)
        SEQ_LENGTH = 60
        X, Y = [], []

        for i in range(LEN_DATA - SEQ_LENGTH):
            x, y = data_array[i:SEQ_LENGTH + i], data_array[SEQ_LENGTH + i]
            x, y = np.array(x), np.array(y)
            X.append(x); Y.append(y)

        return np.array(X), np.array(Y)

    X_train, Y_train = create_series(train_set)
    X_test, Y_test = create_series(test_set)

    predictions = regression.predict(X_test)

    # Initialize the sequence with the latest 60 data points
    sequence = X_test[1]
    extended_predictions = []

    for i in range(30):
        sequence_reshaped = sequence.reshape((1, 60, 1))
        next_day_prediction = regression.predict(sequence_reshaped)[0][0]
        extended_predictions.append(next_day_prediction)
        sequence = np.append(sequence[1:], next_day_prediction)

    extended_predictions = scaler.inverse_transform(np.array(extended_predictions).reshape(-1, 1)).flatten()

    return extended_predictions
