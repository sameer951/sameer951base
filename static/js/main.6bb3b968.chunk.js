(this.webpackJsonpspage=this.webpackJsonpspage||[]).push([[0],{30:function(e,t,a){e.exports=a(58)},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(26),c=a.n(i),r=(a(35),a(8)),s=a(9),o=a(11),d=a(10),m=a(27),p=a.n(m),u=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container mt-3 cv_init_div"},this.getZyetStyle(),this.getCvTemplate()))}},{key:"getNameSection",value:function(){var e,t;return l.a.createElement("div",{"data-react-beautiful-dnd-draggable":"0",className:"sortable-item section-container SortableItem-sibling data-NAME"},l.a.createElement("div",{id:"SECTION_NAMEf01b600e-1e42-419c-a0b4-c73081c7a469",className:"section notdraggable SECTION_NAME firstsection  ","data-section-cd":"NAME"},l.a.createElement("div",{className:" doc-item"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:""},l.a.createElement("div",{id:"PARAGRAPH_NAME_2336731d-da7d-767e-2541-373362b3f448",className:"paragraph PARAGRAPH_NAME firstparagraph  "},l.a.createElement("div",null,l.a.createElement("div",{className:"name word-break"},l.a.createElement("span",{className:"field",id:"FIELD_FNAM"},null===(e=this.props.myCv)||void 0===e?void 0:e.name)),l.a.createElement("div",{className:"resumeTitle",id:"FIELD_DCTL"},null===(t=this.props.myCv)||void 0===t?void 0:t.role)))))),l.a.createElement("div",{className:"doc-overlay section-overlay",style:{left:"-27px",right:"-27px"}},l.a.createElement("span",null,"\xa0"))))}},{key:"getCvSummary",value:function(){var e;return l.a.createElement("div",{"data-react-beautiful-dnd-draggable":"0",className:"sortable-item section-container SortableItem-sibling data-SUMM"},l.a.createElement("div",{id:"SECTION_SUMM0a7cd715-c4a9-4c9b-a74a-a20817f2141b",className:"section summary notdraggable SECTION_SUMM   ","data-section-cd":"SUMM"},l.a.createElement("div",{className:" doc-item"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:""},l.a.createElement("div",{id:"PARAGRAPH_SUMM_042d140f-77de-7e46-7088-b3b53b073e7a",className:"paragraph PARAGRAPH_SUMM firstparagraph  "},l.a.createElement("div",{className:"clearfix doc-item"},l.a.createElement("div",{className:"field singlecolumn",id:"FIELD_FRFM"},l.a.createElement("p",null,null===(e=this.props.myCv)||void 0===e?void 0:e.professionalsummary))))))),l.a.createElement("div",{className:"doc-overlay section-overlay",style:{left:"-27px",right:"-27px"}},l.a.createElement("span",null,"\xa0"))))}},{key:"getWorkHistory",value:function(){var e,t;return l.a.createElement("div",{"data-react-beautiful-dnd-draggable":"1",className:"sortable-item section-container SortableItem-sibling data-EXPR"},l.a.createElement("div",{id:"SECTION_EXPR9694a8c3-5a06-499e-83b6-4904d7f63dc6",className:"section experience SECTION_EXPR   multi-para","data-section-cd":"EXPR"},l.a.createElement("div",{className:" doc-item"},l.a.createElement("div",{className:"heading"},l.a.createElement("div",{className:"headingIcon"},l.a.createElement("svg",{viewBox:"0 0 42 42"},l.a.createElement("rect",{x:"0",y:"0",height:"42",width:"42"}),l.a.createElement("path",{transform:"translate(5,5)",d:"M30 5.983h-7.987V4.045c0-1.655-1.345-3-3-3h-6.015c-1.655 0-3 1.345-3 3v1.938H2.001C.9 5.983 0 6.883 0 7.982V28.953c0 1.1.9 2.001 2 2.001h28c1.099 0 2-.9 2-2V7.981a2.008 2.008 0 0 0-2-1.999zM12 4.045c0-.551.447-1 1-1h6.011c.55 0 1 .447 1 1v1.938H12V4.045zM2 7.982h28v7.008H18.986v-1.025c0-1.101-.897-2-1.998-2h-1.993c-1.101 0-2 .897-2 2v1.025H2V7.982zm14.989 11.02h-1.993v-5.037h1.993v5.037zM2 28.951V16.988h10.997V19c0 1.102.897 2 2 2h1.99a2.002 2.002 0 0 0 2-2v-2.01h11.011v11.963H2.001z"}))),l.a.createElement("div",{className:"sectiontitle",id:"SECTIONNAME_EXPR"},"Work History")),l.a.createElement("div",{className:""},l.a.createElement("div",{className:""},null===(e=this.props.myCv)||void 0===e||null===(t=e.workHistory)||void 0===t?void 0:t.map((function(e,t){var a;return l.a.createElement("div",{id:"PARAGRAPH_EXPR_482927b4-3063-565f-791b-bf0595d37688",className:"paragraph datespara PARAGRAPH_EXPR firstparagraph  ",key:"work"+t},l.a.createElement("div",{className:"clearfix doc-item"},l.a.createElement("div",{className:"singlecolumn"},l.a.createElement("div",{className:"paddedline date-content",dependency:"JSTD|EDDT"},l.a.createElement("span",{className:"jobdates",id:"FIELD_JSTD",format:"%Y-%m"},e.startDate),l.a.createElement("span",{dependency:"JSTD+EDDT"}," - "),l.a.createElement("span",{className:"jobdates",id:"FIELD_EDDT",format:"%Y-%m"},e.endDate),l.a.createElement("br",{dependency:"JTIT|COMP|JSTA|JCIT"})),l.a.createElement("span",{className:"paddedline",dependency:"JTIT"},l.a.createElement("span",{className:"jobtitle txtBold",id:"FIELD_JTIT"},e.job_title)),l.a.createElement("span",{className:"paddedline locationGap txtItl",dependency:"COMP|JSTA|JCIT"},l.a.createElement("span",{className:"companyname txtBold",id:"FIELD_COMP"},e.employer),l.a.createElement("span",{dependency:"COMP+JCIT|JSTA"},", "),l.a.createElement("span",{className:"jobcity",id:"FIELD_JCIT"},e.city),l.a.createElement("span",{dependency:"JCIT+JSTA"},", "),l.a.createElement("span",{className:"jobstate",id:"FIELD_JSTA"},e.state)),l.a.createElement("span",{className:"jobline",id:"FIELD_JDES"},l.a.createElement("ul",null,null===(a=e.responsibiltyList)||void 0===a?void 0:a.map((function(e,a){return l.a.createElement("li",{key:"job"+a+t},e)})))))))}))))),l.a.createElement("div",{className:"doc-overlay section-overlay",style:{left:"-27px",right:"-27px"}},l.a.createElement("span",null,"\xa0"))))}},{key:"getEducationDetails",value:function(){var e,t;return l.a.createElement("div",{"data-react-beautiful-dnd-draggable":"1",className:"sortable-item section-container SortableItem-sibling data-EDUC"},l.a.createElement("div",{id:"SECTION_EDUC772918bd-788f-4501-a35f-1111c809965a",className:"section education SECTION_EDUC   multi-para","data-section-cd":"EDUC"},l.a.createElement("div",{className:" doc-item"},l.a.createElement("div",{className:"heading"},l.a.createElement("div",{className:"headingIcon"},l.a.createElement("svg",{viewBox:"0 0 42 42"},l.a.createElement("rect",{x:"0",y:"0",height:"42",width:"42"}),l.a.createElement("path",{transform:"translate(5,5)",d:"M30.96 22.58v-9.217l.503-.303c.327-.194.533-.58.537-1 .004-.421-.196-.81-.518-1.014L16.44 1.848a.893.893 0 0 0-.967.004l-14.96 9.21c-.318.202-.515.587-.513 1.005.002.417.203.8.525.998l6.573 3.999a1.256 1.256 0 0 0-.133.56v9.669c0 .325.122.637.335.853.217.22 2.294 2.146 8.646 2.146 6.33 0 8.463-1.82 8.686-2.028a1.21 1.21 0 0 0 .367-.884v-9.917c0-.16-.03-.313-.082-.452l4.044-2.441v8.016c-.593.396-.995 1.124-.995 1.965 0 1.262.895 2.285 2 2.285 1.104 0 1.999-1.023 1.999-2.285 0-.845-.407-1.576-1.005-1.97zM23 26.725c-.787.432-2.866 1.282-7.054 1.282-4.214 0-6.246-.905-6.982-1.34v-8.468l6.493 3.95a.892.892 0 0 0 .937.006L23 18.17v8.556zm-7.06-6.876L3.08 12.045l12.881-7.89 12.922 7.868L15.94 19.85z"}))),l.a.createElement("div",{className:"sectiontitle",id:"SECTIONNAME_EDUC"},"Education")),l.a.createElement("div",{className:""},l.a.createElement("div",{className:""},null===(e=this.props.myCv)||void 0===e||null===(t=e.education)||void 0===t?void 0:t.map((function(e,t){return l.a.createElement("div",{id:"PARAGRAPH_EDUC_8449bfd6-ab6a-9e38-253c-eb53eccc683d",className:"paragraph datespara PARAGRAPH_EDUC firstparagraph  ",key:"edu"+t},l.a.createElement("div",{className:"clearfix doc-item"},l.a.createElement("div",{className:"singlecolumn"},l.a.createElement("div",{className:"paddedline date-content"},l.a.createElement("span",{className:"jobdates",id:"FIELD_GRST",format:"%Y-%m"},e.start_date),l.a.createElement("span",{dependency:"JSTD+EDDT"}," - "),l.a.createElement("span",{className:"jobdates",id:"FIELD_GRED",format:"%Y-%m"},e.end_date)),l.a.createElement("span",{className:"paddedline degreeGap txtBold",dependency:"DGRE|STUY"},l.a.createElement("span",{className:"degree",id:"FIELD_DGRE"},e.degree),l.a.createElement("span",{dependency:"DGRE+STUY"},": "),l.a.createElement("span",{className:"programline",id:"FIELD_STUY"},e.field)),l.a.createElement("div",{className:"paddedline txtItl",dependency:"SCIT|SSTA|SCHO"},l.a.createElement("span",{className:"companyname",id:"FIELD_SCHO"},e.college_name),l.a.createElement("span",{dependency:"SCHO+SSTA|SCIT"}," - "),l.a.createElement("span",{className:"joblocation jobcity",id:"FIELD_SCIT"},e.location),l.a.createElement("span",{className:"joblocation jobstate",id:"FIELD_SSTA"})),l.a.createElement("span",{className:"field",id:"FIELD_FRFM"}))))}))))),l.a.createElement("div",{className:"doc-overlay section-overlay",style:{left:"-27px",right:"-27px"}},l.a.createElement("span",null,"\xa0"))))}},{key:"getProjectList",value:function(){var e,t;return l.a.createElement("div",{"data-react-beautiful-dnd-draggable":"1",className:"sortable-item section-container SortableItem-sibling data-CUST"},l.a.createElement("div",{id:"SECTION_CUST69e1c699-25e8-d086-841a-88b059d9c21d",className:"section SECTION_CUST   ","data-section-cd":"CUST"},l.a.createElement("div",{className:" doc-item"},l.a.createElement("div",{className:"heading"},l.a.createElement("div",{className:"headingIcon"},l.a.createElement("svg",{viewBox:"0 0 42 42"},l.a.createElement("rect",{x:"0",y:"0",height:"42",width:"42"}),l.a.createElement("path",{transform:"translate(5,5)",d:"M11.907 19.287v9.55l5.891-5.023L32 32l-8.186-14.202 6.077-5.891H19.287l-5.085-5.21 2.232-2.232L11.97 0 0 11.969l4.465 4.465 2.233-2.232zm14.822 7.442l-7.442-4.403 3.039-3.04zM24.62 14.016l-10.604 9.55v-5.333l-5.768-5.52 4.465-4.527 5.52 5.83h6.387zm-20.155-.559L2.977 11.97l8.992-8.992 1.488 1.488z"}))),l.a.createElement("div",{className:"sectiontitle",id:"SECTIONNAME_CUST"},"Projects")),l.a.createElement("div",{className:""},l.a.createElement("div",{className:""},l.a.createElement("div",{id:"PARAGRAPH_CUST_0aab775d-4885-de21-4749-d08e2d91a5a0",className:"paragraph PARAGRAPH_CUST firstparagraph  "},l.a.createElement("div",{className:"clearfix doc-item"},l.a.createElement("div",{className:"field singlecolumn",id:"FIELD_FRFM"},l.a.createElement("ul",null,null===(e=this.props.myCv)||void 0===e||null===(t=e.indivisual_projects)||void 0===t?void 0:t.map((function(e,t){return l.a.createElement("li",{key:"pro"+t},e)}))))))))),l.a.createElement("div",{className:"doc-overlay section-overlay",style:{left:"-27px",right:"-27px"}},l.a.createElement("span",null,"\xa0"))))}},{key:"getContactInfo",value:function(){var e,t,a=null===(e=this.props.myCv)||void 0===e?void 0:e.contact_info;return l.a.createElement("div",{"data-react-beautiful-dnd-draggable":"1",className:"sortable-item section-container SortableItem-sibling data-CNTC"},l.a.createElement("div",{id:"SECTION_CNTCf4d85991-710d-40ac-b953-94fc91f25e9d",className:"section SECTION_CNTC notdraggable   ","data-section-cd":"CNTC"},l.a.createElement("div",{className:" doc-item"},l.a.createElement("div",{className:"heading"},l.a.createElement("div",{className:"headingIcon"},l.a.createElement("svg",{viewBox:"0 0 42 42"},l.a.createElement("rect",{x:"0",y:"0",height:"42",width:"42"}),l.a.createElement("path",{transform:"translate(5,5)",d:"M31.85 27.626c-1.38-3.684-3.906-4.604-5.973-4.835-1.608-.23-3.216-.92-3.905-1.38v-2.533c1.838-2.302 2.986-5.295 2.986-7.828C24.958 4.835 21.972 0 16 0c-5.972 0-8.958 5.065-8.958 11.05 0 2.763 1.148 5.756 2.986 7.828v2.762c-.69.46-2.297.921-3.905 1.382-2.067.23-4.364 1.15-5.972 4.834-.23.46-.23 1.151.23 1.612C1.759 31.54 9.798 32 16 32c6.432 0 14.241-.46 15.62-2.532.459-.46.459-1.151.23-1.842zM16 1.842c4.594 0 7.152 4.394 7.152 9.228-.28 4.546-2.666 8.112-7.232 8.456-4.449-.462-6.926-4.804-7.04-8.573 0-4.604 2.526-9.111 7.12-9.111zm0 28.086c-12.174 0-14.012-1.611-14.012-1.611 1.149-2.993 2.757-3.454 4.365-3.684 1.837-.23 3.675-.92 4.594-1.381l.918-.46v-2.073c1.149.921 2.527 1.382 4.135 1.382 1.378 0 2.756-.46 3.905-1.382v2.072l.919.46c.918.461 2.756 1.152 4.594 1.382 1.607.23 3.215.69 4.364 3.684.23 0-1.608 1.611-13.782 1.611z"}))),l.a.createElement("div",{className:"sectiontitle",id:"SECTIONNAME_CNTC"},"Contact")),l.a.createElement("div",{className:""},l.a.createElement("div",{className:""},l.a.createElement("div",{id:"PARAGRAPH_CNTC_b0590b1c-47da-a2fc-330f-0cef1d5d6b47",className:"paragraph PARAGRAPH_CNTC firstparagraph  "},l.a.createElement("div",{className:"clearfix doc-item"},l.a.createElement("div",{className:"address"},l.a.createElement("div",{className:"singlecolumn"},l.a.createElement("div",{dependency:"STRT|CITY|STAT|ZIPC"},l.a.createElement("div",{className:"txtBold"},"Address "),l.a.createElement("div",{className:"field",id:"FIELD_STRT"}),l.a.createElement("span",{className:"field",id:"FIELD_CITY"},null===a||void 0===a?void 0:a.address),l.a.createElement("span",{dependency:"CITY+STAT|ZIPC"},",")),l.a.createElement("div",{className:"txtBold mt5",dependency:"HPHN|CPHN"},"Phone "),l.a.createElement("div",{dependency:"HPHN"},l.a.createElement("span",{className:"field",id:"FIELD_HPHN"},null===a||void 0===a?void 0:a.phone)),l.a.createElement("div",{className:"txtBold mt5",dependency:"EMAI"},"E-mail "),l.a.createElement("div",{dependency:"EMAI",className:"word-break"},l.a.createElement("span",{className:"field",id:"FIELD_EMAI"},l.a.createElement("a",{href:"mailto:"+(null===a||void 0===a?void 0:a.email)},null===a||void 0===a?void 0:a.email))),l.a.createElement("div",{dependency:"SOCL"},null===a||void 0===a||null===(t=a.socialLinks)||void 0===t?void 0:t.map((function(e,t){return l.a.createElement("div",{id:"CATEGORY_SOCIAL_SOCL",className:"mt5",key:"social"+t},l.a.createElement("div",{id:"DOCDATAINFO_SOCL",className:"txtBold"},e.name),l.a.createElement("div",{id:"FIELD_SOCL"},l.a.createElement("a",{href:e.link},e.link_name)))})))))))))),l.a.createElement("div",{className:"doc-overlay section-overlay",style:{left:"-27px",right:"-27px"}},l.a.createElement("span",null,"\xa0"))))}},{key:"getSkillDetails",value:function(){var e,t;return l.a.createElement("div",{"data-react-beautiful-dnd-draggable":"1",className:"sortable-item section-container SortableItem-sibling data-HILT"},l.a.createElement("div",{id:"SECTION_HILT36252a00-1fd4-4e46-a9a2-321ba2e8bf63",className:"section rtngSec SECTION_HILT   ","data-section-cd":"HILT"},l.a.createElement("div",{className:" doc-item"},l.a.createElement("div",{className:"heading"},l.a.createElement("div",{className:"headingIcon"},l.a.createElement("svg",{viewBox:"0 0 42 42"},l.a.createElement("rect",{x:"0",y:"0",height:"42",width:"42"}),l.a.createElement("path",{transform:"translate(5,5)",d:"M31.36 14.293l-3.413-3.413c2.133-.64 3.84-2.773 3.84-5.333C31.787 2.56 29.227 0 26.24 0c-2.347 0-4.48 1.707-5.333 3.84l-3.2-3.2c-.854-.853-2.56-.853-3.414 0L9.6 5.333c-.213.427-.213.854-.213 1.28.213.427.64.64 1.066.427h.64c2.134 0 3.84 1.707 3.84 4.053 0 2.134-1.493 4.054-3.84 4.054-2.133 0-4.053-1.92-4.053-4.054v-.64a1.63 1.63 0 0 0-.427-1.066c-.213-.427-.64-.427-.853 0L.64 14.293c-.853.854-.853 2.347 0 3.414L14.293 31.36c.427.427 1.067.64 1.707.64.64 0 1.28-.213 1.707-.64L31.36 17.707c.853-.854.853-2.56 0-3.414zm-1.493 1.92L16.213 29.867c-.213.213-.426.213-.64 0L2.133 16.213c-.213 0-.213-.426 0-.426l3.414-3.414a5.953 5.953 0 0 0 5.76 4.48c3.2 0 5.76-2.56 5.76-5.973 0-2.773-1.707-5.12-4.267-5.76l2.987-2.987c.213-.213.426-.213.64 0l4.906 4.907c.214.213.854.427 1.067.213.427-.213.64-.64.64-1.066v-.214-.213c0-1.92 1.493-3.413 3.413-3.413 1.92 0 3.414 1.493 3.414 3.413 0 1.92-1.494 3.413-3.414 3.413h-.426c-.427 0-.854.214-1.067.64-.213.427-.213.854.213 1.067l4.694 4.907c.213 0 .213.426 0 .426z"}))),l.a.createElement("div",{className:"sectiontitle",id:"SECTIONNAME_HILT"},"Programing Skills")),l.a.createElement("div",{className:""},l.a.createElement("div",{className:"sortableInner"},null===(e=this.props.myCv)||void 0===e||null===(t=e.skill)||void 0===t?void 0:t.map((function(e,t){return l.a.createElement("div",{id:"PARAGRAPH_HILT_977e4dd2-dc42-c889-5d32-68fe5b51de37",className:"paragraph PARAGRAPH_HILT  ",key:"skill"+t},l.a.createElement("div",{className:"clearfix doc-item"},l.a.createElement("div",{className:"singlecolumn maincolumn"},l.a.createElement("span",{className:"paddedline",id:"FIELD_SKC1"},l.a.createElement("p",null,null===e||void 0===e?void 0:e.name)),l.a.createElement("div",{className:"ratingBar",dependency:"RATV"},l.a.createElement("div",{className:"innerRating",id:"FIELD_RATV",type:"width",style:{width:e.rating+"%"}})),l.a.createElement("span",{className:"paddedline txtRight",id:"FIELD_RATT"}))))}))))),l.a.createElement("div",{className:"doc-overlay section-overlay",style:{left:"-27px",right:"-27px"}},l.a.createElement("span",null,"\xa0"))))}},{key:"getCvTemplate",value:function(){var e,t,a,n,i,c,r,s;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"document",className:"document fontsize fontface vmargins hmargins pagesize skn-trz9 TRZ9  ZTY"},l.a.createElement("div",{id:"CONTAINER_PARENT_0",className:"topsection"},l.a.createElement("div",{id:"CONTAINER_0"},this.getNameSection(),this.getCvSummary())),l.a.createElement("div",{id:"CONTAINER_PARENT_1",className:"parentContainer"},l.a.createElement("div",{id:"CONTAINER_1",className:"left-box"},(null===(e=this.props.myCv)||void 0===e||null===(t=e.workHistory)||void 0===t?void 0:t.length)>0?this.getWorkHistory():"",(null===(a=this.props.myCv)||void 0===a||null===(n=a.education)||void 0===n?void 0:n.length)>0?this.getEducationDetails():"",(null===(i=this.props.myCv)||void 0===i||null===(c=i.indivisual_projects)||void 0===c?void 0:c.length)>0?this.getProjectList():""),l.a.createElement("div",{id:"CONTAINER_2",className:"right-box"},this.getContactInfo(),(null===(r=this.props.myCv)||void 0===r||null===(s=r.skill)||void 0===s?void 0:s.length)>0?this.getSkillDetails():""))))}},{key:"getZyetStyle",value:function(){return l.a.createElement("div",null,l.a.createElement("style",{type:"text/css",id:"static"}," a{color: darkgreen;}\n            a:hover{text-decoration: none;}\n            li{ line-height: 30px;}\n            p{ line-height: 30px;}\n            /*Font support for MAC*/\n        @font-face{font-family:'Century Gothic';font-weight:normal;font-style:normal;src:local('Century Gothic'),url('/blobcontent/zty/fonts/CenturyGothic.ttf') format('truetype')}\n        @font-face{font-family:'Century Gothic';font-weight:bold;font-style:normal;src:local('Century Gothic Bold'),url('/blobcontent/zty/fonts/CenturyGothicBold.ttf') format('truetype')}\n        @font-face{font-family:'Century Gothic';font-weight:bold;font-style:italic;src:local('Century Gothic Bold Italic'),url('/blobcontent/zty/fonts/CenturyGothicBoldItalic.ttf') format('truetype')}\n        @font-face{font-family:'Century Gothic';font-weight:normal;font-style:italic;src:local('Century Gothic Italic'),url('/blobcontent/zty/fonts/CenturyGothicItalic.ttf') format('truetype')}\n\n        html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{margin:0;padding:0;border:0;outline:0;vertical-align:baseline;background:transparent}\n        body{line-height:1;text-align:left;font-feature-settings:\"liga\" 0;-moz-font-feature-settings:\"liga\" off}\n        #document.skn-trz9 ol,#document.skn-trz9 ul{list-style:none}\n        #document.skn-trz9 table{border-collapse:collapse;border-spacing:0;font-size:inherit;color:inherit;width:100%}\n\n        /*START content disc style for LI*/\n        #document.skn-trz9 ul,#document.skn-trz9 li{margin:0;padding:0;list-style-type:disc}\n        #document.skn-trz9 ul li{margin:0 0 0 16px;padding:0}\n        @-moz-document url-prefix() {#document.skn-trz9 ul li{margin:0 0 0 12px;padding:0 0 0 3px}}\n        /*END content disc style for LI*/\n\n        /* document */\n        #document.skn-trz9{color:#343434;line-height:16px;font-variant-ligatures:none;min-height:792px;box-sizing:border-box}\n        #document.skn-trz9 .name{color:#002E58;font-weight:bold;padding:0px;text-align:left;position:relative;word-wrap:break-word}\n        #document.skn-trz9 .address .singlecolumn{margin-left:0!important}\n        #document.skn-trz9 table.skills,.table_wrapper{width:100%;margin-top:0;word-wrap:break-word}\n        #document.skn-trz9 table.skills th,table.skills td{width:20%;text-align:center}\n        #document.skn-trz9 table.skills .skillname,#document.skn-trz9 table.skills .skillrating{text-align:left;width:35%}\n        #document.skn-trz9 table.skills .skillrating{width:20%}\n        #document.skn-trz9 table.skills .skillyears,#document.skn-trz9 table.skills .skilllast{width:19%}\n        #document.skn-trz9 table.skills .pad1{width:5%}\n        #document.skn-trz9 .skills .pad2,#document.skn-trz9 table.skills .pad3{width:1%}\n        #document.skn-trz9 .txtBold{font-weight:bold}\n        #document.skn-trz9 .txtItl{font-style:italic}\n        #document.skn-trz9 .paddedline{display:block}\n        #document.skn-trz9 .txtRight{text-align:right}\n        #document.skn-trz9 .mt5{margin-top:5px}\n        #document.skn-trz9 .word-break{word-wrap:break-word}\n        #document.skn-trz9 .resumeTitle{color:#002e58;font-weight:500;padding-top:10pt!important}\n        #document.skn-trz9 .summary{padding-top:10px!important}\n\n        /* Heading */\n        #document.skn-trz9 .heading{border-bottom:1px solid #d5d6d6;padding:0 0 4px;letter-spacing:0;font-weight:bold;line-height:15px;margin-bottom:10px}\n        #document.skn-trz9 .sectiontitle{color:#002E58;word-wrap:break-word;padding-left:5px}\n        #document.skn-trz9 .firstparagraph{margin-top:0!important}\n\n        /* section */\n        #document.skn-trz9 .firstsection{padding-top:0!important}\n        #document.skn-trz9 .section:empty {display:none}\n        #document.skn-trz9 .education .joblocation{font-style:italic}\n        #document.skn-trz9 .degreeGap{margin-bottom:4px}\n        #document.skn-trz9 .locationGap{margin-top:4px}\n\n        /* style for left and right box */\n        #document.skn-trz9 .parentContainer{display:table;width:100%;min-height:inherit;table-layout:fixed;border-collapse:collapse}\n        #document.skn-trz9 .right-box,#document.skn-trz9 .left-box{padding-top:20px;padding-right:15px}\n        #document.skn-trz9 .right-box{box-sizing:initial;display:table-cell;letter-spacing:0.2px;padding-left:15px;padding-right:0}\n        #document.skn-trz9 .left-box .section:first-child,#document.skn-trz9 .right-box .section:first-child{padding-top:0px!important}\n        #document.skn-trz9 .left-box .paddedline.date-content{position:absolute;font-weight:700;margin-left:0;width:70px}\n        #document.skn-trz9 .paragraph .singlecolumn{position:relative}\n        #document.skn-trz9 .summary .singlecolumn{margin-left:0}\n        #document.skn-trz9 .left-box{display:table-cell;letter-spacing:0.2px}\n\n        /*Icon*/\n        #document.skn-trz9 .headingIcon{position:relative;top:9px}\n        #document.skn-trz9 .headingIcon svg{height:30px;width:30px}\n        #document.skn-trz9 .headingIcon svg rect{fill:#002e58}\n        #document.skn-trz9 .headingIcon svg path{fill:#fff}\n\n        /* Bar Graph*/\n        #document.skn-trz9 .ratingBar{background:#d5d6d6}\n        #document.skn-trz9 .innerRating{height:7px;background:#002e58}\n\n        /* Issues fix for builder page */\n        #displayResume #document.skn-trz9.document{min-height:792px}\n        #document.skn-trz9 .SortableList{margin-bottom:0!important}\n        #document.skn-trz9 .SortableList, #document.skn-trz9 > div{min-height:inherit}\n        #document.skn-trz9 .SortableList .heading{padding-bottom:2px}\n        #document.skn-trz9.TRZ9 div.headingIcon{position:static;display:inline-block} /*do not remove div class*/\n        #document.skn-trz9.TRZ9 div.sectiontitle{display:inline;vertical-align:middle} /*do not remove div class*/\n\n        #document.skn-trz9 > div:not(.topsection), #document.skn-trz9 > div:not(.parentContainer){min-height:auto}\n        \n        /* Only for firefox */\n        @-moz-document url-prefix() {#document.skn-trz9 .parentContainer{height:1px}}\n\n        /* For dates fix */\n        #document.skn-trz9 .left-box .hidedates{visibility:hidden;position:static!important;display:block;float:left}\n        #document.skn-trz9 .right-box .hidedates{display:none}\n        #document.skn-trz9 .paragraph.datespara:after{content:'';display:table;clear:both}"),l.a.createElement("style",{type:"text/css",id:"dynamic","data-time":"Sat Jun 13 2020 22:54:57 GMT+0530 (India Standard Time)"},"  #document.skn-trz9,#document.skn-trz9 table{line-height:18px}\n        #document.skn-trz9.pagesize{width:810px}\n        #document.skn-trz9.fontface{font-family:Century Gothic}\n        #document.skn-trz9.fontsize{font-size:18px}\n        #document.skn-trz9.vmargins{padding-top:25px;padding-bottom:25px}\n        #document.skn-trz9.hmargins{padding-left:25px;padding-right:25px}\n        #document.skn-trz9 .section{padding-top:20px}\n        #document.skn-trz9 .right-box .section:after{padding-bottom:10px}\n        #document.skn-trz9 .paragraph{margin-top:10px}\n        #document.skn-trz9 .rtngSec .paragraph{margin-top:5px; page-break-inside:avoid;}\n        #document.skn-trz9 .singlecolumn,#document.skn-trz9 .maincolumn{word-wrap:break-word}\n        #document.skn-trz9 .left-box .singlecolumn,#document.skn-trz9 .left-box .maincolumn{margin-left:0px}\n        #document.skn-trz9 table.skills td{padding-top:5px}\n        #document.skn-trz9 .jobtitle, #document.skn-trz9 .degree, #document.skn-trz9 .programline{font-size:20px}\n        #document.skn-trz9 .name{color:#003d74;font-size:36px;line-height:40px}\n        #document.skn-trz9 .heading{line-height:22px}\n        #document.skn-trz9 .sectiontitle, #document.skn-trz9 .resumeTitle{font-size:25px;color:#003d74}\n        #document.skn-trz9 .right-box{width:220px}\n        #document.skn-trz9 .left-box .paragraph .singlecolumn{margin-left:91px}\n\t\t#document.skn-trz9 .left-box .paddedline.date-content{left:-91px}\n        /*Icon*/\n        #document.skn-trz9 .headingIcon svg rect{fill:#003d74}\n\n        /* Bar Graph */\n        #document.skn-trz9 .innerRating{background-color:#003d74}\n        /*fixes for builder*/\n        #document.skn-trz9 .left-box > .SortableItem-sibling,\n        #document.skn-trz9 .right-box > .SortableItem-sibling{padding-top:20px}\n        #document.skn-trz9 .left-box > .SortableItem-sibling:first-child,#document.skn-trz9 .right-box > .SortableItem-sibling:first-child{padding-top:0!important}\n        #document.skn-trz9 .sortableInner .SortableItem.active > .wrapper-bg+div[data-section]{position:relative;z-index:8}\n\n        /*Hover border style*/\n        #document.skn-trz9.active .wrapper-bg{left:-62px !important;right:-62px !important}\n        #document.skn-trz9.active .acrs-bdr{left:-60px !important}\n        #document.skn-trz9.active .acr-edit,#document.skn-trz9.active .acr-delete{left:-59px !important}\n        #document.skn-trz9.active .acr-move{right:-59px !important}"))}}]),a}(l.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={myCv:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("assets/mycv.json").then((function(t){console.log(JSON.stringify(t.data)),e.setState({myCv:t.data})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{myCv:this.state.myCv}))}}]),a}(l.a.Component),E=a(28),g=a(1),h=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("link",{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}),l.a.createElement("script",{src:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"}),l.a.createElement("script",{src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"}),l.a.createElement("div",{className:"page-wrap d-flex flex-row align-items-center"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("span",{className:"display-1 d-block"},"404"),l.a.createElement("div",{className:"mb-4 lead"},"The page you are looking for was not found."),l.a.createElement("a",{href:"/jyotikant_cv",className:"btn btn-link"},"Back to Home"))))),l.a.createElement("style",{jsx:!0},"body {\n                    background: #dedede;\n                    }\n                    .page-wrap {\n                    min - height: 100vh;\n                    }"))}}]),a}(l.a.Component);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,null,l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/",component:Object(g.f)((function(e){return e.history.push("/jyotikant_cv"),l.a.createElement("div",null,"Hello")}))}),l.a.createElement(g.a,{exact:!0,path:"/jyotikant_cv"},l.a.createElement(v,null)),l.a.createElement(g.a,{component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.6bb3b968.chunk.js.map