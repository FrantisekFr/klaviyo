___TERMS_OF_SERVICE___

By creating or modifying this file you agree to Google Tag Manager's Community
Template Gallery Developer Terms of Service available at
https://developers.google.com/tag-manager/gallery-tos (or such other URL as
Google may provide), as modified from time to time.


___INFO___

{
  "type": "TAG",
  "id": "cvt_temp_public_id",
  "version": 1,
  "securityGroups": [],
  "displayName": "Klaviyo Tracking",
  "brand": {
    "id": "Klaviyo",
    "displayName": "Klaviyo",
    "thumbnail": "data:image/png;base64,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\u003d\u003d"
  },
  "description": "Track GA and GA4 e-commerce events with Klaviyo.",
  "containerContexts": [
    "WEB"
  ]
}


___TEMPLATE_PARAMETERS___

[
  {
    "type": "TEXT",
    "name": "klaviyoID",
    "displayName": "Klaviyo Account ID",
    "simpleValueType": true
  }
]


___SANDBOXED_JS_FOR_WEB_TEMPLATE___

const injectScript = require('injectScript');

function initialiseKlaviyoTracking(){
    injectScript('https://frantisekfr.github.io/klaviyo/klaviyo_ga_tracking.js');
}

function loadKlaviyoJS(){
  injectScript('https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=' + data.klaviyoID, initialiseKlaviyoTracking); 
}

loadKlaviyoJS();  

// Call data.gtmOnSuccess when the tag is finished.
data.gtmOnSuccess();


___WEB_PERMISSIONS___

[
  {
    "instance": {
      "key": {
        "publicId": "inject_script",
        "versionId": "1"
      },
      "param": [
        {
          "key": "urls",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 1,
                "string": "https://frantisekfr.github.io/klaviyo/klaviyo_ga_tracking.js"
              },
              {
                "type": 1,
                "string": "https://static.klaviyo.com/onsite/js/klaviyo.js*"
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  }
]


___TESTS___

scenarios: []


___NOTES___

Created on 14/03/2024, 14:39:57


