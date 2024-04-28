import requests

# Define the URL of the Flask server
url = 'http://localhost:5000/predict'

# Read the CSV file
csv_file_path = r"D:\Code\stocksage\MODEL API\New\BAJAJFINSV.BSE.csv"
with open(csv_file_path, 'rb') as file:
    csv_data = file.read()

# Send POST request with the CSV file
files = {'file': csv_data}
response = requests.post(url, files=files)

# Print the response
print(response.json())