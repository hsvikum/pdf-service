module.exports = ({ candidateName,occupation,address,partyName }) => {
    const today = new Date();
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/e9b46f8997.js"></script>
    <style>

        .top {
            border-top: 1px solid #000 !important;
        }

        .top-thick {
            border-top: 4px solid #000 !important;
        }

        .bottom {
            border-bottom: 1px solid #000 !important;
        }

        .bottom-thick {
            border-bottom: 4px solid #000 !important;
        }

        .left {
            border-left: 1px solid #000 !important;
        }

        .right {
            border-right: 1px solid #000 !important;
        }

        .all {
            border-top: 1px solid #000 !important;
            border-bottom: 1px solid #000 !important;
            border-left: 1px solid #000 !important;
            border-right: 1px solid #000 !important;
        }

        .no-padding-top {
            padding-top: 0 !important;
        }

        .no-padding-bottom {
            padding-bottom: 0 !important;
        }

        .no-padding-left {
            padding-left: 0 !important;
        }

        .no-padding-right {
            padding-right: 0 !important;
        }

        .no-padding {
            padding: 0 !important;
        }

        .font1 {
            font-family: serif;
        }

        .bold {
            font-weight: bold;
        }

        .dotted-line {
            border-bottom: 1px dotted #000;
        }

        .group {
            display: table;
        }

        .group div {
            display: table-cell;
            vertical-align: middle;
        }

        .bracket {
            font-family: 'Raleway', sans-serif;
        }

        .counting-hall {
            float: right;
            width: 50%;
        }

        .counting-hall div {
            display: inline-block;
            padding: 5px;
            vertical-align: middle;
        }

        .counting-hall div h3 {
            margin: 0;
        }

        .fa-caret-right, .fa-caret-left {
            font-size: 25px;
        }

        input{
            border: 0;
            border-bottom: 1px solid black;
            border-style: dotted;
            background: none;
            margin-top: 25px;
        }
    </style>
</head>

<body>

<div style="padding: 20px;padding-left: 50px; text-align:center;max-width:520px">

    <p style="font-size:11px; text-align: center;">
        “අ” ආකෘතිය - 12(2) වන වගන්තිය<br/>
        <b>
        1981 අංක 15 දරන ජනාධිපතිවරයා තෝරා පත්කර ගැනීම පිළිබඳ පනත<br/>
        නාමයෝජනා පත්‍රයේ ආකෘතිය
        </b>
    </p>

    <div style="margin: 0 auto; text-align: justify;font-size:10px;">
          <lable>පිළිගත් දේශපාලන පක්ෂයක් වන *</lable> <input type="text" value='${partyName}' style="width:62%;margin-top:5px;text-align:center"> <br/>
          <span style="padding-left:160px;"> (පිළිගත් දේශපාලන පක්ෂයේ නම ඇතුළත් කරන්න)</span><br/>
          

          <lable>පිළිගත් දේශපාලන පක්ෂයක් නොවන * </lable><input type="text" value='' style="width:66%;margin-top:5px;text-align:center"> <lable>/</lable> <br/>
          <lable> තත් කාලයෙහි බලපවත්නා ඡන්ද හිමි නාමලේඛනයක තමාගේ නම ඇතුළත් කරනු ලැබ තිබෙන, ඡන්ද </lable><br/>
          <lable>හිමි‍යකු වන *</lable> <input type="text" value='' style="width:74%;margin-top:5px;text-align:center"> <lable>විසින් ජනාධිපති </lable><br/>
          <lable>ධූරයට තෝරා පත්කර ගැනීම සඳහා අපේක්ෂකයකු වශයෙන්, පහත විස්තර දක්වා ඇති තැනැත්තාගේ නම </lable><br/>
          <lable>මෙයින් යෝජනා කරනු ලැබේ. </lable>



          <div style="text-align: left;margin-top:5px;margin-bottom:5px">
            අපේක්ෂකයාගේ සම්පූර්ණ නම :- <input type="text" value='${candidateName}' style="width:72%;margin-top:5px;text-align:center"><br/>
                    උපන් දිනය&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:- 
                    <input type="text" value='' style="width:35%;margin-top:5px;text-align:center"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;වයස  :- <input type="text" value='' style="width:26%;margin-top:5px;text-align:center"><br/>
                    රක්ෂාව&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:- 
                    <input type="text" value='${occupation}' style="width:72%;margin-top:5px;text-align:center"><br/>
                    <lable>ලිපිනය&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:-</lable>
                    <div style="width:72%;margin-top:5px;text-align:center;border-bottom: 1px dotted black;display: inline-block;">${address}</div><br/>
          </div>

          <p style="margin-bottom:0px">
            පිළිගත් දේශපාලන පක්ෂයක් නොවන දේශපාලන පක්ෂයක් විසින් හෝ ඡන්ද හිමියකු විසින් අපේක්ෂකයාගේ නම යෝජනා කරනු ලැබ ඇති අවස්ථාවක, අපේක්ෂකයා ව්‍යවස්ථාදායක මණ්ඩලයේ තෝරා පත්කර ගනු ලැබූ මන්ත්‍රීවරයකු වන්නේ ද, නැතහොත් එසේ වී සිටියේ ද යන වග ප්‍රකාශ කරන්න. <br/><small>(විස්තර සඳහන් කරන්න) </small>:
          </p>

          <p>
            ………………………………………………………………………………………………………………………<br/>
            ………………………………………………………………………………………………………………………<br/>
            ………………………………………………………………………………………………………………………<br/>
          </p>

          <p>ඡන්ද හිමියකු විසින් අපේක්ෂකයාගේ නම යෝජනා කරනු ලබන අවස්ථාවක, ඒ ඡන්ද හිමියා පිළිබඳ පහත සඳහන් විස්තර සපයන්න :-</p>

          <div>
            <table style="margin-bottom:1px" class="table table-borderless">
              <tbody>
                <tr>
                  <td style="vertical-align: top;padding:1px;" class="no-padding-left no-padding-right">(අ)</td>
                  <td style="vertical-align:top;padding:1px;" class="no-padding-left">
                    ඡන්ද හිමියා ලියාපදිංචි කරනු ලැබ ඇති   <br/>
	මැතිවරණ කොට්ඨාසයේ නම සහ අංකය

                  </td>
                  <td style="vertical-align:top;padding:1px; font-size: 38px; font-weight: normal; padding: 0;line-height: 35px;" class="bracket">}</td>
                  <td style="vertical-align:bottom;padding:1px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: .....................................................................................</td>
                </tr>

                <tr>
                  <td style="vertical-align: top;padding:1px;" class="no-padding-left no-padding-right">(ආ)</td>
                  <td style="vertical-align:top;padding:1px;" colspan="2" class="no-padding-left">
                    ඡන්ද ප්‍රදේශය</td>
                  <td style="vertical-align:top;padding:1px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: .....................................................................................</td>
                </tr>

                <tr>
                  <td style="vertical-align: top;padding:1px;" class="no-padding-left no-padding-right">(ඇ)</td>
                  <td style="vertical-align:top;padding:1px;" colspan="2" class="no-padding-left">
                    ඡන්ද කොට්ඨාසය</td>
                  <td style="vertical-align:top;padding:1px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: .....................................................................................</td>
                </tr>
              </tbody>
            </table>
            <p>(ඈ)<span>පවත්නා ඡන්ද හිමි නාමලේඛනයෙහි ලියාපදිංචි අංකය  : .....................................................................................</span></p>
          </div>

          <table class="table table-borderless">
            <tbody>
              <tr>
                <td style="padding:0px;">............................................................................</td>
                <td style="text-align:right;padding:0px;">...........................................................................</td>
              </tr>

              <tr>
                <td style="padding:0px;"><span style="float: left; text-align: center;">පිළිගත් දේශපාලන පක්ෂයේ */<br/>
         අන්‍ය දේශපාලන පක්ෂයේ */<br/>
   ලේකම්වරයාගේ/ ඡන්ද හිමියාගේ නම</span>
                </td>
                <td style="padding:0px;"><span style="float: right; text-align: center;">පිළිගත් දේශපාලන  පක්ෂයේ */<br/>
                  අන්‍ය දේශපාලන පක්ෂයේ */<br/>ලේකම්වරයාගේ/ ඡන්ද හිමියාගේ අත්සන</span></td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top:-10px" class="group">
              <div style="vertical-align:top;">
                  ලිපිනය
              </div>
              <div style="vertical-align:top;">:</div>
              <div>
                ...................................................................<br/>
                           ...................................................................<br/>
                        ...................................................................
              </div>
          </div>
          <br/>
          <p style="margin-bottom:0px">පිළිගත් දේශපාලන පක්ෂයේ */ අන්‍ය දේශපාලන පක්ෂයේ */ ඉහත නම සඳහන් ලේකම්වරයා/ ඡන්ද හිමියා විසින් මා ඉදිරිපිට දී 2014 ..............................  මස ........................... වන දින .............................දී අත්සන් කරන ලදි.
