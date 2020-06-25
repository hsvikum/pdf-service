const config = require("../../../config");
const baseURL = config("BASE_URL");

module.exports = data => {
  let date = data.date;
  let categories = data.categories;
  let otherComplaintCount = data.other;
  let totalComplaintCount = data.total;

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
						<div class="bold">මහමැතිවරණය - 2020</div>
						<div class="bold">பாராளுமன்றத் தேர்தல் - 2020</div>
						<div class="bold">Parliamentary Election - 2020</div>
          </th>
          <th style="border: none; width: 150px">
            <img
              src="${baseURL}/assets/elections-logo.jpg"
              alt="elections-logo"
              style="height:100px;"
            />
          </th>
				</tr>
				<tr class="grey" style="height: 70px;">
					<th colspan="3">
					<div>
						මැතිවරණ පැමිණිලි 24 පැය සාරාංශ වාර්තාව (මැතිවරණ පැමිණිලි කළමනාකරණ මධ්‍යස්ථානය)
					</div>
					<div class="font-small">
						தேர்தல் முறைப்பாடுகள் 24 மணித்தியால சுருக்க அறிக்கை (தேர்தல்கள் முறைப்பாட்டு முகாமைத்துவ மத்திய நிலையம்)
					</div>
					<div>
						Election Complaints 24 hour summery (Election Complaints Management
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
					<th>
						<div>පැමිණිලි වර්ගය</div>
						<div class="font-small">முறைப்பாட்டு வகை</div>
						<div>Complaints Category</div>
					</th>
					<th>
						<div>පැමිණිලි අනු වර්ගය</div>
						<div class="font-small">முறைப்பாட்டு உப வகை</div>
						<div>Complaints Sub-Category</div>
					</th>
					<th>
						<div>සංඛ්‍යාව</div>
						<div class="font-small">எண்ணிக்கை</div>
						<div>Counts</div>
					</th>
				</tr>`;

  template += generateCategoryRows(categories);
  if (otherComplaintCount > 0){
	template += `
		<tr>
			<th>
				<div>වෙනත්</div>
				<div class="font-small">வேறு</div>
			</th>
			<td></td>
			<td class="text-center">${otherComplaintCount}</td>
		</tr>
	`;
  }

  template += `
				<tfoot>
					<tr class="grey text-center">
						<td></td>
						<td>
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

function generateCategoryRows(categories = []) {
  let rowCollection = "";

  for (let i = 0; i < categories.length; i++) {
    let row = "";

    // check if sub categories exist
    if (categories[i].subCategories && categories[i].subCategories.length > 0) {
      let subCategories = categories[i].subCategories;

      row = `<tr>
					<th rowspan=${subCategories.length}>
						<div>${categories[i].categoryNameSinhala}</div>
						<div class="font-small">${categories[i].categoryNameTamil}</div>
					</th>`;

      for (let j = 0; j < subCategories.length; j++) {
        if (j == 0) {
          row += `
                    <td>${subCategories[j].name}</td>
                    <td class="text-center">${subCategories[j].count}</td>
                </tr>`;
        } else {
          row += `<tr>
                            <td>${subCategories[j].name}</td>
                            <td class="text-center">${subCategories[j].count}</td>
                        </tr>`;
        }
      }
    } else {
      break;
    }

    rowCollection += row;
  }

  return rowCollection;
}
