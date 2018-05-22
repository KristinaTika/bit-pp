
var mainModule = (function(ui, data) {
    
    
    
    function addEventListeners(){
        var addButton = $(".add-btn");
        addButton.on("click", addStudent)
    }
    
    function addStudent(){
        var formData = ui.collectFormData();
        var createdExam = data.createExam(formData);
        console.log(createdExam);
    }
    
    function init(){
        addEventListeners()
    }

    return {
        init: init
    }

})(uiModule, dataModule);