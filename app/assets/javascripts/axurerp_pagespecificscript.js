
var PageName = 'Admin -- Open Tickets';
var PageId = 'pf4c8ae90a0f34211a0a57eb168ac297e'
document.title = 'Admin -- Open Tickets';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURI(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return encodeURI('#OnLoadVariable=' + $OnLoadVariable + '&CSUM=1');
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u84NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u84NoteContainer').style.visibility = document.getElementById('pd0u84').style.visibility;

document.getElementById('pd0u84NoteContainer').insertAdjacentHTML("afterBegin", "<div id='pd0u113NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u113NoteContainer').style.visibility = document.getElementById('pd0u113').style.visibility;

document.getElementById('pd0u84NoteContainer').insertAdjacentHTML("afterBegin", "<div id='pd0u122NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u122NoteContainer').style.visibility = document.getElementById('pd0u122').style.visibility;

eval(GetDynamicPanelScript('u113', 1));

eval(GetDynamicPanelScript('u84', 1));

eval(GetDynamicPanelScript('u122', 1));

var u62 = document.getElementById('u62');

var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');

x = 0;
y = 0;
u180ann.insertAdjacentHTML("afterBegin", "<div id='u180Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u180', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u180'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u180based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u180base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u180based = document.getElementById('u180based');
            
u180based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> When the ticket details link is clicked then the details of the tickets is displayed...<BR><BR></div>");

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{

if (true) {

	SetPanelVisibilityu84("");

}

}
gv_vAlignTable['u180'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u112 = document.getElementById('u112');

x = 0;
y = 0;
u112ann.insertAdjacentHTML("afterBegin", "<div id='u112Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u112', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u112'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u112based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u112base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u112based = document.getElementById('u112based');
            
u112based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin just reply to the ticket..<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

	SetPanelVisibilityu122("");

	SetPanelVisibilityu113("hidden");

}

}
gv_vAlignTable['u112'] = 'top';
var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');

var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');

var u91 = document.getElementById('u91');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u23 = document.getElementById('u23');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u54 = document.getElementById('u54');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u21 = document.getElementById('u21');

x = 0;
y = 0;
u21ann.insertAdjacentHTML("afterBegin", "<div id='u21Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u21', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u21'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u21based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u21base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u21based = document.getElementById('u21based');
            
u21based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view the tickets status then he clicks the link and view the details of the tickets....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

var u113 = document.getElementById('u113');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u194 = document.getElementById('u194');

u194.style.cursor = 'pointer';
if (bIE) u194.attachEvent("onclick", Clicku194);
else u194.addEventListener("click", Clicku194, true);
function Clicku194(e)
{

if (true) {

	self.location.href="Admin -- Pending tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u194'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u197 = document.getElementById('u197');

u197.style.cursor = 'pointer';
if (bIE) u197.attachEvent("onclick", Clicku197);
else u197.addEventListener("click", Clicku197, true);
function Clicku197(e)
{

if (true) {

	self.location.href="Admin -- Denied Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');

var u9 = document.getElementById('u9');

x = 0;
y = 0;
u9ann.insertAdjacentHTML("afterBegin", "<div id='u9Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u9', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u9'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u9based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u9base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u9based = document.getElementById('u9based');
            
u9based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view the tickets status then he clicks the link and view the details of the tickets....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="Admin -- All Tickets.html" + GetQuerystring();

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');

x = 0;
y = 0;
u198ann.insertAdjacentHTML("afterBegin", "<div id='u198Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u198', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u198'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u198based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u198base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u198based = document.getElementById('u198based');
            
u198based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Suppose when the admin wants to create a ticket he enter the details of the ticket...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Approved<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u198.style.cursor = 'pointer';
if (bIE) u198.attachEvent("onclick", Clicku198);
else u198.addEventListener("click", Clicku198, true);
function Clicku198(e)
{

if (true) {

	self.location.href="Admin--Tickets--Submit Ticket.html" + GetQuerystring();

}

}
gv_vAlignTable['u198'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u152 = document.getElementById('u152');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');

var u13 = document.getElementById('u13');

x = 0;
y = 0;
u13ann.insertAdjacentHTML("afterBegin", "<div id='u13Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u13', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u13'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u13based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u13base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u13based = document.getElementById('u13based');
            
u13based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view the who are all the users and then by changing category he can view the details of particular department also..<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="Admin -- Staff.html" + GetQuerystring();

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');

var u199 = document.getElementById('u199');

var u42 = document.getElementById('u42');

x = 0;
y = 0;
u42ann.insertAdjacentHTML("afterBegin", "<div id='u42Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u42', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u42'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u42based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u42base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u42based = document.getElementById('u42based');
            
u42based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Department is the page where the basic details about tickets is shown to the admin...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="Admin -- Department.html" + GetQuerystring();

}

}

var u145 = document.getElementById('u145');

var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u25 = document.getElementById('u25');

x = 0;
y = 0;
u25ann.insertAdjacentHTML("afterBegin", "<div id='u25Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u25', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u25'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u25based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u25base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u25based = document.getElementById('u25based');
            
u25based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view or edit the details of the company and logo information then he can change it from here....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="Admin -- Preferences.html" + GetQuerystring();

}

}

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{

if (true) {

	self.location.href="Admin -- Completed Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');

x = 0;
y = 0;
u201ann.insertAdjacentHTML("afterBegin", "<div id='u201Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u201', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u201'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u201based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u201base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u201based = document.getElementById('u201based');
            
u201based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Open tickets are the newly created tickets by the members <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{

if (true) {

	self.location.href="Admin -- All Tickets.html" + GetQuerystring();

}

}
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u120 = document.getElementById('u120');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');

var u149 = document.getElementById('u149');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');

x = 0;
y = 0;
u154ann.insertAdjacentHTML("afterBegin", "<div id='u154Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u154', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u154'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u154based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u154base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u154based = document.getElementById('u154based');
            
u154based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> When the ticket details link is clicked then the details of the tickets is displayed...<BR><BR></div>");

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

	SetPanelVisibilityu84("");

}

}
gv_vAlignTable['u154'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

x = 0;
y = 0;
u17ann.insertAdjacentHTML("afterBegin", "<div id='u17Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u17', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u17'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u17based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u17base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u17based = document.getElementById('u17based');
            
u17based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin wants to view the tickets status then he clicks the link and view the details of the tickets....<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

	self.location.href="Admin -- knowledge base contents.html" + GetQuerystring();

}

}

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');

x = 0;
y = 0;
u48ann.insertAdjacentHTML("afterBegin", "<div id='u48Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u48', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u48'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u48based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u48base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u48based = document.getElementById('u48based');
            
u48based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{

if (true) {

	self.location.href="Admin -- Client Area Dashboard.html" + GetQuerystring();

}

}

var u121 = document.getElementById('u121');

var u210 = document.getElementById('u210');

var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');

var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');

var u51 = document.getElementById('u51');

var u143 = document.getElementById('u143');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u204 = document.getElementById('u204');

u204.style.cursor = 'pointer';
if (bIE) u204.attachEvent("onclick", Clicku204);
else u204.addEventListener("click", Clicku204, true);
function Clicku204(e)
{

if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');

var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');

x = 0;
y = 0;
u5ann.insertAdjacentHTML("afterBegin", "<div id='u5Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u5', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u5'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u5based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u5base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u5based = document.getElementById('u5based');
            
u5based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Dashboard is the page where the basic details about tickets is shown to the admin...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="Admin page.html" + GetQuerystring();

}

}

var u189 = document.getElementById('u189');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u133 = document.getElementById('u133');

var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');

x = 0;
y = 0;
u33ann.insertAdjacentHTML("afterBegin", "<div id='u33Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u33', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u33'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u33based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u33base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u33based = document.getElementById('u33based');
            
u33based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin can sign out from the support center any time by clicking this link...Then he can sign in to the application...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u33'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');

x = 0;
y = 0;
u111ann.insertAdjacentHTML("afterBegin", "<div id='u111Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u111', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u111'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u111based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u111base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u111based = document.getElementById('u111based');
            
u111based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Admin assign the ticket to the staffs...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	SetPanelVisibilityu113("");

	SetPanelVisibilityu122("hidden");

}

}
gv_vAlignTable['u111'] = 'top';
var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');

x = 0;
y = 0;
u192ann.insertAdjacentHTML("afterBegin", "<div id='u192Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u192', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u192'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u192based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u192base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u192based = document.getElementById('u192based');
            
u192based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> Open tickets are the newly created tickets by the members <BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{

if (true) {

	self.location.href="Admin -- Open Tickets.html" + GetQuerystring();

	window.location.reload();

}

}
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u175 = document.getElementById('u175');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u31 = document.getElementById('u31');

x = 0;
y = 0;
u31ann.insertAdjacentHTML("afterBegin", "<div id='u31Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u31', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u31'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u31based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u31base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u31based = document.getElementById('u31based');
            
u31based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> The admin can edit the basic information of his account...<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div>");

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	self.location.href="Admin -- My Account.html" + GetQuerystring();

}

}
gv_vAlignTable['u31'] = 'top';
var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
if (window.OnLoad) OnLoad();
