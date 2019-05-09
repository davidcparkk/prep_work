import csv
import urllib.request as urllib2
from bs4 import BeautifulSoup

gold_url = "https://www.investing.com/commodities/gold-historical-data"
silver_url = "https://www.investing.com/commodities/silver-historical-data"

headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) ' 
                      'AppleWebKit/537.11 (KHTML, like Gecko) '
                      'Chrome/23.0.1271.64 Safari/537.11',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
        'Accept-Encoding': 'none',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'keep-alive'}

# GOLD DATA
req_gold = urllib2.Request(url = gold_url, headers=headers)
html_gold = urllib2.urlopen(req_gold)
soup_gold = BeautifulSoup(html_gold, 'html.parser')

gold_data = []
table_gold = soup_gold.find('table', attrs={'class':'genTbl closedTbl historicalTbl'})
table_body_gold = table_gold.find('tbody')

rows_gold = table_body_gold.find_all('tr')
for row in rows_gold:
  cols = row.find_all('td')
  cols = [ele.text.strip() for ele in cols]
  gold_data.append([ele for ele in cols[0:2] if ele])

# SILVER DATA
req_silver = urllib2.Request(url = silver_url, headers=headers)
html_silver = urllib2.urlopen(req_silver)
soup_silver = BeautifulSoup(html_silver, 'html.parser')

silver_data = []
table = soup_silver.find('table', attrs={'class':'genTbl closedTbl historicalTbl'})
table_body_silver = table.find('tbody')

rows_silver = table_body_silver.find_all('tr')
for row in rows_silver:
  cols = row.find_all('td')
  cols = [ele.text.strip() for ele in cols]
  silver_data.append([ele for ele in cols[0:2] if ele])

# Write data onto csv
with open('index.csv', 'a') as csv_file:
  writer = csv.writer(csv_file)
  for row in range(0, len(gold_data)):
    writer.writerow([gold_data[row][0],gold_data[row][1],silver_data[row][0],silver_data[row][1]])

print ("Successly created index.csv")