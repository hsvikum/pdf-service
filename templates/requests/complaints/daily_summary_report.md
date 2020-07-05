### Sample JSON for populating the report

Use the following JSON as request body to populate report.

```JSON
{
  "file": {
    "template": "incidents/complaints/daily_summary_report.js",
    "complaintsPast24hours": {
      "national": {
        "disputes": 21,
        "violationOfLaws": 17,
        "others": 8,
        "amount": 46
      },
      "district": {
        "disputes": 11,
        "violationOfLaws": 7,
        "others": 4,
        "amount": 22
      },
      "totals": {
        "disputes": 33,
        "violationOfLaws": 24,
        "others": 12,
        "amount": 68
      }
    },
    "complaintsSummary": {
      "national": {
        "disputes": 21,
        "violationOfLaws": 17,
        "others": 8,
        "amount": 46
      },
      "district": {
        "disputes": 11,
        "violationOfLaws": 7,
        "others": 4,
        "amount": 22
      },
      "totals": {
        "disputes": 33,
        "violationOfLaws": 24,
        "others": 12,
        "amount": 68
      }
    }
  }
}
```
