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
    <div class="container">
        <div class="row text-center">
            <div class="col-6">
                <span class="bold">පළමුවන උපලේඛනය</span> <br/>
                <span class="bold">“අ” ආකෘතිය</span> <br/>
                15 (1) වන වගන්තිය
            </div>
            <div class="col-6">
                <span class="bold">First Schedule</span><br/>
                <span class="bold">Form A</span><br/>
                Section 15 (1)
            </div>
        </div>
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
                PARLIAMENTARY ELECTIONS
            </div>
            <div class="col-12">
                NOMINATION PAPER for the Electorial District No. ................................................
            </div>
        </div>
        <br/>

        <div class="row text-center">
            <p>
                පිළිගත් දේශපාලන පක්ෂයක් වන <input type="text" value='${partyName}' /> පක්ෂය/* ................................................ මහතා/මහත්මිය/මෙනවිය ගේ නායකත්වයෙන් යුක්ත වූ ස්වාධීන අපේක්ෂකයන් කණ්ඩායම විසින් මෙහි පහත නම් සඳහන් තැනැත්තන්, ඉහත සඳහන් අංක........................ දරන................................................ මැතිවැතිවරණ කොට්ඨාශයට මන්ත්‍රීවරයන් තෝරා පත්කර ගැනීමේ මැතිවරණය සඳහා අපේක්ෂකයන් වශයෙන්, මෙයින් නාම යෝජනා කරනු ලැබේ.
            </p>
        </div>
        <div class="row text-center">
            <p>
                The <input type="text" value='${partyName}' /> being a recognized political party /* the independent group of candidates of which the group leader is Mr. / Mrs. / Miss ................................................ hereby nominates the following persons as candidates for election as Members for the above-mentioned Electoral District No. ................................................
            </p>
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
                        <col span="1" style="width: 25%;">
                        <col span="1" style="width: 15%;">
                        <col span="1" style="width: 25%;">
                     </colgroup>
                    <thead>
                        <tr>
                            <th width="10%" scope="col" rowspan="2">
                                අපේක්ෂකයාගේ නම<br/>
                                Name of Candidate
                            </th>
                            <th scope="col" rowspan="2" colspan="10">
                                ජාතික හැඳුනුම්පත් අංකය<br/>
                                National Identity Card No.
                            </th>
                            <th scope="col" rowspan="1" colspan="2">
                                අපේක්ෂකයාගේ / Candidate's
                            </th>
            
                            <th scope="col" rowspan="2">
                                තමාගේ කැමැත්ත දක්වන සහ තෝරා  පත්කර ගැනීම සඳහා කිසිම නුසුදුසුකමකට තමා යටත් නොවන බවට සහතික කරන එක් එක් අපේක්ෂකයාගේ අත්සන<br/>
                                Signature of each candidate signifying consent and certifying that he/she is not subject to any disqualification for election
                            </th>
                        </tr>
                        <tr>
                            <th scope="col">
                                ලිපිනය / Address
                            </th>
                            <th scope="col">
                                රක්ෂාව / Occupation
                            </th>
                        </tr>
                    </thead>
                    <tbody>`;
    template += generateCandidateRows(data);
    template += `</tbody>
                </table>
            </div>
        </div>
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
                            Justice of the Peace or Notary Public
                        </p>
                    </div>
                    <div class="col-12">
                        <p>
                        * අනවශ්‍ය දෑ කපා හරින්න /* Delete whichever is inapplicable
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
                            Signature of Secretary of recognized political party /* group leader
                        </p>
                    </div>
    
                    <div class="col-12 text-right">
                        <p>
                            නම / Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ................................................................<br/>
                            : ................................................................
                        </p>
                    </div>
                    <div class="col-12 text-right">
                        <p>
                            ලිපිනය / Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ................................................................<br/>
                            : ................................................................
                        </p>
                    </div>
                </div>
    
                
            </div>
        </div>
    </div>

</body>

</html>
    `
    return template;
};

function generateCandidateRows(data) {
    let rowCollection = '';

    for (let i = 0; i < 24; i++) {
        if (data.nominationData.candidateData[i]) {
            let candidate = data.nominationData.candidateData[i];
            let nic = candidate.nic.split("");
            row = `<tr>
                      <td>${(i + 1)}. ${candidate.fullName}</td><td>${nic[0]}</td><td>${nic[1]}</td><td>${nic[2]}</td><td>${nic[3]}</td><td>${nic[4]}</td><td>${nic[5]}</td><td>${nic[6]}</td><td>${nic[7]}</td><td>${nic[8]}</td><td>${nic[9]}</td><td>${candidate.address}</td><td>${candidate.occupation}</td><td></td>
                   </tr>`;
        } else {
            row = `<tr>
                      <td>${(i + 1)}.</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                   </tr>`;
        }

        rowCollection += row;
    }
    return rowCollection;
}