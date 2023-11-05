"use client";

import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { useRef, useState } from "react";

const patientData = {
  dep_name: "B",
  esi: 4,
  age: 40,
  Name: "Patient #1",
  Priority: "Low",
  Name__1: "Male",
  ethnicity: "Hispanic or Latino",
  race: "White or Caucasian",
  lang: "English",
  religion: "None",
  maritalstatus: "Single",
  employstatus: "Full Time",
  insurance_status: "Other",
  disposition: "Discharge",
  arrivalmode: "Walk-in",
  arrivalmonth: "June",
  arrivalday: "Tuesday",
  arrivalhour_bin: "23-02",
  previousdispo: "No previous dispo",
  n_edvisits: 0,
  n_admissions: 0,
  absolutelymphocytecount_last: "",
  acetonebld_last: "",
  "alanineaminotransferase(alt)_last": "",
  albumin_last: "",
  alkphos_last: "",
  "anc(absneutrophilcount)_last": "",
  aniongap_last: "",
  "aspartateaminotransferase(ast)_last": "",
  "b-typenatriureticpeptide,pro(probnp)_last": "",
  "baseexcess(poc)_last": "",
  "baseexcess,venous(poc)_last": "",
  basos_last: "",
  basosabs_last: "",
  "benzodiazepinesscreen,urine,noconf._last": "",
  bilirubindirect_last: "",
  bilirubintotal_last: "",
  bun_last: "",
  "bun/creatratio_last": "",
  calcium_last: "",
  "calculatedco2(poc)_last": "",
  "calculatedhco3(poc)i_last": "",
  "calculatedo2saturation(poc)_last": "",
  chloride_last: "",
  cktotal_last: "",
  co2_last: "",
  "co2calculated,venous(poc)_last": "",
  "co2,poc_last": "",
  creatinine_last: "",
  "d-dimer_last": "",
  egfr_last: "",
  "egfr(nonafricanamerican)_last": "",
  "egfr(aframer)_last": "",
  eos_last: "",
  eosinoabs_last: "",
  epithelialcells_last: "",
  globulin_last: "",
  glucose_last: "",
  "glucose,meter_last": "",
  "hco3calculated,venous(poc)_last": "",
  hematocrit_last: "",
  hemoglobin_last: "",
  "immaturegrans(abs)_last": "",
  immaturegranulocytes_last: "",
  inr_last: "",
  "lactate,poc_last": "",
  lipase_last: "",
  lymphs_last: "",
  magnesium_last: "",
  mch_last: "",
  mchc_last: "",
  mcv_last: "",
  monocytes_last: "",
  monosabs_last: "",
  mpv_last: "",
  neutrophils_last: "",
  nrbc_last: "",
  nrbcabsolute_last: "",
  "o2satcalculated,venous(poc)_last": "",
  "pco2(poc)_last": "",
  "pco2,venous(poc)_last": "",
  "ph,venous(poc)_last": "",
  "phencyclidine(pcp)screen,urine,noconf._last": "",
  phosphorus_last: "",
  platelets_last: "",
  "po2(poc)_last": "",
  "po2,venous(poc)_last": "",
  pocbun_last: "",
  poccreatinine_last: "",
  pocglucose_last: "",
  pochematocrit_last: "",
  pocionizedcalcium_last: "",
  pocph_last: "",
  pocpotassium_last: "",
  pocsodium_last: "",
  "poctroponini._last": "",
  potassium_last: "",
  proteintotal_last: "",
  prothrombintime_last: "",
  ptt_last: "",
  rbc_last: "",
  "rbc/hpf_last": "",
  rdw_last: "",
  sodium_last: "",
  "troponini(poc)_last": "",
  troponint_last: "",
  tsh_last: "",
  wbc_last: "",
  "wbc/hpf_last": "",
  absolutelymphocytecount_min: "",
  acetonebld_min: "",
  "alanineaminotransferase(alt)_min": "",
  albumin_min: "",
  alkphos_min: "",
  "anc(absneutrophilcount)_min": "",
  aniongap_min: "",
  "aspartateaminotransferase(ast)_min": "",
  "b-typenatriureticpeptide,pro(probnp)_min": "",
  "baseexcess(poc)_min": "",
  "baseexcess,venous(poc)_min": "",
  basos_min: "",
  basosabs_min: "",
  "benzodiazepinesscreen,urine,noconf._min": "",
  bilirubindirect_min: "",
  bilirubintotal_min: "",
  bun_min: "",
  "bun/creatratio_min": "",
  calcium_min: "",
  "calculatedco2(poc)_min": "",
  "calculatedhco3(poc)i_min": "",
  "calculatedo2saturation(poc)_min": "",
  chloride_min: "",
  cktotal_min: "",
  co2_min: "",
  "co2calculated,venous(poc)_min": "",
  "co2,poc_min": "",
  creatinine_min: "",
  "d-dimer_min": "",
  egfr_min: "",
  "egfr(nonafricanamerican)_min": "",
  "egfr(aframer)_min": "",
  eos_min: "",
  eosinoabs_min: "",
  epithelialcells_min: "",
  globulin_min: "",
  glucose_min: "",
  "glucose,meter_min": "",
  "hco3calculated,venous(poc)_min": "",
  hematocrit_min: "",
  hemoglobin_min: "",
  "immaturegrans(abs)_min": "",
  immaturegranulocytes_min: "",
  inr_min: "",
  "lactate,poc_min": "",
  lipase_min: "",
  lymphs_min: "",
  magnesium_min: "",
  mch_min: "",
  mchc_min: "",
  mcv_min: "",
  monocytes_min: "",
  monosabs_min: "",
  mpv_min: "",
  neutrophils_min: "",
  nrbc_min: "",
  nrbcabsolute_min: "",
  "o2satcalculated,venous(poc)_min": "",
  "pco2(poc)_min": "",
  "pco2,venous(poc)_min": "",
  "ph,venous(poc)_min": "",
  "phencyclidine(pcp)screen,urine,noconf._min": "",
  phosphorus_min: "",
  platelets_min: "",
  "po2(poc)_min": "",
  "po2,venous(poc)_min": "",
  pocbun_min: "",
  poccreatinine_min: "",
  pocglucose_min: "",
  pochematocrit_min: "",
  pocionizedcalcium_min: "",
  pocph_min: "",
  pocpotassium_min: "",
  pocsodium_min: "",
  "poctroponini._min": "",
  potassium_min: "",
  proteintotal_min: "",
  prothrombintime_min: "",
  ptt_min: "",
  rbc_min: "",
  "rbc/hpf_min": "",
  rdw_min: "",
  sodium_min: "",
  "troponini(poc)_min": "",
  troponint_min: "",
  tsh_min: "",
  wbc_min: "",
  "wbc/hpf_min": "",
  absolutelymphocytecount_max: "",
  acetonebld_max: "",
  "alanineaminotransferase(alt)_max": "",
  albumin_max: "",
  alkphos_max: "",
  "anc(absneutrophilcount)_max": "",
  aniongap_max: "",
  "aspartateaminotransferase(ast)_max": "",
  "b-typenatriureticpeptide,pro(probnp)_max": "",
  "baseexcess(poc)_max": "",
  "baseexcess,venous(poc)_max": "",
  basos_max: "",
  basosabs_max: "",
  "benzodiazepinesscreen,urine,noconf._max": "",
  bilirubindirect_max: "",
  bilirubintotal_max: "",
  bun_max: "",
  "bun/creatratio_max": "",
  calcium_max: "",
  "calculatedco2(poc)_max": "",
  "calculatedhco3(poc)i_max": "",
  "calculatedo2saturation(poc)_max": "",
  chloride_max: "",
  cktotal_max: "",
  co2_max: "",
  "co2calculated,venous(poc)_max": "",
  "co2,poc_max": "",
  creatinine_max: "",
  "d-dimer_max": "",
  egfr_max: "",
  "egfr(nonafricanamerican)_max": "",
  "egfr(aframer)_max": "",
  eos_max: "",
  eosinoabs_max: "",
  epithelialcells_max: "",
  globulin_max: "",
  glucose_max: "",
  "glucose,meter_max": "",
  "hco3calculated,venous(poc)_max": "",
  hematocrit_max: "",
  hemoglobin_max: "",
  "immaturegrans(abs)_max": "",
  immaturegranulocytes_max: "",
  inr_max: "",
  "lactate,poc_max": "",
  lipase_max: "",
  lymphs_max: "",
  magnesium_max: "",
  mch_max: "",
  mchc_max: "",
  mcv_max: "",
  monocytes_max: "",
  monosabs_max: "",
  mpv_max: "",
  neutrophils_max: "",
  nrbc_max: "",
  nrbcabsolute_max: "",
  "o2satcalculated,venous(poc)_max": "",
  "pco2(poc)_max": "",
  "pco2,venous(poc)_max": "",
  "ph,venous(poc)_max": "",
  "phencyclidine(pcp)screen,urine,noconf._max": "",
  phosphorus_max: "",
  platelets_max: "",
  "po2(poc)_max": "",
  "po2,venous(poc)_max": "",
  pocbun_max: "",
  poccreatinine_max: "",
  pocglucose_max: "",
  pochematocrit_max: "",
  pocionizedcalcium_max: "",
  pocph_max: "",
  pocpotassium_max: "",
  pocsodium_max: "",
  "poctroponini._max": "",
  potassium_max: "",
  proteintotal_max: "",
  prothrombintime_max: "",
  ptt_max: "",
  rbc_max: "",
  "rbc/hpf_max": "",
  rdw_max: "",
  sodium_max: "",
  "troponini(poc)_max": "",
  troponint_max: "",
  tsh_max: "",
  wbc_max: "",
  "wbc/hpf_max": "",
  absolutelymphocytecount_median: "",
  acetonebld_median: "",
  "alanineaminotransferase(alt)_median": "",
  albumin_median: "",
  alkphos_median: "",
  "anc(absneutrophilcount)_median": "",
  aniongap_median: "",
  "aspartateaminotransferase(ast)_median": "",
  "b-typenatriureticpeptide,pro(probnp)_median": "",
  "baseexcess(poc)_median": "",
  "baseexcess,venous(poc)_median": "",
  basos_median: "",
  basosabs_median: "",
  "benzodiazepinesscreen,urine,noconf._median": "",
  bilirubindirect_median: "",
  bilirubintotal_median: "",
  bun_median: "",
  "bun/creatratio_median": "",
  calcium_median: "",
  "calculatedco2(poc)_median": "",
  "calculatedhco3(poc)i_median": "",
  "calculatedo2saturation(poc)_median": "",
  chloride_median: "",
  cktotal_median: "",
  co2_median: "",
  "co2calculated,venous(poc)_median": "",
  "co2,poc_median": "",
  creatinine_median: "",
  "d-dimer_median": "",
  egfr_median: "",
  "egfr(nonafricanamerican)_median": "",
  "egfr(aframer)_median": "",
  eos_median: "",
  eosinoabs_median: "",
  epithelialcells_median: "",
  globulin_median: "",
  glucose_median: "",
  "glucose,meter_median": "",
  "hco3calculated,venous(poc)_median": "",
  hematocrit_median: "",
  hemoglobin_median: "",
  "immaturegrans(abs)_median": "",
  immaturegranulocytes_median: "",
  inr_median: "",
  "lactate,poc_median": "",
  lipase_median: "",
  lymphs_median: "",
  magnesium_median: "",
  mch_median: "",
  mchc_median: "",
  mcv_median: "",
  monocytes_median: "",
  monosabs_median: "",
  mpv_median: "",
  neutrophils_median: "",
  nrbc_median: "",
  nrbcabsolute_median: "",
  "o2satcalculated,venous(poc)_median": "",
  "pco2(poc)_median": "",
  "pco2,venous(poc)_median": "",
  "ph,venous(poc)_median": "",
  "phencyclidine(pcp)screen,urine,noconf._median": "",
  phosphorus_median: "",
  platelets_median: "",
  "po2(poc)_median": "",
  "po2,venous(poc)_median": "",
  pocbun_median: "",
  poccreatinine_median: "",
  pocglucose_median: "",
  pochematocrit_median: "",
  pocionizedcalcium_median: "",
  pocph_median: "",
  pocpotassium_median: "",
  pocsodium_median: "",
  "poctroponini._median": "",
  potassium_median: "",
  proteintotal_median: "",
  prothrombintime_median: "",
  ptt_median: "",
  rbc_median: "",
  "rbc/hpf_median": "",
  rdw_median: "",
  sodium_median: "",
  "troponini(poc)_median": "",
  troponint_median: "",
  tsh_median: "",
  wbc_median: "",
  "wbc/hpf_median": "",
  bloodua_last: 0,
  glucoseua_last: 0,
  ketonesua_last: 0,
  leukocytesua_last: 0,
  nitriteua_last: 0,
  pregtestur_last: 0,
  proteinua_last: 0,
  "bloodculture,routine_last": 0,
  "urineculture,routine_last": 0,
  bloodua_npos: 0,
  glucoseua_npos: 0,
  ketonesua_npos: 0,
  leukocytesua_npos: 0,
  nitriteua_npos: 0,
  pregtestur_npos: 0,
  proteinua_npos: 0,
  "bloodculture,routine_npos": 0,
  "urineculture,routine_npos": 0,
  bloodua_count: 0,
  glucoseua_count: 0,
  ketonesua_count: 0,
  leukocytesua_count: 0,
  nitriteua_count: 0,
  pregtestur_count: 0,
  proteinua_count: 0,
  "bloodculture,routine_count": 0,
  "urineculture,routine_count": 0,
  triage_vital_hr: 63,
  triage_vital_sbp: 146,
  triage_vital_dbp: 85,
  triage_vital_rr: 18,
  triage_vital_o2: 97,
  triage_vital_o2_device: 0,
  triage_vital_temp: 97,
  pulse_last: "",
  resp_last: "",
  spo2_last: "",
  temp_last: "",
  sbp_last: "",
  dbp_last: "",
  o2_device_last: "",
  pulse_min: "",
  resp_min: "",
  spo2_min: "",
  temp_min: "",
  sbp_min: "",
  dbp_min: "",
  o2_device_min: "",
  pulse_max: "",
  resp_max: "",
  spo2_max: "",
  temp_max: "",
  sbp_max: "",
  dbp_max: "",
  o2_device_max: "",
  pulse_median: "",
  resp_median: "",
  spo2_median: "",
  temp_median: "",
  sbp_median: "",
  dbp_median: "",
  o2_device_median: "",
  cxr_count: 0,
  echo_count: 0,
  ekg_count: 0,
  headct_count: 0,
  mri_count: 0,
  otherct_count: 0,
  otherimg_count: 0,
  otherus_count: 0,
  otherxr_count: 0,
  n_surgeries: 1,
  chief_complaint: "['extremitylaceration', 'leginjury']",
  meds: [],
  conditions: "['otcirculdx']",
};

