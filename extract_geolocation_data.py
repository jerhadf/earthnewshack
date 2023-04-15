import geopy
from geopy.geocoders import Nominatim


API_KEY = ''
APP_NAME = 'climate_change'

def get_location_info(location):
    geolocator = Nominatim(user_agent=APP_NAME)
    location_data = geolocator.geocode(location, addressdetails=True)
    address = location_data.address
    latitude = location_data.latitude
    longitude = location_data.longitude
    return f"{address}, {latitude}, {longitude}, {location_data.raw}"

