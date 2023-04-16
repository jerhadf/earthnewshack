import pandas as pd
import numpy as np
import openai
import geopy
from geopy.geocoders import Nominatim
import json
import ast

openai.api_key = "" # Replace this with your OpenAI API key



def generate_summary(input_text):

    prompt = (f"Please summarize the following text in 3-4 sentences:\n{input_text}\n\nSummary:")
    completion = openai.ChatCompletion.create(
        model = 'gpt-3.5-turbo',
        messages = [
            {'role': 'user', 'content': prompt}
        ],
    )
    summary = completion['choices'][0]['message']['content']

    return summary

def extract_loc(input_text):
    prompt = (f"Please extract the relevant locations in this text in regards to climate change, and return these in a comma separated list. eg ['New York', '(Baton Rouge, Louisiana)', 'China']. The text is: \n{input_text}\n\. ")
    completion = openai.ChatCompletion.create(
            model = 'gpt-3.5-turbo',
            messages = [
                {'role': 'user', 'content': prompt}
            ],
        )
    locations = completion['choices'][0]['message']['content']
    locations = locations.split(',')
    df = pd.DataFrame(columns=['address', 'latitude', 'longitude'])

    non_dup = []
    #remove duplicates
    for i in range(len(locations)):
        for j in range(len(locations)):
            if locations[i] in locations[j] and i != j:
                non_dup.append(locations[i])

    for i in range(len(non_dup)):
        if non_dup is not None:
            address, latitude, longitude = get_coordinates(non_dup[i])
            df = pd.concat([df, pd.DataFrame({'address': [address], 'latitude': [latitude], 'longitude': [longitude]})], ignore_index=True)

    return df


def extract_explanation(input_text, level='college student'):
    prompt = (f"You are a climate scientist that explains things at a 8th grade level. Define the 2-4 most complicated climate-change related words in the following text:\n{input_text}\n\.")
    completion = openai.ChatCompletion.create(
            model = 'gpt-3.5-turbo',
            messages = [
                {'role': 'user', 'content': prompt}
            ],
        )
    
    explanation = completion['choices'][0]['message']['content']


    return explanation, level


# def do_geocode(address, attempt=1, max_attempts=5):
#     try:
#         return geopy.geocode(address)
#     except GeocoderTimedOut:
#         if attempt <= max_attempts:
#             return do_geocode(address, attempt=attempt+1)
#         raise


def get_coordinates(location):
    geolocator = Nominatim(user_agent="location_script")
    try:
        location_data = geolocator.geocode(location)
    except:
        print('Timeout error')
        return None, None, None
    #location_data= do_geocode(location)
    if location_data is None:
        return None, None, None
    return location_data.address, location_data.latitude, location_data.longitude








