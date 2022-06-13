import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Breadcrumbs } from '@mui/material';
import Typography from '@mui/material/Typography';
import verifiedlogo from "../../Images/verfied-icon.svg";
import BorderLinearProgress from "./Progressbar";
import "./ProjectsList.scss";
import Tabs from "./Tabs";
const breadcrumbs = [
    <Typography key="1" color="text.primary">

        <div className="breadcrumb-text">Home</div>
    </Typography>,
    <Typography key="2" color="text.primary">

        <div className="breadcrumb-text">Crafted</div>


    </Typography>,
    <Typography key="3" color="text.primary">

        <div className="breadcrumb-text">Pages</div>

    </Typography>,
    <Typography key="4" color="text.primary">

        <div className="breadcrumb-text">Profile</div>

    </Typography>,
    <Typography key="5" color="text.primary">

        <div className="breadcrumb-text">Projects</div>

    </Typography>,
];

const ProjectList = () => {
    return (
        <div className="main-section">
            <div className="Projects-section">
                <div>
                    <div className="project-title">Projects</div>
                    <div className="project-bread">
                        <Breadcrumbs separator={<div className="dot"></div>} aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>

                </div>
                <div className="btn-section">
                    <div className="filter-btn"><FilterAltIcon className="filter-icon" />Filter</div>
                    <div className="create-btn">Create</div>
                </div>
            </div>
            <div className="profile-card-section">
                <div className="profile-card-div">
                    <div className="left-section">
                        <div className="">
                            <img className="profile-image" src="https://preview.keenthemes.com/metronic8/demo22/assets/media/avatars/300-1.jpg" />

                        </div>
                        <div className="left-split">
                            <div className="left-split-section1">
                                <div className="left-content">

                                    <div className="user-info">
                                        <div className="user-name">
                                            <div>Max Smith </div>
                                            <img src={verifiedlogo} className="verfied-icon" />
                                        </div>
                                        <div className="user-designation">
                                            <div className="des-data">
                                                <AccountCircleIcon className="user-icon" />
                                                <span className="des-name">Developer</span>
                                            </div>
                                            <div className="des-data">
                                                <LocationOnIcon className="user-icon" />
                                                <span className="des-name">Chennai</span>
                                            </div>
                                            <div className="des-data">
                                                <MailIcon className="user-icon" />
                                                <span className="des-name">abc@yahoo.in</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="right-data">

                                    <div className="follow-me-btn">Follow</div>
                                    <div className="create-btn">Hire me</div>
                                    <div className="more-btn"><MoreHorizIcon className="more-icon" /></div>


                                </div>
                            </div>
                            <div className="left-split-section2">
                                <div className="left-content2">
                                    <div className="stack">
                                        <div><ArrowUpwardIcon className="arrow-icon" /><span className="stack-amount">$4,500</span></div>
                                        <div className="stack-title">Earnings</div>
                                    </div>
                                    <div className="stack">
                                        <div><ArrowDownwardIcon className="arrowDown-icon" /><span className="stack-amount">80</span></div>
                                        <div className="stack-title">Projects</div>
                                    </div>

                                    <div className="stack">
                                        <div><ArrowUpwardIcon className="arrow-icon" /><span className="stack-amount">%60</span></div>
                                        <div className="stack-title">Success Rate</div>
                                    </div>
                                </div>
                                <div className="progress-bar-div">
                                    <div className="progress-bar-section">
                                        <div className="progrees-text">Profile Completion</div>
                                        <div className="progress-percentage">50%</div>
                                    </div>
                                    <BorderLinearProgress value={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <Tabs />
                    </div>

                </div>

            </div>
        </div>
    )
}
export default ProjectList