</p>

          <br/>

          <div>
              <p style="text-align:center; float: right;">........................................................................</br>
                     සාමදාන විනිශ්චයකාර හෝ ප්‍රසිද්ධ නොතාරිස්</p>
          </div>

          <br/>

          <p class="bold" style="text-align:center;margin-left:20px;margin-bottom:0px"><i>අපේක්ෂකයා විසින් කරනු ලබන ප්‍රකාශය</i></p>

          <p>.......................................................................................................................................................................................................................................
............................................................................................................................................... වන මම, ඉහත සඳහන් නාමයෝජනාවට මෙයින් අනුමැතිය දෙන අතර මා සම්බන්ධයෙන් ඉහත දක්වා ඇති විස්තර සත්‍ය බවත්, ජනාධිපති ධූරයට තෝරා පත්කර ගනු ලැබීම සඳහා ආණ්ඩුක්‍රම ව්‍යවස්ථාව ප්‍රකාර මා කිසිම ආකාරයක නුසුදුසුකමකට භාජනය වී නොසිටින බවත් ප්‍රකාශ කරමි.
</p>

            <div>
                <p style="text-align:center; float: right;">……………………………………………………………</br>
                      අපේක්ෂකයාගේ අත්සන</p>
            </div>

            <br/>
            <br/>

            <p>දිනය : ………………………</p>

            <p><small>*   අදාළ නොවන වචන කපා හරින්න.</small></p>

          </div>
    </div>

</div>


</body>

</html>

    `;
};