export default function Index() {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [finished, setFinished] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const [videoURL, setVideoURL] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoURLRef = useRef<string | null>(null);
  const audioURLRef = useRef<string | null>(null);

  const startRecording = async () => {
    try {
      console.log("startRecording", startRecording);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });

      // Set the video element's source to the stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const recorder = new MediaRecorder(stream);

      // Define chunks array
      let chunks: BlobPart[] = [];

      // Add a new event listener for the stop event to create the video URL
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
        videoURLRef.current = url;

        console.log("videoURLRef", videoURLRef.current);
        console.log("audioURLRef", audioURLRef.current);

        fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patientData,
            videoURL: videoURLRef.current,
            audioURL: audioURLRef.current,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
        const url = URL.createObjectURL(e.data);
        setAudioURL(url);
        audioURLRef.current = url;
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error("Failed to get media stream:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setFinished(true);

      // Stop the video stream
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();

        tracks.forEach(function (track) {
          track.stop();
        });

        videoRef.current.srcObject = null;
      }
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white dark:bg-zinc-900">
      {finished ? (
        <div className="text-center max-w-3xl mx-auto">
          {loading ? (
            <Loader size="medium" />
          ) : (
            <>
              <h1 className="text-7xl text-zinc-800 dark:text-zinc-100">
                Thank you. A doctor will be assisting you in{" "}
                <span className="text-blue-400">2 minutes.</span>
              </h1>
              <div className="mt-5 text-center">
                {/* {audioURL && <audio src={audioURL} controls />}
            {videoURL && <video src={videoURL} controls autoPlay />} */}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="text-center max-w-xl mx-auto">
          {/* display video feed here */}
          <h1 className="text-7xl text-zinc-800 dark:text-zinc-100">
            {isRecording ? "I'm listening..." : "How can I help?"}
          </h1>
          <p className="mt-4 text-2xl text-muted-foreground">
            {
              "For example, say “I have a hard time breathing” or “I have a headache”."
            }
          </p>
          <div className="mt-5 text-center">
            <Button size={"lg"} className="text-md" onClick={toggleRecording}>
              {isRecording ? "Stop talking" : "Start talking"}
            </Button>
          </div>
          <div className="mt-10 text-center">
            <video className="rounded-lg" ref={videoRef} autoPlay />
          </div>
        </div>
      )}

      <div
        className="absolute left-0 bottom-[50px] h-32"
        style={{ width: "1000px" }}
      >
        <img src="/assets/blue.svg" alt="Blue SVG" />
      </div>
      <div
        className="absolute bottom-[50px] right-0 h-32"
        style={{ width: "1000px" }}
      >
        <img src="/assets/red.svg" alt="Red SVG" />
      </div>
    </section>
  );
}
