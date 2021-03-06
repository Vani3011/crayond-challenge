
import React from "react"
import "./Verticalbtn.scss"
const Verticalbtn = () =>{
    return(
        <div className="Vertical-btn">
        <div class="engage-toolbar d-flex position-fixed px-5 fw-bolder zindex-2 top-50 end-0 transform-90 mt-20 gap-2">
		
			<button id="kt_engage_demos_toggle" class="engage-demos-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm fs-6 px-4 rounded-top-0" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click" data-bs-trigger="hover" data-bs-original-title="Check out 22 more demos">
				<span id="kt_engage_demos_label">Demos</span>
			</button>
		
			<button id="kt_help_toggle" class="engage-help-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0" title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click" data-bs-trigger="hover" data-bs-original-title="Learn &amp; Get Inspired">Help</button>
			
			<div class="engage-purchase-link btn btn-color-gray-700 bg-body btn-active-color-gray-900' btn-flex h-35px px-5 shadow-sm rounded-top-0">Buy now</div>
	
		</div>
        </div>
    )
}
export default Verticalbtn