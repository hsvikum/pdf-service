const config = require("../../../config");
const baseURL = config("BASE_URL");
const today = new Date();

module.exports = data => {
  const electionDate = new Date(data.electionDate);
  const complaintTotalsByType = data.complaintTotalsByType;

  return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="${baseURL}/css/bootstrap.min.css" >
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
                padding: 0.5em;
              }
              hr {
                margin-top: 3px;
                margin-bottom: 3px;
              }
              h5.heading {
                margin-bottom: 0px
              }
            </style>
          </head>
        
          <body class="document-border">
            <div class="container">
              <div class="row text-center">
                <div class="col-12">
                  <h5 class="bold heading">පාර්ලිමේන්තු මැතිවරණය - ${electionDate.getFullYear()}</h5>
                  <h5 class="bold heading">நாடாளுமன்றத் தேர்தல் - ${electionDate.getFullYear()}</h5>
                  <h5 class="bold heading">Parliamentary Election - ${electionDate.getFullYear()}</h5>
                </div>
              </div>
            <hr />
              <div class="row text-center">
                <div class="col-12 headings">
                  <h5 class="heading">මැතිවරණ පැමිණිලි සාරාංශ වාර්තාව</h5>
                  <h6>(දිස්ත්‍රික් මැතිවරණ පැමිණිලි කළමනාකරණ මධ්‍යස්ථාන)</h6>
                  <h5 class="heading">தேர்தல் முறைப்பாடுகள் சுருக்க அறிக்கை</h5>
                  <h6>(மாவட்ட தேர்தல்கள் முறைப்பாட்டு முகாமைத்துவ மத்திய நிலையங்கள்)</h6>
                  <h5 class="heading">Election Complaints Summary</h5>
                  <h6>(District Complaint Management Centers)</h6>
                </div>
              </div>
              <hr />
              <div class="row text-center">
                <div class="col-12">
                  <span><u>${data.dateInfo}</u></span>
                </div>
              </div>
        
              <div class="row">
                <div class="col-12">
                  <table class="table table-bordered text-center" style="font-size: 12px">
                    <colgroup>
                      <col span="1" style="width: 2%;" />
                      <col span="1" style="width: 40%;" />
                      <col span="1" style="width: 8%;" />
                      <col span="1" style="width: 8%;" />
                      <col span="1" style="width: 8%;" />
                      <col span="1" style="width: 8%;" />
                      <col span="1" style="width: 8%;" />
                      <col span="1" style="width: 8%;" />
                      <col span="1" style="width: 8%;" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col" rowspan="2"></th>
                        <th scope="col" rowspan="2">
                          දිස්ත්‍රික්කය<br />
                          மாவட்டம்<br />
                          District
                        </th>
                        <th scope="col" rowspan="1" colspan="3">
                          පැමිණිලි වර්ගය හා අංකය /<br />
                          முறைப்பாட்டின் வகை மற்றும் இலக்கம் /<br />
                          Category and the Number of Complaint
                        </th>
        
                        <th scope="col" rowspan="1" colspan="4">
                          පැමිණිල්ලේ ස්වභාවය/<br />
                          முறைப்பாட்டின் தன்மை/<br />
                          Nature of Complaint
                        </th>
                      </tr>
                      <tr>
                        <th scope="col">
                          ප්‍රචන්ඩ ක්‍රියා/<br />
                          வன்செயல்கள்/<br />
                          Violence
                        </th>
                        <th scope="col" class="vertical-text">
                          මැතිවරණ නීති උල්ලංඝනය/<br />
                          தேர்தல் சட்டமீறல்கள்/<br />
                          Breach of Election Law
                        </th>
                        <th scope="col" class="vertical-text">
                          වෙනත්/<br />
                          ஏனையவை/<br />
                          Other
                        </th>
        
                        <th scope="col">
                          සුළු/<br />
                          சிறிய/<br />
                          Minor
                        </th>
                        <th scope="col">
                          සාමාන්‍ය/<br />
                          சாதாரணமான/<br />
                          General
                        </th>
                        <th scope="col">
                          බරපතල/<br />
                          கடுமையான/<br />
                          Serious
                        </th>
                        <th scope="col">
                          එකතුව/<br />
                          மொத்தம்/<br />
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      ${generateRows(data.complaintByDistrict)}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="2">
                          එකතුව/ மொத்தம்/ Total
                        </td>
                        <td>${complaintTotalsByType.violence}</td>
                        <td>${complaintTotalsByType.breachOfElectionLaws}</td>
                        <td>${complaintTotalsByType.other}</td>
                        <td>${complaintTotalsByType.minor}</td>
                        <td>${complaintTotalsByType.general}</td>
                        <td>${complaintTotalsByType.major}</td>
                        <td>${complaintTotalsByType.total}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <hr style="page-break-after: always; visibility: hidden;" />
          </body>
        </html>
        `;
};

function generateRows(complaintByDistrict) {
  const districts = [
    "කොළඹ/கொழும்பு/Colombo",
    "ගම්පහ/கம்பஹா/Gampaha",
    "කළුතර/களுத்தறை/Kalutara",
    "මහනුවර/கண்டி/Kandy",
    "මාතලේ/மாத்தளை/Matale",
    "නුවරඑළිය/நுவரெலியா/Nuwaraeliya",
    "ගාල්ල/காலி/Galle",
    "මාතර/மாத்தறை/Matara",
    "හම්බන්තොට/ஹம்பாந்தோட்டை/Hambantota",
    "යාපනය/யாழ்ப்பாணம்/Jaffna",
    "කිලිනොච්චි/கிளிநொச்சி/Killinochchi",
    "වවුනියා/வவுனியா/Vavuniya",
    "මන්නාරම/மன்னார்/Mannar",
    "මුලතිව්/முல்லைத்தீவு/Mulaitivu",
    "මඩකලපුව/மட்டக்களப்பு/Baticaloa",
    "අම්පාර/அம்பாறை/Ampara",
    "ත්‍රිකුණාමලය/திருகோணமலை/Trincomalee",
    "කුරුණෑගල/குருநாகல்/Kurunagala",
    "පුත්තලම/புத்தளம்/Puttalam",
    "අනුරාධපුර/அனுராதபுரம்/Anuradhapura",
    "පොළොන්නරුව/பொலநறுவை/Polonnaruwa",
    "බදුල්ල/பதுளை/Badulla",
    "මොනරාගල/மொனராகலை/Monaragala",
    "රත්නපුර/இரத்தினபரி/Ratnapura",
    "කෑගල්ල/கேகாலை/Kegalle"
  ];

  return districts
    .map(
      (districtName, index) =>
        `<tr>
        <td>${index + 1}</td>
        <td>${districtName}</td>
        <td>${complaintByDistrict[index].violence}</td>
        <td>${complaintByDistrict[index].breachOfElectionLaws}</td>
        <td>${complaintByDistrict[index].other}</td>
        <td>${complaintByDistrict[index].minor}</td>
        <td>${complaintByDistrict[index].general}</td>
        <td>${complaintByDistrict[index].major}</td>
        <td>${complaintByDistrict[index].total}</td>
      </tr>`
    )
    .join("");
}
