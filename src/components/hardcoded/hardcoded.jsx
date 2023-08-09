import { useState } from "react";
import axios from "axios";
import "./Hardcoded.css";

const BACKEND_URL = "http://localhost:8000/v2/test";

const handleSubmit = async (event) => {
  const baseUrl = event.target["baseUrl"].value;
  const apiLink = event.target["apiLink"].value;
  const requestMethod = event.target["requestMethod"].value;
  const u = event.target["u"].value;
  const p = event.target["p"].value;
  const validationSuccess = event.target["validation-success"].value;

  const requestObj = {
    baseUrl,
    apiLink,
    requestMethod,
    requestParams: {
      u,
      p,
    },
    validationParams: {
      success: validationSuccess,
    },
  };
  try {
    const { data } = await axios.post(BACKEND_URL, { ...requestObj });
    return data;
  } catch (error) {
    const {
      response: { data },
    } = error;

    // sending response received from server side only
    return data;
  }
};

const Hardcoded = () => {
  const [baseUrl, setBaseUrl] = useState("https://evaai.enginecal.com/");
  const [apiLink, setApiLink] = useState("core/v1/bike-intell/checklogin");
  const [requestMethod, setRequestMethod] = useState("POST");
  const [u, setU] = useState("saurabh.singh@enginecal.com");
  const [p, setP] = useState("123456");
  const [success, setSuccess] = useState("true");
  const [responseData, setResponseData] = useState(null);

  return (
    <div>
      <h2>Hardcoded</h2>

      <div>
        <input
          type="radio"
          name="baseUrl"
          id="prodBaseUrl"
          value={"https://evaai.enginecal.com/"}
          onChange={(e) => {
            setBaseUrl(e.target.value);
          }}
        />
        <label htmlFor="prodBaseUrl">Prod</label>
        <br />
        <input
          type="radio"
          name="baseUrl"
          id="devBaseUrl"
          value={"http://evaaidev.enginecal.com/"}
          onChange={(e) => {
            setBaseUrl(e.target.value);
          }}
        />
        <label htmlFor="devBaseUrl">Dev</label>
      </div>

      <div>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e).then((data) => {
              setResponseData(data);
              console.log(data); // print response after handling submisson
            });
          }}
        >
          <div className="basicFormInput">
            <strong>Basic Inputs: </strong>
            <div>
              <label htmlFor="baseUrl">baseUrl: </label>
              <input
                type="text"
                name="baseUrl"
                value={baseUrl}
                onChange={(e) => {
                  setBaseUrl(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="apiLink">apiLink: </label>
              <input
                type="text"
                name="apiLink"
                value={apiLink}
                onChange={(e) => {
                  setApiLink(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="requestMethod">requestMethod: </label>
              <select
                name="requestMethod"
                value={requestMethod}
                onChange={(e) => {
                  setRequestMethod(e.target.value);
                }}
              >
                {["POST", "GET"].map((method, index) => {
                  return (
                    <option key={index} value={method}>
                      {method}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="requestParamsInput">
            <strong>Request Params Inputs: </strong>
            <div>
              <label htmlFor="u">Email: </label>
              <input
                type="text"
                name="u"
                value={u}
                onChange={(e) => {
                  setU(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="u">Password: </label>
              <input
                type="password"
                name="p"
                value={p}
                onChange={(e) => {
                  setP(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="validationParamsInput">
            <strong>Validation params Inputs: </strong>
            <div>
              <label htmlFor="validation-success">Success: </label>
              <input
                type="text"
                name="validation-success"
                value={success}
                onChange={(e) => {
                  setSuccess(e.target.value);
                }}
              />
            </div>
          </div>
          <button type="submit">Run Test</button>
        </form>

        {responseData && (
          <div className="responseData">
            <h3>Test Result</h3>
            <div>
              <pre>{JSON.stringify(responseData, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* 
Inputs: baseUrl, apiLink, requestMethod, requestParams, validationParams

{
    "baseUrl": "https://evaai.enginecal.com/",
    "apiLink": "core/v1/bike-intell/checklogin",
    "requestMethod": "POST",
    "requestParams": {
        "u": "saurabh.singh@enginecal.com",
        "p": "12345"
    },
    "validationParams": {
        "errorCode": "1002"
    }
}
*/

export default Hardcoded;
