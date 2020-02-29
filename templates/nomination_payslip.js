const config = require('../config');
const baseURL = config('BASE_URL');

module.exports = (data) => {
    const paymentData = data.paymentData
    const today = new Date();
    const depositor = paymentData.depositor;
    const depositAmount = paymentData.depositAmount;
    const candidateCount = paymentData.candidateCount;
    const depositDateParts = paymentData.depositeDate.split("T");
    const depositDateOnly = depositDateParts[0];
    const depositTimeOnly = depositDateParts[1];
    const division = paymentData.division;
    const partyName = paymentData.partyName;
    const serialNo = paymentData.serialNo;

    let template = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="${baseURL}/css/bootstrap.min.css" >
            <style>
                input {
                    border: 0;
                    border-bottom: 1px solid black;
                    border-style: dotted;
                    background: none;
                    width: 62%;
                    text-align: center;
                    position: relative;
                    bottom: 5px;
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
                <div class="row">
                    <div class="col-4">
                        <span>මුල් පිටපත / மூல பிரதி / Original
                    </div>
                    <div class="col-4 text-center">
                        <br/>
                        <br/>
                        <span class="bold">ඇප මුදල් කුවිතාන්සිය</span> <br/>
                        <span class="bold">கட்டுப்பண பற்றுச்சீட்டு</span> <br/>
                        <span class="bold">DEPOSIT RECEIPT</span>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <div class="col-4">
                                අංකය<br/>
                                இல</br>
                                No.
                            </div>
                            <div class="col-8">
                                <input type="text" value='${serialNo}' style="width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div style="font-size: 10px">
                    <div class="row">
                        <div class="col-12">
                            <p>
                                <input type="text" value='${partyName}'> යන පිළිගත් දේශපාලන පක්ෂයේ අපේක්ෂකයන් වෙනුවෙන් <span class="field">................................................................................................................................................</span>  පදිංචි <span class="field">................................................................................................</span> යන අයගේ නායකත්වය ඇති ස්වාධීන කණ්ඩායමේ අපේක්ෂකයන් වෙනුවෙන් ,  පළාත් පාලන අය ආයතන ඡන්ද විමසීම් ආඥාපනතේ 29 වැනි වගන්තිය යටතේ තැන්පත් කරනු ලබන ඇප මුදල වශයෙන් රුපියල් <input type="text" value='${depositAmount}' style="width: 10%;"> ක් ඉහත නම සඳහන් පිළිගත් දේශපාලන පක්ෂයේ ලේකම් /බලයලත් නියෝජිත වන <input type="text" value='${depositor}'> ගෙන් / ඉහත නම් සඳහන් එම කණ්ඩායම් නායකයා / එම කණ්ඩායම් නායකයාගේ බලයලත් නියෝජිතයා වන <span class="field">................................................................................................................................................</span>  පදිංචි <input type="text" value='${depositor}'> ගෙන් භාර ගතිමි.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>
                            <input type="text" value='${partyName}'> என்ற அங்கீகரிக்கப்பட்ட அரசியற் கட்சியின் வேட்பாளர்கள் சார்பாக <span class="field">................................................................................................................................................</span> இல் வசிக்கும் <span class="field">................................................................................................</span> என்பவரின் தலைமைத்துவத்தின் கீழுள்ள சுயேச்சைக் குழுவின் வேட்பாளர்கள் சார்பாக, உள்ளூர் அதிகார சபைகள் தேர்தல்கள் கட்டளைச் சட்டத்தின் 29 ஆம் பிரிவின் கீழ் வைப்புச் செய்யப்பட வேண்டிய  கட்டுப்பணமாக <input type="text" value='${depositAmount}' style="width: 10%;"> ரூபாவை மேற்குறித்த அங்கீகரிக்கப்பட்ட அரசியற் கட்சியின் செயலாளர் அதிகாரமளிக்கப்பட்ட முகவராகிய <input type="text" value='${depositor}'> இடமிருந்து / மேற்குறித்த  சுயேச்சைக் குழுத் தலைவர் / அக்குழுத் தலைவரினால் அதிகாரமளிக்கப்பட்ட முகவராகிய <span class="field">................................................................................................................................................</span>  இல் வசிக்கும் <input type="text" value='${depositor}'> இடமிருந்து கையேற்றேன்.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>
                                Received from Mr. / Mrs. / Miss. <input type="text" value='${depositor}'> being the Secretary/ Authorized Agent of Recognized Political Party, <input type="text" value='${partyName}'> / from Mr. <span class="field">................................................................................................</span> of <span class="field">................................................................................................................................................</span> being the Group Leader/ Authorized Agent of the Group Leader, Mr. <input type="text" value='${depositor}'> of <span class="field">................................................................................................................................................</span> a sum of Rupees <input type="text" value='${depositAmount}' style="width: 10%;"> being deposit made under Section 29 of the Local Authorities Election Ordinance in respect of the candidates, whose Group Leader/ Recognized Political Party is named above.
                            </p>
                        </div>
                    </div>
                    </br>
                    </br>
                    </br>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            පළාත් පාලන ආයතනයේ නම</br>
                            உள்ளூரதிகார சபையின் பெயர்</br>
                            Name of Local Authority
                        </div>
                        <div class="col-9">
                            <input type="text" value='${division}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            අපේක්ෂකයන් සංඛ්‍යාව</br>
                            வேட்பாளர்களின் எண்ணிக்கை</br>
                            Number of Candidates
                        </div>
                        <div class="col-9">
                            <input type="text" value='${candidateCount}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            ඇප මුදල් තැන්පත් කළ දිනය</br>
                            கட்டுப்பணம் செலுத்திய திகதி</br>
                            Date of Deposit
                        </div>
                        <div class="col-9">
                            <input type="text" value='${depositDateOnly}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            ඇප මුදල් තැන්පත් කළ වේලාව</br>
                            கட்டுப்பணம் செலுத்திய நேரம்</br>
                            Time of Deposit
                        </div>
                        <div class="col-9">
                            <input type="text" value='${depositTimeOnly}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-3">
                            රුපියල්</br>
                            ரூபா</br>
                            Rs
                        </div>
                        <div class="col-9">
                            <input type="text" value='${depositAmount}'>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                        <div class="col-4 offset-8">
                            <p>
                                </br>
                                </br>
                                </br>
                                .........................................................................</br>
                                තේරීම්භාර නිලධාරී/ සහකාර තේරීම්භාර නිලධාරී</br>
                                தெரிவத்தாட்சி அலுவலர் / உதவி தெரிவத்தாட்சி அலுவலர்</br>
                                Returning Officer/ Assistant Returning Officer
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div class="row">
                                <div class="col-3">
                                    දිනය</br>
                                    திகதி</br>
                                    Date
                                </div>
                                <div class="col-9">
                                    ................................................................
                                </div>
                            </div>
                        </div>
                        <div class="col-4 offset-4">
                           <div class="row">
                               <div class="col-8">
                                    <input type="text" value='${division}' style="width: 100%;">
                               </div>
                               <div class="col-4">
                                    දිස්ත්‍රික්කය</br>
                                    மாவட்டம்</br>
                                    District
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </body>
    </html>`;
    return template;
}
