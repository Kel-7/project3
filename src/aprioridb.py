import mysql.connector
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

mydb = mysql.connector.connect(
  host="localhost",
  user="",
  password="",
  database="aprioridb"
)

@app.route('/api/apriori', methods=['GET'])
def get_transaksi():
  mycursor = mydb.cursor()
  sql = "SELECT * FROM transaksi"
  mycursor.execute(sql)
  myresult = mycursor.fetchall()
  data = {}
  temp = ["id", "tanggal_transaksi", "produk"]
  for i in range(len(myresult)):
    data[i] = {}
    for j in range(len(myresult[0])):
      data[i][temp[j]] = myresult[i][j]

  return jsonify({"data": data})

def insert_transaksi():
  mycursor = mydb.cursor()
  tanggal_transaksi = request.get_json()['']
  sql = "INSERT INTO transaksi (tanggal_transaksi, produk) VALUES ('" + str + "')"



