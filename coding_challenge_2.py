from flask import Flask, request
from flask_restful import Resource, Api
import json
import calendar
import numpy as np
from statistics import mean
from datetime import datetime
import csv
app = Flask(__name__)

@app.route('/commodity', methods=["GET"])
def get_data():
  start_date = request.args.get('start_date')
  end_date = request.args.get('end_date')
  commodity_type = request.args.get('commodity_type')
  input_file_name = "./index.csv"
  data = {
    "data":{
      
    },
    "mean":"hi",
    "variance":"hi"
    }
  date_constants = {v:k for k,v in enumerate(calendar.month_abbr)}

  if commodity_type == 'gold':
    with open(input_file_name, newline='') as input_file:
      reader = csv.reader(input_file)
      for row in reader:
        original_date = row[0][0:3]
        original_date_int = date_constants[original_date]
        new_date = row[0].replace(original_date, str(original_date_int))
        formatted_date = new_date.replace(',','')
        dt = datetime.strptime(formatted_date, '%m %d %Y')
        iso = dt.strftime('%Y-%m-%d')
        
        if iso >= start_date and iso <= end_date :
          data['data'][iso] = float(row[1].replace(',',''))
      
      prices = list(data['data'].values())

    avg = np.mean(prices)
    data['mean'] = float("{0:.2f}".format(avg))
    
    variance = np.var(prices)
    data['variance'] = float("{0:.2f}".format(variance))


    return (json.dumps(data))

  if commodity_type == 'silver':
    with open(input_file_name, newline='') as input_file:
      reader = csv.reader(input_file)
      for row in reader:
        original_date = row[2][0:3]
        original_date_int = date_constants[original_date]
        new_date = row[2].replace(original_date, str(original_date_int))
        formatted_date = new_date.replace(',','')
        dt = datetime.strptime(formatted_date, '%m %d %Y')
        iso = dt.strftime('%Y-%m-%d')
        
        if iso >= start_date and iso <= end_date :
          data['data'][iso] = float(row[3].replace(',',''))
      
      prices = list(data['data'].values())

    avg = np.mean(prices)
    data['mean'] = float("{0:.2f}".format(avg))
    
    variance = np.var(prices)
    data['variance'] = float("{0:.2f}".format(variance))


    return (json.dumps(data))


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080)