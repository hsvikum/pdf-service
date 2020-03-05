const config = require('../config');
const baseURL = config('BASE_URL');

module.exports = (data) => {
    const partyName = data.nominationData.partyName;
    let template = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="${baseURL}/css/bootstrap.min.css" >
    <style>
        @page {
            size: auto;
        }
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
            width: auto;
            min-width: 20%;
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
    <div style="font-size: 10px">
        <div class="row text-center">
            <div class="col-4">
                <span class="bold">පළමුවන උපලේඛනය</span> <br/>
                <span class="bold">“අ” ආකෘතිය</span> <br/>
                15 (1) වන වගන්තිය
            </div>
            <div class="col-4">
                <span class="bold">முதலாம் அட்டவணை</span><br/>
                <span class="bold">படிவம் 'அ'</span><br/>
                பிரிவூ 15 (1)
            </div>
            <div class="col-4">
                <span class="bold">First Schedule</span><br/>
                <span class="bold">Form A</span><br/>
                Section 15 (1)
            </div>
        </div>
        <br/>
        <br/>
        <div class="row text-center">
            <div class="col-12 bold">
                පාර්ලිමේන්තු මැතිවරණය
            </div>
            <div class="col-12">
                අංක ............ දරන ........................ මැතිවරණ කොට්ඨාසය සඳහා වූ නාමයෝජනා පත්‍රයයි.
            </div>
        </div>
        <br/>
        <div class="row text-center">
            <div class="col-12 bold">
                பாராளுமன்றத் தேர்தல்
            </div>
            <div class="col-12">
            ..............ஆம் இலக்க ........................தேர்தல் மாவட்டத்திற்கான பெயர் குறித்த நியமனப் பத்திரம்.
            </div>
        </div>
        <br/>
        <div class="row text-center">
            <div class="col-12 bold">
                PARLIAMENTARY ELECTIONS
            </div>
            <div class="col-12">
                NOMINATION PAPER for the Electorial District No. ................................................
            </div>
        </div>
        <br/>

        <div class="row">
            <div class="col-12">
                <p>
                    පිළිගත් දේශපාලන පක්ෂයක් වන <input type="text" value='${partyName}' /> පක්ෂය/* ................................................ මහතා/මහත්මිය/මෙනවිය ගේ නායකත්වයෙන් යුක්ත වූ ස්වාධීන අපේක්ෂකයන් කණ්ඩායම විසින් මෙහි පහත නම් සඳහන් තැනැත්තන්, ඉහත සඳහන් අංක........................ දරන ................................................ මැතිවැතිවරණ කොට්ඨාශයට මන්ත්‍රීවරයන් තෝරා පත්කර ගැනීමේ මැතිවරණය සඳහා අපේක්ෂකයන් වශයෙන්, මෙයින් නාම යෝජනා කරනු ලැබේ.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p>
                    அங்கீகரிக்கப்பட்ட அரசியல் கட்சியான <input type="text" value='${partyName}' /> கட்சிஇ திரு.ஃ திருமதிஃசெல்வி ................................................ அவரகளின் தலைமையிலான சுயேட்சை வேட்பாளர் குழுவினால் இங்கு கீழ் குறிப்பிடப்படும் பெயர் குறிப்பிடப்படும் நபர்கள் மேலே குறிப்பிடப்பட்ட ........................ஆம் இலக்க ................................................ தேர்தல் மாவட்டத்திற்கு பாராளுமன்ற உறுப்பினர்களைத் தெரிவூ செய்யூம் தேர்தலுக்காக வேட்பாளர்களாக இத்தால் பெயர் குறித்து நியமிக்கப்படுகின்றது.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p>
                    The <input type="text" value='${partyName}' /> being a recognized political party /* the independent group of candidates of which the group leader is Mr. / Mrs. / Miss ................................................ hereby nominates the following persons as candidates for election as Members for the above-mentioned Electoral District No.................................................
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table table-bordered">
                    <colgroup>
                        <col span="1" style="width: 25%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 1%;">
                        <col span="1" style="width: 25%;">
                        <col span="1" style="width: 15%;">
                        <col span="1" style="width: 23%;">
                     </colgroup>
                    <thead>
                        <tr>
                            <th width="10%" scope="col" rowspan="2">
                                අපේක්ෂකයාගේ නම<br/>
                                வேட்பாளரின் பெயர்<br/>
                                Name of Candidate
                            </th>
                            <th scope="col" rowspan="2" colspan="12">
                                ජාතික හැඳුනුම්පත් අංකය<br/>
                                தேசிய அடையாள அட்டை இல.<br/>
                                National Identity Card No.
                            </th>
                            <th scope="col" rowspan="1" colspan="2">
                                අපේක්ෂකයාගේ / வேட்பாளரின் / Candidate's
                            </th>
            
                            <th scope="col" rowspan="2">
                                තමාගේ කැමැත්ත දක්වන සහ තෝරා  පත්කර ගැනීම සඳහා කිසිම නුසුදුසුකමකට තමා යටත් නොවන බවට සහතික කරන එක් එක් අපේක්ෂකයාගේ අත්සන<br/>
                                சம்மதத்தினை தெரிவித்து, அத்துடன் தேர்ந்தெடுக்கப்படுவது தொடர்பாக ஏதேனும் தகுதியீனத்திற்கு ஆளாகவில்லை என்பதனை உறுதிப்படுத்தும் ஒவ்வொரு வேட்பாளரினதும் பெயர்<br/>
                                Signature of each candidate signifying consent and certifying that he/she is not subject to any disqualification for election
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                ලිපිනය / முகவரி / Address
                            </th>
                            <th scope="col">
                                රක්ෂාව / தொழில் / Occupation
                            </th>
                        </tr>
                    </thead>
                    <tbody>`;
    template += generateCandidateRows(data);
    template += `</tbody>
                </table>
            </div>
        </div>
        <table>
            <tr>
                <td>
                <div class="row px-lg-5">
                    <div class="col-6 text-left">
                        <div class="row">
                            <div class="col-12">
                                <br/>
                                <br/>
                                <br/>
                                <p>
                                    ඉහත නම් සඳහන් පිළිගත් දේශපාලන පක්ෂයේ ලේකම් /* කණ්ඩායමේ නායකයා වන ................................................ විසින් 20.........ක් වූ ........................ මස ........................ වන දින වූ මෙදින ........................ දී මා ඉදිරියේ දී අත්සන තබන ලදී.
                                </p>
                            </div>
                            <div class="col-12">
                                <p>
                                மேலேபெயர் குறிப்பிடப்பட்டுள்ள அங்கீகரிக்கப்பட்ட அரசியற் கட்சியின் செயலாளராகிய / குழுத் தலைவராகிய ................................................ அவர்களினால் 20......... மாதம் ........................ ஆம் நாளாகிய இன்று........................ என் முன்னிலையில் ஒப்பமிடப்பட்டது.
                                </p>
                            </div>
                            <div class="col-12">
                                <p>
                                    Signed by the above-mentioned ................................................ Secretary of recognized political party /* group leader in my presence at ................................................ on this day ........................, of ........................ 20.........
                                </p>
                            </div>
                            <div class="col-12">
                                <br/>
                                <br/>
                                <br/>
                                <p>
                                    .............................................................................<br/>
                                    සාමදාන විනිශ්චයකාරවරයා හෝ ප්‍රසිද්ධ නොතාරිස්<br/>
                                    சமாதான நீதவான் / பிரசித்த நொத்தாரிஸ்<br/>
                                    Justice of the Peace or Notary Public
                                </p>
                            </div>
                            <div class="col-12">
                                <p>
                                * අනවශ්‍ය දෑ කපා හරින්න /*தேவையற்ற சொற்களை நீக்கிவிடவும் /* Delete whichever is inapplicable
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-12 text-right">
                                <br/>
                                <br/>
                                <br/>
                                <p>
                                    .............................................................................<br/>
                                    පිළිගත් දේශපාලන පක්ෂයේ ලේකම්ගේ /* කණ්ඩායමේ නායකයාගේ අත්සන<br/>
                                    அரசியற் கட்சிச் செயலாளரின் /* குழுத் தலைவரின் ஒப்பம்<br/>
                                    Signature of Secretary of recognized political party /* group leader
                                </p>
                            </div>
            
                            <div class="col-12 text-right">
                                <p>
                                    නම / பெயர் / Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ................................................................<br/>
                                    : ................................................................
                                </p>
                            </div>
                            <div class="col-12 text-right">
                                <p>
                                    ලිපිනය / முகவரி / Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ................................................................<br/>
                                    : ................................................................
                                </p>
                            </div>
                        </div>
            
                        
                    </div>
                </div>
                </td>
            </tr>
        </table>
    </div>
    <hr style="page-break-after: always; visibility: hidden;"/>
    `;
    template += generateCandidateAffirmationForm(data);
    template += `</body></html>`
    return template;
};


function generateCandidateAffirmationForm(data) {
    let forms = '';
    data.nominationData.candidateData.forEach(candidate => {
        let candidateName = candidate.PREFERRED_NAME;
        forms += `
        <div style="font-size: 9px">
        <table>
            <tr>
                <td>
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
                                <input type="text" value='${candidateName}' /> ஆகிய நான்இ இலங்கை சனநாயக சோசலிசக் குடியரசின் அரசியலமைப்பை உறுதியாகப் போற்றிக் காப்பேன் என்றும்இ இலங்கையின் ஆட்புலத்துக்குள்ளாகத் தனி அரசொன்று தாபிக்கப்படுவதற்கு நேரடியாகவோ மறைமுகமாகவோ இலங்கையிலோ அல்லது இலங்கைக்கு வெளியிலோ ஆதரவளிக்கவோஇ ஆக்கமளிக்கவோஇ ஊக்குவிப்பு அளிக்கவோஇ நிதி உதவவோஇ ஊக்குவிக்கவோஇ பரிந்துரைக்கவோ மாட்டேன் என்றும் பயபக்தியூடன் வெளிப்படுத்தி உறுதி செய்கின்றேன்இ சத்தியஞ் செய்கின்றேன்.
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
                                ................................................<br/>
                                අත්සන / ஒப்பம் / Signature
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <p>
                                20 ........................ මස ........................ වන දින මා ඉදිරිපිට දී<br/>
                                <br/>
                                <br/>
                                <br/>
                                අත්සන: ................................................<br/>
                                නම හා පදවි නාමය: ..............................................................<br/>
                            </p>
                        </div>
                        <div class="col-4">
                            <p>
                            20............................. மாதம்.............. ஆம் திகதிஇ என் முன்னிலையில்<br/>
                            <br/>
                            <br/>
                            <br/>
                            ஒப்பம்: .....................................................<br/>
                            பெயர் மற்றும் பதவிப் பெயர்: ..............................................................<br/>
                            </p>
                        </div>
                        <div class="col-4">
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
            </td>
        </tr>
    </table>
    </div>
    <hr/>
        `;
    });
    return forms;
}

function generateCandidateRows(data) {
    let rowCollection = '';

    for (let i = 0; i < 24; i++) {
        if (data.nominationData.candidateData[i]) {
            let candidate = data.nominationData.candidateData[i];
            let nic = candidate.NIC.split("");
            row = `<tr>
                       <td>${(i + 1)}. ${candidate.FULL_NAME}</td>
            `;
            for(var j = 0; j < 12; j++) {
                let digit = nic[j];
                if (digit) {
                    row += `<td>${digit}</td>`;
                } else {
                    row += `<td></td>`;
                }
            }
            row += `
                <td>${candidate.ADDRESS}</td><td>${candidate.OCCUPATION}</td><td></td>
            </tr>`;
        } else {
            break;
        }

        rowCollection += row;
    }
    return rowCollection;
}