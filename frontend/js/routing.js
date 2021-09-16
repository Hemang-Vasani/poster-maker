let pages = {
    "landingPage": landingPage,
    "uploadPage": uploadPage,
    "framelistPage": framelistPage,
    "framedownloadPage": framedownloadPage 
}
let pageSectionMap = {
    "landingPage": "userFormDiv",
    "uploadPage": "imageFormDiv",
    "framelistPage": "frameListPage",
    "framedownloadPage": "downloadFramePage" 
}
let sectionDisplay = {
    "userFormDiv": "inherit",
    "imageFormDiv": "flex",
    "frameListPage": "flex",
    "downloadFramePage": "inherit" 
}
let routeArray = ["landingPage", "uploadPage", "framelistPage", "framedownloadPage"];
let idx = 0;

function landingPage() {
    byId(pageSectionMap.landingPage).style.display = sectionDisplay[pageSectionMap.landingPage];
    byId(pageSectionMap.uploadPage).style.display = 'none';
    byId(pageSectionMap.framelistPage).style.display = 'none';
    byId(pageSectionMap.framedownloadPage).style.display = 'none';
}
function uploadPage() {
    byId(pageSectionMap.landingPage).style.display = 'none';
    byId(pageSectionMap.uploadPage).style.display = sectionDisplay[pageSectionMap.uploadPage];
    byId(pageSectionMap.framelistPage).style.display = 'none';
    byId(pageSectionMap.framedownloadPage).style.display = 'none';
}
function framelistPage() {
    document.querySelector("body").style.overflow = 'auto';
    removeListeners(byId("draggableDiv"));
    removeListeners(byId("draggableText"));
    removeListeners(byId("draggableadd"));
    byId(pageSectionMap.landingPage).style.display = 'none';
    byId(pageSectionMap.uploadPage).style.display = 'none';
    byId(pageSectionMap.framelistPage).style.display = sectionDisplay[pageSectionMap.framelistPage];
    byId(pageSectionMap.framedownloadPage).style.display = 'none';
}
function framedownloadPage() {
    document.querySelector("body").style.overflow = 'hidden';
    byId(pageSectionMap.landingPage).style.display = 'none';
    byId(pageSectionMap.uploadPage).style.display = 'none';
    byId(pageSectionMap.framelistPage).style.display = 'none';
    byId(pageSectionMap.framedownloadPage).style.display = sectionDisplay[pageSectionMap.framedownloadPage];
    dragElement(byId("uploadImg"), byId("draggableDiv"));
    dragElement(byId("imgTxt"), byId("draggableText"));
    dragElement(byId("addTxt"), byId("draggableadd"));
}

var CapturePopStateHandler = function(e) {
    if (e.state && e.state._fileexplorer)
    {
        if (e.state._fileexplorer === 'back')
        {   
            window.history.forward();
            if(idx > 0) {
                idx--;            
                pages[routeArray[idx]]();            
            }
            else if(idx == 0){
                window.history.go(-3);
            }            
        }
        else if (e.state._fileexplorer === 'forward')
        {
            window.history.back();
            if(idx < routeArray.length-1) {
                idx++;
                pages[routeArray[idx]]();
            }
        }
    }
  };
  
  // Sets up three history items and places the user in the middle of those three.
  window.history.pushState({ _fileexplorer: 'back' }, document.title);
  window.history.pushState({ _fileexplorer: 'main' }, document.title);
  window.history.pushState({ _fileexplorer: 'forward' }, document.title);
  window.history.back();
  
  window.addEventListener('popstate', CapturePopStateHandler, true);