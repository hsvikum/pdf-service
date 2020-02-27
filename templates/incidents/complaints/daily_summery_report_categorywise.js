const config = require('../config');
const baseURL = config('BASE_URL');

module.exports = () => {
    return (
        `<!DOCTYPE html>
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
                font-size: smaller;
                margin-left: 30px;
                margin-right: 30px;
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
              .grey {
                background-color: #F0F0F0;
              }
            </style>
          </head>
          <body class="document-border">
            <table>
              <tr>
                <th colspan="3">
                  <div class="bold">මහමැතිවරණය - 2020</div>
                  <div class="bold">நாடாளுமன்றத் தேர்தல் - 2020</div>
                  <div class="bold">Parliamentary Election - 2020</div>
                </th>
              </tr>
              <tr class="grey" style="height: 70px;">
                <th colspan="3">
                  <div>
                    මැතිවරණ පැමිණිලි 24 පැය සාරාංශ වාර්තාව (මැතිවරණ පැමිණිලි කළමනාකරණ මධ්‍යස්ථානය)
                  </div>
                  <div>
                    தேர்தல் புகார்கள் 24 மணிநேர சுருக்கம் (தேர்தல் புகார்கள் மேலாண்மை மையம்)
                  </div>
                  <div>
                    Election Complaints 24 hour summery (Election Complaints Management
                    Centre)
                  </div>
                </th>
              </tr>
              <tr>
                <th colspan="3">
                  <span>දිනය/தேதி/Date</span>
                  <span>2020/ </span>
                </th>
              </tr>
              <tr class="grey">
                <th colspan="3">
                  <span>පැමිණිලි වර්ගීකරණය / புகார் வகைப்பாடு / Complaint classification</span>
                </th>
              </tr>
              <tr class="grey">
                <th>
                  <div>පැමිණිලි වර්ගය</div>
                  <div>புகார்கள் வகை</div>
                  <div>Complaints Category</div>
                </th>
                <th>
                  <div>පැමිණිලි අනු වර්ගය</div>
                  <div>புகார்கள் துணை வகை</div>
                  <div>Complaints Sub-Category</div>
                </th>
                <th>
                  <div>සංඛ්‍යාව</div>
                  <div>எண்ணிக்கைகள்</div>
                  <div>Counts</div>
                </th>
              </tr>
              <tr>
                <th rowspan="11">
                  <div>ප්‍රචණ්ඩ ක්‍රියා</div>
                  <div>வன்முறை</div>
                </th>
                <td>වාචික බිය ගැන්වීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>ආයුධ පෙන්වා බිය ගැන්වීම වෙඩි තබා මැරීමට තැත් කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>පහර දීම / මැර ප්‍රහාර එල්ල කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>බරපතල තුවාල සිදු කිරීම / මනුෂ්‍ය ඝාතනයට තැත්කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>මනුෂ්‍ය ඝාතන</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>පුද්ගල පැහැරගෙන යාම්</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>වෙඩි තැබීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>ගිනි තැබීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>කෝලහාල කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>දේපළවලට හානි කිරීම / දේපළ පැහැර ගෙන යාම </td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>මැතිවරණ ප්‍රචාරක කාර්යාලවලට / පෝස්ටර් / බැනර් ආදියට හානි කිරීම</td>
                <td class="text-center">0</td>
              </tr>
        
              <tr>
                <th rowspan="15">
                  <div>නීති උල්ලංඝන</div>
                  <div>சட்ட மீறல்</div>
                </th>
                <td>චංචල හා නිශ්චල පොදු දේපළ හා ගොඩනැගිලි අයථා පරිහරණය</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>රාජ්‍ය නිලධාරීන් දේශපාලන කටයුතු වල යෙදීම / යෙදවීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>නිලධාරීන් පත් කිරීම / උසස් කිරීම / මාරු කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>මාධ්‍ය අවභාවිතය</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>අසත්‍ය ප්‍රචාර / ව්‍යාජ පුවත් මැවීම / වෛරී ප්‍රකාශ</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>මැතිවරණ ප්‍රචාරණ කටයුතු වලට බාධා කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>නීති විරෝධී පෝස්ටර් / බැනර් / කටවුට් ප්‍රදර්ශනය කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>ද්‍රව්‍ය බෙදාහැරීම / පරිත්‍යාග කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>රැස්වීම් / පෙළපාලි පැවැත්වීම / නීති විරෝධී දේශපාලන කාර්යාල පවත්වාගෙන යාම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>ආගමික නායකයන් හරහා ප්‍රචාරණ කටයුතු කිරීම / ප්‍රචාරණ කටයුතු සඳහා ආගමික ස්ථාන හා උත්සව යොදා ගැනීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>තැපැල් ඡන්දවලට අදාළ පැමිණිලි</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>ඡන්ද පොළ / මැතිවරණ කාර්යමණ්ඩලය / මැතිවරණ ද්‍රව්‍ය හා උපකරණ පිළිබඳ පැමිණිළි</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>ඡන්ද ප්‍රකාශ කිරීමට බාධා කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>නීති විරෝධී උත්සව සංවිධානය</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td>ඡන්ද දායකයින්ට සංග්‍රහ කිරීම</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <th>
                  <div>වෙනත්</div>
                  <div>மற்ற</div>
                </th>
                <td></td>
                <td class="text-center">0</td>
              </tr>
              <tfoot>
                <tr class="grey text-center">
                    <td></td>
                    <td>
                      <span>එකතුව / மொத்தம் / Total </span>
                    </td>
                    <td class="text-center">0</td>
                  </tr>
              </tfoot>
            </table>
          </body>
        </html>`
    )
};
