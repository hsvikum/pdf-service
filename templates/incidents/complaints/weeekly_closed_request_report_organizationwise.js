const config = require("../../../config");
const baseURL = config("BASE_URL");

module.exports = data => {
	console.log("data",data);
  let data2 = {
	  "template": "/incidents/complaints/weeekly_closed_request_report_organizationwise.js",
	  "date": "2020/05/18",
	  "organizations": [
		{
		  "organizationNameSinhala": "ආරක්ෂක අමාත්යාංශය",
		  "organizationNameTamil": "பாதுகாப்பு அமைச்சகம்",
		  "count": 5
		},
		{
		  "organizationNameSinhala": "විදේශ කටයුතු අමාත්යංශය",
		  "organizationNameTamil": "வெளிநாட்டு அலுவல்கள் அமைச்சு",
		  "count": 5
		}
	  ],
	  "other": "23",
	  "total": "33"
  }

  let date = data2.date;
  let organizations = data2.organizations;
  let otherComplaintCount = data2.other;
  let totalComplaintCount = data2.total;

  let template = `
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="${baseURL}/css/bootstrap.min.css" >
				<style>
					@page {
						size: auto;
					}
					table, th, td {
						border: 1px solid black;
						border-collapse: collapse;
						padding: 5px;
					}
					th {
						text-align: center;
					}
					table {
						width: 100%;
					}
					body {
						font-family: serif;
						font-size: medium;
					}
					.document-border {
						padding: 20px;
						padding-left: 50px;
					}
					.bold {
						font-weight: bold;
					}
					.text-center {
						text-align: center;
					}
					.font-small {
						font-size: small
					}
					.grey {
						background-color: #F0F0F0;
					}
				</style>
			</head>
			<body class="document-border">
				<table>
        <tr>
          <th style="border: none; width: 150px">
            <img
              src="${baseURL}/assets/national-emblem.png"
              alt="emblem-srilanka"
              style="height:100px;"
            />
          </th>
          <th style="border: none">
						<div class="bold">ජනාධිපති ලේකම් කාර්යාලය</div>
						<div class="bold">ஜனாதிபதி செயலகம்</div>
						<div class="bold">Presidential Secretariat</div>
          </th>
          <th style="border: none; width: 150px">
		  <img
		  src="${baseURL}/assets/logo-sect.png"
		  alt="elections-logo"
		  style="height:100px;"
		/> 
          </th>
				</tr>
				<tr class="grey" style="height: 70px;">
					<th colspan="3">
					<div>
						 පැමිණිලි සතිපතා සංවෘත පැමිණිලි සාරාංශ වාර්තාව (ජනාධිපති පැමිණිලි කළමනාකරණ මධ්‍යස්ථානය)
					</div>
					<div class="font-small">
						 முறைப்பாடுகள் வாராந்திர மூடிய புகார் சுருக்க அறிக்கை (ஜனாதிபதி முறைப்பாட்டு முகாமைத்துவ மத்திய நிலையம்)
					</div>
					<div>
						 Complaints weekly closed complaint summery (Presidential Complaints Management
						Centre)
					</div>
					</th>
				</tr>
				<tr>
					<th colspan="3">
					<span>දිනය/திகதி/Date</span>
					<span>${date}</span>
					</th>
				</tr>
				<tr class="grey">
					<th colspan="3">
					<span>පැමිණිලි වර්ගීකරණය / முறைப்பாட்டு வகைப்பாடு / Complaint classification</span>
					</th>
				</tr>
				<tr class="grey">
					<th colspan="2">
						<div>ආයතනය</div>
						<div class="font-small">முறைப்பாட்டு வகை</div>
						<div>Organization</div>
					</th>
					<th>
						<div>සංඛ්‍යාව</div>
						<div class="font-small">எண்ணிக்கை</div>
						<div>Counts</div>
					</th>
				</tr>`;

  template += generateOrganizationRows(organizations);
  template += `
				<tr>
					<td colspan="2">
						<div>වෙනත්</div>
						<div class="font-small">வேறு</div>
					</td>
					<td class="text-center">${otherComplaintCount}</td>
				</tr>
				<tfoot>
					<tr class="grey text-center">
						<td colspan="2">
							<span>එකතුව / மொத்தம் / Total </span>
						</td>
						<td class="text-center">${totalComplaintCount}</td>
					</tr>
				</tfoot>
			</table>
		</body>
	</html>`;

  return template;
};

function generateOrganizationRows(organizations = []) {
  let rowCollection = "";

  for (let i = 0; i < organizations.length; i++) {
    let row = "";

      row = `<tr>
					<td colspan="2">
						<div>${organizations[i].organizationNameSinhala}</div>
						<div class="font-small">${organizations[i].organizationNameTamil}</div>
					</td>`;

          row += `
                    <td class="text-center">${organizations[i].count}</td>
                </tr>`;

    rowCollection += row;
  }

  return rowCollection;
}
