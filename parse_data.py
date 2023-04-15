import pandas as pd
import numpy as np
import openai
import geopy
from geopy.geocoders import Nominatim
import json
import ast

openai.api_key = "" # Replace this with your OpenAI API key


def generate_summary(json_article_content):
    input_text = json_article_content['body']

    prompt = (f"Please summarize the following text:\n{input_text}\n\nSummary:")
    completion = openai.ChatCompletion.create(
        model = 'gpt-3.5-turbo',
        messages = [
            {'role': 'user', 'content': prompt}
        ],
    )
    summary = completion['choices'][0]['message']['content']

    data = {"header": "summary", "body": summary}
    json_string = json.dumps(data)
    return json_string

def extract_loc(json_article_content):
    input_text = json_article_content['body']
    prompt = (f"Please extract the relevant locations in regards to climate change:\n{input_text}\n\. Return these locations in a python list format.")
    completion = openai.ChatCompletion.create(
            model = 'gpt-3.5-turbo',
            messages = [
                {'role': 'user', 'content': prompt}
            ],
        )
    locations = completion['choices'][0]['message']['content']
    locations = ast.literal_eval(locations)
    df = pd.DataFrame(columns=['address', 'latitude', 'longitude'])

    for i in range(len(locations)):
        address, latitude, longitude = get_coordinates(locations[i])
        df = pd.concat([df, pd.DataFrame({'address': [address], 'latitude': [latitude], 'longitude': [longitude]})], ignore_index=True)

    return df, df.to_json(orient='records'), completion


def extract_explanation(summary, level='beginner'):
    input_text = summary['body']
    prompt = (f"Please explain what is happening in the following text as if you were teaching a {level}. Be sure to include explanations at a {level} level for any relevant key topics.  The text is:\n{input_text}\n\. Return these explanations in a comma separated list:")
    completion = openai.ChatCompletion.create(
            model = 'gpt-3.5-turbo',
            messages = [
                {'role': 'user', 'content': prompt}
            ],
        )
    
    explanation = completion['choices'][0]['message']['content']


    data = {"header": "explanation", "body": explanation, "level": level}

    return data


def get_coordinates(location):
    geolocator = Nominatim(user_agent="location_script")
    location_data = geolocator.geocode(location)
    
    return location_data.address, location_data.latitude, location_data.longitude








