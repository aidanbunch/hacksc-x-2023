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
