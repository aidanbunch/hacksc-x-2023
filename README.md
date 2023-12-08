# Triagify - HackSC X 2023 Submission
![HackSC 2023 Slide 16_9](https://github.com/aidanbunch/hacksc-x-2023/assets/44245721/f897574c-a064-4b57-bb6e-3e4d310c2841)

## Inspiration

Our inspiration for Triagify came from numerous conversations with healthcare professionals, including primary care physicians and the founder of Nicolette. We also spoke with individuals involved in patient safety and analyzed sample EHR implementations with FHIR. The main issue we identified was the overwhelming amount of data coming into healthcare command centers, leading to medical errors due to the difficulty in sorting through this influx of data. Current triage accuracy rates are alarmingly low, at 60 percent or below, a statistic we aim to improve with our project.

![HackSC 2023 Slide 16_9](https://github.com/aidanbunch/hacksc-x-2023/assets/44245721/4807dd53-e36a-44ea-8c51-181410ce7369)

## What it does

Triagify is a web application designed to assist command center workers in hospitals with patient triage. It provides recommendations based on the ESI index, using a combination of patient-provided data and EHR system data. When a patient hits the call button, we take pre-diagnostic data from them. The patient view is streamlined, allowing patients to verbally express how they're feeling and provide video and audio data from their room. This data is interpreted using a fine-tuned LLaMA 2 7B model and translated into chief complaints. Alongside data from the EHR system (such as vitals, medical history, previous conditions, etc), a machine learning model assigns an ESI triage level to each patient. The command center view presents a Kanban board view of patients with different ESI/triage levels assigned to each.

![HackSC 2023 Slide 16_9 (1)](https://github.com/aidanbunch/hacksc-x-2023/assets/44245721/36c1b48f-7efb-45d1-b350-1aba57cbcd95)
![HackSC 2023 Slide 16_9 (2)](https://github.com/aidanbunch/hacksc-x-2023/assets/44245721/bb2b3573-a3d3-4633-8f7e-d143b0cd1949)
![HackSC 2023 Slide 16_9 (3)](https://github.com/aidanbunch/hacksc-x-2023/assets/44245721/10194cde-8e1c-48bb-b63e-4aa23391c410)

## How we built it

We built Triagify using a combination of machine learning and natural language processing techniques. On the frontend, we designed out a user interface by wireframing using Figma and then translating this into a web application using Next.js and Tailwind CSS. For the backend, we wrote routes using Flask and created the data processing pipeline using Python. We used a fine-tuned LLaMA 2 7B parameter model to interpret patient-provided audio and video data, translating this into chief complaints. We then combined this data with information from the EHR system, including patients' vitals, medical history, previous visits, demographics, and current medications. A machine learning model was then used to assign an ESI triage level to each patient.

<img width="1624" alt="screenshot1" src="https://github.com/aidanbunch/hacksc-x-2023/assets/44245721/dbb590da-d526-456c-ac29-3f404a41d8b5">

<img width="1624" alt="screenshot2" src="https://github.com/aidanbunch/hacksc-x-2023/assets/44245721/654f6c5d-35d0-4453-8bd4-863e12a672ea">


## Challenges we ran into

One of the main challenges we faced was ensuring the accuracy and reliability of our machine learning model. We had to ensure that the model was correctly interpreting the patient-provided data and accurately assigning ESI triage levels. Additionally, ensuring the privacy and security of patient data was a significant concern, particularly given the sensitive nature of the data being processed. Many of the datasets we came across for training our model were not able to be accessed without taking a patient safety course or having research credentials.

![HackSC 2023 Slide 16_9 (4)](https://github.com/aidanbunch/hacksc-x-2023/assets/44245721/f000d150-3705-4336-8ca6-403d77b54e01)

## What's next for Triagify

Looking ahead, we plan to continue refining and improving Triagify. We aim to further enhance the accuracy of our machine learning model and explore additional features that could further assist command center workers. In the future, we want to expand past only triaging when patients hit the button. A good venue to explore might be all the wasted time in the ER where people wait for doctors that could be used to get pre-diagnostic data. Then, we could run our data processing backend and improve the triage pipeline universally in hospitals.

![HackSC 2023 Slide 16_9 10](https://github.com/aidanbunch/hacksc-x-2023/assets/44245721/ac588a10-f0b5-4ec5-8041-cd7c2300c0d3)

