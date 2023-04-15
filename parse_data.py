import pandas as pd
import numpy as np
import openai
import geopy
from geopy.geocoders import Nominatim
import extract_geolocation_data
import utils
import json


openai.api_key = "YOUR_API_KEY" # Replace this with your OpenAI API key



def generate_summary(json_article_content):
    input_text = json_article_content['body']

    prompt = (f"Please summarize the following text:\n{input_text}\n\nSummary:")
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        temperature=0.7,
        max_tokens=2048
    )
    summary = response.choices[0].text.strip()

    data = {"header": "summary", "body": summary}
    json_string = json.dumps(data)
    return json_string

def extract_loc(json_article_content):
    input_text = json_article_content['body']
    prompt = (f"Please extract the relevant locations in regards to climate change:\n{input_text}\n\. Return these locations in a comma separated list:")
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        temperature=0.7,
        max_tokens=2048
    )
    summary = response.choices[0].text.split(',')

    df = pd.DataFrame(columns=['location', 'address', 'latitude', 'longitude'])

    for i in range(len(summary)):
        summary[i] = summary[i].strip()
        location, address, latitude, longitude, raw = extract_geolocation_data.get_location_info(summary[i])
        df = pd.concat([df, pd.DataFrame({'location': [location], 'address': [address], 'latitude': [latitude], 'longitude': [longitude]})], ignore_index=True)

    return df.to_json(orient='records')


def extract_explanation(summary, level):
    input_text = summary['body']
    prompt = (f"Please explain what is happening in the following text as if you were teaching a {level}. Be sure to include explanations at a {level} level for any relevant key topics.  The text is:\n{input_text}\n\. Return these explanations in a comma separated list:")
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        temperature=0.7,
        max_tokens=2048
    )
    summary = response.choices[0].text.split(',')

    data = {"header": "explanation", "body": summary, "level": level}

    return data









