import urllib.request
import json

# Coordenadas de León, Guanajuato, México
LATITUD  = 21.125
LONGITUD = -101.686

# URL de la API de Open-Meteo (¡gratis, sin clave!)
url = (
    f"https://api.open-meteo.com/v1/forecast"
    f"?latitude={LATITUD}&longitude={LONGITUD}"
    f"&current=temperature_2m,weathercode"
    f"&timezone=America%2FMexico_City"
)

print("Consultando el clima de León, Guanajuato...")

# Hacemos la petición a la API
with urllib.request.urlopen(url) as respuesta:
    datos = json.loads(respuesta.read())

# Extraemos la temperatura actual
temperatura = datos["current"]["temperature_2m"]
hora        = datos["current"]["time"]

print(f"\n📍 León, Guanajuato, México")
print(f"🕐 Hora local: {hora}")
print(f"🌡️  Temperatura actual: {temperatura} °C")
