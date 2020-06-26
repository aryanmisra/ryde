import serial
import time
import string
import io
import os
import sys
while 1:
    ser = serial.Serial("COM3")
    ser.baudrate = 38400
    s = input('Enter AT command --> ')
    print ('AT command = ' + s)
    ser.write(bytes(s + '\r\n', encoding = 'utf-8'))
    ser.timeout = 1
    response = ser.read(999)
    print(response)
    ser.close()  
