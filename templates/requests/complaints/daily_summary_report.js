const config = require("../../../config");
const baseURL = config("BASE_URL");

module.exports = data => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  };
  const today = new Intl.DateTimeFormat("en-LK", options).format(new Date());

  return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="${baseURL}/css/bootstrap.min.css" >
            <title>Daily Summary For Media</title>
            <style>
              @page {
                size: auto;
              }
              td,
              th {
                border-color: black !important;
              }
              th {
                border-bottom: none !important;
              }
              input {
                border: 0;
                border-bottom: 1px solid black;
                border-style: dotted;
                background: none;
                width: 62%;
                margin-top: 5px;
                text-align: center;
              }
              .bold {
                font-weight: bold;
              }
              .document-border {
                padding: 20px;
                padding-left: 50px;
              }
              body {
                font-family: serif;
              }
              .table tbody td {
                padding: 0.25em;
                vertical-align: middle;
                text-align: center;
              }
            </style>
          </head>
          <body class="document-border">
            <div class="container">
              <div class="row hdr">
                <div class="col-2">
                  <img
                    src="${baseURL}/assets/national-emblem.png"
                    alt="emblem-srilanka"
                    style="height:100px;"
                  />
                </div>
                <div class="col-8 text-center">
                  <h3>මැතිවරණ කොමිෂන් සභාව</h3>
                  <h3>தேர்தல் ஆணையம்</h3>
                </div>
              </div>
        
              <div class="row">
                <div class="col-6 rw1">
                  <br />
                  දුරකථන අංක : 011-2868441, 2868442, 2868443 <br />
                  ෆැක්ස් : 011-2868426 <br />
                  <br />
                  web : www.elections.gov.lk &nbsp; &nbsp; e-mail : info@elections.gov.lk
                </div>
                <div class="col-6 adrs">
                  මැතිවරණ කොමිෂන් සභා කාර්යාලය <br />
                  සරණ මාවත , රාජගිරිය (10107) <br />
                  தேர்தல் ஆணையத்தின் அலுவலகம் <br />
                  சரணா மாவதா, ராஜகிரிய (10107) <br />
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-12">
                  <h6>
                    ගතවූ පැය 24 කාලය තුළ (${today}) මැතිවරණ පැමිණිලි සාරාංශ සටහන
                  </h6>
                  <h6>
                    Summary of the complaints during the past 24 hours (${today})
                  </h6>
                  <h6>
                    கடந்த 24 மணி நேரத்தில் புகார்களின் சுருக்கம் (${today})
                  </h6>
                </div>
              </div>
        
              <br />
              <div class="row">
                <div class="col-12">
                  <table class="table table-bordered">
                    <thead class="tblhead">
                      <tr scope="col-12" class="text-center">
                        <th scope="col-4">
                          පැමිණිලි ලැබීම් <br />
                          Receiving Complaints <br />
                          புகார்களைப் பெறுதல் <br />
                        </th>
                        <th scope="col-2">
                          ප්‍රචණ්ඩ ක්‍රියා <br />
                          Disputes <br />
                          வன்ெசல்க <br />
                        </th>
                        <th scope="col-2">
                          නීති උල්ලංඝනය කිරීම් <br />Violations of laws <br />
                          மீண்டும் <br />
                        </th>
                        <th scope="col-2">
                          වෙනත් <br />
                          Others <br />
                          மற்ற <br />
                        </th>
                        <th scope="col-2">
                          පැමිණිලි සංඛ්‍යාව <br />
                          Amount of Complaints <br />
                          புகார்களின் எண்ணிக்கை <br />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      ${generateRows(data.complaintsPast24hours)}
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-12">
                  <h6>මුළු පැමිණිලි සාරාංශ සටහන</h6>
                  <h6>
                    Summary of the total recorded complaints
                  </h6>
                  <h6>
                    பதிவுசெய்யப்பட்ட மொத்த புகார்களின் சுருக்கம்
                  </h6>
                </div>
              </div>
        
              <br />
              <div class="row">
                <div class="col-12">
                  <table class="table table-bordered ">
                    <thead class="tblhead">
                      <tr scope="col-12" class="text-center">
                        <th scope="col-4">
                          පැමිණිලි ලැබීම් <br />
                          Receiving Complaints <br />
                          புகார்களைப் பெறுதல் <br />
                        </th>
                        <th scope="col-2">
                          ප්‍රචණ්ඩ ක්‍රියා <br />
                          Disputes <br />
                          வன்ெசல்க <br />
                        </th>
                        <th scope="col-2">
                          නීති උල්ලංඝනය කිරීම් <br />Violations of laws <br />
                          மீண்டும் <br />
                        </th>
                        <th scope="col-2">
                          වෙනත් <br />
                          Others <br />
                          மற்ற <br />
                        </th>
                        <th scope="col-2">
                          පැමිණිලි සංඛ්‍යාව <br />
                          Amount of Complaints <br />
                          புகார்களின் எண்ணிக்கை <br />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      ${generateRows(data.complaintsSummary)}
                    </tbody>
                  </div>
                </table>
              </div>
            </div>
          </body>
        </html>
        `;
};

function generateRows(rowData) {
  return `<tr>
    <th scope="row">
      ජාතික මැතිවරණ පැමිණිලි කළමනාකරණ මධ්‍යස්ථානය <br />
      National Election Complaint Management Centre <br />
      தேசிய தேர்தல் புகார் மேலாண்மை மையம் <br />
    </th>
    <td>${rowData.national.disputes}</td>
    <td>${rowData.national.violationOfLaws}</td>
    <td>${rowData.national.others}</td>
    <td>${rowData.national.amount}</td>
  </tr>
  <tr>
    <th scope="row">
      දිස්ත්‍රික් මැතිවරණ පැමිණිලි කළමනාකරණ මධ්‍යස්ථානය <br />
      District Election Complaint Management Centres <br />
      மாவட்ட தேர்தல் புகார் மேலாண்மை மையங்கள் <br />
    </th>
    <td>${rowData.district.disputes}</td>
    <td>${rowData.district.violationOfLaws}</td>
    <td>${rowData.district.others}</td>
    <td>${rowData.district.amount}</td>
  </tr>
  <tr>
    <th scope="row">
      දෛනික මුළු පැමිණිලි සංඛ්‍යාව <br />
      Total of daily complaints <br />
      தினசரி புகார்களின் மொத்தம் <br />
    </th>
    <td>${rowData.totals.disputes}</td>
    <td>${rowData.totals.violationOfLaws}</td>
    <td>${rowData.totals.others}</td>
    <td>${rowData.totals.amount}</td>
  </tr>`;
}
