dmx.config({
  "index": {
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "name",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "consumed_by",
          "type": "text"
        },
        {
          "name": "drug_type",
          "type": "text"
        },
        {
          "name": "date",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "drug_type": {
      "meta": null,
      "outputType": "text"
    },
    "flow": [
      {
        "name": "$param",
        "type": "object",
        "sub": [
          {
            "type": "number",
            "name": "check"
          },
          {
            "type": "text",
            "name": "item"
          }
        ]
      }
    ],
    "repeat2": {
      "meta": [
        {
          "name": "date",
          "type": "text"
        },
        {
          "name": "drugs",
          "type": "text"
        },
        {
          "name": "first_name",
          "type": "text"
        },
        {
          "name": "last_name",
          "type": "text"
        },
        {
          "name": "avatar",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "some": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "first_name",
          "type": "text"
        },
        {
          "name": "last_name",
          "type": "text"
        },
        {
          "name": "gender",
          "type": "text"
        },
        {
          "name": "email",
          "type": "text"
        },
        {
          "name": "company",
          "type": "text"
        },
        {
          "name": "avatar",
          "type": "text"
        },
        {
          "name": "password",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "k": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "date",
          "type": "text"
        },
        {
          "name": "drugs",
          "type": "text"
        },
        {
          "name": "first_name",
          "type": "text"
        },
        {
          "name": "last_name",
          "type": "text"
        },
        {
          "name": "avatar",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  }
});
