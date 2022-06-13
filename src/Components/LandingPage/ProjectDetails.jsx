import DropDown from "../InputComponents/Dropdown";
import JsonData from "../Json Folder/sampledata.json";
import PaginationList from "./pagination";
import BorderLinearProgress from "./Progressbar";
import "./ProjectDetails.scss";
const ProjectDetails = () => {
    console.log(JSON.stringify(JsonData))
    return (
        <div className="project-details-main-hdr">
            <div className="project-details-section1">
                <div className="my-projects-title">My Projects<span className="active-text">Active</span></div>

                <div className="project-details-btn-section">
                    <div><DropDown /></div>
                    <div className="newproject-btn">New Project</div>
                </div>
            </div>
            <div className="project-details-section2">
                {JsonData.map((data, i) =>
                    <div className="project-detail-card-section">
                        <div className="project-details-card-header">
                            <div className="project-detail-img-section"><img src={data.logo} className="project-detail-img" /></div>
                            <div className="In-progress-btn-div">
                                {data.status === "In-Progress" ?
                                    <div className="In-progress-btn">{data.status}</div>
                                    : data.status === "Pending" ?
                                        <div className="Pending-btn">{data.status}</div>
                                        : data.status === "Completed" ?
                                            <div className="Completed-btn">{data.status}</div>
                                            :
                                            <div className="OverDue-btn">{data.status}</div>

                                }
                            </div>
                        </div>
                        <div className="Project-details-title">{data.title}</div>
                        <div className="Project-details-subtitle">{data.description}</div>
                        <div className="Project-details-data">
                            <div className="project-details-stack">
                                <div><span className="project-details-stack-amount">{data.dueDate}</span></div>
                                <div className="project-details-stack-title">Due Date</div>
                            </div>
                            <div className="project-details-stack">
                                <div><span className="project-details-stack-amount">${data.budget}</span></div>
                                <div className="project-details-stack-title">Budget</div>
                            </div>


                        </div>
                        <div className="project-details-Progress-bar">
                            <BorderLinearProgress value={data.progress} />
                        </div>

                        <div class="symbol-group symbol-hover">
                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Emma Smith">
                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo22/assets/media/avatars/300-6.jpg" />
                            </div>

                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Rudy Stone">
                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo22/assets/media/avatars/300-1.jpg" />
                            </div>

                            <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Susan Redwood">
                                <span class="symbol-label bg-primary text-inverse-primary fw-bolder">S</span>
                            </div>

                        </div>

                    </div>
                )}
            </div>
            <div className="pagination-section">
                <div className="pagination-info">Showing 1 to 10 of {12} entries</div>
                <div><PaginationList total={2} /></div>
            </div>
        </div>
    )
}

export default ProjectDetails