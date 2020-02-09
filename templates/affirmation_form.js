const config = require('../config');
const baseURL = config('BASE_URL');

module.exports = (data) => {
    let template = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="${baseURL}/css/bootstrap.min.css" >
        <style>
            td, th {
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
                text-align: center
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
        </style>
    </head>
    
    <body class="document-border">
    `;
    template += generateCandidateAffirmationForm(data);
    template += `
    </body>
    
    </html>
        `;
    return template;
};

function generateCandidateAffirmationForm(data) {
    let forms = '';
    data.nominationData.candidateData.forEach(candidate => {
        let candidateName = candidate.fullName;
        forms += `
        <div class="container">
        <div class="row text-center">
            <div class="col-12">
                <span class="bold">ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජයේ ආණ්ඩුක්‍රම ව්‍යවස්ථාවේ හත්වන උපලේඛනයේ දැක්වෙන ප්‍රතිඥාව / දිවුරුම්දීම </span><br/>
                <span class="bold">Affirmation / Oath in form set out in the Seventh Schedule to the Constitution of the Democratic Socialist Republic of Sri Lanka</span>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-12">
                <p>
                <input type="text" value='${candidateName}' /> වන මම, ශ්‍රී ලංකා ප්‍රජාතන්ත්‍රික සමාජවාදී ජනරජයේ ආණ්ඩුක්‍රම ව්‍යවස්ථාව ආරක්ෂා කොට අනුගමනය කරන බවට ද, ශ්‍රී ලංකාවේ දේශීය තුළ වෙනම රජයක් පිහිටුවීමට, කෙලින්ම හෝ අන්‍යාකාරයකින්, ශ්‍රී ලංකාව තුළ දී හෝ ඉන් පිටත දී හෝ ආධාරදීම, අනුබලදීම, අනුග්‍රහය දැක්වීම, මුදල් යෙදවීම, ධෛර්යයදීම හෝ දේශනා කිරීම නොකරන බවට ද ගෞරව බහුමානයෙන් යුක්තව ප්‍රකාශ කොට ප්‍රතිඥා දෙමි ./ දිවුරුම් දෙමි.
                </p>
                <p>
                    I, <input type="text" value='${candidateName}' /> swear / do solemnly declare and affirm that I will uphold and defend the Constitution of the Democratic Socialist Republic of Sri Lanka and that I will not, directly or indirectly, in or outside Sri Lanka, support, espouse, promote, finance, encourage or advocate the establishment of a separate State within the territory of Sri Lanka.
                </p>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12">
                <p>
                    <br/>
                    <br/>
                    <br/>
                    ................................................<br/>
                    අත්සන / Signature
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <p>
                    20 ........................ මස ........................ වන දින මා ඉදිරිපිට දී<br/>
                    <br/>
                    <br/>
                    <br/>
                    අත්සන: ................................................<br/>
                    නම හා පදවි නාමය: ..............................................................<br/>
                </p>
            </div>

            <div class="col-3 offset-6">
                <p>
                    Before me at on this ........................ day of ........................ 20.................<br/>
                    <br/>
                    <br/>
                    <br/>
                    Signature: .........................................<br/>
                    Name and Designation: ...........................................................<br/>
                </p>
            </div>
        </div>
    </div>
    <hr style="page-break-after: always; visibility: hidden;"/>
        `;
    });
    return forms;
}