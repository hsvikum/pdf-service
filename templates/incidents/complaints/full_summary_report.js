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
                padding: 2px;
                padding-left: 5px;
                padding-right: 5px;
              }
              body {
                font-family: serif;
              }
              .table tbody td {
                padding: 0.05em;
                vertical-align: middle;
                text-align: center;
              }
            </style>
          </head>
          <body class="document-border">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <table class="table table-bordered">
                    <thead class="tblhead">
                      <tr scope="col-12" class="text-center">
                        <th colspan="18">
                          පාර්ලිමේන්තු මැතිවරණය 2020 - මැතිවරණ පැමිණිලි වාර්තාව
                        </th>
                      </tr>
                      <tr scope="col-12" class="text-center">
                        <th rowspan="2" cope="col-1">අනු අංකය</th>
                        <th rowspan="2" cope="col-1">පැමිණිලි අංකය</th>
                        <th colspan="4" scope="col-2">පැමිණිල්ල ලද ආකාරය</th>
                        <th rowspan="2" scope="col-1">පැමිණිල්ල ලද දිනය</th>
                        <th rowspan="2" scope="col-1">පැමිණිලිකරු</th>
                        <th rowspan="2" scope="col-1">සිද්දිය සිදුවූ ස්ථානය/ අදාළ පොලිස් බල ප්‍රදේශය</th>
                        <th rowspan="2" scope="col-1">සාරාංශගත පැමිණිල්ල</th>
                        <th colspan="3" scope="col-1">පැමිණිලි වර්ගය හා අංකය *</th>
                        <th colspan="3" scope="col-1">පැමිණිල්ලේ ස්වබාවය</th>
                        <th rowspan="2" scope="col-1">පැමිණිල්ල යොමු කල පාර්ශවයන්</th>
                        <th rowspan="2" scope="col-1">ප්‍රගතිය</th>
                      </tr>
                      <tr scope="col-12" class="text-center">
                        <th scope="col-2">Ltr</th>
                        <th scope="col-1">Tel</th>
                        <th scope="col-1">Fax</th>
                        <th scope="col-1">e-mail</th>
                        <th scope="col-1">ප්‍ර. ක්‍රියා</th>
                        <th scope="col-2">මැ. නී. උ</th>
                        <th scope="col-1">වෙනත්</th>
                        <th scope="col-1">සුළු</th>
                        <th scope="col-1">සාමාන්‍ය</th>
                        <th scope="col-1">බරපතල</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${generateRows(data.complaintsPast24hours)}
                    </tbody>
                  </table>
                </div>
              </div>
                </table>
              </div>
            </div>
          </body>
        </html>
        `;
};

function generateRows(rowData) {
  var i = 1;
  return `<tr>
    <td>${i++}</td>
    <td>${rowData.national.disputes}</td>
    <td>${rowData.national.disputes}</td>
    <td>${rowData.national.disputes}</td>
    <td>${rowData.national.violationOfLaws}</td>
    <td>${rowData.national.others}</td>
    <td>${rowData.national.amount}</td>
    <td>${rowData.national.others}</td>
    <td>${rowData.national.amount}</td>
    <td>${rowData.national.others}</td>
    <td>${rowData.national.amount}</td>
    <td>${rowData.national.others}</td>
    <td>${rowData.national.amount}</td>
    <td>${rowData.national.others}</td>
    <td>${rowData.national.amount}</td>
    <td>${rowData.national.others}</td>
    <td>${rowData.national.others}</td>
    <td>${rowData.national.amount}</td>
  </tr>`;
}
