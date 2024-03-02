const ProjectInput = document.getElementById('project');
const CollaboratorText = document.getElementById('collaborator-text');
const CollaboratorInput = document.getElementById('collaborator');
const ProjectIdLabel = document.getElementById('projectid-label');
const ProjectIdInput = document.getElementById('projectid');

ProjectIdInput.readOnly  = true;

const Values = window.location.search;
const urlParams = new URLSearchParams(Values);
var invitation = urlParams.get('Invitation');
var project_data = urlParams.get('ProjectData');
var project_name = urlParams.get('ProjectName');

if (invitation == 'true' ) {
	CollaboratorInput.checked = true;
  ProjectIdInput.value = project_data;
  ProjectInput.value = project_name;
  ProjectInput.readOnly  = true;
  CollaboratorText.style.display = "block";
  ProjectIdLabel.style.display = "block"
  ProjectIdInput.style.display = "block";
}
