import pandas as pd
import numpy as np
import openai
import geopy
from geopy.geocoders import Nominatim
from extract_geolocation_data import get_location_info
import json


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
    prompt = (f"Please extract the relevant locations in regards to climate change:\n{input_text}\n\. Return these locations in a comma separated list:")
    completion = openai.ChatCompletion.create(
            model = 'gpt-3.5-turbo',
            messages = [
                {'role': 'user', 'content': prompt}
            ],
        )
    locations = completion['choices'][0]['message']['content']
    locations = locations.split(',')

    df = pd.DataFrame(columns=['location', 'address', 'latitude', 'longitude'])

    for i in range(len(locations)):
        location, address, latitude, longitude, raw = get_location_info(locations[i])
        df = pd.concat([df, pd.DataFrame({'location': [location], 'address': [address], 'latitude': [latitude], 'longitude': [longitude]})], ignore_index=True)

    return df.to_json(orient='records')


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









