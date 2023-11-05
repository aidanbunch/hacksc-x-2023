import sys

import whisper

model = whisper.load_model("base")


def check_lifesaving(patient):
  if patient['apneic'] or patient['pulseless'] or patient['unresponsive'] or patient['spo2'] < 90:
    return 1
  else:
    return 0

def check_high_risk(patient):
  if patient['confusion'] or patient['severe_pain'] or patient['high_risk_situation']:
    return 2
  else:
    return 0

def check_resources(patient):
  if patient['resources'] >= 2:
    return 3
  elif patient['resources'] == 1:
    return 4
  else:
    return 5

def check_vitals(level, patient):
  if level == 3:
    if patient['hr'] > 100 or patient['rr'] > 20 or patient['spo2'] < 95:
      return 2
    else:
      return 3
  else:
    return level

def get_esi(patient):
  level = check_lifesaving(patient)
  if level == 0:
    level = check_high_risk(patient)
  if level == 0:  
    level = check_resources(patient)
  level = check_vitals(level, patient)

  return level

# Example usage
patient = {'apneic': False, 'pulseless': False, 'unresponsive': False, 'spo2': 92,
           'confusion': False, 'severe_pain': True, 'high_risk_situation': False,
           'resources': 1, 'hr': 72, 'rr': 14}

print(get_esi(patient)) # Prints 2


patient = {'apneic': False, 'pulseless': False, 'unresponsive': False, 'spo2': 99, 
           'confusion': False, 'severe_pain': False, 'high_risk_situation': True,  
           'resources': 2, 'hr': 82, 'rr': 18}

print(get_esi(patient))

from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("llSourcell/medllama2_7b")
model = AutoModelForCausalLM.from_pretrained("llSourcell/medllama2_7b")

robot="Please provide me with the chief complaint and medical data. Using the data above, I will convert it into a JSON format ({" 'etc' ": 'etc'}) that can be used to predict the ESI level."

# Define conversation reply
user_input = "An 88-year-old female is brought to the ED by ambulance. This morning, she had an episode of slurred speech and weakness of her left arm that lasted about 45 minutes. She has a history of a previous stroke, and she takes an aspirin every day. She is alert and oriented with clear speech and equal hand grasps."
# Generate reply:
input_ids = tokenizer.encode(user_input + tokenizer.eos_token, return_tensors='pt')
bot_reply_ids = model.generate(input_ids, max_length=1000, pad_token_id=tokenizer.eos_token_id)
bot_reply = tokenizer.decode(bot_reply_ids[0], skip_special_tokens=True)
print(bot_reply)
